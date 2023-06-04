<script lang="ts">
  import { onMount } from "svelte";

  import { EditorView } from "@codemirror/view";
  import { EditorState, type Extension } from "@codemirror/state";
  import { minimalSetup } from "./setup.js";

  let klass = "";
  export { klass as class };

  export let doc = "";
  export let extensions: Extension;
  let parent: HTMLDivElement;

  let view: EditorView;

  onMount(() => {
    view = new EditorView({
      state: EditorState.create({
        doc,
        extensions: extensions ?? minimalSetup
      }),
      parent
    });
  });
</script>

<div bind:this={parent} class={klass} />
