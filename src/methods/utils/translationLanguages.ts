export type VoiceGender = 'male' | 'female' | 'neutral';

export type TTSSupport = 'excellent' | 'good' | 'moderate' | 'limited' | 'unknown' | 'n/a';

export type LanguageRegion =
  | 'global'
  | 'europe'
  | 'asia'
  | 'south-asia'
  | 'mena'
  | 'africa'
  | 'caucasus'
  | 'central-asia'
  | 'constructed'
  | 'special'
  | 'other';

export interface LanguageMetadata {
  name: string;
  nativeName: string;
  region: LanguageRegion;
  ttsSupport: TTSSupport;
}

export interface LanguageOption {
  code: string;
  name: string;
  nativeName: string;
  region: LanguageRegion;
  ttsSupport: TTSSupport;
}

export interface VoiceOption {
  id: string;
  name: string;
  gender: VoiceGender;
  provider: string;
  language: string;
  style?: string;
}

export interface VoiceSelectionPreference {
  gender: VoiceGender;
  voiceId?: string;
  style?: string;
}

export interface TranslationVoiceConfig {
  voiceGender?: VoiceGender;
  voiceId?: string;
  voiceClone?: {
    provider: 'elevenlabs' | 'playht' | 'coqui' | 'cartesia';
    voiceId: string;
    stability?: number;
    similarity?: number;
  };
  sttNickName?: string;
  llmNickName?: string;
  ttsNickName?: string;
  ttsProvider?: string;
  sttParams?: Record<string, string | number | boolean>;
  llmParams?: Record<string, string | number | boolean>;
  ttsParams?: Record<string, string | number | boolean>;
}

export interface TranslationLanguageEntry {
  code: string;
  nickname?: string;
  voiceConfig?: TranslationVoiceConfig;
}

export const SUPPORTED_LANGUAGE_CODES: string[] = [
  'en', 'es', 'fr', 'de', 'it', 'pt', 'ru', 'zh', 'ja', 'ko', 'ar',
  'hi', 'bn', 'pa', 'te', 'mr', 'ta', 'ur', 'gu', 'kn', 'ml', 'ne', 'si',
  'nl', 'pl', 'tr', 'cs', 'el', 'hu', 'ro', 'sv', 'da', 'fi', 'no', 'sk',
  'uk', 'bg', 'hr', 'et', 'lt', 'lv', 'sl', 'sr', 'bs', 'mk', 'is',
  'ga', 'cy', 'mt', 'lb', 'sq', 'be',
  'he', 'fa', 'ps', 'ku',
  'vi', 'th', 'id', 'ms', 'tl', 'km', 'lo', 'my',
  'sw', 'yo', 'ig', 'ha', 'zu', 'xh', 'af', 'st', 'tn', 'sn', 'am', 'so', 'rw', 'mg', 'ny',
  'ee', 'tw', 'gaa',
  'ka', 'hy', 'az',
  'eu', 'gl', 'ca', 'la', 'eo',
  'kk', 'uz', 'tg', 'ky', 'tk', 'mn',
  'auto',
];

const REGION_BY_LANGUAGE: Record<string, LanguageRegion> = {
  en: 'global', es: 'global', fr: 'europe', de: 'europe', it: 'europe', pt: 'global', ru: 'europe', zh: 'asia', ja: 'asia', ko: 'asia', ar: 'mena',
  hi: 'south-asia', bn: 'south-asia', pa: 'south-asia', te: 'south-asia', mr: 'south-asia', ta: 'south-asia', ur: 'south-asia', gu: 'south-asia', kn: 'south-asia', ml: 'south-asia', ne: 'south-asia', si: 'south-asia',
  nl: 'europe', pl: 'europe', tr: 'europe', cs: 'europe', el: 'europe', hu: 'europe', ro: 'europe', sv: 'europe', da: 'europe', fi: 'europe', no: 'europe', sk: 'europe', uk: 'europe', bg: 'europe', hr: 'europe', et: 'europe', lt: 'europe', lv: 'europe', sl: 'europe', sr: 'europe', bs: 'europe', mk: 'europe', is: 'europe', ga: 'europe', cy: 'europe', mt: 'europe', lb: 'europe', sq: 'europe', be: 'europe',
  he: 'mena', fa: 'mena', ps: 'mena', ku: 'mena',
  vi: 'asia', th: 'asia', id: 'asia', ms: 'asia', tl: 'asia', km: 'asia', lo: 'asia', my: 'asia',
  sw: 'africa', yo: 'africa', ig: 'africa', ha: 'africa', zu: 'africa', xh: 'africa', af: 'africa', st: 'africa', tn: 'africa', sn: 'africa', am: 'africa', so: 'africa', rw: 'africa', mg: 'africa', ny: 'africa', ee: 'africa', tw: 'africa', gaa: 'africa',
  ka: 'caucasus', hy: 'caucasus', az: 'caucasus',
  eu: 'europe', gl: 'europe', ca: 'europe', la: 'europe', eo: 'constructed',
  kk: 'central-asia', uz: 'central-asia', tg: 'central-asia', ky: 'central-asia', tk: 'central-asia', mn: 'central-asia',
  auto: 'special',
};

const TTS_SUPPORT_BY_LANGUAGE: Record<string, TTSSupport> = {
  en: 'excellent', es: 'excellent', fr: 'excellent', de: 'excellent', it: 'excellent', pt: 'excellent', ru: 'excellent', zh: 'excellent', ja: 'excellent', ko: 'excellent', ar: 'excellent',
  hi: 'good', bn: 'good', te: 'good', mr: 'good', ta: 'good', ur: 'good', nl: 'excellent', pl: 'excellent', tr: 'excellent', cs: 'good', el: 'good', hu: 'good', ro: 'good', sv: 'excellent',
  da: 'good', fi: 'good', no: 'good', uk: 'good', he: 'good', vi: 'good', th: 'good', id: 'good', ms: 'good', af: 'good', ca: 'good',
  auto: 'n/a',
};

const getDisplayName = (code: string, locale: string, fallback: string) => {
  try {
    const displayNames = new Intl.DisplayNames([locale], { type: 'language' });
    return displayNames.of(code) || fallback;
  } catch {
    return fallback;
  }
};

export const normalizeLanguageCode = (code: string): string => {
  if (!code || typeof code !== 'string') {
    return 'en';
  }

  return code.trim().toLowerCase().split('-')[0];
};

export const isLanguageSupported = (code: string): boolean => {
  const normalized = normalizeLanguageCode(code);
  return SUPPORTED_LANGUAGE_CODES.includes(normalized);
};

export const getLanguageName = (code: string, displayLocale = 'en'): string => {
  const normalized = normalizeLanguageCode(code);
  if (normalized === 'auto') {
    return 'Auto-detect';
  }

  return getDisplayName(normalized, displayLocale, normalized.toUpperCase());
};

export const getLanguageNativeName = (code: string): string => {
  const normalized = normalizeLanguageCode(code);
  if (normalized === 'auto') {
    return 'Auto';
  }

  return getDisplayName(normalized, normalized, getLanguageName(normalized));
};

export const getLanguageMetadata = (code: string): LanguageMetadata => {
  const normalized = normalizeLanguageCode(code);

  return {
    name: getLanguageName(normalized),
    nativeName: getLanguageNativeName(normalized),
    region: REGION_BY_LANGUAGE[normalized] || 'other',
    ttsSupport: TTS_SUPPORT_BY_LANGUAGE[normalized] || 'unknown',
  };
};

export const getSupportedLanguages = (displayLocale = 'en'): LanguageOption[] => {
  return SUPPORTED_LANGUAGE_CODES.map((code) => {
    const metadata = getLanguageMetadata(code);
    return {
      code,
      name: getLanguageName(code, displayLocale),
      nativeName: metadata.nativeName,
      region: metadata.region,
      ttsSupport: metadata.ttsSupport,
    };
  }).sort((left, right) => left.name.localeCompare(right.name));
};

export type TTSProvider =
  | 'deepgram'
  | 'openai'
  | 'azure'
  | 'google'
  | 'aws'
  | 'elevenlabs'
  | 'playht'
  | 'cartesia'
  | 'rime'
  | 'kokoro'
  | 'gemini'
  | 'assemblyai';

export const TTS_PROVIDERS: Record<TTSProvider, { name: string; supportsSSML: boolean; multilingual?: boolean; isDefault?: boolean }> = {
  deepgram: { name: 'Deepgram Aura', supportsSSML: false, isDefault: true },
  openai: { name: 'OpenAI TTS', supportsSSML: false, multilingual: true },
  azure: { name: 'Azure Neural TTS', supportsSSML: true },
  google: { name: 'Google Cloud TTS', supportsSSML: true },
  aws: { name: 'AWS Polly', supportsSSML: true },
  elevenlabs: { name: 'ElevenLabs', supportsSSML: false, multilingual: true },
  playht: { name: 'PlayHT', supportsSSML: false, multilingual: true },
  cartesia: { name: 'Cartesia Sonic', supportsSSML: false, multilingual: true },
  rime: { name: 'Rime AI', supportsSSML: false, multilingual: true },
  kokoro: { name: 'Kokoro', supportsSSML: false, multilingual: true },
  gemini: { name: 'Google Gemini TTS', supportsSSML: false, multilingual: true },
  assemblyai: { name: 'AssemblyAI', supportsSSML: false },
};

export interface SocketVoiceResponse {
  provider: string;
  language: string;
  voices: { male: VoiceOption[]; female: VoiceOption[] };
  providers?: Record<string, unknown>;
  error?: string;
}

const buildFallbackVoices = (langCode: string, provider: string): { male: VoiceOption[]; female: VoiceOption[] } => {
  const normalizedLanguage = normalizeLanguageCode(langCode === 'auto' ? 'en' : langCode);
  const providerKey = provider.toLowerCase();
  const providerName = TTS_PROVIDERS[providerKey as TTSProvider]?.name || provider;
  const languageName = getLanguageName(normalizedLanguage);

  return {
    female: [
      {
        id: `${providerKey}-${normalizedLanguage}-female-1`,
        name: `${providerName} ${languageName} Female`,
        gender: 'female',
        provider: providerKey,
        language: normalizedLanguage,
      },
      {
        id: `${providerKey}-${normalizedLanguage}-female-2`,
        name: `${providerName} ${languageName} Female 2`,
        gender: 'female',
        provider: providerKey,
        language: normalizedLanguage,
      },
    ],
    male: [
      {
        id: `${providerKey}-${normalizedLanguage}-male-1`,
        name: `${providerName} ${languageName} Male`,
        gender: 'male',
        provider: providerKey,
        language: normalizedLanguage,
      },
      {
        id: `${providerKey}-${normalizedLanguage}-male-2`,
        name: `${providerName} ${languageName} Male 2`,
        gender: 'male',
        provider: providerKey,
        language: normalizedLanguage,
      },
    ],
  };
};

export const getAvailableVoices = (
  langCode: string,
  provider: TTSProvider | string = 'deepgram'
): { male: VoiceOption[]; female: VoiceOption[] } => {
  return buildFallbackVoices(langCode, provider.toString());
};

export const fetchVoicesViaSocket = (
  socket: { emit: (event: string, data: unknown, callback?: (response: SocketVoiceResponse) => void) => void },
  provider: TTSProvider | string = 'deepgram',
  language: string = 'en'
): Promise<SocketVoiceResponse> => {
  return new Promise((resolve) => {
    const providerName = provider.toString();
    const fallbackVoices = getAvailableVoices(language, providerName);

    const timeout = setTimeout(() => {
      resolve({
        provider: providerName,
        language,
        voices: fallbackVoices,
        error: 'Request timed out, using shared fallback voices',
      });
    }, 5000);

    socket.emit('translation:getVoices', { provider, language }, (response: SocketVoiceResponse) => {
      clearTimeout(timeout);

      if (response?.voices) {
        resolve(response);
        return;
      }

      resolve({
        provider: response?.provider || providerName,
        language: response?.language || language,
        voices: fallbackVoices,
        error: response?.error || 'No voices returned, using shared fallback voices',
      });
    });
  });
};

export const fetchLanguagesViaSocket = (
  socket: { emit: (event: string, data: unknown, callback?: (response: { languages?: LanguageOption[] }) => void) => void },
  displayLocale: string = 'en'
): Promise<LanguageOption[]> => {
  return new Promise((resolve) => {
    const timeout = setTimeout(() => {
      resolve(getSupportedLanguages(displayLocale));
    }, 5000);

    socket.emit('translation:getLanguages', { displayLocale }, (response: { languages?: LanguageOption[] }) => {
      clearTimeout(timeout);
      resolve(response?.languages?.length ? response.languages : getSupportedLanguages(displayLocale));
    });
  });
};