import { expect } from "@open-wc/testing";
import "../http-cat.js";

describe("http-cat", () => {
  let element;

  beforeEach(() => {
    element = document.createElement("http-cat");
    document.body.appendChild(element);
  });

  afterEach(() => {
    element.remove();
  });

  it("creates an img element when status attribute is set", () => {
    element.setAttribute("status", "404");
    const img = element.querySelector("img");

    expect(img).to.exist;
    expect(img.src).to.include("http.cat/404.jpg");
  });

  it("does not create an img element when status is not set", () => {
    const img = element.querySelector("img");
    expect(img).to.be.null;
  });

  it("copies other attributes to the img element", () => {
    element.setAttribute("status", "200");
    element.setAttribute("alt", "OK");
    element.setAttribute("width", "300");

    const img = element.querySelector("img");

    expect(img.getAttribute("alt")).to.equal("OK");
    expect(img.getAttribute("width")).to.equal("300");
    expect(img.getAttribute("status")).to.be.null;
  });
});
