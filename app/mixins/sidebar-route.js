import Ember from 'ember';

const {
  Mixin,
  get
} = Ember;

export default Mixin.create({
  renderTemplate(...args) {
    this.render('_sidebar', {
      outlet: 'sidebar',
      controller: Ember.Object.create({ parentRoute: get(this, 'sidebarParentRoute') })
    });

    this._super(...args);
  }
});
