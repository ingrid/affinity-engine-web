import Ember from 'ember';

const {
  Component,
  assign,
  computed
} = Ember;

const { inject: { service } } = Ember;

export default Component.extend({
  classNames: ['engine-container'],
  isFocused: true,
  intl: service(),

  config: {},

  fixtures: {
    characters: [{
      id: 'diy',
      attrs: {
        name: 'Diy',
        keyframe: 'diy-default',
        height: 90
      }
    }, {
      id: 'ember',
      attrs: {
        name: 'Ember',
        keyframe: 'ember-default',
        height: 87
      }
    }],
    keyframes: [{
      id: 'diy-default',
      attrs: {
        src: 'tutorial/diy.png'
      }
    }, {
      id: 'ember-default',
      attrs: {
        src: 'tutorial/ember.png'
      }
    }],
    sounds: []
  },

  progressBarOptions: {
    color: 'rgb(250, 250, 250)',
    trailColor: 'rgba(250, 250, 250, 0.62)',
    strokeWidth: 1,
    trailWidth: 0.62,
    text: {
      style: {
        position: 'absolute',
        left: '50%',
        bottom: '15px',
        transform: {
          prefix: true,
          value: 'translateX(-50%)'
        }
      },
      autoStyleContainer: false
    }
  }
});
