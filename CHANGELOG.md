# Changelog

## 1.2.2 — 2026-09-16

- Report the room layout to the recording service as soon as a recording starts. Previously the first layout update waited for a participant or screen change, so the start of a recording could use a stale layout. This applies to every SDK built on this runtime.

## 1.2.1 — 2026-09-03

- Publish the serialized consume-socket setup fix from the 1.2.0 development line, including safe retry handling after a failed connection attempt.

## 1.2.0 — 2026-09-03

- Serialize concurrent consume-socket setup for the same room and endpoint. This prevents duplicate consume sockets during overlapping room/media updates while preserving independent sockets for separate rooms or nodes.
- Keep the framework-neutral runtime, native entry point, and generated declaration outputs aligned for React, Vue, Angular, React Native, Expo, and other SDK adapters.
- Remove duplicate Vite entry declarations so release builds are warning-free.
