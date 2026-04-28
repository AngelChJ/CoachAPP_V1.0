/// <reference types="vite/client" />

// CSS Modules - permite que TypeScript reconozca los imports de .module.css
declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
