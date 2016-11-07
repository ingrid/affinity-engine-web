import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
    willTransition: function(transition) {
      this._super();

      Ember.$('.main').scrollTop(0);
    }
  }
});
