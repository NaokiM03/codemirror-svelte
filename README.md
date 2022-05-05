# codemirror-svelte

Provides a CodeMirror wrapper component for Svelte.

## Installation

```sh
npm install -D codemirror-svelte @types/codemirror
npm install codemirror
```

## Usage

Check the [CodeMirror manual](https://codemirror.net/doc/manual.html).

```svelte
<!-- Foo.svelte -->
<script lang="ts">
  import CodeMirror, { EditorConfiguration, Editor } from "codemirror";
  import "codemirror/lib/codemirror.css";
  import "codemirror/mode/markdown/markdown";
  import "codemirror/mode/gfm/gfm";

  import Codemirror from "codemirror-svelte";

  const editorOptions: EditorConfiguration = {
    mode: {
      name: "gfm",
      highlightFormatting: true,
    },
    lineNumbers: true,
  };

  // initial content
  let value = "";

  // event registration
  const editorOnChange = (e: { detail: Editor }) => {};
  const editorOnScroll = (e: { detail: Editor }) => {};
</script>

// ..
  <Codemirror
    {CodeMirror}
    {value}
    options={editorOptions}
    on:change={editorOnChange}
    on:scroll={editorOnScroll}
  />
// ..
```

## Limitaion

Currently, only `change` and `scroll` events are available.

## License

codemirror-svelte is released under the MIT License
