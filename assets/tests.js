define('affinity-engine-web/tests/affinity-engine/stage/scenes/index/welcome.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | affinity-engine/stage/scenes/index/welcome.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'affinity-engine/stage/scenes/index/welcome.js should pass jshint.\naffinity-engine/stage/scenes/index/welcome.js: line 29, col 5, Expected an operator and instead saw \'yield\'.\naffinity-engine/stage/scenes/index/welcome.js: line 29, col 10, Missing semicolon.\naffinity-engine/stage/scenes/index/welcome.js: line 32, col 5, Expected an operator and instead saw \'yield\'.\naffinity-engine/stage/scenes/index/welcome.js: line 32, col 10, Missing semicolon.\n\n4 errors');
  });
});
define('affinity-engine-web/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/components/dynamic-tag.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/dynamic-tag.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/dynamic-tag.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/components/engine-container.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/engine-container.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/engine-container.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/components/expanding-sidebar-section.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/expanding-sidebar-section.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/expanding-sidebar-section.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/components/expanding-sidebar.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/expanding-sidebar.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/expanding-sidebar.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/components/header-links.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/header-links.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/header-links.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/components/responsive-dropdown.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/responsive-dropdown.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/responsive-dropdown.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/components/responsive-navigation-dropdown.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/responsive-navigation-dropdown.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/responsive-navigation-dropdown.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/components/section-navigator.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/section-navigator.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/section-navigator.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/controllers/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/formats.jshint', ['exports'], function (exports) {
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
define('affinity-engine-web/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/helpers/ember-keyboard/register-test-helpers', ['exports', 'ember', 'ember-keyboard'], function (exports, _ember, _emberKeyboard) {

  var keyEvent = function keyEvent(app, attributes, type) {
    var event = attributes.split('+').reduce(function (event, attribute) {
      if (['ctrl', 'meta', 'alt', 'shift'].indexOf(attribute) > -1) {
        event[attribute + 'Key'] = true;
      } else {
        event.keyCode = (0, _emberKeyboard.getKeyCode)(attribute);
      }

      return event;
    }, {});

    return app.testHelpers.triggerEvent(document, type, event);
  };

  exports['default'] = function () {
    _ember['default'].Test.registerAsyncHelper('keyDown', function (app, attributes) {
      return keyEvent(app, attributes, 'keydown');
    });

    _ember['default'].Test.registerAsyncHelper('keyUp', function (app, attributes) {
      return keyEvent(app, attributes, 'keyup');
    });

    _ember['default'].Test.registerAsyncHelper('keyPress', function (app, attributes) {
      return keyEvent(app, attributes, 'keypress');
    });
  };
});
define('affinity-engine-web/tests/helpers/m.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/m.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/m.js should pass jshint.');
  });
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
define('affinity-engine-web/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
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
define('affinity-engine-web/tests/helpers/resolver.jshint', ['exports'], function (exports) {
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

    var attributes = _ember['default'].merge({}, _affinityEngineWebConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _affinityEngineWebApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('affinity-engine-web/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/integration/components/dynamic-tag-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('dynamic-tag', 'Integration | Component | dynamic tag', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.7.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 15
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'dynamic-tag', ['loc', [null, [1, 0], [1, 15]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@2.7.3',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@2.7.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'dynamic-tag', [], [], 0, null, ['loc', [null, [2, 4], [4, 20]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('affinity-engine-web/tests/integration/components/dynamic-tag-test.jshint', ['exports'], function (exports) {
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

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.7.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 20
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'engine-container', ['loc', [null, [1, 0], [1, 20]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@2.7.3',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@2.7.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'engine-container', [], [], 0, null, ['loc', [null, [2, 4], [4, 25]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('affinity-engine-web/tests/integration/components/engine-container-test.jshint', ['exports'], function (exports) {
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

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.7.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 29
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'expanding-sidebar-section', ['loc', [null, [1, 0], [1, 29]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');
  });
});
define('affinity-engine-web/tests/integration/components/expanding-sidebar-section-test.jshint', ['exports'], function (exports) {
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

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.7.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 21
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'expanding-sidebar', ['loc', [null, [1, 0], [1, 21]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })()));

    assert.ok(true);
  });
});
define('affinity-engine-web/tests/integration/components/expanding-sidebar-test.jshint', ['exports'], function (exports) {
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

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.7.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 16
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'header-links', ['loc', [null, [1, 0], [1, 16]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');
  });
});
define('affinity-engine-web/tests/integration/components/header-links-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/header-links-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/header-links-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/integration/components/responsive-dropdown-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('responsive-dropdown', 'Integration | Component | responsive dropdown', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.7.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 23
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'responsive-dropdown', ['loc', [null, [1, 0], [1, 23]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@2.7.3',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@2.7.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'responsive-dropdown', [], [], 0, null, ['loc', [null, [2, 4], [4, 28]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('affinity-engine-web/tests/integration/components/responsive-dropdown-test.jshint', ['exports'], function (exports) {
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

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.7.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 34
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'responsive-navigation-dropdown', ['loc', [null, [1, 0], [1, 34]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })()));

    assert.ok(true);
  });
});
define('affinity-engine-web/tests/integration/components/responsive-navigation-dropdown-test.jshint', ['exports'], function (exports) {
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

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.7.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 21
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'section-navigator', ['loc', [null, [1, 0], [1, 21]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })()));

    assert.ok(true);
  });
});
define('affinity-engine-web/tests/integration/components/section-navigator-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/section-navigator-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/section-navigator-test.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/mixins/route-title.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | mixins/route-title.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/route-title.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/mixins/sidebar-route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | mixins/sidebar-route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/sidebar-route.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/curtain.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/curtain.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/curtain.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/engine.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/engine.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/engine.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/engine/components.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/engine/components.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/engine/components.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/engine/configuration.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/engine/configuration.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/engine/configuration.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/engine/configuration/configuration-tiers.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/engine/configuration/configuration-tiers.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/engine/configuration/configuration-tiers.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/engine/configuration/defaults.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/engine/configuration/defaults.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/engine/configuration/defaults.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/engine/configuration/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/engine/configuration/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/engine/configuration/index.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/engine/configuration/usage.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/engine/configuration/usage.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/engine/configuration/usage.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/engine/fixtures.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/engine/fixtures.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/engine/fixtures.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/engine/installation.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/engine/installation.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/engine/installation.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/engine/installation/affinity-engine.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/engine/installation/affinity-engine.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/engine/installation/affinity-engine.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/engine/installation/ember.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/engine/installation/ember.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/engine/installation/ember.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/engine/installation/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/engine/installation/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/engine/installation/index.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/engine/installation/tooling.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/engine/installation/tooling.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/engine/installation/tooling.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/engine/plugins.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/engine/plugins.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/engine/plugins.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/engine/usage.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/engine/usage.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/engine/usage.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/engine/usage/arguments.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/engine/usage/arguments.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/engine/usage/arguments.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/engine/usage/basic-routing.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/engine/usage/basic-routing.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/engine/usage/basic-routing.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/engine/usage/block-params.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/engine/usage/block-params.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/engine/usage/block-params.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/engine/usage/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/engine/usage/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/engine/usage/index.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/menu-bar.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/menu-bar.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/menu-bar.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/plugins.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/plugins.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/plugins.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/routes/stage.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/stage.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/stage.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/services/route-sequencer.jshint', ['exports'], function (exports) {
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
define('affinity-engine-web/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('affinity-engine-web/tests/transitions.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | transitions.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transitions.js should pass jshint.');
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
define('affinity-engine-web/tests/unit/mixins/route-title-test.jshint', ['exports'], function (exports) {
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
define('affinity-engine-web/tests/unit/mixins/sidebar-route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/mixins/sidebar-route-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/mixins/sidebar-route-test.js should pass jshint.');
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
define('affinity-engine-web/tests/unit/services/route-sequencer-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/services/route-sequencer-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/route-sequencer-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('affinity-engine-web/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map