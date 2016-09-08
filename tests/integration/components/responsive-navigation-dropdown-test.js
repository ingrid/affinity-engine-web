import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('responsive-navigation-dropdown', 'Integration | Component | responsive navigation dropdown', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{responsive-navigation-dropdown}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#responsive-navigation-dropdown}}
      template block text
    {{/responsive-navigation-dropdown}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
