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
      defaultState: { pose: 'standing', outfit: 'trendy', expression: 'neutral' },
      layerOrder: [
        'base',
        'complexion',
        'jewlery',
        'socks',
        'shoes',
        'bottom',
        'top',
        'vest',
        'jacket',
        'scarf',
        'nose',
        'mouth',
        'eyes',
        'brows',
        'hair'
      ],
      layers: {
        base: [{
          state: { pose: 'standing' },
          keyframe: 'diy-pose-standing'
        }],
        jewlery: [{
          state: { pose: 'standing', outfit: 'trendy' },
          keyframe: 'diy-jewlery-friendship'
        }],
        socks: [{
          state: { pose: 'standing', outfit: 'trendy' },
          keyframe: 'diy-socks-red'
        }],
        shoes: [{
          state: { pose: 'standing', outfit: 'trendy' },
          keyframe: 'diy-shoes-brown-high-tops'
        }],
        bottom: [{
          state: { pose: 'standing', outfit: 'trendy' },
          keyframe: 'diy-bottom-grey-pants'
        }],
        top: [{
          state: { pose: 'standing', outfit: 'trendy' },
          keyframe: 'diy-top-aqua-shirt'
        }],
        vest: [{
          state: { pose: 'standing', outfit: 'trendy' },
          keyframe: 'diy-vest-brown'
        }],
        jacket: [{
          state: { pose: 'standing', outfit: 'trendy' },
          keyframe: 'diy-jacket-blue'
        }],
        scarf: [{
          state: { pose: 'standing', outfit: 'trendy' },
          keyframe: 'diy-scarf-red'
        }],
        complexion: [{
          state: { pose: 'standing', expression: 'embarrassed' },
          keyframe: 'diy-complexion-blush'
        }],
        nose: [{
          state: { pose: 'standing' },
          keyframe: 'diy-nose-neutral'
        }],
        mouth: [{
          state: { pose: 'standing', expression: 'neutral' },
          keyframe: 'diy-mouth-neutral'
        }, {
          state: { pose: 'standing', expression: 'embarrassed' },
          keyframe: 'diy-mouth-pout'
        }, {
          state: { pose: 'standing', expression: 'smiling' },
          keyframe: 'diy-mouth-smile-closed'
        }, {
          state: { pose: 'standing', expression: 'excited' },
          keyframe: 'diy-mouth-smile-toothy'
        }],
        eyes: [{
          state: { pose: 'standing', expression: 'neutral' },
          keyframe: 'diy-eyes-neutral'
        }, {
          state: { pose: 'standing', expression: 'embarrassed' },
          keyframe: 'diy-eyes-left'
        }, {
          state: { pose: 'standing', expression: 'smiling' },
          keyframe: 'diy-eyes-neutral'
        }, {
          state: { pose: 'standing', expression: 'excited' },
          keyframe: 'diy-eyes-neutral'
        }],
        brows: [{
          state: { pose: 'standing', expression: 'neutral' },
          keyframe: 'diy-brows-neutral'
        }, {
          state: { pose: 'standing', expression: 'embarrassed' },
          keyframe: 'diy-brows-frown'
        }, {
          state: { pose: 'standing', expression: 'smiling' },
          keyframe: 'diy-brows-up'
        }, {
          state: { pose: 'standing', expression: 'excited' },
          keyframe: 'diy-brows-up'
        }],
        hair: [{
          state: { pose: 'standing', outfit: 'trendy' },
          keyframe: 'diy-hair-shaggy'
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
      id: 'diy-bottom-grey-pants',
      src: 'affinity-engine/characters/diy/bottoms/grey-pants.png'
    }, {
      id: 'diy-brows-frown',
      src: 'affinity-engine/characters/diy/brows/frown.png'
    }, {
      id: 'diy-brows-neutral',
      src: 'affinity-engine/characters/diy/brows/neutral.png'
    }, {
      id: 'diy-brows-one-up',
      src: 'affinity-engine/characters/diy/brows/one-up.png'
    }, {
      id: 'diy-brows-sad',
      src: 'affinity-engine/characters/diy/brows/sad.png'
    }, {
      id: 'diy-brows-up',
      src: 'affinity-engine/characters/diy/brows/up.png'
    }, {
      id: 'diy-complexion-blush',
      src: 'affinity-engine/characters/diy/complexions/blush.png'
    }, {
      id: 'diy-eyes-closed',
      src: 'affinity-engine/characters/diy/eyes/closed.png'
    }, {
      id: 'diy-eyes-left',
      src: 'affinity-engine/characters/diy/eyes/left.png'
    }, {
      id: 'diy-eyes-neutral',
      src: 'affinity-engine/characters/diy/eyes/neutral.png'
    }, {
      id: 'diy-eyes-right',
      src: 'affinity-engine/characters/diy/eyes/right.png'
    }, {
      id: 'diy-eyes-roll',
      src: 'affinity-engine/characters/diy/eyes/roll.png'
    }, {
      id: 'diy-eyes-closed',
      src: 'affinity-engine/characters/diy/eyes/closed.png'
    }, {
      id: 'diy-hair-shaggy',
      src: 'affinity-engine/characters/diy/hair/shaggy.png'
    }, {
      id: 'diy-jacket-blue',
      src: 'affinity-engine/characters/diy/jackets/blue.png'
    }, {
      id: 'diy-jewlery-friendship',
      src: 'affinity-engine/characters/diy/jewlery/friendship.png'
    }, {
      id: 'diy-mouth-neutral',
      src: 'affinity-engine/characters/diy/mouths/neutral.png'
    }, {
      id: 'diy-mouth-pout',
      src: 'affinity-engine/characters/diy/mouths/pout.png'
    }, {
      id: 'diy-mouth-smile-closed',
      src: 'affinity-engine/characters/diy/mouths/smile-closed.png'
    }, {
      id: 'diy-mouth-smile-open',
      src: 'affinity-engine/characters/diy/mouths/smile-open.png'
    }, {
      id: 'diy-mouth-smile-toothy',
      src: 'affinity-engine/characters/diy/mouths/smile-toothy.png'
    }, {
      id: 'diy-nose-neutral',
      src: 'affinity-engine/characters/diy/noses/neutral.png'
    }, {
      id: 'diy-pose-standing',
      src: 'affinity-engine/characters/diy/poses/standing.png'
    }, {
      id: 'diy-scarf-red',
      src: 'affinity-engine/characters/diy/scarves/red.png'
    }, {
      id: 'diy-shoes-brown-high-tops',
      src: 'affinity-engine/characters/diy/shoes/brown-high-tops.png'
    }, {
      id: 'diy-socks-red',
      src: 'affinity-engine/characters/diy/socks/red.png'
    }, {
      id: 'diy-mouth-neutral',
      src: 'affinity-engine/characters/diy/mouths/neutral.png'
    }, {
      id: 'diy-top-aqua-shirt',
      src: 'affinity-engine/characters/diy/tops/aqua-shirt.png'
    }, {
      id: 'diy-vest-brown',
      src: 'affinity-engine/characters/diy/vests/brown.png'
    }, {
      id: 'diy-bedroom',
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
