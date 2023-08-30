import {parser} from "./syntax.grammar"
import {LRLanguage, LanguageSupport, foldNodeProp, foldInside} from "@codemirror/language"
import {styleTags, tags as t} from "@lezer/highlight"

export const SrtLanguage = LRLanguage.define({
  parser: parser.configure({
    props: [
      foldNodeProp.add({
        Subtitle: foldInside
      }),
      styleTags({
        SubtitleIndex: t.variableName,
        TwoDigitTime: t.number,
        ThreeDigitTime: t.number,
        TimeSeparator: t.punctuation,
        SubtitleText: t.literal,
      })
    ]
  }),
  languageData: {
    commentTokens: {line: ";"}
  }
})

export function srt() {
  return new LanguageSupport(SrtLanguage)
}
