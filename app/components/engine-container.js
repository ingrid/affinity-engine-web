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
                translateZ: [0, '15px'],
                opacity: [1, 0.9]
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
      height: 400,
      defaultPosition: 'ember-spot',
      positions: {
        'ember-spot': {
          left: '83%',
          top: '1%',
          translateX: '-50%'
        }
      },
      defaultState: { pose: 'standing', outfit: 'trendy', expression: 'neutral', eyes: 'neutral' },
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
      states: [{
        key: { pose: 'standing' },
        layers: {
          base: 'ember-pose-standing',
          nose: 'ember-nose-neutral'
        }
      }, {
        key: { pose: 'standing', outfit: 'trendy' },
        layers: {
          nails: 'ember-nails-red',
          shoes: 'ember-shoes-red-pumps',
          top: 'ember-top-red-tank',
          pants: 'ember-pants-shredded-jeans',
          jacket: 'ember-jacket-red-letter-jacket',
          hair: 'ember-hair-red-black-braids'
        }
      }, {
        key: { pose: 'standing', expression: 'neutral' },
        layers: {
          mouth: 'ember-mouth-neutral-closed',
          brows: 'ember-brows-neutral'
        }
      }, {
        key: { pose: 'standing', expression: 'proud' },
        layers: {
          mouth: 'ember-mouth-smile-closed',
          brows: 'ember-brows-up'
        }
      }, {
        key: { pose: 'standing', expression: 'smiling' },
        layers: {
          mouth: 'ember-mouth-smile-open',
          brows: 'ember-brows-up'
        }
      }, {
        key: { pose: 'standing', expression: 'bemused' },
        layers: {
          mouth: 'ember-mouth-neutral-open',
          brows: 'ember-brows-up'
        }
      }, {
        key: { pose: 'standing', eyes: 'neutral' },
        layers: {
          eyes: 'ember-eyes-neutral'
        }
      }, {
        key: { pose: 'standing', eyes: 'left' },
        layers: {
          eyes: 'ember-eyes-left'
        }
      }, {
        key: { pose: 'standing', eyes: 'right' },
        layers: {
          eyes: 'ember-eyes-right'
        }
      }, {
        key: { pose: 'standing', eyes: 'rolled' },
        layers: {
          eyes: 'ember-eyes-rolled'
        }
      }, {
        key: { pose: 'standing', brows: 'up' },
        layers: {
          brows: 'ember-brows-up'
        }
      }, {
        key: { pose: 'standing', brows: 'down' },
        layers: {
          brows: 'ember-brows-neutral'
        }
      }]
    }, {
      id: 'diy',
      name: 'Diy',
      height: 420,
      defaultPosition: 'diy-spot',
      positions: {
        'diy-spot': {
          left: '32%',
          top: '-4%',
          translateX: '-50%'
        }
      },
      defaultState: { pose: 'standing', outfit: 'trendy', expression: 'neutral', eyes: 'neutral', brows: 'neutral' },
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
      states: [{
        key: { pose: 'standing' },
        layers: {
          base: 'diy-pose-standing',
          nose: 'diy-nose-neutral'
        }
      }, {
        key: { pose: 'standing', outfit: 'trendy' },
        layers: {
          jewlery: 'diy-jewlery-friendship',
          socks: 'diy-socks-red',
          shoes: 'diy-shoes-brown-high-tops',
          bottom: 'diy-bottom-grey-pants',
          top: 'diy-top-aqua-shirt',
          vest: 'diy-vest-brown',
          jacket: 'diy-jacket-blue',
          scarf: 'diy-scarf-red',
          hair: 'diy-hair-shaggy'
        }
      }, {
        key: { pose: 'standing', expression: 'neutral' },
        layers: {
          mouth: 'diy-mouth-neutral',
          brows: 'diy-brows-neutral'
        }
      }, {
        key: { pose: 'standing', expression: 'quizzical' },
        layers: {
          mouth: 'diy-mouth-neutral',
          brows: 'diy-brows-one-up'
        }
      }, {
        key: { pose: 'standing', expression: 'smiling' },
        layers: {
          mouth: 'diy-mouth-smile-closed',
          brows: 'diy-brows-up'
        }
      }, {
        key: { pose: 'standing', expression: 'excited' },
        layers: {
          mouth: 'diy-mouth-smile-toothy',
          brows: 'diy-brows-up'
        }
      }, {
        key: { pose: 'standing', eyes: 'neutral' },
        layers: {
          eyes: 'diy-eyes-neutral'
        }
      }, {
        key: { pose: 'standing', eyes: 'right' },
        layers: {
          eyes: 'diy-eyes-right'
        }
      }, {
        key: { pose: 'standing', eyes: 'left' },
        layers: {
          eyes: 'diy-eyes-left'
        }
      }, {
        key: { pose: 'standing', eyes: 'rolled' },
        layers: {
          eyes: 'diy-eyes-rolled'
        }
      }, {
        key: { pose: 'standing', brows: 'up' },
        layers: {
          brows: 'diy-brows-up'
        }
      }, {
        key: { pose: 'standing', brows: 'down' },
        layers: {
          brows: 'diy-brows-neutral'
        }
      }]
    }],
    backdrops: [{
      id: 'diy-bedroom',
      keyframe: 'diy-bedroom',
      height: 150
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
      id: 'ember-eyes-rolled',
      src: 'affinity-engine/characters/ember/eyes/up-left.png'
    }, {
      id: 'ember-hair-red-black-braids',
      src: 'affinity-engine/characters/ember/hair/red-black-braids.png'
    }, {
      id: 'ember-jacket-red-letter-jacket',
      src: 'affinity-engine/characters/ember/jackets/red-letter-jacket.png'
    }, {
      id: 'ember-mouth-neutral-closed',
      src: 'affinity-engine/characters/ember/mouths/neutral-closed.png'
    }, {
      id: 'ember-mouth-neutral-open',
      src: 'affinity-engine/characters/ember/mouths/neutral-open.png'
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
      id: 'diy-eyes-rolled',
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
