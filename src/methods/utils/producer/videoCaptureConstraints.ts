const QnHDCons = { width: { ideal: 320 }, height: { ideal: 180 } };
const sdCons = { width: { ideal: 640 }, height: { ideal: 360 } };
const hdCons = { width: { ideal: 1280 }, height: { ideal: 720 } };
const fhdCons = { width: { ideal: 1920 }, height: { ideal: 1080 } };
const qhdCons = { width: { ideal: 2560 }, height: { ideal: 1440 } };

const QnHDConsPort = { width: { ideal: 180 }, height: { ideal: 320 } };
const sdConsPort = { width: { ideal: 360 }, height: { ideal: 640 } };
const hdConsPort = { width: { ideal: 720 }, height: { ideal: 1280 } };
const fhdConsPort = { width: { ideal: 1080 }, height: { ideal: 1920 } };
const qhdConsPort = { width: { ideal: 1440 }, height: { ideal: 2560 } };

const QnHDConsNeu = { width: { ideal: 240 }, height: { ideal: 240 } };
const sdConsNeu = { width: { ideal: 480 }, height: { ideal: 480 } };
const hdConsNeu = { width: { ideal: 960 }, height: { ideal: 960 } };
const fhdConsNeu = { width: { ideal: 1440 }, height: { ideal: 1440 } };
const qhdConsNeu = { width: { ideal: 1920 }, height: { ideal: 1920 } };

const QnHDFrameRate = 5;
const sdFrameRate = 10;
const hdFrameRate = 15;
const fhdFrameRate = 20;
const qhdFrameRate = 30;
const screenFrameRate = 30;

/**
 * Preset video capture constraints and frame-rate defaults used by MediaSFU.
 *
 * These exports provide standard landscape, portrait, and neutral constraint
 * presets along with recommended frame-rate values for each quality tier.
 *
 * @example
 * ```typescript
 * const constraints = {
 *   video: {
 *     ...hdCons,
 *     frameRate: { ideal: hdFrameRate },
 *   },
 *   audio: false,
 * };
 * ```
 */
export {
  QnHDCons,
  sdCons,
  hdCons,
  fhdCons,
  qhdCons,
  QnHDConsPort,
  sdConsPort,
  hdConsPort,
  fhdConsPort,
  qhdConsPort,
  QnHDConsNeu,
  sdConsNeu,
  hdConsNeu,
  fhdConsNeu,
  qhdConsNeu,
  QnHDFrameRate,
  sdFrameRate,
  hdFrameRate,
  fhdFrameRate,
  qhdFrameRate,
  screenFrameRate,
};