import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
  /* Orange */
  --color-orange-0: #fff4e6;
  --color-orange-50: #ffe8cc;
  --color-orange-100: #ffd8a8;
  --color-orange-200: #fed7aa;
  --color-orange-300: #fdba74;
  --color-orange-400: #ffa94d;  
  --color-orange-500: #ff922b;
  --color-orange-600: #c2410c;
  --color-orange-700: #f76707;
  --color-orange-800: #e8590c;
  --color-orange-900: #d9480f;
 
  --color-zinc-0: #fff;
  --color-zinc-50: #f1f3f5;
  --color-zinc-100:#e9ecef;
  --color-zinc-200: #dee2e6;
  --color-zinc-300: #ced4da;
  --color-zinc-400: #adb5bd;
  --color-zinc-500:#868e96;
  --color-zinc-700: #495057;
  --color-zinc-600: #3f3f46;
  --color-zinc-800: #18181b;
  --color-zinc-900: #09090b;

  --color-green-100: #dcfce7;
  --color-green-500: #51cf66;
  --color-green-600: #40c057;
  --color-green-700: #15803d;

  --color-red-100: #f87171;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;
  --color-red-900: #ff0000;

  --color-blue-600: #60a5fa;
  --color-blue-700: #4d61fc;
  --color-blue-800: #1e40af;
  
  --color-purple-650: #3b3663;

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;
}


*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
  color: var(--color-zinc-900);

  transition: all 0.4s ease;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}



input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-zinc-200);
  color: var(--color-zinc-500);
}


/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;
  height: 100%;
}


a {
  text-decoration: none;
  color: inherit;
}

button {
  background: none;
  border: none;
  cursor: pointer;
}
`;

export default GlobalStyle;
