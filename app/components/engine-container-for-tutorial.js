import Ember from 'ember';

const {
  Component
} = Ember;

const { inject: { service } } = Ember;

export default Component.extend({
  classNames: ['engine-container', 'engine-container-for-tutorial'],
  isFocused: true,
  intl: service(),

  config: {
    all: {
      attrs: {
        classNames: ['ae-coastal', 'ae-block']
      }
    }
  },

  fixtures: {
    characters: [{
      id: 'diy',
      links: {
        all: {
          attrs: {
            caption: 'Diy'
          }
        }
      }
    }, {
      id: 'ember',
      links: {
        all: {
          attrs: {
            caption: 'Ember',
            captionPosition: 'right'
          }
        },
        component: {
          stage: {
            direction: {
              text: {
                attrs: {
                  classNames: 'ae-paper ae-block'
                }
              }
            }
          }
        }
      }
    }],
    keyframes: [],
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
