import Ember from 'ember';

const {
  Component
} = Ember;

export default Component.extend({
  classNames: ['engine-container'],

  isFocused: true,

  fixtures: {
    characters: [{
      id: 'ember',
      name: 'Ember',
      height: 375,
      keyframes: [{
        id: 'ember-neutral'
      }, {
        id: 'ember-neutral',
        expression: 'smiling'
      }, {
        id: 'ember-neutral',
        expression: 'proud'
      }, {
        id: 'ember-neutral',
        expression: 'obviously'
      }]
    }, {
      id: 'diy',
      name: 'Diy',
      height: 375,
      keyframes: [{
        id: 'diy-neutral'
      }, {
        id: 'diy-neutral',
        expression: 'smiling'
      }, {
        id: 'diy-neutral',
        expression: 'embarrassed'
      }, {
        id: 'diy-neutral',
        expression: 'excited'
      }]
    }],
    backdrops: [{
      id: 'diy-bedroom',
      keyframes: [{
        id: 'diy-bedroom'
      }]
    }],
    keyframes: [{
      id: 'ember-neutral',
      caption: 'Ember',
      src: 'affinity-engine/characters/ember/neutral.png'
    }, {
      id: 'diy-neutral',
      caption: 'Diy',
      src: 'affinity-engine/characters/diy/neutral.png'
    }, {
      id: 'diy-bedroom',
      caption: 'Diy\'s bedroom',
      src: 'affinity-engine/backdrops/diy-bedroom.png'
    }]
  }
});
