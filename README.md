# Astro [![Build Status](https://travis-ci.org/cferdinandi/astro.svg)](https://travis-ci.org/cferdinandi/astro)
A collection of five mobile-first navigation patterns, with an optional expand-and-collapse menu on small screens.

* **Basic.** A centered navigation and logo.
* **Basic Left.** A left-aligned navigation and logo.
* **Navbar.** An inline navigation and logo.
* **Navbar Left.** An inline navigation and logo with left-aligned navigation.
* **Stacked.** Stacked navigation and logo.

[Download Astro](https://github.com/cferdinandi/astro/archive/master.zip) / [View the demo](http://cferdinandi.github.io/astro/)


## Usage

Compiled and production-ready code can be found in the `dist` directory. The `src` directory contains development code.

1. Include Astro on your site.

	```html
	<!-- Replace the * with your chosen version of Astro -->
	<link rel="stylesheet" href="dist/css/astro-*.css">
	<script src="dist/js/astro.js"></script>
	```
2. Add the markup to your HTML.

	All five navigation patterns use the same markup structure. Replace the `*` with your chosen version of Astro. You should also add a unique selector to both your toggle element and the navigation container. To activate expand-and-collapse functionality, add the `.nav-collapse` class to the `nav-wrap-*` element.

	```html
	<nav class="nav-wrap-* nav-collapse">
		<a class="logo-*" href="#">My Brand</a>
		<a class="nav-toggle-* js-astro" href="#">Menu</a>
		<div class="nav-menu-*" id="nav-menu">
			<ul class="nav-*">
				<li><a href="#">Home</a></li>
				<li><a href="#">About</a></li>
			</ul>
		</div>
	</nav>
	```

	**Versions**

	* `basic`
	* `basic-left`
	* `navbar`
	* `navbar-left`
	* `stacked`
3. Initialize Astro.

	If you're using the expand-and-collapse menu for smaller screens, initialize Astro in the footer of your page, after the content. And that's it, you're done. Nice work!

	```js
	astro(
		toggle, // Selector for the element that toggles visibility (uses document.querySelector)
		menus, // Selector for the menu (uses document.querySelectorAll)
		cb // Callback to run after password visibility changes
	);
	```


## Example

```html
<link rel="stylesheet" href="dist/css/astro-navbar.css" type="text/css">

<p><strong>Simple</strong></p>
<nav class="nav-wrap-navbar">
	<a class="logo-navbar" href="#">My Brand</a>
	<div class="nav-menu-navbar">
		<ul class="nav-navbar">
			<li><a href="#">Home</a></li>
			<li><a href="#">About</a></li>
		</ul>
	</div>
</nav>

<p><strong>Expand-and-Collapse</strong></p>
<nav class="nav-wrap-navbar nav-collapse">
	<a class="logo-navbar" href="#">My Brand</a>
	<a class="nav-toggle-navbar js-astro" href="#">Menu</a>
	<div class="nav-menu-navbar" id="nav">
		<ul class="nav-navbar">
			<li><a href="#">Home</a></li>
			<li><a href="#">About</a></li>
		</ul>
	</div>
</nav>

<script src="dist/js/astro.js"></script>
<script>
	if ( 'querySelector' in document && 'addEventListener' in window && 'classList' in document.createElement('_') ) {
		astro( '.js-astro', '#nav' );
	}
</script>
```

[See working examples in the demo.](http://cferdinandi.github.io/astro/)



## Installing with Package Managers

You can install Astro with your favorite package manager.

* **NPM:** `npm install cferdinandi/astro`
* **Bower:** `bower install https://github.com/cferdinandi/astro.git`
* **Component:** `component install cferdinandi/astro`



## Working with the Source Files

If you would prefer, you can work with the development code in the `src` directory using the included [Gulp build system](http://gulpjs.com/). This compiles, lints, and minifies code, and runs unit tests. It's the same build system that's used by [Kraken](http://cferdinandi.github.io/kraken/), so it includes some unnecessary tasks and Sass variables but can be dropped right in to the boilerplate without any configuration.

### Dependencies
Make sure these are installed first.

* [Node.js](http://nodejs.org)
* [Gulp](http://gulpjs.com) `sudo npm install -g gulp`

### Quick Start

1. In bash/terminal/command line, `cd` into your project directory.
2. Run `npm install` to install required files.
3. When it's done installing, run one of the task runners to get going:
	* `gulp` manually compiles files.
	* `gulp watch` automatically compiles files and applies changes using [LiveReload](http://livereload.com/).



## Active Link Styling

There's a placeholder in the CSS to add styling to the current page in the navigation menu.

```css
/*  Placeholder for active link styling */
/*  .nav-* > li.active > a { */
/*      Add your styles here */
/*  } */
```

***Note:*** *If you're using WordPress, check out [this great tutorial by Todd Motto](http://www.toddmotto.com/highlight-your-current-page-with-wordpress-conditionals) on how to add the `.active` class using a simple PHP function.*



## Browser Compatibility

Astro works in all modern browsers, and IE 9 and above.

Astro is built with modern JavaScript APIs, and uses progressive enhancement. If the JavaScript file fails to load, or if your site is viewed on older and less capable browsers, the Basic navigation patterns will be displayed instead of the Plus versions.

### Cutting the Mustard

You should check for `document.querySelector`, `window.addEventListener`, and `document.classList` support before calling `astro()`.

```js
if ( 'querySelector' in document && 'addEventListener' in window && 'classList' in document.createElement('_') ) {
	astro( ... );
}
```



## How to Contribute

In lieu of a formal style guide, take care to maintain the existing coding style. Please apply fixes to both the development and production code. Don't forget to update the version number, and when applicable, the documentation.



## License

The code is available under the [MIT License](LICENSE.md).