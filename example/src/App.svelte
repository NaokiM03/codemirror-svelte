<script lang="ts">
  import Codemirror, { basicSetup } from "codemirror-svelte";

  import { EditorView, scrollPastEnd } from "@codemirror/view";

  import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
  import { languages } from "@codemirror/language-data";

  import { oneDarkTheme } from "@codemirror/theme-one-dark";

  let doc = `\
# Foo
## Bar

---

- foo
- bar
- baz

***

> foo
> > bar

*hoge*

\`\`\`rust
fn main() {
  println!("Hello, world!");
}
\`\`\`
`;

  const extensions = [
    basicSetup,
    scrollPastEnd(),
    markdown({ base: markdownLanguage, codeLanguages: languages }),
    oneDarkTheme,
    EditorView.theme({
      "&": {
        height: "800px",
        fontSize: "20px"
      }
    })
  ];
</script>

<main>
  <Codemirror {doc} {extensions} />
</main>
