import * as ElementView from '../aelement-view';

export interface IFormElementProps extends ElementView.IElementProps {
    autofocus?: boolean;
    defaultValue?: string;
    disabled?: boolean;
    form?: string;
    list?: string;
    readonly?: boolean;
    required?: boolean;
    value?: string;
    onChange?: (e: any) => void;
    onInput?: (e: any) => void;
}

/** text, url, tel,e-mail, password */
export interface ITextElementProps extends IFormElementProps {
    autocomplete?: boolean;
    maxlength?: number;
    minlength?: number;
    pattern?: string;
    placeholder?: string;
    size?: number;
}

/** date, time, number, range */
export interface INumericElementProps extends IFormElementProps {
    autocomplete?: boolean;
    max?: number;
    min?: number;
    step?: number;
}

/** radio button, checkbox */
export interface ICheckeableElementProps extends IFormElementProps {
    checked?: boolean;
    defaultChecked?: boolean;
}

export interface IFormElementState extends ElementView.IElementState { }

export abstract class AFormElementView<P extends IFormElementProps, S extends IFormElementState> extends ElementView.AElementView<P, S> {
    constructor(props: P, context?: any) {
        super(props, context);
    }
}