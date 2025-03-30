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
 * @homepage http://httpcats.github.io/http-cat-element
 */

class HTTPCat extends HTMLElement {
  static get observedAttributes() {
    return ["status", "alt", "width", "height"];
  }

  constructor() {
    super();
    this._img = null;
  }

  connectedCallback() {
    this._updateImage();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (newValue === oldValue) return;

    if (name === "status") {
      this._updateImage(); // rebuild img if status changes
    } else if (this._img) {
      if (newValue != null) {
        this._img.setAttribute(name, newValue);
      } else {
        this._img.removeAttribute(name);
      }
    }
  }

  _updateImage() {
    const status = this.getAttribute("status");

    if (!status && this._img) {
      this._img.remove();
      this._img = null;
      return;
    }

    if (status) {
      if (!this._img) {
        this._img = document.createElement("img");
        this.appendChild(this._img);
      }

      this._img.src = `//http.cat/${status}.jpg`;

      // sync all attributes except "status"
      this.getAttributeNames()
        .filter((attr) => attr !== "status")
        .forEach((attr) => {
          this._img.setAttribute(attr, this.getAttribute(attr));
        });
    }
  }
}

customElements.define("http-cat", HTTPCat);
