declare class HTTPCat extends HTMLElement {
  constructor();
}

interface HTMLElementTagNameMap {
  "http-cat": HTTPCat;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "http-cat": React.DetailedHTMLProps<
        Omit<React.ImgHTMLAttributes<HTMLImageElement>, "status"> & {
          status: string;
        },
        HTMLElement
      >;
    }
  }
}
