import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
    willTransition(...args) {
      this._super(...args);

      Ember.$('.main').scrollTop(0);

      Ember.getOwner(this).lookup('controller:application').set('anchor', undefined);
    }
  }
});
