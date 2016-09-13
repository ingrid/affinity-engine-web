import Ember from 'ember';
import SidebarRouteMixin from 'affinity-engine-web/mixins/sidebar-route';
import { module, test } from 'qunit';

module('Unit | Mixin | sidebar route');

// Replace this with your real tests.
test('it works', function(assert) {
  let SidebarRouteObject = Ember.Object.extend(SidebarRouteMixin);
  let subject = SidebarRouteObject.create();
  assert.ok(subject);
});
