/*!
 * Defunctr 1.3.2-beta.2
 * https://github.com/cinecove/defunctr
 *
 * Copyright 2012 - 2017 Cinecove Digital, LLC and other contributors
 * Released under the MIT license
 * https://github.com/cinecove/defunctr/blob/master/LICENSE.md
 *
 * Build Date: 2017-08-22T16:58:44.893Z
 */
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var browserWindow = window || null;
var browserDocument = browserWindow ? browserWindow.document || null : null;
var undef = void 0;

var noop = function noop() {};
var console = browserWindow && _typeof(browserWindow.console) !== undefined ? browserWindow.console : { log: noop, warn: noop, error: noop };
var log = console ? console.log || noop : noop;
var warn = console ? console.warn || log : noop;
var error = console ? console.error || log : noop;

var logger = {
  log: log,
  warn: warn,
  error: error
};

var htmlElementConstructorCheck = function () {
  return Boolean(browserWindow && browserWindow.HTMLElement && Object.prototype.toString.call(browserWindow.HTMLElement).indexOf('Constructor') > 0);
};

var safari = function () {
  return htmlElementConstructorCheck();
};


function hasOperaHeader() {
  try {
    return 'WebkitTransform' in browserDocument.documentElement.style && !!browserWindow.opr && !!browserWindow.opr.addons;
  } catch (ex) {
    return false;
  }
}

var operaNext = function () {
  return hasOperaHeader();
};

var webKitTransformCheck = function () {
  return Boolean(browserDocument && browserDocument.documentElement && browserDocument.documentElement.style && 'WebkitTransform' in browserDocument.documentElement.style);
};

var msWriteProfilerMarkCheck = function () {
  return Boolean(browserWindow && typeof browserWindow.msWriteProfilerMark !== 'undefined');
};

var installTriggerCheck = function () {
  return Boolean(browserWindow && typeof browserWindow.InstallTrigger !== 'undefined');
};

var firefox = function () {
  return installTriggerCheck();
};

var operaVersionCheck = function () {
  return Boolean(browserWindow && browserWindow.opera && browserWindow.opera.version !== undef);
};

var opera = function () {
  return operaVersionCheck();
};

var webkit = function () {
  return webKitTransformCheck() && msWriteProfilerMarkCheck() === false && !firefox() && !opera();
};

var chrome = function () {
  return !safari() && !operaNext() && webkit();
};

var activeXCheck = function () {
  return 'ActiveXObject' in browserWindow;
};

var functionalEventCheck = function () {
  return Boolean(browserWindow && browserWindow.Event && typeof browserWindow.Event === 'function');
};

var edge = function () {
  return Boolean(!activeXCheck() && functionalEventCheck() && msWriteProfilerMarkCheck());
};

var khtmlMarqueeCheck = function () {
  return Boolean(browserDocument && browserDocument.documentElement && browserDocument.documentElement.style && 'KhtmlMarquee' in browserDocument.documentElement.style);
};

var khtml = function () {
  return khtmlMarqueeCheck() && !safari();
};



var ie = function () {
  return activeXCheck();
};

var undetected = function () {
  return !webkit() && !ie() && !chrome() && !edge() && !firefox() && !opera() && !operaNext() && !safari();
};


var hasBackCompatCSS1Check = function () {
  return Boolean(browserDocument && browserDocument.compatMode && (browserDocument.compatMode === 'CSS1Compat' || browserDocument.compatMode === 'BackCompat'));
};

var isAboveVersion5 = function () {
  return ie() && hasBackCompatCSS1Check();
};

var hasXmlHttpRequestCheck = function () {
  return Boolean(browserWindow && typeof browserWindow.XMLHttpRequest !== 'undefined');
};

var isAboveVersion6 = function () {
  return ie() && hasBackCompatCSS1Check() && hasXmlHttpRequestCheck();
};

var hasQuerySelectorCheck = function () {
  return Boolean(browserDocument && typeof browserDocument.querySelector !== 'undefined');
};

var isAboveVersion7 = function () {
  return ie() && hasQuerySelectorCheck();
};

var hasAddEventListenerCheck = function () {
  return Boolean(browserDocument && typeof browserDocument.addEventListener !== 'undefined');
};

var isAboveVersion8 = function () {
  return ie() && hasAddEventListenerCheck();
};

var hasAtobCheck = function () {
  return Boolean(browserWindow && typeof browserWindow.atob !== 'undefined');
};

var isAboveVersion9 = function () {
  return ie() && hasAtobCheck();
};

var attachEventCheck = function () {
  return Boolean(browserDocument && typeof browserDocument.attachEvent !== 'undefined');
};

var isAboveVersion10 = function () {
  return ie() && hasAtobCheck() && !attachEventCheck();
};

var isAboveVersion11 = function () {
  return ie() && functionalEventCheck();
};

var hasCompatModeCheck = function () {
  return Boolean(browserDocument && typeof browserDocument.compatMode !== 'undefined');
};

var isBelowVersion6 = function () {
  return ie() && !hasCompatModeCheck();
};

var hasBackCompatCheck = function () {
  return Boolean(browserDocument && browserDocument.compatMode && browserDocument.compatMode === 'BackCompat');
};

var isBelowVersion7 = function () {
  return ie() && !hasBackCompatCheck() && !hasXmlHttpRequestCheck();
};

var isBelowVersion8 = function () {
  return ie() && !hasQuerySelectorCheck();
};

var isBelowVersion9 = function () {
  return ie() && !hasAddEventListenerCheck();
};

var isBelowVersion10 = function () {
  return ie() && !hasAtobCheck();
};

var isBelowVersion11 = function () {
  return ie() && attachEventCheck();
};

var isBelowVersion12 = function () {
  return ie() && !functionalEventCheck();
};

var isVersion6 = function () {
  return isAboveVersion5() && isBelowVersion7();
};

var isVersion7 = function () {
  return isAboveVersion6() && isBelowVersion8();
};

var isVersion8 = function () {
  return isAboveVersion7() && isBelowVersion9();
};

var isVersion9 = function () {
  return isAboveVersion8() && isBelowVersion10();
};

var isVersion10 = function () {
  return isAboveVersion9() && isBelowVersion11();
};

var isVersion11 = function () {
  return isAboveVersion10() && isBelowVersion12();
};



var ie$1 = (Object.freeze || Object)({
	isAboveVersion5: isAboveVersion5,
	isAboveVersion6: isAboveVersion6,
	isAboveVersion7: isAboveVersion7,
	isAboveVersion8: isAboveVersion8,
	isAboveVersion9: isAboveVersion9,
	isAboveVersion10: isAboveVersion10,
	isAboveVersion11: isAboveVersion11,
	isBelowVersion6: isBelowVersion6,
	isBelowVersion7: isBelowVersion7,
	isBelowVersion8: isBelowVersion8,
	isBelowVersion9: isBelowVersion9,
	isBelowVersion10: isBelowVersion10,
	isBelowVersion11: isBelowVersion11,
	isBelowVersion12: isBelowVersion12,
	isVersion6: isVersion6,
	isVersion7: isVersion7,
	isVersion8: isVersion8,
	isVersion9: isVersion9,
	isVersion10: isVersion10,
	isVersion11: isVersion11
});

var hasChromeWebstoreInstallCheck = function () {
  return Boolean(browserWindow && browserWindow.chrome && browserWindow.chrome.webstore && browserWindow.chrome.webstore.install);
};

var isAboveVersion15 = function () {
  return chrome() && hasChromeWebstoreInstallCheck();
};



var chrome$1 = (Object.freeze || Object)({
	isAboveVersion15: isAboveVersion15
});

var versions = {
  ie: ie$1,
  chrome: chrome$1
};

var Detective = function Detective() {
  classCallCheck(this, Detective);

  this.isWebKit = webkit();
  this.isOpera = opera();
  this.isIE = ie();
  this.isFirefox = firefox();
  this.isSafari = safari();
  this.isKhtml = khtml();
  this.isOperaNext = operaNext();
  this.isChrome = chrome();
  this.isEdge = edge();
  this.isUndetected = undetected();

  this.standardsCompliant = versions.ie.isAboveVersion9() || !ie();

  this.chromeIsAbove15 = versions.chrome.isAboveVersion15();

  this.ieIsVersion11 = versions.ie.isVersion11();
  this.ieIsVersion10 = versions.ie.isVersion10();
  this.ieIsVersion9 = versions.ie.isVersion9();
  this.ieIsVersion8 = versions.ie.isVersion8();
  this.ieIsVersion7 = versions.ie.isVersion7();
  this.ieIsVersion6 = versions.ie.isVersion6();

  this.ieIsBelowVersion6 = versions.ie.isBelowVersion6();
  this.ieIsBelowVersion7 = versions.ie.isBelowVersion7();
  this.ieIsBelowVersion8 = versions.ie.isBelowVersion8();
  this.ieIsBelowVersion9 = versions.ie.isBelowVersion9();
  this.ieIsBelowVersion10 = versions.ie.isBelowVersion10();
  this.ieIsBelowVersion11 = versions.ie.isBelowVersion11();
  this.ieIsBelowVersion12 = versions.ie.isBelowVersion12();

  this.ieIsAboveVersion5 = versions.ie.isAboveVersion5();
  this.ieIsAboveVersion6 = versions.ie.isAboveVersion6();
  this.ieIsAboveVersion7 = versions.ie.isAboveVersion7();
  this.ieIsAboveVersion8 = versions.ie.isAboveVersion8();
  this.ieIsAboveVersion9 = versions.ie.isAboveVersion9();
  this.ieIsAboveVersion10 = versions.ie.isAboveVersion10();
  this.ieIsAboveVersion11 = versions.ie.isAboveVersion11();
};

var classes = {
  IE: 'ie',
  CHROME: 'chrome',
  SAFARI: 'safari',
  OPERA: 'opera',
  OPERANEXT: 'opera-next',
  FIREFOX: 'firefox',
  KHTML: 'khtml',
  WEBKIT: 'webkit',
  EDGE: 'edge',
  UNKNOWN: 'undetected-browser',

  IE_LESSTHAN_6: 'ie-lt-6',
  IE_LESSTHAN_7: 'ie-lt-7',
  IE_LESSTHAN_8: 'ie-lt-8',
  IE_LESSTHAN_9: 'ie-lt-9',
  IE_LESSTHAN_10: 'ie-lt-10',
  IE_LESSTHAN_11: 'ie-lt-11',
  IE_LESSTHAN_12: 'ie-lt-12',

  IE_GREATERTHAN_6: 'ie-gt-6',
  IE_GREATERTHAN_7: 'ie-gt-7',
  IE_GREATERTHAN_8: 'ie-gt-8',
  IE_GREATERTHAN_9: 'ie-gt-9',
  IE_GREATERTHAN_10: 'ie-gt-10',
  IE_GREATERTHAN_11: 'ie-gt-11',

  IE_VERSION_6: 'ie-version-6',
  IE_VERSION_7: 'ie-version-7',
  IE_VERSION_8: 'ie-version-8',
  IE_VERSION_9: 'ie-version-9',
  IE_VERSION_10: 'ie-version-10',
  IE_VERSION_11: 'ie-version-11'
};

var tags = {
  DEFUNCTR: 'defunctr',
  VERSION_OFF: 'defunctr-version-off',
  IE_ONLY: 'defunctr-ie-only',
  IE_LESSTHAN_OFF: 'defunctr-lt-off',
  IE_GREATERTHAN_OFF: 'defunctr-gt-off',
  NOTAGGING: 'defunctr-off'
};

var prefix = '';

var prefixedClassFor = function (className) {
  return '' + prefix + className;
};

var optionalModernizr = {
  modernizr: undefined
};

if (typeof require === 'function') {
  require(['modernizr'], function (m) {
    optionalModernizr.modernizr = m;
  });
} else {
  if (browserWindow) {
    if (browserWindow.Modernizr) {
      optionalModernizr.modernizr = browserWindow.Modernizr;
    } else if (browserWindow.modernizr) {
      optionalModernizr.modernizr = browserWindow.modernizr;
    }
  }
}

var docElement = browserDocument && browserDocument.documentElement && browserDocument.documentElement.className !== undefined ? browserDocument.documentElement : { className: '' };

var Modernizr = optionalModernizr.modernizr;

function makeTest(item) {
  return function test() {
    return item;
  };
}

function test(key, test) {
  if (Modernizr) {
    Modernizr.addTest(key, test);
  } else {
    if (test()) {
      addTag(key);
    } else {
      addTag('no-' + key);
    }
  }
}

function removeTag(tag) {
  docElement.className = docElement.className.replace(new RegExp('\\b' + tag + '\\b'), '');
}

function addTag(tag) {
  if (!hasTag(tag)) {
    docElement.className += docElement.className.length > 0 ? ' ' + tag : tag;
  }
}

function hasTag(tag) {
  return docElement.className.match(new RegExp('\\b' + tag + '\\b'));
}

function tagPage(detective) {
  if (!hasTag(tags.NOTAGGING)) {
    test(prefixedClassFor(classes.IE), makeTest(detective.isIE));

    if (!hasTag(tags.IE_ONLY)) {
      test(prefixedClassFor(classes.CHROME), makeTest(detective.isChrome));
      test(prefixedClassFor(classes.SAFARI), makeTest(detective.isSafari));
      test(prefixedClassFor(classes.OPERA), makeTest(detective.isOpera));
      test(prefixedClassFor(classes.OPERANEXT), makeTest(detective.isOperaNext));
      test(prefixedClassFor(classes.FIREFOX), makeTest(detective.isFirefox));
      test(prefixedClassFor(classes.KHTML), makeTest(detective.isKhtml));
      test(prefixedClassFor(classes.WEBKIT), makeTest(detective.isWebKit));
      test(prefixedClassFor(classes.EDGE), makeTest(detective.isEdge));
      test(prefixedClassFor(classes.UNKNOWN), makeTest(detective.isUndetected));
    }

    if (!hasTag(tags.IE_LESSTHAN_OFF)) {
      test(prefixedClassFor(classes.IE_LESSTHAN_6), makeTest(detective.ieIsBelowVersion6));
      test(prefixedClassFor(classes.IE_LESSTHAN_7), makeTest(detective.ieIsBelowVersion7));
      test(prefixedClassFor(classes.IE_LESSTHAN_8), makeTest(detective.ieIsBelowVersion8));
      test(prefixedClassFor(classes.IE_LESSTHAN_9), makeTest(detective.ieIsBelowVersion9));
      test(prefixedClassFor(classes.IE_LESSTHAN_10), makeTest(detective.ieIsBelowVersion10));
      test(prefixedClassFor(classes.IE_LESSTHAN_11), makeTest(detective.ieIsBelowVersion11));
      test(prefixedClassFor(classes.IE_LESSTHAN_12), makeTest(detective.ieIsBelowVersion12));
    }

    if (!hasTag(tags.IE_GREATERTHAN_OFF)) {
      test(prefixedClassFor(classes.IE_GREATERTHAN_6), makeTest(detective.ieIsAboveVersion6));
      test(prefixedClassFor(classes.IE_GREATERTHAN_7), makeTest(detective.ieIsAboveVersion7));
      test(prefixedClassFor(classes.IE_GREATERTHAN_8), makeTest(detective.ieIsAboveVersion8));
      test(prefixedClassFor(classes.IE_GREATERTHAN_9), makeTest(detective.ieIsAboveVersion9));
      test(prefixedClassFor(classes.IE_GREATERTHAN_10), makeTest(detective.ieIsAboveVersion10));
      test(prefixedClassFor(classes.IE_GREATERTHAN_11), makeTest(detective.ieIsAboveVersion11));
    }

    if (!hasTag(tags.VERSION_OFF)) {
      test(prefixedClassFor(classes.IE_VERSION_6), makeTest(detective.ieIsVersion6));
      test(prefixedClassFor(classes.IE_VERSION_7), makeTest(detective.ieIsVersion7));
      test(prefixedClassFor(classes.IE_VERSION_8), makeTest(detective.ieIsVersion8));
      test(prefixedClassFor(classes.IE_VERSION_9), makeTest(detective.ieIsVersion9));
      test(prefixedClassFor(classes.IE_VERSION_10), makeTest(detective.ieIsVersion10));
      test(prefixedClassFor(classes.IE_VERSION_11), makeTest(detective.ieIsVersion11));
    }
  }
  cleanTags();
}

function cleanTags() {
  removeTag(tags.IE_GREATERTHAN_OFF);
  removeTag(tags.IE_LESSTHAN_OFF);
  removeTag(tags.VERSION_OFF);
  removeTag(tags.IE_ONLY);
  removeTag(tags.DEFUNCTR);
  removeTag(tags.NOTAGGING);
}

var tagger = function (detective) {
  return {
    tag: function tag() {
      if (browserDocument) {
        tagPage(detective);
      }
    }
  };
};

var Defunctr = function Defunctr() {
  classCallCheck(this, Defunctr);

  this.version = '1.3.2-beta.2';
  this.browser = function browser() {
    var d = new Detective();
    return {
      vendor: d.isChrome ? 'chrome' : d.isEdge ? 'edge' : d.isFirefox ? 'firefox' : d.isIE ? 'ie' : d.isKhtml ? 'khtml' : d.isOpera && d.isOperaNext ? 'opera' : d.isSafari ? 'safari' : 'unknown',
      version: !d.isIE ? 0 : d.ieIsBelowVersion6 ? 5 : d.ieIsVersion6 ? 6 : d.ieIsVersion7 ? 7 : d.ieIsVersion8 ? 8 : d.ieIsVersion9 ? 9 : d.ieIsVersion10 ? 10 : d.ieIsVersion11 ? 11 : d.ieIsAboveVersion11 ? 12 : 0,
      standards: d.standardsCompliant,
      detected: !d.isUndetected,
      webkit: d.isWebKit
    };
  };
};

var defunctr = new Defunctr();

try {
  Object.defineProperty(defunctr, 'detective', {
    get: function get$$1() {
      try {
        var warn = logger && logger.warn ? logger.warn : logger.log;
        warn('defunctr.detective is deprecated and will be removed in 2.0. Please use window.browser instead.');
      } catch (oe) {
      }
      return new Detective();
    },
    enumerable: true,
    configurable: true
  });
} catch (ex) {
  defunctr.detective = new Detective();
}

if (browserWindow) {
  tagger(new Detective()).tag();

  browserWindow.defunctr = defunctr;
  try {
    Object.defineProperty(browserWindow, 'Defunctr', {
      get: function get$$1() {
        try {
          var warn = logger && logger.warn ? logger.warn : logger.log;
          warn('window.Defunctr is deprecated and will be removed in 2.0. Please use window.defunctr instead.');
        } catch (oe) {
        }
        return defunctr;
      },
      enumerable: true,
      configurable: true
    });
  } catch (ex) {
    browserWindow.Defunctr = defunctr;
  }
}

export default defunctr;
