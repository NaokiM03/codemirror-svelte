import { SvelteComponentTyped } from "svelte";
import { EditorConfiguration, EditorFromTextArea } from "codemirror";
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
}> {}
