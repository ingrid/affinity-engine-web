import Ember from 'ember';

const {
  Component
} = Ember;

export default Component.extend({
  classNames: ['engine-container'],

  isFocused: true,

  config: {
    component: {
      stage: {
        direction: {
          text: {
            classNames: {
              structural: 'ae-bottom-block'
            },
            lxlTransition: {
              effect: {
                translateX: [0, '5px'],
                translateY: [0, '-2px'],
                scaleX: [1, 1.25],
                scaleY: [1, 1.25]
              },
              rate: 10
            }
          }
        }
      }
    }
  },

  fixtures: {
    characters: [{
      id: 'ember',
      name: 'Ember',
      namePosition: 'right',
      height: 360,
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
      height: 380,
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
  },

  progressBarOptions: {
    color: 'rgb(250, 250, 250)',
    trailColor: 'rgba(250, 250, 250, 0.62)',
    strokeWidth: 4,
    trailWidth: 4 * 0.62
  }
});
