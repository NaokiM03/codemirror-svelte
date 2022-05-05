<script lang="ts">
  import CodeMirror, { EditorConfiguration, Editor } from "codemirror";
  import "codemirror/lib/codemirror.css";
  import "codemirror/mode/markdown/markdown";
  import "codemirror/mode/gfm/gfm";
  import "codemirror/theme/solarized.css";

  import Codemirror from "codemirror-svelte";

  const editorOptions: EditorConfiguration = {
    mode: {
      name: "gfm",
      highlightFormatting: true,
    },
    lineNumbers: true,
    theme: "solarized light",
  };

  let value = `\
# Foo
## Bar

---

- foo
- bar
- baz

***

> foo
> > bar
`;

  const editorOnChange = (e: { detail: Editor }) => {};
  const editorOnScroll = (e: { detail: Editor }) => {};
</script>

<main>
  <Codemirror
    {CodeMirror}
    {value}
    options={editorOptions}
    on:change={editorOnChange}
    on:scroll={editorOnScroll}
  />
</main>
