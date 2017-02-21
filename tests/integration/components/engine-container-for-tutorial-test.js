import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('engine-container-for-tutorial', 'Integration | Component | engine container for tutorial', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{engine-container-for-tutorial}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#engine-container-for-tutorial}}
      template block text
    {{/engine-container-for-tutorial}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
