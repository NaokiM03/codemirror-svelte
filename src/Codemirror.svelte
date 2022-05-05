<script lang="ts">
  import type {
    Editor,
    EditorConfiguration,
    EditorFromTextArea,
  } from "codemirror";
  import { onMount, createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let klass = "";
  export { klass as class };

  let textArea: HTMLTextAreaElement;
  export let value = "";

  export let CodeMirror: {
    fromTextArea: (
      element: HTMLTextAreaElement,
      options?: EditorConfiguration
    ) => EditorFromTextArea;
  };
  export let options: EditorConfiguration = {};

  onMount(() => {
    const editor: Editor = CodeMirror.fromTextArea(textArea, options);

    editor.on("change", (e: Editor) => {
      dispatch("change", e);
    });
    editor.on("scroll", (e: Editor) => {
      dispatch("scroll", e);
    });
  });
</script>

<div class={klass}>
  <textarea bind:this={textArea} {value} readonly />
</div>
