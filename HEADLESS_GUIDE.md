# Building a Headless MediaSFU Wrapper with mediasfu-shared

`mediasfu-shared` is the lowest-level public TypeScript package in the MediaSFU SDK family. It supplies room, socket, producer, consumer, grid, state, and utility primitives. It does not supply a visible room, `ModernMediasfuGeneric`, a custom-component system, or a framework headless controller.

Choose this layer only when you are building a framework adapter or a product whose runtime ownership cannot be expressed through a higher-level SDK.

## Prefer the highest useful layer

| Need | Recommended layer |
| --- | --- |
| Complete polished room | Framework SDK and `ModernMediasfuGeneric` where available |
| Replace selected cards, controls, or modals | Framework SDK custom components or `uiOverrides` |
| App owns the full workspace but SDK owns runtime publication | Framework SDK with `returnUI=false` |
| Build or maintain the framework/runtime adapter itself | `mediasfu-shared` |

## Runtime ownership

```text
Your framework store and lifecycle
        | current parameter object
        v
mediasfu-shared room / socket / producer / consumer functions
        | state updates and media events
        v
Your adapter publishes new immutable framework state
        | resolved video + every remote audio source
        v
Your application UI
```

Your adapter must define clear ownership for the socket, mediasoup device, send/receive transports, producers, consumers, participant state, render state, and teardown.

## 1. Make reads pure

Create one pure read for your current parameter bag and separate it from publication:

```ts
let currentParameters: Record<string, any> = {};

export function getCurrentParameters() {
  return currentParameters;
}

export function publishParameters(next: Record<string, any>) {
  currentParameters = next;
  subscribers.forEach((subscriber) => subscriber(next));
}
```

Do not call a publisher from render, computed state, pagination, polling, or media-card reads. A read must not notify subscribers.

The names above belong to your adapter; `mediasfu-shared` does not currently export a dedicated parameter-store controller.

## 2. Secure create and join

Keep MediaSFU credentials on your backend. The public client sends an authenticated create/join intent to your app server. The server validates it, adds credentials from environment variables, and forwards it to MediaSFU Cloud or your MediaSFU Open rooms endpoint.

Normalize the response into your adapter's session state. Never log secrets or retain raw room responses in screenshots. Follow the [secure proxy guide](https://mediasfu.com/docs/usage/secure-backend-proxy/).

For local-only experimentation, short-lived credentials can live in ignored environment configuration. Remove them before committing, publishing, or building public artifacts.

## 3. Connect room and socket state

The package exports room helpers, `connectSocket`, `SocketManager`, producer-client flows, socket-receive methods, and TypeScript contracts. Build the smallest happy path first:

1. create or join securely
2. connect the socket with returned session data
3. create the mediasoup device
4. join the assigned room
5. register socket event handlers
6. publish current room state to the framework

Do not mix UI customization into this acceptance step.

## 4. Produce local media

The shared package exports `clickAudio`, `clickVideo`, `clickScreenShare`, stream-success helpers, and send-transport helpers. Always invoke them with the newest parameter object from your pure store.

Your adapter must surface permission pending, permission denied, producer connecting, live, paused, ended, and failed states so the UI does not guess from button color alone.

## 5. Consume remote media

Consumer helpers cover receive transport creation, signaling, consumer resume, producer-close events, piped producers, grid planning, and audio processing. Treat a signaled producer and a renderable live track as different milestones.

For every consumer, retain stable identifiers for:

- participant
- producer
- consumer
- stream/track
- media kind
- screen-share versus camera source

Use those identifiers for reconciliation and cleanup rather than array position or visible page.

## 6. Resolve visual media deterministically

A reliable wrapper should define a consistent visual priority:

1. active screen share
2. selected or pinned remote camera
3. local camera preview
4. avatar or audio-only fallback

Recompute when participants, streams, producer IDs, screen-share state, or track readiness changes. The package exports pure grid/render planning engines such as the `prepopulateUserMedia` and `addVideosGrid` engine helpers; use the generated API reference for exact signatures.

## 7. Render every audio source

Audio consumption is independent of video layout and pagination.

- Keep a dedicated audio-render collection keyed by stable producer ID.
- Add an audio target when a live remote audio consumer arrives.
- Keep it active when the participant is off-page or not selected.
- Remove it on producer close, participant leave, breakout exclusion, or teardown.
- Handle browser autoplay or native audio-session restrictions in the framework adapter.

## 8. Publish outside framework render/build phases

Socket and transport callbacks may arrive while a framework is rendering. Coalesce publication onto that framework's safe post-render scheduler. Avoid notifying consumers synchronously from React render, Vue computed evaluation, Angular change detection, or another framework's build phase.

## 9. Teardown and late callbacks

Teardown can race socket acknowledgements. Guard disposed devices, sockets, and transports in every late callback. Make cleanup idempotent:

- unregister socket handlers
- close consumers and receive transports
- close producers and send transports
- stop app-owned tracks
- detach render targets
- clear timers, queues, and pending promises where possible
- publish a final disconnected state once

## 10. Verification matrix

Before publishing a wrapper or application, install the released `mediasfu-shared` version from npm and repeat the build and media acceptance checks against that clean dependency.

| Path | Minimum proof |
| --- | --- |
| Secure create/join | Backend request succeeds and no client artifact contains credentials |
| Produce | Remote participant receives microphone, camera, and screen tracks |
| Consume | Local app renders remote camera/screen and plays remote audio |
| Pagination | Off-page participant remains audible |
| Resolution | Screen-to-camera-to-fallback transitions without stale frames |
| Reconnect | Producers/consumers recover without duplicates |
| Teardown | Late callbacks do not throw and no tracks/listeners remain |

Use a real two-participant room for media acceptance. Seeded or mocked UI proves layout only.

## References

- [Package README](README.md)
- [Shared SDK guide](https://mediasfu.com/docs/sdks/shared/)
- [Generated API references](https://mediasfu.com/docs/api-reference/)
- [Secure backend proxy](https://mediasfu.com/docs/usage/secure-backend-proxy/)
- [MediaSFU Open](https://github.com/MediaSFU/MediaSFUOpen)
- [MediaSFU Sandbox](https://mediasfu.com/sandbox)
