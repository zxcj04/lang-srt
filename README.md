# CodeMirror 6 language For Srt files

This is a language mode for [CodeMirror 6](https://codemirror.net) that provides syntax highlighting for Srt files.

## Usage

The package exports a single function that'll register the mode with a CodeMirror instance:

```javascript
import {srt} from "codemirror-lang-srt"

srt() // This will register the mode with CodeMirror
```
