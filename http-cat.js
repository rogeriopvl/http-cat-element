/*
 * Element that embeds HTTP Cats images
 *
 * Example:
 *
 *     <http-cat status="404" />
 *
 * It supports all img element attributes.
 *
 * @element http-cat
 * @blurb Element that embeds HTTP Cats images
 * @status stable
 * @homepage http://rogeriopvl.github.io/http-cat-element
 */

class HTTPCat extends HTMLElement {
  constructor() {
    super();

    const status = this.getAttribute("status");

    if (status) {
      const img = document.createElement("img");
      img.src = "//http.cat/" + status + ".jpg";

      // copy all passed attributes except 'status' so that it behaves just like
      // an img element.
      this.getAttributeNames()
        .filter((attr) => attr !== "status")
        .forEach((attr) => {
          img.setAttribute(attr, this.getAttribute(attr));
        });

      this.appendChild(img);
    }
  }
}

customElements.define("http-cat", HTTPCat);
