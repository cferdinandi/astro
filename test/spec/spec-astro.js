describe('Astro', function () {

	//
	// Helper Functions
	//

	/**
	 * Inserts Houdini markup into DOM
	 */
	var injectElem = function () {
		var elem =
			'<nav class="nav-wrap nav-collapse">' +
				'<a class="logo" href="#">My Brand</a>' +
				'<a class="nav-toggle" data-nav-toggle="#nav-menu" href="#">Menu</a>' +
				'<div class="nav-menu" id="nav-menu">' +
					'<ul class="nav">' +
						'<li><a href="#">Home</a></li>' +
						'<li><a href="#">About</a></li>' +
					'</ul>' +
				'</div>' +
			'</nav>';
		document.body.innerHTML = elem;
	};

	/**
	 * Triggers an event
	 * @param  {String} type Type of event (ex. 'click')
	 * @param  {Element} elem The element that triggered the event
	 * @link http://stackoverflow.com/a/2490876
	 */
	var trigger = function (type, elem) {
		var event; // The custom event that will be created

		if (document.createEvent) {
			event = document.createEvent('HTMLEvents');
			event.initEvent(type, true, true);
		} else {
			event = document.createEventObject();
			event.eventType = type;
		}

		event.eventName = type;

		if (document.createEvent) {
			elem.dispatchEvent(event);
		} else {
			elem.fireEvent("on" + event.eventType, event);
		}
	};

	/**
	 * Bind polyfill for PhantomJS
	 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind#Compatibility
	 */
	if (!Function.prototype.bind) {
		Function.prototype.bind = function (oThis) {
			if (typeof this !== "function") {
				// closest thing possible to the ECMAScript 5
				// internal IsCallable function
				throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
			}

			var aArgs = Array.prototype.slice.call(arguments, 1);
			var fToBind = this;
			var fNOP = function () {};
			var fBound = function () {
				return fToBind.apply(this instanceof fNOP && oThis ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
			};

			fNOP.prototype = this.prototype;
			fBound.prototype = new fNOP();

			return fBound;
		};
	}


	//
	// Init
	//

	describe('Should initialize plugin', function () {

		beforeEach(function () {
			astro.init();
		});

		it('Document should include the astro module', function () {
			expect(!!astro).toBe(true);
		});

		it('Document should contain init class', function () {
			expect(document.documentElement.classList.contains('js-astro')).toBe(true);
		});

	});

	describe('Should merge user options into defaults', function () {

		var toggle, nav, doc;

		beforeEach(function () {
			injectElem();
			astro.init({
				toggleActiveClass: 'toggle-active',
				navActiveClass: 'nav-active',
				initClass: 'js-test',
				callbackBefore: function () { document.documentElement.classList.add('callback-before'); },
				callbackAfter: function () { document.documentElement.classList.add('callback-after'); }
			});
			toggle = document.querySelector('[data-nav-toggle]');
			nav = document.querySelector( toggle.getAttribute('data-nav-toggle') );
			doc = document.documentElement;
		});

		it('User options should be merged into defaults', function () {
			trigger('click', toggle);
			expect(toggle.classList.contains('toggle-active')).toBe(true);
			expect(nav.classList.contains('nav-active')).toBe(true);
			expect(doc.classList.contains('js-test')).toBe(true);
			expect(doc.classList.contains('callback-before')).toBe(true);
			expect(doc.classList.contains('callback-after')).toBe(true);
		});

	});


	//
	// Events
	//

	describe('Should hide and show navigation menu on click', function () {

		var toggle, nav;

		beforeEach(function () {
			injectElem();
			astro.init();
			toggle = document.querySelector('[data-nav-toggle]');
			nav = document.querySelector( toggle.getAttribute('data-nav-toggle') );
		});

		it('Toggle and nav should have ".active" class on click', function () {
			trigger('click', toggle);
			expect(toggle.classList.contains('active')).toBe(true);
			expect(nav.classList.contains('active')).toBe(true);
		});

		it('Toggle and nav should not have ".active" class if toggle is clicked again', function () {
			trigger('click', toggle);
			expect(toggle.classList.contains('active')).toBe(true);
			expect(nav.classList.contains('active')).toBe(true);
			trigger('click', toggle);
			expect(toggle.classList.contains('active')).toBe(false);
			expect(nav.classList.contains('active')).toBe(false);
		});

	});


	//
	// APIs
	//

	describe('Should toggle navigation menu from public API', function () {

		var toggle, navID, nav;

		beforeEach(function () {
			injectElem();
			toggle = document.querySelector('[data-nav-toggle]');
			navID = toggle.getAttribute('data-nav-toggle');
			nav = document.querySelector( navID );
			astro.toggleNav(toggle, navID, null, null);
		});

		it('Toggle and navigation menu should have an active class', function () {
			expect(toggle.classList.contains('active')).toBe(true);
			expect(nav.classList.contains('active')).toBe(true);
		});

		it('Toggle and navigation menu should not have an active class if toggled again', function () {
			expect(toggle.classList.contains('active')).toBe(true);
			expect(nav.classList.contains('active')).toBe(true);
			astro.toggleNav(toggle, navID, null, null);
			expect(toggle.classList.contains('active')).toBe(false);
			expect(nav.classList.contains('active')).toBe(false);
		});

	});

	describe('Should remove initialized plugin', function () {

		var toggle, nav, doc;

		beforeEach(function () {
			injectElem();
			astro.init();
			toggle = document.querySelector('[data-nav-toggle]');
			nav = document.querySelector( toggle.getAttribute('data-nav-toggle') );
			doc = document.documentElement;
		});

		it('Astro should be uninitialized', function () {
			trigger('click', toggle);
			expect(toggle.classList.contains('active')).toBe(true);
			expect(nav.classList.contains('active')).toBe(true);
			expect(doc.classList.contains('js-astro')).toBe(true);
			trigger('click', toggle);
			expect(toggle.classList.contains('active')).toBe(false);
			expect(nav.classList.contains('active')).toBe(false);
			astro.destroy();
			trigger('click', toggle);
			expect(toggle.classList.contains('active')).toBe(false);
			expect(nav.classList.contains('active')).toBe(false);
			expect(doc.classList.contains('js-astro')).toBe(false);
		});

	});

});