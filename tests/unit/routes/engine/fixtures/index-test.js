import { moduleFor, test } from 'ember-qunit';

moduleFor('route:engine/fixtures/index', 'Unit | Route | engine/fixtures/index', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
