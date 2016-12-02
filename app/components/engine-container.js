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
                translateX: [0, '10px'],
                translateY: [0, '-3px'],
                translateZ: [0, '15px']
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
      defaultState: { pose: 'standing', outfit: 'trendy', expression: 'neutral' },
      layerOrder: [
        'base',
        'nails',
        'shoes',
        'top',
        'pants',
        'jacket',
        'nose',
        'mouth',
        'eyes',
        'brows',
        'hair'
      ],
      layers: {
        base: [{
          state: { pose: 'standing' },
          keyframe: 'ember-pose-standing'
        }],
        nails: [{
          state: { pose: 'standing', outfit: 'trendy' },
          keyframe: 'ember-nails-red'
        }],
        shoes: [{
          state: { pose: 'standing', outfit: 'trendy' },
          keyframe: 'ember-shoes-red-pumps'
        }],
        top: [{
          state: { pose: 'standing', outfit: 'trendy' },
          keyframe: 'ember-top-red-tank'
        }],
        pants: [{
          state: { pose: 'standing', outfit: 'trendy' },
          keyframe: 'ember-pants-shredded-jeans'
        }],
        jacket: [{
          state: { pose: 'standing', outfit: 'trendy' },
          keyframe: 'ember-jacket-red-letter-jacket'
        }],
        nose: [{
          state: { pose: 'standing' },
          keyframe: 'ember-nose-neutral'
        }],
        mouth: [{
          state: { pose: 'standing', expression: 'neutral' },
          keyframe: 'ember-mouth-neutral'
        }, {
          state: { pose: 'standing', expression: 'proud' },
          keyframe: 'ember-mouth-smile-closed'
        }, {
          state: { pose: 'standing', expression: 'smiling' },
          keyframe: 'ember-mouth-smile-open'
        }, {
          state: { pose: 'standing', expression: 'obviously' },
          keyframe: 'ember-mouth-pout'
        }],
        eyes: [{
          state: { pose: 'standing', expression: 'neutral' },
          keyframe: 'ember-eyes-neutral'
        }, {
          state: { pose: 'standing', expression: 'proud' },
          keyframe: 'ember-eyes-left'
        }, {
          state: { pose: 'standing', expression: 'smiling' },
          keyframe: 'ember-eyes-neutral'
        }, {
          state: { pose: 'standing', expression: 'obviously' },
          keyframe: 'ember-eyes-up-left'
        }],
        brows: [{
          state: { pose: 'standing', expression: 'neutral' },
          keyframe: 'ember-brows-neutral'
        }, {
          state: { pose: 'standing', expression: 'proud' },
          keyframe: 'ember-brows-up'
        }, {
          state: { pose: 'standing', expression: 'smiling' },
          keyframe: 'ember-brows-up'
        }, {
          state: { pose: 'standing', expression: 'obviously' },
          keyframe: 'ember-brows-asymetrical'
        }],
        hair: [{
          state: { pose: 'standing', outfit: 'trendy' },
          keyframe: 'ember-hair-red-black-braids'
        }]
      }
    }, {
      id: 'diy',
      name: 'Diy',
      height: 380,
      defaultState: { expression: 'neutral' },
      layerOrder: [
        'base'
      ],
      layers: {
        base: [{
          state: { expression: 'neutral' },
          keyframe: 'diy-default'
        }, {
          state: { expression: 'smiling' },
          keyframe: 'diy-smiling'
        }, {
          state: { expression: 'embarrassed' },
          keyframe: 'diy-embarrassed'
        }, {
          state: { expression: 'excited' },
          keyframe: 'diy-excited'
        }]
      }
    }],
    backdrops: [{
      id: 'diy-bedroom',
      keyframe: 'diy-bedroom'
    }],
    keyframes: [{
      id: 'ember-pose-standing',
      src: 'affinity-engine/characters/ember/poses/standing.png'
    }, {
      id: 'ember-brows-asymetrical',
      src: 'affinity-engine/characters/ember/brows/asymetrical.png'
    }, {
      id: 'ember-brows-neutral',
      src: 'affinity-engine/characters/ember/brows/neutral.png'
    }, {
      id: 'ember-brows-up',
      src: 'affinity-engine/characters/ember/brows/up.png'
    }, {
      id: 'ember-earing-gold-left',
      src: 'affinity-engine/characters/ember/earings/gold-left.png'
    }, {
      id: 'ember-eyes-left',
      src: 'affinity-engine/characters/ember/eyes/left.png'
    }, {
      id: 'ember-eyes-right',
      src: 'affinity-engine/characters/ember/eyes/right.png'
    }, {
      id: 'ember-eyes-neutral',
      src: 'affinity-engine/characters/ember/eyes/neutral.png'
    }, {
      id: 'ember-eyes-up-left',
      src: 'affinity-engine/characters/ember/eyes/up-left.png'
    }, {
      id: 'ember-hair-red-black-braids',
      src: 'affinity-engine/characters/ember/hair/red-black-braids.png'
    }, {
      id: 'ember-jacket-red-letter-jacket',
      src: 'affinity-engine/characters/ember/jackets/red-letter-jacket.png'
    }, {
      id: 'ember-mouth-neutral',
      src: 'affinity-engine/characters/ember/mouths/neutral.png'
    }, {
      id: 'ember-mouth-pout',
      src: 'affinity-engine/characters/ember/mouths/pout.png'
    }, {
      id: 'ember-mouth-smile-closed',
      src: 'affinity-engine/characters/ember/mouths/smile-closed.png'
    }, {
      id: 'ember-mouth-smile-open',
      src: 'affinity-engine/characters/ember/mouths/smile-open.png'
    }, {
      id: 'ember-nails-natural',
      src: 'affinity-engine/characters/ember/nails/natural.png'
    }, {
      id: 'ember-nails-red',
      src: 'affinity-engine/characters/ember/nails/red.png'
    }, {
      id: 'ember-nose-neutral',
      src: 'affinity-engine/characters/ember/noses/neutral.png'
    }, {
      id: 'ember-pants-shredded-jeans',
      src: 'affinity-engine/characters/ember/pants/shredded-jeans.png'
    }, {
      id: 'ember-shoes-red-pumps',
      src: 'affinity-engine/characters/ember/shoes/red-pumps.png'
    }, {
      id: 'ember-top-red-tank',
      src: 'affinity-engine/characters/ember/tops/red-tank.png'
    }, {
      id: 'diy-default',
      caption: 'Diy',
      src: 'affinity-engine/characters/diy/default.png'
    }, {
      id: 'diy-smiling',
      caption: 'Diy',
      src: 'affinity-engine/characters/diy/smiling.png'
    }, {
      id: 'diy-embarrassed',
      caption: 'Diy',
      src: 'affinity-engine/characters/diy/embarrassed.png'
    }, {
      id: 'diy-excited',
      caption: 'Diy',
      src: 'affinity-engine/characters/diy/excited.png'
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
