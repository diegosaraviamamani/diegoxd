import Prism from "prismjs";
import "prismjs/components/prism-typescript";

export default defineNuxtPlugin((nuxt) => {
  nuxt.hook("vue-renderer:ssr:context", (ssrContext) => {
    ssrContext.Prism = Prism;
  });
});
`<p>UNIVERSIDAD ADVENTISTA DE BOLIVIA</p><p>Lic. en Ingenieria de Sistemas (2022 - 2023)</p>
   <p>&nbsp;</p>
   <p>INSTITUTO TECNICO DE EDUCACION COMERCIAL AMERICANO</p><p>T.S. en Sistemas Inform&aacute;ticos (2017 - 2019)</p>
   <p>&nbsp;</p>
   <p>UNIVERSIDAD INDIGENA DE BOLIVIA</p><p>T.S. en Petr&oacute;leo y Gas Natural (2013 -2016)</p>`;
export const education = [
  {
    title: "Lic. en Ingenieria de Sistemas (2022 - 2023)",
    school: "UNIVERSIDAD ADVENTISTA DE BOLIVIA",
  },
  {
    title: "T.S. en Sistemas Inform&aacute;ticos (2017 - 2019)",
    school: "INSTITUTO TECNICO DE EDUCACION COMERCIAL AMERICANO",
  },
  {
    title: "T.S. en Petróleo y Gas Natural (2013 -2016)",
    school: "UNIVERSIDAD INDIGENA DE BOLIVIA",
  },
];
