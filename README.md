<p align="center">
  <img src="https://www.mediasfu.com/logo192.png" width="100" alt="MediaSFU Logo">
</p>

<p align="center">
  <a href="https://twitter.com/media_sfu">
    <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter" />
  </a>
  <a href="https://www.mediasfu.com/forums">
    <img src="https://img.shields.io/badge/Community-Forum-blue?style=for-the-badge&logo=discourse&logoColor=white" alt="Community Forum" />
  </a>
  <a href="https://github.com/MediaSFU">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="Github" />
  </a>
  <a href="https://www.mediasfu.com/">
    <img src="https://img.shields.io/badge/Website-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Website" />
  </a>
  <a href="https://www.youtube.com/channel/UCELghZRPKMgjih5qrmXLtqw">
    <img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="Youtube" />
  </a>
</p>

<p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square" alt="License: MIT" />
  </a>
  <a href="https://mediasfu.com">
    <img src="https://img.shields.io/badge/Built%20with-MediaSFU-blue?style=flat-square" alt="Built with MediaSFU" />
  </a>
  <a href="https://www.typescriptlang.org">
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  </a>
  <a href="https://www.npmjs.com/package/mediasfu-shared">
    <img src="https://img.shields.io/npm/v/mediasfu-shared.svg?style=flat-square" alt="npm version" />
  </a>
  <a href="https://www.npmjs.com/package/mediasfu-shared">
    <img src="https://img.shields.io/npm/dm/mediasfu-shared.svg?style=flat-square" alt="npm downloads" />
  </a>
</p>

<h1 align="center">mediasfu-shared</h1>

<p align="center">
  <strong>Core Shared Library for MediaSFU SDKs</strong>
</p>


# mediasfu-shared

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

- [mediasfu-reactjs](https://www.npmjs.com/package/mediasfu-reactjs)
- [mediasfu-vue](https://www.npmjs.com/package/mediasfu-vue)
- [mediasfu-angular](https://www.npmjs.com/package/mediasfu-angular)

## Support

- GitHub issues: [https://github.com/MediaSFU/MediaSFU-Shared/issues](https://github.com/MediaSFU/MediaSFU-Shared/issues)
- Email: info@mediasfu.com

## License

MIT. See [LICENSE](LICENSE).
