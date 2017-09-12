import Ember from 'ember';
import ReplayableScriptMixin from 'affinity-engine-web/mixins/replayable-script';
import { module, test } from 'qunit';

module('Unit | Mixin | replayable script');

// Replace this with your real tests.
test('it works', function(assert) {
  let ReplayableScriptObject = Ember.Object.extend(ReplayableScriptMixin);
  let subject = ReplayableScriptObject.create();
  assert.ok(subject);
});
