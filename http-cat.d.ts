declare global {
  interface HTMLElementTagNameMap {
    "http-cat": HTMLImageElement & {
      status?: number | string;
    };
  }
}
