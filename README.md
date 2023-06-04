# codemirror-svelte

Provides a CodeMirror wrapper component for Svelte.

The current library supports `CodeMirror 6`. If you want to use `CodeMirror 5`, install version `1.2.1`.

In CodeMirror 6, it has been modularized. This library was intended to be a thin wrapper, so perhaps it is not needed. If you want a high-level library with abstraction, there is [svelte-codemirror-editor](https://github.com/touchifyapp/svelte-codemirror-editor).

## Installation

```sh
npm install -D codemirror-svelte
```

## Usage

Check the [CodeMirror Reference Manual](https://codemirror.net/docs/ref/).

```svelte
<!-- Foo.svelte -->
<script lang="ts">
  import Codemirror, { basicSetup } from "codemirror-svelte";

  import { EditorView } from "@codemirror/view";

  import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
  import { languages } from "@codemirror/language-data";

  import { oneDarkTheme } from "@codemirror/theme-one-dark";

  // initial content
  let doc = "";

  const extensions = [
    basicSetup,
    markdown({ base: markdownLanguage, codeLanguages: languages }),
    oneDarkTheme,
    EditorView.theme({
      "&": {
        height: "800px",
        fontSize: "20px"
      }
      // ..
    })
    // ..
  ];
</script>

// ..
<Codemirror {doc} {extensions} />
// ..
```

## License

codemirror-svelte is released under the MIT License
