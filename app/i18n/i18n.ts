import * as Localization from "expo-localization"
import i18n from "i18n-js"

const en = require("./languages/en.json")
const ja = require("./languages/ja.json")

i18n.fallbacks = true
i18n.translations = { en, ja }

i18n.locale = Localization.locale || "en"
