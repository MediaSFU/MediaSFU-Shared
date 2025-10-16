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

---

## 📦 About

`mediasfu-shared` is the universal shared library that powers all MediaSFU framework-specific SDKs (React, Vue, Angular, etc.). It provides the core WebRTC functionality, media handling, socket communication, and state management that enables real-time video conferencing, screen sharing, recording, and interactive features across all MediaSFU implementations.

This package contains framework-agnostic implementations of:
- **Media Consumers** - WebRTC transport and stream management
- **Core Methods** - Room creation, participant handling, recording controls
- **Socket Management** - Real-time communication with MediaSFU servers
- **Type Definitions** - Comprehensive TypeScript types for all MediaSFU features
- **Utility Functions** - Helper methods for media processing and state management

## 🎯 Key Features

- ✅ **Framework Agnostic** - Pure TypeScript/JavaScript implementation
- ✅ **WebRTC Integration** - Full mediasoup-client support for advanced WebRTC features
- ✅ **Type-Safe** - Complete TypeScript definitions for all APIs
- ✅ **Real-Time Communication** - Socket.io integration for instant updates
- ✅ **Modular Architecture** - Import only what you need for optimal bundle size
- ✅ **Production Ready** - Battle-tested in MediaSFU's production environment

## 📥 Installation

```bash
npm install mediasfu-shared
```

### Peer Dependencies

This package requires the following peer dependencies:

```bash
npm install socket.io-client mediasoup-client
```

## 🚀 Usage

### Importing Core Functions

```typescript
import { 
  connectSocket,
  joinRoomClient,
  updateRoomParametersClient,
  createDeviceClient,
  SocketManager 
} from 'mediasfu-shared';

// Initialize socket connection
const socket = await connectSocket({
  apiUserName: 'your-api-username',
  apiKey: 'your-api-key',
  apiToken: 'your-api-token',
  link: 'https://mediasfu.com/socket'
});

// Create SocketManager instance
const socketManager = new SocketManager({ socket });
```

### Using Consumers

```typescript
import { 
  consumerResume,
  addVideosGrid,
  prepopulateUserMedia 
} from 'mediasfu-shared';

// Resume a paused consumer
await consumerResume({
  id: 'consumer-id',
  parameters: roomParameters,
  socket: socketManager.socket
});

// Add video streams to grid
await addVideosGrid({
  consumers: activeConsumers,
  parameters: roomParameters
});
```

### Type Definitions

```typescript
import type { 
  Participant,
  Transport,
  Stream,
  EventType,
  ShowAlert,
  CoHostResponsibility,
  Settings
} from 'mediasfu-shared';

const participant: Participant = {
  id: 'participant-123',
  name: 'John Doe',
  audioID: 'audio-stream-id',
  videoID: 'video-stream-id',
  islevel: '1'
};
```

## 🏗️ Package Structure

```
mediasfu-shared/
├── consumers/          # WebRTC consumer management
│   ├── addVideosGrid
│   ├── consumerResume
│   └── prepopulateUserMedia
├── methods/           # Core functionality methods
│   ├── breakoutRoomsMethods/
│   ├── recordingMethods/
│   ├── participantsMethods/
│   ├── messageMethods/
│   ├── mediaMethods/
│   └── utils/
├── producers/         # Producer client implementations
├── sockets/          # Socket.io management
├── types/            # TypeScript type definitions
└── index.ts          # Main entry point
```

## 📚 Documentation

For detailed documentation on specific methods and types, please visit:

- **Main Documentation**: [https://mediasfu.com/documentation](https://mediasfu.com/documentation)
- **API Reference**: [https://mediasfu.com/docs](https://mediasfu.com/docs)
- **React SDK**: [mediasfu-reactjs](https://www.npmjs.com/package/mediasfu-reactjs)
- **Vue SDK**: [mediasfu-vue](https://www.npmjs.com/package/mediasfu-vue)

## 🔗 Related Packages

`mediasfu-shared` is used by all MediaSFU framework-specific packages:

- **[mediasfu-reactjs](https://www.npmjs.com/package/mediasfu-reactjs)** - React components and hooks
- **[mediasfu-vue](https://www.npmjs.com/package/mediasfu-vue)** - Vue 3 components and composables
- **[mediasfu-angular](https://www.npmjs.com/package/mediasfu-angular)** - Angular components and services

## 🤝 Integration with MediaSFU Community Edition (CE)

This package is designed to work seamlessly with [MediaSFU CE](https://github.com/MediaSFU/MediaSFUOpen), our open-source community edition server. MediaSFU CE provides:

- Complete WebRTC SFU server implementation
- Recording and streaming capabilities
- Breakout rooms and advanced features
- Free for self-hosting

## 💬 Support

Need help? We're here for you!

- **GitHub Issues**: [Report bugs or request features](https://github.com/MediaSFU/MediaSFU-Shared/issues)
- **Email Support**: info@mediasfu.com

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Made with ❤️ by the <a href="https://mediasfu.com">MediaSFU</a> Team
</p>

<p align="center">
  <a href="https://mediasfu.com">Website</a> •
  <a href="https://twitter.com/media_sfu">Twitter</a> •
  <a href="https://github.com/MediaSFU">GitHub</a> •
  <a href="https://www.linkedin.com/company/mediasfu">LinkedIn</a>
</p>
