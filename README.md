# Astro [![Build Status](https://travis-ci.org/cferdinandi/astro.svg)](https://travis-ci.org/cferdinandi/astro)
A collection of five mobile-first navigation patterns, with an optional expand-and-collapse menu on small screens.

* **Basic.** A centered navigation and logo.
* **Basic Left.** A left-aligned navigation and logo.
* **Navbar.** An inline navigation and logo.
* **Navbar Left.** An inline navigation and logo with left-aligned navigation.
* **Stacked.** Stacked navigation and logo.

[Download Astro](https://github.com/cferdinandi/astro/archive/master.zip) / [View the demo](http://cferdinandi.github.io/astro/)

**In This Documentation**

1. [Getting Started](#getting-started)
2. [Installing with Package Managers](#installing-with-package-managers)
3. [Working with the Source Files](#working-with-the-source-files)
4. [Active Link Styling](#active-link-styling)
5. [Options & Settings](#options-and-settings)
6. [Browser Compatibility](#browser-compatibility)
7. [How to Contribute](#how-to-contribute)
8. [License](#license)
9. [Older Docs](#older-docs)



## Getting Started

Compiled and production-ready code can be found in the `dist` directory. The `src` directory contains development code. Unit tests are located in the `test` directory.

### 1. Include Astro on your site.

```html
<!-- Replace the * with your chosen version of Astro -->
<link rel="stylesheet" href="dist/css/astro-*.css">
<script src="dist/js/classList.js"></script>
<script src="dist/js/astro.js"></script>
```

Astro is [built with Sass](http://sass-lang.com/) for easy customization. If you don't use Sass, that's ok. The `css` folder contains compiled vanilla CSS.

The `_config.scss` and `_mixins.scss` files are the same ones used in [Kraken](http://cferdinandi.github.io/kraken/), so you can drop the `_astro-*.css` files right into Kraken without making any updates. Or, adjust the variables to suit your own project.

The optional expand-and-collapse menu on smaller screens requires `astro.js`, and [classList.js](https://github.com/eligrey/classList.js) (a polyfill that extends ECMAScript 5 API support to more browsers). Basic versions can omit these files.

### 2. Add the markup to your HTML.

All five navigation patterns use the same markup structure. Replace the `*` with your chosen version of Astro. Make sure that the `[data-nav-toggle]` value matches the ID of the `.nav-menu` section. To activate expand-and-collapse functionality, add the `.nav-collapse` class to the `nav-wrap-*` element.

```html
<nav class="nav-wrap-* nav-collapse">
	<a class="logo-*" href="#">My Brand</a>
	<a class="nav-toggle-*" data-nav-toggle="#nav-menu" href="#">Menu</a>
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


### 3. Initialize Astro.

```html
<script>
	astro.init();
</script>
```

If you're using the expand-and-collapse menu for smaller screens, initialize Astro in the footer of your page, after the content. And that's it, you're done. Nice work!



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
* [Ruby Sass](http://sass-lang.com/install)
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



## Options and Settings

Astro includes smart defaults and works right out of the box. But if you want to customize things, it also has a robust API that provides multiple ways for you to adjust the default options and settings.

### Global Settings

You can pass options and callbacks into Astro through the `init()` function:

```javascript
astro.init({
	toggleActiveClass: 'active', // Class added to active dropdown toggles on small screens
	navActiveClass: 'active', // Class added to active dropdown content areas on small screens
	initClass: 'js-astro', // Class added to `<html>` element when initiated
	callbackBefore: function ( toggle, navID ) {}, // Function that's run before a dropdown is toggled
	callbackAfter: function ( toggle, navID ) {} // Function that's run after a dropdown is toggled
});
```

### Use Astro events in your own scripts

You can also call Astro's navigation toggle event in your own scripts.

#### toggleNav()
Expand or collapse a navigation menu.

```javascript
astro.toggleNav(
	toggle, // Node that toggles the dropdown action. ex. document.querySelector('#toggle')
	navID, // ID of the navigation content wrapper. ex. '#nav-menu'
	options, // Classes and callbacks. Same options as those passed into the init() function.
	event // Optional, if a DOM event was triggered.
);
```

**Example**

```javascript
astro.toggleNav( null, '#nav-menu' );
```

#### destroy()
Destroy the current `astro.init()`. This is called automatically during the init function to remove any existing initializations.

```javascript
astro.destroy();
```


## Browser Compatibility

Astro works in all modern browsers, and IE 9 and above.

Astro is built with modern JavaScript APIs, and uses progressive enhancement. If the JavaScript file fails to load, or if your site is viewed on older and less capable browsers, the Basic navigation patterns will be displayed instead of the Plus versions.



## How to Contribute

In lieu of a formal style guide, take care to maintain the existing coding style. Don't forget to update the version number, the changelog (in the `readme.md` file), and when applicable, the documentation.



## License

Astro is licensed under the [MIT License](http://gomakethings.com/mit/).



## Older Docs

* [Version 4](https://github.com/cferdinandi/astro/tree/archive-v4)
* [Version 3](https://github.com/cferdinandi/astro/tree/archive-v3)