'use strict';

define('affinity-engine-web/tests/affinity-engine/stage/scenes/index/welcome.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | affinity-engine/stage/scenes/index/welcome.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'affinity-engine/stage/scenes/index/welcome.js should pass jshint.\naffinity-engine/stage/scenes/index/welcome.js: line 6, col 11, \'bedroom\' is defined but never used.\n\n1 error');
  });
});
define('affinity-engine-web/tests/app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/components/api-doc.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/api-doc.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/api-doc.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/components/doc-version-selector.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/doc-version-selector.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/doc-version-selector.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/components/dynamic-tag.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/dynamic-tag.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/dynamic-tag.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/components/engine-container.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/engine-container.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/engine-container.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/components/expanding-sidebar-section.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/expanding-sidebar-section.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/expanding-sidebar-section.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/components/expanding-sidebar.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/expanding-sidebar.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/expanding-sidebar.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/components/header-links.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/header-links.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/header-links.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/components/m-intl.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/m-intl.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/m-intl.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/components/responsive-dropdown.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/responsive-dropdown.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/responsive-dropdown.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/components/responsive-navigation-dropdown.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/responsive-navigation-dropdown.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/responsive-navigation-dropdown.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/components/section-navigator.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/section-navigator.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/section-navigator.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/controllers/application.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/formats.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | formats.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'formats.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/helpers/affinity-engine/stage/delay', ['exports', 'ember'], function (exports, _ember) {
  var Promise = _ember['default'].RSVP.Promise;
  var later = _ember['default'].run.later;

  exports['default'] = function (app) {
    var duration = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

    return new Promise(function (resolve) {
      later(function () {
        resolve();
      }, duration);
    });
  };
});
define('affinity-engine-web/tests/helpers/affinity-engine/stage/register-test-helpers', ['exports', 'ember', 'affinity-engine-web/tests/helpers/affinity-engine/stage/delay', 'affinity-engine-web/tests/helpers/affinity-engine/stage/step'], function (exports, _ember, _affinityEngineWebTestsHelpersAffinityEngineStageDelay, _affinityEngineWebTestsHelpersAffinityEngineStageStep) {
  exports['default'] = function () {
    _ember['default'].Test.registerAsyncHelper('delay', _affinityEngineWebTestsHelpersAffinityEngineStageDelay['default']);
    _ember['default'].Test.registerAsyncHelper('step', _affinityEngineWebTestsHelpersAffinityEngineStageStep['default']);
  };
});
define('affinity-engine-web/tests/helpers/affinity-engine/stage/step', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = function (app, duration) {
    triggerEvent(document, 'keyup', {
      keyCode: 32,
      which: 32,
      altKey: true,
      ctrlKey: true,
      shiftKey: true
    });

    return delay(duration);
  };
});
define('affinity-engine-web/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('affinity-engine-web/tests/helpers/destroy-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/helpers/ember-basic-dropdown', ['exports', 'ember', 'ember-runloop'], function (exports, _ember, _emberRunloop) {
  exports.nativeClick = nativeClick;
  exports.clickTrigger = clickTrigger;
  exports.tapTrigger = tapTrigger;
  exports.fireKeydown = fireKeydown;

  // integration helpers
  function focus(el) {
    if (!el) {
      return;
    }
    var $el = jQuery(el);
    if ($el.is(':input, [contenteditable=true]')) {
      var type = $el.prop('type');
      if (type !== 'checkbox' && type !== 'radio' && type !== 'hidden') {
        (0, _emberRunloop['default'])(null, function () {
          // Firefox does not trigger the `focusin` event if the window
          // does not have focus. If the document doesn't have focus just
          // use trigger('focusin') instead.

          if (!document.hasFocus || document.hasFocus()) {
            el.focus();
          } else {
            $el.trigger('focusin');
          }
        });
      }
    }
  }

  function nativeClick(selector) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var mousedown = new window.Event('mousedown', { bubbles: true, cancelable: true, view: window });
    var mouseup = new window.Event('mouseup', { bubbles: true, cancelable: true, view: window });
    var click = new window.Event('click', { bubbles: true, cancelable: true, view: window });
    Object.keys(options).forEach(function (key) {
      mousedown[key] = options[key];
      mouseup[key] = options[key];
      click[key] = options[key];
    });
    var element = document.querySelector(selector);
    (0, _emberRunloop['default'])(function () {
      return element.dispatchEvent(mousedown);
    });
    focus(element);
    (0, _emberRunloop['default'])(function () {
      return element.dispatchEvent(mouseup);
    });
    (0, _emberRunloop['default'])(function () {
      return element.dispatchEvent(click);
    });
  }

  function clickTrigger(scope) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var selector = '.ember-basic-dropdown-trigger';
    if (scope) {
      selector = scope + ' ' + selector;
    }
    nativeClick(selector, options);
  }

  function tapTrigger(scope) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var selector = '.ember-basic-dropdown-trigger';
    if (scope) {
      selector = scope + ' ' + selector;
    }
    var touchStartEvent = new window.Event('touchstart', { bubbles: true, cancelable: true, view: window });
    Object.keys(options).forEach(function (key) {
      return touchStartEvent[key] = options[key];
    });
    (0, _emberRunloop['default'])(function () {
      return document.querySelector(selector).dispatchEvent(touchStartEvent);
    });
    var touchEndEvent = new window.Event('touchend', { bubbles: true, cancelable: true, view: window });
    Object.keys(options).forEach(function (key) {
      return touchEndEvent[key] = options[key];
    });
    (0, _emberRunloop['default'])(function () {
      return document.querySelector(selector).dispatchEvent(touchEndEvent);
    });
  }

  function fireKeydown(selector, k) {
    var oEvent = document.createEvent('Events');
    oEvent.initEvent('keydown', true, true);
    $.extend(oEvent, {
      view: window,
      ctrlKey: false,
      altKey: false,
      shiftKey: false,
      metaKey: false,
      keyCode: k,
      charCode: k
    });
    (0, _emberRunloop['default'])(function () {
      return document.querySelector(selector).dispatchEvent(oEvent);
    });
  }

  // acceptance helpers

  exports['default'] = function () {
    _ember['default'].Test.registerAsyncHelper('clickDropdown', function (app, cssPath) {
      var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

      clickTrigger(cssPath, options);
    });

    _ember['default'].Test.registerAsyncHelper('tapDropdown', function (app, cssPath) {
      var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

      tapTrigger(cssPath, options);
    });
  };
});
define('affinity-engine-web/tests/helpers/ember-keyboard/register-test-helpers', ['exports', 'ember', 'ember-keyboard', 'ember-keyboard/fixtures/modifiers-array', 'ember-keyboard/utils/get-cmd-key'], function (exports, _ember, _emberKeyboard, _emberKeyboardFixturesModifiersArray, _emberKeyboardUtilsGetCmdKey) {

  var keyEvent = function keyEvent(app, attributes, type, element) {
    var event = attributes.split('+').reduce(function (event, attribute) {
      if (_emberKeyboardFixturesModifiersArray['default'].indexOf(attribute) > -1) {
        attribute = attribute === 'cmd' ? (0, _emberKeyboardUtilsGetCmdKey['default'])() : attribute;
        event[attribute + 'Key'] = true;
      } else {
        event.keyCode = (0, _emberKeyboard.getKeyCode)(attribute);
      }

      return event;
    }, {});

    return app.testHelpers.triggerEvent(element || document, type, event);
  };

  exports['default'] = function () {
    _ember['default'].Test.registerAsyncHelper('keyDown', function (app, attributes, element) {
      return keyEvent(app, attributes, 'keydown', element);
    });

    _ember['default'].Test.registerAsyncHelper('keyUp', function (app, attributes, element) {
      return keyEvent(app, attributes, 'keyup', element);
    });

    _ember['default'].Test.registerAsyncHelper('keyPress', function (app, attributes, element) {
      return keyEvent(app, attributes, 'keypress', element);
    });
  };
});
define('affinity-engine-web/tests/helpers/ember-power-select', ['exports', 'jquery', 'ember-runloop', 'ember-test'], function (exports, _jquery, _emberRunloop, _emberTest) {
  exports.nativeMouseDown = nativeMouseDown;
  exports.nativeMouseUp = nativeMouseUp;
  exports.triggerKeydown = triggerKeydown;
  exports.typeInSearch = typeInSearch;
  exports.clickTrigger = clickTrigger;
  exports.nativeTouch = nativeTouch;
  exports.touchTrigger = touchTrigger;

  // Helpers for integration tests

  function typeText(selector, text) {
    var $selector = (0, _jquery['default'])((0, _jquery['default'])(selector).get(0)); // Only interact with the first result
    $selector.val(text);
    var event = document.createEvent('Events');
    event.initEvent('input', true, true);
    $selector[0].dispatchEvent(event);
  }

  function fireNativeMouseEvent(eventType, selectorOrDomElement) {
    var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    var event = undefined;
    try {
      event = new window.Event(eventType, { bubbles: true, cancelable: true, view: window });
    } catch (e) {
      // fix IE11: "Object doesn't support this action"
      event = document.createEvent('Event');
      var bubbles = true;
      var cancelable = true;
      event.initEvent(eventType, bubbles, cancelable);
    }

    Object.keys(options).forEach(function (key) {
      return event[key] = options[key];
    });
    var target = undefined;
    if (typeof selectorOrDomElement === 'string') {
      target = (0, _jquery['default'])(selectorOrDomElement)[0];
    } else {
      target = selectorOrDomElement;
    }
    (0, _emberRunloop['default'])(function () {
      return target.dispatchEvent(event);
    });
  }

  function nativeMouseDown(selectorOrDomElement, options) {
    fireNativeMouseEvent('mousedown', selectorOrDomElement, options);
  }

  function nativeMouseUp(selectorOrDomElement, options) {
    fireNativeMouseEvent('mouseup', selectorOrDomElement, options);
  }

  function triggerKeydown(domElement, k) {
    var oEvent = document.createEvent('Events');
    oEvent.initEvent('keydown', true, true);
    _jquery['default'].extend(oEvent, {
      view: window,
      ctrlKey: false,
      altKey: false,
      shiftKey: false,
      metaKey: false,
      keyCode: k,
      charCode: k
    });
    (0, _emberRunloop['default'])(function () {
      domElement.dispatchEvent(oEvent);
    });
  }

  function typeInSearch(text) {
    (0, _emberRunloop['default'])(function () {
      typeText('.ember-power-select-search-input, .ember-power-select-search input, .ember-power-select-trigger-multiple-input, input[type="search"]', text);
    });
  }

  function clickTrigger(scope) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var selector = '.ember-power-select-trigger';
    if (scope) {
      selector = scope + ' ' + selector;
    }
    nativeMouseDown(selector, options);
  }

  function nativeTouch(selectorOrDomElement) {
    var event = new window.Event('touchstart', { bubbles: true, cancelable: true, view: window });
    var target = undefined;

    if (typeof selectorOrDomElement === 'string') {
      target = (0, _jquery['default'])(selectorOrDomElement)[0];
    } else {
      target = selectorOrDomElement;
    }
    (0, _emberRunloop['default'])(function () {
      return target.dispatchEvent(event);
    });
    (0, _emberRunloop['default'])(function () {
      event = new window.Event('touchend', { bubbles: true, cancelable: true, view: window });
      target.dispatchEvent(event);
    });
  }

  function touchTrigger() {
    var selector = '.ember-power-select-trigger';
    nativeTouch(selector);
  }

  // Helpers for acceptance tests

  exports['default'] = function () {
    _emberTest['default'].registerAsyncHelper('selectChoose', function (app, cssPath, valueOrSelector) {
      var $trigger = find(cssPath + ' .ember-power-select-trigger');

      if ($trigger === undefined || $trigger.length === 0) {
        $trigger = find(cssPath);
      }

      if ($trigger.length === 0) {
        throw new Error('You called "selectChoose(\'' + cssPath + '\', \'' + valueOrSelector + '\')" but no select was found using selector "' + cssPath + '"');
      }

      var contentId = '' + $trigger.attr('aria-controls');
      var $content = find('#' + contentId);
      // If the dropdown is closed, open it
      if ($content.length === 0) {
        nativeMouseDown($trigger.get(0));
        wait();
      }

      // Select the option with the given text
      andThen(function () {
        var potentialTargets = (0, _jquery['default'])('#' + contentId + ' .ember-power-select-option:contains("' + valueOrSelector + '")').toArray();
        var target = undefined;
        if (potentialTargets.length === 0) {
          // If treating the value as text doesn't gave use any result, let's try if it's a css selector
          potentialTargets = (0, _jquery['default'])('#' + contentId + ' ' + valueOrSelector).toArray();
        }
        if (potentialTargets.length > 1) {
          target = potentialTargets.filter(function (t) {
            return t.textContent.trim() === valueOrSelector;
          })[0] || potentialTargets[0];
        } else {
          target = potentialTargets[0];
        }
        if (!target) {
          throw new Error('You called "selectChoose(\'' + cssPath + '\', \'' + valueOrSelector + '\')" but "' + valueOrSelector + '" didn\'t match any option');
        }
        nativeMouseUp(target);
      });
    });

    _emberTest['default'].registerAsyncHelper('selectSearch', function (app, cssPath, value) {
      var triggerPath = cssPath + ' .ember-power-select-trigger';
      var $trigger = find(triggerPath);
      if ($trigger === undefined || $trigger.length === 0) {
        triggerPath = cssPath;
        $trigger = find(triggerPath);
      }

      if ($trigger.length === 0) {
        throw new Error('You called "selectSearch(\'' + cssPath + '\', \'' + value + '\')" but no select was found using selector "' + cssPath + '"');
      }

      var contentId = '' + $trigger.attr('aria-controls');
      var isMultipleSelect = (0, _jquery['default'])(cssPath + ' .ember-power-select-trigger-multiple-input').length > 0;

      var dropdownIsClosed = (0, _jquery['default'])('#' + contentId).length === 0;
      if (dropdownIsClosed) {
        nativeMouseDown(triggerPath);
        wait();
      }
      var isDefaultSingleSelect = (0, _jquery['default'])('.ember-power-select-search-input').length > 0;

      if (isMultipleSelect) {
        fillIn(triggerPath + ' .ember-power-select-trigger-multiple-input', value);
      } else if (isDefaultSingleSelect) {
        fillIn('.ember-power-select-search-input', value);
      } else {
        // It's probably a customized version
        var inputIsInTrigger = !!find(cssPath + ' .ember-power-select-trigger input[type=search]')[0];
        if (inputIsInTrigger) {
          fillIn(triggerPath + ' input[type=search]', value);
        } else {
          fillIn('#' + contentId + ' .ember-power-select-search-input[type=search]', 'input');
        }
      }
    });

    _emberTest['default'].registerAsyncHelper('removeMultipleOption', function (app, cssPath, value) {
      var elem = find(cssPath + ' .ember-power-select-multiple-options > li:contains(' + value + ') > .ember-power-select-multiple-remove-btn').get(0);
      try {
        nativeMouseDown(elem);
        wait();
      } catch (e) {
        console.warn('css path to remove btn not found');
        throw e;
      }
    });

    _emberTest['default'].registerAsyncHelper('clearSelected', function (app, cssPath) {
      var elem = find(cssPath + ' .ember-power-select-clear-btn').get(0);
      try {
        nativeMouseDown(elem);
        wait();
      } catch (e) {
        console.warn('css path to clear btn not found');
        throw e;
      }
    });
  };
});
define('affinity-engine-web/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'affinity-engine-web/tests/helpers/start-app', 'affinity-engine-web/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _affinityEngineWebTestsHelpersStartApp, _affinityEngineWebTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _affinityEngineWebTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _affinityEngineWebTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('affinity-engine-web/tests/helpers/module-for-acceptance.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/helpers/resolver', ['exports', 'affinity-engine-web/resolver', 'affinity-engine-web/config/environment'], function (exports, _affinityEngineWebResolver, _affinityEngineWebConfigEnvironment) {

  var resolver = _affinityEngineWebResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _affinityEngineWebConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _affinityEngineWebConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('affinity-engine-web/tests/helpers/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/helpers/start-app', ['exports', 'ember', 'affinity-engine-web/app', 'affinity-engine-web/config/environment'], function (exports, _ember, _affinityEngineWebApp, _affinityEngineWebConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    // use defaults, but you can override
    var attributes = _ember['default'].assign({}, _affinityEngineWebConfigEnvironment['default'].APP, attrs);

    _ember['default'].run(function () {
      application = _affinityEngineWebApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('affinity-engine-web/tests/helpers/start-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/instance-initializers/inject-guides.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | instance-initializers/inject-guides.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'instance-initializers/inject-guides.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/integration/components/api-doc-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('api-doc', 'Integration | Component | api doc', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': '9dJIn6xL',
      'block': '{"statements":[["append",["unknown",["api-doc"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'ws+jX/M9',
      'block': '{"statements":[["text","\\n"],["block",["api-doc"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('affinity-engine-web/tests/integration/components/api-doc-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/api-doc-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/api-doc-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/integration/components/doc-version-selector-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('doc-version-selector', 'Integration | Component | doc version selector', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'zr5GqiNO',
      'block': '{"statements":[["append",["unknown",["doc-version-selector"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'UDWbZG7z',
      'block': '{"statements":[["text","\\n"],["block",["doc-version-selector"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('affinity-engine-web/tests/integration/components/doc-version-selector-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/doc-version-selector-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/doc-version-selector-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/integration/components/dynamic-tag-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('dynamic-tag', 'Integration | Component | dynamic tag', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'MrHVUpPD',
      'block': '{"statements":[["append",["unknown",["dynamic-tag"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'se6AKzmo',
      'block': '{"statements":[["text","\\n"],["block",["dynamic-tag"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('affinity-engine-web/tests/integration/components/dynamic-tag-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/dynamic-tag-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/dynamic-tag-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/integration/components/engine-container-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('engine-container', 'Integration | Component | engine container', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'BjZgugs+',
      'block': '{"statements":[["append",["unknown",["engine-container"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'qEY4PsLP',
      'block': '{"statements":[["text","\\n"],["block",["engine-container"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('affinity-engine-web/tests/integration/components/engine-container-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/engine-container-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/engine-container-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/integration/components/expanding-sidebar-section-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('expanding-sidebar-section', 'Integration | Component | expanding sidebar section', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'dCoqKa0a',
      'block': '{"statements":[["append",["unknown",["expanding-sidebar-section"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');
  });
});
define('affinity-engine-web/tests/integration/components/expanding-sidebar-section-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/expanding-sidebar-section-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/expanding-sidebar-section-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/integration/components/expanding-sidebar-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('expanding-sidebar', 'Integration | Component | expanding sidebar', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'rGVNgxJP',
      'block': '{"statements":[["append",["unknown",["expanding-sidebar"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.ok(true);
  });
});
define('affinity-engine-web/tests/integration/components/expanding-sidebar-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/expanding-sidebar-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/expanding-sidebar-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/integration/components/header-links-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('header-links', 'Integration | Component | header links', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'pDU/bdu4',
      'block': '{"statements":[["append",["unknown",["header-links"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');
  });
});
define('affinity-engine-web/tests/integration/components/header-links-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/header-links-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/header-links-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/integration/components/m-intl-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('m-intl', 'Integration | Component | m intl', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'am6hAE5l',
      'block': '{"statements":[["append",["unknown",["m-intl"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'f+TaM9r/',
      'block': '{"statements":[["text","\\n"],["block",["m-intl"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('affinity-engine-web/tests/integration/components/m-intl-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/m-intl-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/m-intl-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/integration/components/responsive-dropdown-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('responsive-dropdown', 'Integration | Component | responsive dropdown', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'veS+UfpD',
      'block': '{"statements":[["append",["unknown",["responsive-dropdown"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'lfmdsRM0',
      'block': '{"statements":[["text","\\n"],["block",["responsive-dropdown"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('affinity-engine-web/tests/integration/components/responsive-dropdown-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/responsive-dropdown-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/responsive-dropdown-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/integration/components/responsive-navigation-dropdown-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('responsive-navigation-dropdown', 'Integration | Component | responsive navigation dropdown', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'Lxvvl/qE',
      'block': '{"statements":[["append",["unknown",["responsive-navigation-dropdown"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.ok(true);
  });
});
define('affinity-engine-web/tests/integration/components/responsive-navigation-dropdown-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/responsive-navigation-dropdown-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/responsive-navigation-dropdown-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/integration/components/section-navigator-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('section-navigator', 'Integration | Component | section navigator', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'NQAfuk5T',
      'block': '{"statements":[["append",["unknown",["section-navigator"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.ok(true);
  });
});
define('affinity-engine-web/tests/integration/components/section-navigator-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/section-navigator-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/section-navigator-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/mixins/reset-scroll.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | mixins/reset-scroll.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/reset-scroll.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/mixins/route-title.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | mixins/route-title.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/route-title.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/mixins/sidebar-route.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | mixins/sidebar-route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/sidebar-route.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/router.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/application.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/components.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/components.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/components.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/components/curtain.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/components/curtain.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/components/curtain.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/components/curtain/index.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/components/curtain/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/components/curtain/index.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/components/menu-bar.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/components/menu-bar.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/components/menu-bar.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/components/menu-bar/index.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/components/menu-bar/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/components/menu-bar/index.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/components/stage.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/components/stage.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/components/stage.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/components/stage/directions.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/components/stage/directions.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/components/stage/directions.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/components/stage/directions/backdrop.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/components/stage/directions/backdrop.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/components/stage/directions/backdrop.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/components/stage/directions/character.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/components/stage/directions/character.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/components/stage/directions/character.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/components/stage/directions/image.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/components/stage/directions/image.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/components/stage/directions/image.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/components/stage/directions/index.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/components/stage/directions/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/components/stage/directions/index.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/components/stage/directions/layer.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/components/stage/directions/layer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/components/stage/directions/layer.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/components/stage/directions/menu.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/components/stage/directions/menu.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/components/stage/directions/menu.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/components/stage/directions/pause.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/components/stage/directions/pause.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/components/stage/directions/pause.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/components/stage/directions/random.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/components/stage/directions/random.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/components/stage/directions/random.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/components/stage/directions/scene.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/components/stage/directions/scene.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/components/stage/directions/scene.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/components/stage/directions/sound.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/components/stage/directions/sound.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/components/stage/directions/sound.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/components/stage/directions/text.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/components/stage/directions/text.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/components/stage/directions/text.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/components/stage/index.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/components/stage/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/components/stage/index.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/components/stage/scenes.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/components/stage/scenes.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/components/stage/scenes.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/components/stage/scenes/data.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/components/stage/scenes/data.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/components/stage/scenes/data.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/components/stage/scenes/index.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/components/stage/scenes/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/components/stage/scenes/index.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/components/stage/usage.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/components/stage/usage.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/components/stage/usage.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/engine.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/engine.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/engine.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/engine/configuration.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/engine/configuration.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/engine/configuration.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/engine/configuration/configuration-tiers.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/engine/configuration/configuration-tiers.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/engine/configuration/configuration-tiers.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/engine/configuration/defaults.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/engine/configuration/defaults.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/engine/configuration/defaults.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/engine/configuration/index.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/engine/configuration/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/engine/configuration/index.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/engine/configuration/usage.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/engine/configuration/usage.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/engine/configuration/usage.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/engine/fixtures.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/engine/fixtures.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/engine/fixtures.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/engine/fixtures/backdrops.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/engine/fixtures/backdrops.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/engine/fixtures/backdrops.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/engine/fixtures/characters.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/engine/fixtures/characters.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/engine/fixtures/characters.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/engine/fixtures/images.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/engine/fixtures/images.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/engine/fixtures/images.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/engine/fixtures/index.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/engine/fixtures/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/engine/fixtures/index.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/engine/fixtures/keyframes.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/engine/fixtures/keyframes.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/engine/fixtures/keyframes.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/engine/usage.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/engine/usage.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/engine/usage.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/index.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/overview.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/overview.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/overview.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/overview/components.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/overview/components.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/overview/components.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/overview/fixtures.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/overview/fixtures.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/overview/fixtures.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/overview/fixtures/index.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/overview/fixtures/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/overview/fixtures/index.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/overview/installation.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/overview/installation.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/overview/installation.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/overview/installation/affinity-engine.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/overview/installation/affinity-engine.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/overview/installation/affinity-engine.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/overview/installation/ember.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/overview/installation/ember.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/overview/installation/ember.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/overview/installation/index.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/overview/installation/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/overview/installation/index.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/overview/installation/quickstarts.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/overview/installation/quickstarts.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/overview/installation/quickstarts.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/overview/installation/tooling.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/overview/installation/tooling.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/overview/installation/tooling.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/overview/plugins.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/overview/plugins.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/overview/plugins.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/plugins.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/plugins.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/plugins.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/welcome.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/welcome.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/welcome.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/welcome/acknowledgements.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/welcome/acknowledgements.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/welcome/acknowledgements.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/welcome/how-to-use-this-documentation.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/welcome/how-to-use-this-documentation.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/welcome/how-to-use-this-documentation.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/welcome/index.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/welcome/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/welcome/index.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/services/doc-version-tracker.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | services/doc-version-tracker.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/doc-version-tracker.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/services/route-sequencer.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | services/route-sequencer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/route-sequencer.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/test-helper', ['exports', 'affinity-engine-web/tests/helpers/resolver', 'ember-qunit'], function (exports, _affinityEngineWebTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_affinityEngineWebTestsHelpersResolver['default']);
});
define('affinity-engine-web/tests/test-helper.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/transitions.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | transitions.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transitions.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/unit/instance-initializers/inject-guides-test', ['exports', 'ember', 'affinity-engine-web/instance-initializers/inject-guides', 'qunit', 'affinity-engine-web/tests/helpers/destroy-app'], function (exports, _ember, _affinityEngineWebInstanceInitializersInjectGuides, _qunit, _affinityEngineWebTestsHelpersDestroyApp) {

  (0, _qunit.module)('Unit | Instance Initializer | inject guides', {
    beforeEach: function beforeEach() {
      var _this = this;

      _ember['default'].run(function () {
        _this.application = _ember['default'].Application.create();
        _this.appInstance = _this.application.buildInstance();
      });
    },
    afterEach: function afterEach() {
      _ember['default'].run(this.appInstance, 'destroy');
      (0, _affinityEngineWebTestsHelpersDestroyApp['default'])(this.application);
    }
  });

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    (0, _affinityEngineWebInstanceInitializersInjectGuides.initialize)(this.appInstance);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });
});
define('affinity-engine-web/tests/unit/instance-initializers/inject-guides-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/instance-initializers/inject-guides-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/instance-initializers/inject-guides-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/unit/mixins/reset-scroll-test', ['exports', 'ember', 'affinity-engine-web/mixins/reset-scroll', 'qunit'], function (exports, _ember, _affinityEngineWebMixinsResetScroll, _qunit) {

  (0, _qunit.module)('Unit | Mixin | reset scroll');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var ResetScrollObject = _ember['default'].Object.extend(_affinityEngineWebMixinsResetScroll['default']);
    var subject = ResetScrollObject.create();
    assert.ok(subject);
  });
});
define('affinity-engine-web/tests/unit/mixins/reset-scroll-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/mixins/reset-scroll-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/mixins/reset-scroll-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/unit/mixins/route-title-test', ['exports', 'ember', 'affinity-engine-web/mixins/route-title', 'qunit'], function (exports, _ember, _affinityEngineWebMixinsRouteTitle, _qunit) {

  (0, _qunit.module)('Unit | Mixin | route title');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var RouteTitleObject = _ember['default'].Object.extend(_affinityEngineWebMixinsRouteTitle['default']);
    var subject = RouteTitleObject.create();
    assert.ok(subject);
  });
});
define('affinity-engine-web/tests/unit/mixins/route-title-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/mixins/route-title-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/mixins/route-title-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/unit/mixins/sidebar-route-test', ['exports', 'ember', 'affinity-engine-web/mixins/sidebar-route', 'qunit'], function (exports, _ember, _affinityEngineWebMixinsSidebarRoute, _qunit) {

  (0, _qunit.module)('Unit | Mixin | sidebar route');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var SidebarRouteObject = _ember['default'].Object.extend(_affinityEngineWebMixinsSidebarRoute['default']);
    var subject = SidebarRouteObject.create();
    assert.ok(subject);
  });
});
define('affinity-engine-web/tests/unit/mixins/sidebar-route-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/mixins/sidebar-route-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/mixins/sidebar-route-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/unit/routes/components-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:components', 'Unit | Route | components', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('affinity-engine-web/tests/unit/routes/components-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/components-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/components-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/unit/routes/components/curtain-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:components/curtain', 'Unit | Route | components/curtain', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('affinity-engine-web/tests/unit/routes/components/curtain-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/components/curtain-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/components/curtain-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/unit/routes/components/curtain/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:components/curtain/index', 'Unit | Route | components/curtain/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('affinity-engine-web/tests/unit/routes/components/curtain/index-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/components/curtain/index-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/components/curtain/index-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/unit/routes/components/menu-bar-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:components/menu-bar', 'Unit | Route | components/menu bar', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('affinity-engine-web/tests/unit/routes/components/menu-bar-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/components/menu-bar-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/components/menu-bar-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/unit/routes/components/menu-bar/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:components/menu-bar/index', 'Unit | Route | components/menu bar/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('affinity-engine-web/tests/unit/routes/components/menu-bar/index-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/components/menu-bar/index-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/components/menu-bar/index-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/unit/routes/components/stage-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:components/stage', 'Unit | Route | components/stage', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('affinity-engine-web/tests/unit/routes/components/stage-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/components/stage-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/components/stage-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/unit/routes/components/stage/directions-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:components/stage/directions', 'Unit | Route | components/stage/directions', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('affinity-engine-web/tests/unit/routes/components/stage/directions-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/components/stage/directions-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/components/stage/directions-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/unit/routes/components/stage/directions/backdrop-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:components/stage/directions/backdrop', 'Unit | Route | components/stage/directions/backdrop', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('affinity-engine-web/tests/unit/routes/components/stage/directions/backdrop-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/components/stage/directions/backdrop-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/components/stage/directions/backdrop-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/unit/routes/components/stage/directions/character-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:components/stage/directions/character', 'Unit | Route | components/stage/directions/character', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('affinity-engine-web/tests/unit/routes/components/stage/directions/character-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/components/stage/directions/character-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/components/stage/directions/character-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/unit/routes/components/stage/directions/data-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:components/stage/directions/data', 'Unit | Route | components/stage/directions/data', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('affinity-engine-web/tests/unit/routes/components/stage/directions/data-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/components/stage/directions/data-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/components/stage/directions/data-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/unit/routes/components/stage/directions/image-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:components/stage/directions/image', 'Unit | Route | components/stage/directions/image', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('affinity-engine-web/tests/unit/routes/components/stage/directions/image-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/components/stage/directions/image-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/components/stage/directions/image-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/unit/routes/components/stage/directions/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:components/stage/directions/index', 'Unit | Route | components/stage/directions/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('affinity-engine-web/tests/unit/routes/components/stage/directions/index-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/components/stage/directions/index-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/components/stage/directions/index-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/unit/routes/components/stage/directions/layer-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:components/stage/directions/layer', 'Unit | Route | components/stage/directions/layer', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('affinity-engine-web/tests/unit/routes/components/stage/directions/layer-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/components/stage/directions/layer-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/components/stage/directions/layer-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/unit/routes/components/stage/directions/menu-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:components/stage/directions/menu', 'Unit | Route | components/stage/directions/menu', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('affinity-engine-web/tests/unit/routes/components/stage/directions/menu-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/components/stage/directions/menu-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/components/stage/directions/menu-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/unit/routes/components/stage/directions/pause-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:components/stage/directions/pause', 'Unit | Route | components/stage/directions/pause', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('affinity-engine-web/tests/unit/routes/components/stage/directions/pause-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/components/stage/directions/pause-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/components/stage/directions/pause-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/unit/routes/components/stage/directions/random-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:components/stage/directions/random', 'Unit | Route | components/stage/directions/random', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('affinity-engine-web/tests/unit/routes/components/stage/directions/random-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/components/stage/directions/random-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/components/stage/directions/random-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/unit/routes/components/stage/directions/scene-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:components/stage/directions/scene', 'Unit | Route | components/stage/directions/scene', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('affinity-engine-web/tests/unit/routes/components/stage/directions/scene-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/components/stage/directions/scene-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/components/stage/directions/scene-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/unit/routes/components/stage/directions/sound-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:components/stage/directions/sound', 'Unit | Route | components/stage/directions/sound', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('affinity-engine-web/tests/unit/routes/components/stage/directions/sound-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/components/stage/directions/sound-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/components/stage/directions/sound-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/unit/routes/components/stage/directions/text-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:components/stage/directions/text', 'Unit | Route | components/stage/directions/text', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('affinity-engine-web/tests/unit/routes/components/stage/directions/text-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/components/stage/directions/text-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/components/stage/directions/text-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/unit/routes/components/stage/fixtures-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:components/stage/fixtures', 'Unit | Route | components/stage/fixtures', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('affinity-engine-web/tests/unit/routes/components/stage/fixtures-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/components/stage/fixtures-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/components/stage/fixtures-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/unit/routes/components/stage/fixtures/backdrops-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:components/stage/fixtures/backdrops', 'Unit | Route | components/stage/fixtures/backdrops', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('affinity-engine-web/tests/unit/routes/components/stage/fixtures/backdrops-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/components/stage/fixtures/backdrops-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/components/stage/fixtures/backdrops-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/unit/routes/components/stage/fixtures/characters-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:components/stage/fixtures/characters', 'Unit | Route | components/stage/fixtures/characters', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('affinity-engine-web/tests/unit/routes/components/stage/fixtures/characters-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/components/stage/fixtures/characters-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/components/stage/fixtures/characters-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/unit/routes/components/stage/fixtures/images-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:components/stage/fixtures/images', 'Unit | Route | components/stage/fixtures/images', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('affinity-engine-web/tests/unit/routes/components/stage/fixtures/images-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/components/stage/fixtures/images-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/components/stage/fixtures/images-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/unit/routes/components/stage/fixtures/keyframes-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:components/stage/fixtures/keyframes', 'Unit | Route | components/stage/fixtures/keyframes', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('affinity-engine-web/tests/unit/routes/components/stage/fixtures/keyframes-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/components/stage/fixtures/keyframes-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/components/stage/fixtures/keyframes-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/unit/routes/components/stage/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:components/stage/index', 'Unit | Route | components/stage/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('affinity-engine-web/tests/unit/routes/components/stage/index-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/components/stage/index-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/components/stage/index-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/unit/routes/components/stage/scenes-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:components/stage/scenes', 'Unit | Route | components/stage/scenes', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('affinity-engine-web/tests/unit/routes/components/stage/scenes-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/components/stage/scenes-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/components/stage/scenes-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/unit/routes/components/stage/scenes/data-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:components/stage/scenes/data', 'Unit | Route | components/stage/scenes/data', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('affinity-engine-web/tests/unit/routes/components/stage/scenes/data-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/components/stage/scenes/data-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/components/stage/scenes/data-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/unit/routes/components/stage/scenes/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:components/stage/scenes/index', 'Unit | Route | components/stage/scenes/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('affinity-engine-web/tests/unit/routes/components/stage/scenes/index-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/components/stage/scenes/index-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/components/stage/scenes/index-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/unit/routes/components/stage/usage-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:components/stage/usage', 'Unit | Route | components/stage/usage', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('affinity-engine-web/tests/unit/routes/components/stage/usage-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/components/stage/usage-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/components/stage/usage-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/unit/routes/engine/fixtures/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:engine/fixtures/index', 'Unit | Route | engine/fixtures/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('affinity-engine-web/tests/unit/routes/engine/fixtures/index-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/engine/fixtures/index-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/engine/fixtures/index-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/unit/routes/engine/installation/quickstarts-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:engine/installation/quickstarts', 'Unit | Route | engine/installation/quickstarts', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('affinity-engine-web/tests/unit/routes/engine/installation/quickstarts-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/engine/installation/quickstarts-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/engine/installation/quickstarts-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/unit/routes/overview-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:overview', 'Unit | Route | overview', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('affinity-engine-web/tests/unit/routes/overview-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/overview-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/overview-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/unit/routes/overview/configuration-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:overview/configuration', 'Unit | Route | overview/configuration', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('affinity-engine-web/tests/unit/routes/overview/configuration-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/overview/configuration-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/overview/configuration-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/unit/routes/overview/configuration/configuration-tiers-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:overview/configuration/configuration-tiers', 'Unit | Route | overview/configuration/configuration tiers', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('affinity-engine-web/tests/unit/routes/overview/configuration/configuration-tiers-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/overview/configuration/configuration-tiers-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/overview/configuration/configuration-tiers-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/unit/routes/overview/configuration/defaults-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:overview/configuration/defaults', 'Unit | Route | overview/configuration/defaults', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('affinity-engine-web/tests/unit/routes/overview/configuration/defaults-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/overview/configuration/defaults-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/overview/configuration/defaults-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/unit/routes/overview/configuration/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:overview/configuration/index', 'Unit | Route | overview/configuration/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('affinity-engine-web/tests/unit/routes/overview/configuration/index-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/overview/configuration/index-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/overview/configuration/index-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/unit/routes/overview/configuration/usage-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:overview/configuration/usage', 'Unit | Route | overview/configuration/usage', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('affinity-engine-web/tests/unit/routes/overview/configuration/usage-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/overview/configuration/usage-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/overview/configuration/usage-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/unit/routes/welcome-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:welcome', 'Unit | Route | welcome', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('affinity-engine-web/tests/unit/routes/welcome-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/welcome-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/welcome-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/unit/routes/welcome/acknowledgements-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:welcome/acknowledgements', 'Unit | Route | welcome/acknowledgements', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('affinity-engine-web/tests/unit/routes/welcome/acknowledgements-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/welcome/acknowledgements-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/welcome/acknowledgements-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/unit/routes/welcome/how-to-use-this-documentation-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:welcome/how-to-use-this-documentation', 'Unit | Route | welcome/how to use this documentation', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('affinity-engine-web/tests/unit/routes/welcome/how-to-use-this-documentation-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/welcome/how-to-use-this-documentation-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/welcome/how-to-use-this-documentation-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/unit/routes/welcome/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:welcome/index', 'Unit | Route | welcome/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('affinity-engine-web/tests/unit/routes/welcome/index-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/welcome/index-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/welcome/index-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/unit/services/doc-version-tracker-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:doc-version-tracker', 'Unit | Service | doc version tracker', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('affinity-engine-web/tests/unit/services/doc-version-tracker-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/services/doc-version-tracker-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/doc-version-tracker-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/unit/services/route-sequencer-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:route-sequencer', 'Unit | Service | route sequencer', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('affinity-engine-web/tests/unit/services/route-sequencer-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/services/route-sequencer-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/route-sequencer-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/utils/markdown-it-highlight.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | utils/markdown-it-highlight.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'utils/markdown-it-highlight.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('affinity-engine-web/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
