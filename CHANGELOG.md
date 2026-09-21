# Changelog

## 1.2.3 — 2026-09-21

- Fixed consume-socket lifecycle cleanup for all dependent SDKs: failed joins are disposed, dead endpoint entries are pruned before reconnecting, disconnects remove their endpoint registration, and failed handshakes cannot leave auto-reconnecting orphan sockets.
- Added the framework-neutral web virtual-background blur contract, including a stable `"blur"` selection value, configurable blur strength, edge-bleed compositing, and an `applyBackgroundBlur` headless helper for web SDK adapters.

## 1.2.2 — 2026-09-16

- Report the room layout to the recording service as soon as a recording starts. Previously the first layout update waited for a participant or screen change, so the start of a recording could use a stale layout. This applies to every SDK built on this runtime.

## 1.2.1 — 2026-09-03

- Publish the serialized consume-socket setup fix from the 1.2.0 development line, including safe retry handling after a failed connection attempt.

## 1.2.0 — 2026-09-03

- Serialize concurrent consume-socket setup for the same room and endpoint. This prevents duplicate consume sockets during overlapping room/media updates while preserving independent sockets for separate rooms or nodes.
- Keep the framework-neutral runtime, native entry point, and generated declaration outputs aligned for React, Vue, Angular, React Native, Expo, and other SDK adapters.
- Remove duplicate Vite entry declarations so release builds are warning-free.
