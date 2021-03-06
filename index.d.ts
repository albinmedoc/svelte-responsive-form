import type { SvelteComponent } from "svelte";

export interface FormProps {
    method?: string;
    action?: string;
}

declare class Form extends SvelteComponent {
    $$prop_def: FormProps;
}

declare class FormRow extends SvelteComponent { }

export interface InputContainerProps {
    label?: string;
}

declare class InputContainer extends SvelteComponent {
    $$prop_def: InputContainerProps;
}

declare function autoresize(node:Node): void;

export { Form, FormRow, InputContainer, autoresize }