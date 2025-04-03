declare module 'dompurify' {
  export interface DOMPurifyI {
    sanitize: (html: string, options?: any) => string;
    addHook: (hook: string, callback: Function) => DOMPurifyI;
    removeHook: (hook: string) => DOMPurifyI;
    removeHooks: (hook: string) => DOMPurifyI;
    removeAllHooks: () => DOMPurifyI;
    isValidAttribute: (tag: string, attr: string, value: string) => boolean;
  }

  const DOMPurify: DOMPurifyI;
  export default DOMPurify;
}
