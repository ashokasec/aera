export interface EmailContentBase {
    type: "paragraph" | "h1" | "h2" | "h3" | "signature" | "image" | "profile" | "separator" | "button" | "link";
}

export interface ProfileProps extends EmailContentBase {
    type: "profile";
    name?: string;
    imgSrc?: string;
    link?: string;
}

export interface ParagraphProps extends EmailContentBase {
    type: "paragraph";
    text: string;
}

export interface Heading1Props extends EmailContentBase {
    type: "h1";
    text: string;
    link?: string;
}

export interface Heading2Props extends EmailContentBase {
    type: "h2";
    text: string;
    link?: string;
}

export interface Heading3Props extends EmailContentBase {
    type: "h3";
    text: string;
    link?: string;
}

export interface ImageProps extends EmailContentBase {
    type: "image";
    src: string;
    alt?: string;
}

export interface SignatureProps extends EmailContentBase {
    type: "signature";
    name: string;
    role?: string;
    address?: string;
}

export interface SeparatorProps extends EmailContentBase {
    type: "separator";
}

export interface ButtonProps extends EmailContentBase {
    type: "button";
    text: string,
    link?: string,
}

export interface LinkProps extends EmailContentBase {
    type: "link";
    text: string,
    link: string,
}

export type EmailContentProps =
    | ProfileProps
    | ParagraphProps
    | Heading1Props
    | Heading2Props
    | Heading3Props
    | ImageProps
    | SignatureProps
    | SeparatorProps
    | ButtonProps
    | LinkProps