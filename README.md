# http-cat

<img src="https://http.cat/204" alt="http status cat 204" width="250">

This is a web component for embedding images from [HTTP Cats](https://http.cat).

Here's a [live demo](http://httpcats.github.io/http-cat-element).

## Install

```shell
npm install @http.cat/http-cat-element
```

## Import

If installed via NPM:

```js
import "@http.cat/http-cat-element";
```

Or just import the component file in your HTML:

```html
<script type="module" src="http-cat.js"></script>
```

## Usage

To use it just add the following markup to your HTML:

```html
<http-cat status="404"></http-cat>
```

### Attributes

- `status`: change it so that the image matches the corresponding HTTP status code

This component supports all `img` element attributes.

## Why didn't you extend the `img` native element instead?

Safari does not currently support custom elements that extend native elements. Therefore, an autonomous custom element is used to ensure maximum browser compatibility.

## LICENSE

MIT License
