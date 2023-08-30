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
        SubtitleText: t.constant(t.string),
      })
    ]
  }),
  languageData: {
    commentTokens: {line: ";"}
  }
})

export function Srt() {
  return new LanguageSupport(SrtLanguage)
}
