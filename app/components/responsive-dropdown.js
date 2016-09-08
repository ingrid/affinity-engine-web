import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  actions: {
    toggleIsExpanded() {
      this.toggleProperty('isExpanded');
    }
  }
});
