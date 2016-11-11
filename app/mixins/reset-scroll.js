import Ember from 'ember';

export default Ember.Mixin.create({
  willTransition() {
    this._super();

    Ember.$('.main').scrollTop(0);
  }
});
