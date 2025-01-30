declare module '*.module.css' {
    const content: Record<string, string>;
    export default content;
}

declare module '*.svg' {
    const src: string;
    export default src;
}

declare module '*.woff';
declare module '*.woff2';
