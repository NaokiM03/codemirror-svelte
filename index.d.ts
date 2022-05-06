import { SvelteComponentTyped } from "svelte";
import { Editor, EditorConfiguration, EditorFromTextArea } from "codemirror";
export default class Codemirror extends SvelteComponentTyped<{
  class?: string;
  CodeMirror: {
    fromTextArea: (
      element: HTMLTextAreaElement,
      options?: EditorConfiguration
    ) => EditorFromTextArea;
  };
  options?: EditorConfiguration;
  value?: string;
  editor?: Editor;
}> {}
