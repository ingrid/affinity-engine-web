import Ember from 'ember';

export default Ember.Controller.extend({
  height: Ember.computed(function() {
    return `${window.innerHeight - 200}px`;
  }).volatile()
})
