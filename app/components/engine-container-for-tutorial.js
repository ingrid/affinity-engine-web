import Ember from 'ember';

const {
  Component
} = Ember;

export default Component.extend({
  classNames: ['engine-container'],
  isFocused: true,
  config: {},
  fixtures: {
    characters: [{
      id: 'diy',
      name: 'Diy',
      keyframe: 'diy-default',
      height: 90
    }, {
      id: 'ember',
      name: 'Ember',
      keyframe: 'ember-default',
      height: 87
    }],
    keyframes: [{
      id: 'diy-default',
      src: 'tutorial/diy.png'
    }, {
      id: 'ember-default',
      src: 'tutorial/ember.png'
    }],
    sounds: []
  }
});
