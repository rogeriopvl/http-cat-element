# http-cat

<img src="https://http.cat/204" alt="http status cat 204" width="250">

This is a web component for embedding images from [HTTP Cats](https://http.cat).

Here's a [live demo](http://rogeriopvl.github.io/http-cat-element).

## Install

### Bower

    bower install http-cat-element

Then just import the component in your HTML:

    <link rel="import" href="bower_components/http-cat-element/http-cat.html">

### Manual

Get the `http-cat.html` file and then import it your markup:

    <link rel="import" href="http-cat.html">

#### Important
Don't forget to also include the [webcomponentsjs](https://github.com/webcomponents/webcomponentsjs) polyfill. If you installed via bower, you can find it already inside the `bower_components/` folder, because it's a dependency.

## Usage

This web component extends the `<img>` tag.

To use it just add the following markup to your HTML:

    <img is="http-cat" status="404">

### Attributes
* `status`: change it so that the image matches the corresponding HTTP status code

## LICENSE

MIT License
