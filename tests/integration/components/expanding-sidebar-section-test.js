import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('expanding-sidebar-section', 'Integration | Component | expanding sidebar section', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{expanding-sidebar-section}}`);

  assert.equal(this.$().text().trim(), '');
});
