import i18n from "i18n-js"

/**
 * Translates text.
 *
 * @param key The i18n key.
 */
export const _ = (key: string, options?: i18n.TranslateOptions) => {
  return key ? i18n.t(key, options) : null
}
