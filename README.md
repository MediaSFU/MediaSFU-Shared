# mediasfu-shared · [mediasfu-shared on npm](https://www.npmjs.com/package/mediasfu-shared)

**mediasfu-shared** is the framework-agnostic WebRTC runtime at the core of the MediaSFU SDK family. It provides shared room helpers, mediasoup signaling, socket management, media state utilities, and TypeScript types for React, Vue, Angular, Svelte, and plain TypeScript. Install with `npm install mediasfu-shared`.

`mediasfu-shared` is the framework-agnostic MediaSFU runtime package. It exposes the shared room helpers, mediasoup/socket flows, state utilities, and TypeScript types used by the MediaSFU SDK family.

## When To Use This Package

Use `mediasfu-shared` when you want to:

- build your own browser client on top of MediaSFU primitives without adopting a framework-specific UI package
- share MediaSFU room, media, and participant logic across React, Vue, Angular, Svelte, or plain TypeScript codebases
- import low-level helpers such as `createRoomOnMediaSFU`, `joinRoomOnMediaSFU`, `connectSocket`, `SocketManager`, and the exported consumers, methods, and types entry points

## Installation

```bash
npm install mediasfu-shared mediasoup-client socket.io-client
```

`mediasoup-client` and `socket.io-client` are peer dependencies, so install them in the host app.

## Backend Requirement

The cloud room helpers in this package target `https://mediasfu.com/v1/rooms/` by default.

- Use MediaSFU Cloud when you want managed room creation, signaling, and media routing. Pass `apiUserName` and `apiKey`.
- Use MediaSFU Open / Community Edition when you self-host. Pass a non-MediaSFU `localLink` such as `http://localhost:3000`.

## Quick Example

```ts
import {
  SocketManager,
  connectSocket,
  createRoomOnMediaSFU,
  joinRoomOnMediaSFU,
} from 'mediasfu-shared';

const createResult = await createRoomOnMediaSFU({
  payload: {
    action: 'create',
    userName: 'Ada',
    duration: 60,
    capacity: 10,
  },
  apiUserName: 'your-api-username',
  apiKey: 'your-64-character-api-key',
});

const joinResult = await joinRoomOnMediaSFU({
  payload: {
    action: 'join',
    meetingID: 'room123',
    userName: 'Ben',
  },
  apiUserName: 'your-api-username',
  apiKey: 'your-64-character-api-key',
});

const socket = await connectSocket({
  apiUserName: 'your-api-username',
  apiKey: 'your-64-character-api-key',
  apiToken: 'your-api-token',
  link: 'https://mediasfu.com/socket',
});

const socketManager = new SocketManager({ socket });

console.log(createResult.success, joinResult.success, socketManager.socket.connected);
```

## Import Paths

- `mediasfu-shared` exposes the full public runtime surface.
- `mediasfu-shared/consumers` is useful when you want consumer/grid helpers only.
- `mediasfu-shared/methods` is useful when you want action utilities and room helpers.
- `mediasfu-shared/types` is useful when you only need TypeScript contracts.

## Documentation

- Main docs: [https://mediasfu.com/documentation](https://mediasfu.com/documentation)
- User guide: [https://mediasfu.com/user-guide](https://mediasfu.com/user-guide)
- MediaSFU Open / CE: [https://github.com/MediaSFU/MediaSFUOpen](https://github.com/MediaSFU/MediaSFUOpen)

Generate package-local API docs with:

```bash
npm run build-docs
```

## Related Packages

| Package | Framework | npm |
|---------|-----------|-----|
| [mediasfu-reactjs](https://github.com/MediaSFU/MediaSFU-ReactJS) | React 18/19 | [`npm install mediasfu-reactjs`](https://www.npmjs.com/package/mediasfu-reactjs) |
| [mediasfu-vue](https://github.com/MediaSFU/MediaSFU-Vue) | Vue 3 / Composition API | [`npm install mediasfu-vue`](https://www.npmjs.com/package/mediasfu-vue) |
| [mediasfu-angular](https://github.com/MediaSFU/MediaSFU-Angular) | Angular 17/18/19 | [`npm install mediasfu-angular`](https://www.npmjs.com/package/mediasfu-angular) |
| [mediasfu-reactnative](https://www.npmjs.com/package/mediasfu-reactnative) | React Native | [`npm install mediasfu-reactnative`](https://www.npmjs.com/package/mediasfu-reactnative) |

## Support

- GitHub issues: [https://github.com/MediaSFU/MediaSFU-Shared/issues](https://github.com/MediaSFU/MediaSFU-Shared/issues)
- Email: info@mediasfu.com

## License

MIT. See [LICENSE](LICENSE).
