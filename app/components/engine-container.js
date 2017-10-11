import Ember from 'ember';

const {
  Component,
  computed,
  assign,
  get
} = Ember;

const {
  inject: {
    service
  }
} = Ember;

export default Component.extend({
  classNames: ['engine-container'],

  isFocused: true,
  intl: service(),

  config: computed('scene', {
    get() {
      const title = `engines.${get(this, 'scene').replace(/\//g, '.')}.title`;
      return assign({
        all: {
          attrs: {
            title
          }
        }
      }, {
        component: {
          stage: {
            direction: {
              text: {
                attrs: {
                  classNames: {
                    structural: 'ae-bottom-block'
                  },
                  lxlTransition: {
                    effect: {
                      translateX: [0, 10],
                      translateY: [0, -3],
                      translateZ: [0, 15],
                      opacity: [0.999, 1]
                    },
                    rate: 10
                  }
                }
              }
            }
          }
        }
      })
    }
  }),

  fixtures: {
    characters: [{
      id: 'ember',
      attrs: {
        height: {
          '@media (max-width: 450px)': 320,
          default: 400
        },
        defaultPosition: 'ember-spot',
        positions: {
          'ember-spot': {
            '@media (max-width: 450px)': {
              left: '97%',
              top: '12%',
              translateX: '-50%'
            },
            '@media (min-width: 450px)': {
              left: '83%',
              top: '1%',
              translateX: '-50%'
            }
          }
        },
        defaultState: {
          pose: 'standing',
          outfit: 'trendy',
          expression: 'neutral',
          eyes: 'neutral'
        },
        layerOrder: [
          'base',
          'outfit',
          'nose',
          'mouth',
          'eyes',
          'brows',
          'hair'
        ],
        states: [{
          key: {
            pose: 'standing'
          },
          layers: {
            base: 'ember-pose-standing',
            nose: 'ember-nose-neutral'
          }
        }, {
          key: {
            pose: 'standing',
            outfit: 'trendy'
          },
          layers: {
            outfit: 'ember-outfit-trendy',
            hair: 'ember-hair-red-black-braids'
          }
        }, {
          key: {
            pose: 'standing',
            expression: 'neutral'
          },
          layers: {
            mouth: 'ember-mouth-neutral-closed',
            brows: 'ember-brows-neutral'
          }
        }, {
          key: {
            pose: 'standing',
            expression: 'proud'
          },
          layers: {
            mouth: 'ember-mouth-smile-closed',
            brows: 'ember-brows-up'
          }
        }, {
          key: {
            pose: 'standing',
            expression: 'smiling'
          },
          layers: {
            mouth: 'ember-mouth-smile-open',
            brows: 'ember-brows-up'
          }
        }, {
          key: {
            pose: 'standing',
            expression: 'bemused'
          },
          layers: {
            mouth: 'ember-mouth-neutral-open',
            brows: 'ember-brows-up'
          }
        }, {
          key: {
            pose: 'standing',
            eyes: 'neutral'
          },
          layers: {
            eyes: 'ember-eyes-neutral'
          }
        }, {
          key: {
            pose: 'standing',
            eyes: 'left'
          },
          layers: {
            eyes: 'ember-eyes-left'
          }
        }, {
          key: {
            pose: 'standing',
            eyes: 'right'
          },
          layers: {
            eyes: 'ember-eyes-right'
          }
        }, {
          key: {
            pose: 'standing',
            eyes: 'rolled'
          },
          layers: {
            eyes: 'ember-eyes-rolled'
          }
        }, {
          key: {
            pose: 'standing',
            brows: 'up'
          },
          layers: {
            brows: 'ember-brows-up'
          }
        }, {
          key: {
            pose: 'standing',
            brows: 'down'
          },
          layers: {
            brows: 'ember-brows-neutral'
          }
        }]
      },
      links: {
        component: {
          stage: {
            direction: {
              text: {
                attrs: {
                  caption: 'Ember',
                  captionPosition: 'right'
                }
              }
            }
          }
        }
      }
    }, {
      id: 'diy',
      attrs: {
        height: {
          '@media (max-width: 450px)': 325,
          default: 420
        },
        defaultPosition: 'diy-spot',
        positions: {
          'diy-spot': {
            '@media (max-width: 450px)': {
              left: '30%',
              top: '10%',
              translateX: '-50%'
            },
            '@media (min-width: 450px)': {
              left: '32%',
              top: '-4%',
              translateX: '-50%'
            }
          }
        },
        defaultState: {
          pose: 'standing',
          outfit: 'trendy',
          expression: 'neutral',
          eyes: 'neutral',
          brows: 'neutral'
        },
        layerOrder: [
          'base',
          'outfit',
          'nose',
          'mouth',
          'eyes',
          'brows',
          'hair'
        ],
        states: [{
          key: {
            pose: 'standing'
          },
          layers: {
            base: 'diy-pose-standing',
            nose: 'diy-nose-neutral'
          }
        }, {
          key: {
            pose: 'standing',
            outfit: 'trendy'
          },
          layers: {
            outfit: 'diy-outfit-trendy',
            hair: 'diy-hair-shaggy'
          }
        }, {
          key: {
            pose: 'standing',
            expression: 'neutral'
          },
          layers: {
            mouth: 'diy-mouth-neutral',
            brows: 'diy-brows-neutral'
          }
        }, {
          key: {
            pose: 'standing',
            expression: 'quizzical'
          },
          layers: {
            mouth: 'diy-mouth-neutral',
            brows: 'diy-brows-one-up'
          }
        }, {
          key: {
            pose: 'standing',
            expression: 'smiling'
          },
          layers: {
            mouth: 'diy-mouth-smile-closed',
            brows: 'diy-brows-up'
          }
        }, {
          key: {
            pose: 'standing',
            expression: 'excited'
          },
          layers: {
            mouth: 'diy-mouth-smile-toothy',
            brows: 'diy-brows-up'
          }
        }, {
          key: {
            pose: 'standing',
            eyes: 'neutral'
          },
          layers: {
            eyes: 'diy-eyes-neutral'
          }
        }, {
          key: {
            pose: 'standing',
            eyes: 'right'
          },
          layers: {
            eyes: 'diy-eyes-right'
          }
        }, {
          key: {
            pose: 'standing',
            eyes: 'left'
          },
          layers: {
            eyes: 'diy-eyes-left'
          }
        }, {
          key: {
            pose: 'standing',
            eyes: 'rolled'
          },
          layers: {
            eyes: 'diy-eyes-rolled'
          }
        }, {
          key: {
            pose: 'standing',
            brows: 'up'
          },
          layers: {
            brows: 'diy-brows-up'
          }
        }, {
          key: {
            pose: 'standing',
            brows: 'down'
          },
          layers: {
            brows: 'diy-brows-neutral'
          }
        }]
      },
      links: {
        component: {
          stage: {
            direction: {
              text: {
                attrs: {
                  caption: 'Diy',
                  captionPosition: 'left'
                }
              }
            }
          }
        }
      }
    }],
    backdrops: [{
      id: 'diy-bedroom',
      attrs: {
        keyframe: 'diy-bedroom',
        height: 150
      }
    }],
    keyframes: [{
      id: 'ember-pose-standing',
      attrs: {
        src: 'affinity-engine/characters/ember/poses/standing.png'
      }
    }, {
      id: 'ember-brows-asymetrical',
      attrs: {
        src: 'affinity-engine/characters/ember/brows/asymetrical.png'
      }
    }, {
      id: 'ember-brows-neutral',
      attrs: {
        src: 'affinity-engine/characters/ember/brows/neutral.png'
      }
    }, {
      id: 'ember-brows-up',
      attrs: {
        src: 'affinity-engine/characters/ember/brows/up.png'
      }
    }, {
      id: 'ember-eyes-left',
      attrs: {
        src: 'affinity-engine/characters/ember/eyes/left.png'
      }
    }, {
      id: 'ember-eyes-right',
      attrs: {
        src: 'affinity-engine/characters/ember/eyes/right.png'
      }
    }, {
      id: 'ember-eyes-neutral',
      attrs: {
        src: 'affinity-engine/characters/ember/eyes/neutral.png'
      }
    }, {
      id: 'ember-eyes-rolled',
      attrs: {
        src: 'affinity-engine/characters/ember/eyes/up-left.png'
      }
    }, {
      id: 'ember-hair-red-black-braids',
      attrs: {
        src: 'affinity-engine/characters/ember/hair/red-black-braids.png'
      }
    }, {
      id: 'ember-mouth-neutral-closed',
      attrs: {
        src: 'affinity-engine/characters/ember/mouths/neutral-closed.png'
      }
    }, {
      id: 'ember-mouth-neutral-open',
      attrs: {
        src: 'affinity-engine/characters/ember/mouths/neutral-open.png'
      }
    }, {
      id: 'ember-mouth-pout',
      attrs: {
        src: 'affinity-engine/characters/ember/mouths/pout.png'
      }
    }, {
      id: 'ember-mouth-smile-closed',
      attrs: {
        src: 'affinity-engine/characters/ember/mouths/smile-closed.png'
      }
    }, {
      id: 'ember-mouth-smile-open',
      attrs: {
        src: 'affinity-engine/characters/ember/mouths/smile-open.png'
      }
    }, {
      id: 'ember-nose-neutral',
      attrs: {
        src: 'affinity-engine/characters/ember/noses/neutral.png'
      }
    }, {
      id: 'ember-outfit-trendy',
      attrs: {
        src: 'affinity-engine/characters/ember/outfits/trendy.png'
      }
    }, {
      id: 'diy-brows-frown',
      attrs: {
        src: 'affinity-engine/characters/diy/brows/frown.png'
      }
    }, {
      id: 'diy-brows-neutral',
      attrs: {
        src: 'affinity-engine/characters/diy/brows/neutral.png'
      }
    }, {
      id: 'diy-brows-one-up',
      attrs: {
        src: 'affinity-engine/characters/diy/brows/one-up.png'
      }
    }, {
      id: 'diy-brows-sad',
      attrs: {
        src: 'affinity-engine/characters/diy/brows/sad.png'
      }
    }, {
      id: 'diy-brows-up',
      attrs: {
        src: 'affinity-engine/characters/diy/brows/up.png'
      }
    }, {
      id: 'diy-eyes-closed',
      attrs: {
        src: 'affinity-engine/characters/diy/eyes/closed.png'
      }
    }, {
      id: 'diy-eyes-left',
      attrs: {
        src: 'affinity-engine/characters/diy/eyes/left.png'
      }
    }, {
      id: 'diy-eyes-neutral',
      attrs: {
        src: 'affinity-engine/characters/diy/eyes/neutral.png'
      }
    }, {
      id: 'diy-eyes-right',
      attrs: {
        src: 'affinity-engine/characters/diy/eyes/right.png'
      }
    }, {
      id: 'diy-eyes-rolled',
      attrs: {
        src: 'affinity-engine/characters/diy/eyes/roll.png'
      }
    }, {
      id: 'diy-eyes-closed',
      attrs: {
        src: 'affinity-engine/characters/diy/eyes/closed.png'
      }
    }, {
      id: 'diy-hair-shaggy',
      attrs: {
        src: 'affinity-engine/characters/diy/hair/shaggy.png'
      }
    }, {
      id: 'diy-mouth-neutral',
      attrs: {
        src: 'affinity-engine/characters/diy/mouths/neutral.png'
      }
    }, {
      id: 'diy-mouth-pout',
      attrs: {
        src: 'affinity-engine/characters/diy/mouths/pout.png'
      }
    }, {
      id: 'diy-mouth-smile-closed',
      attrs: {
        src: 'affinity-engine/characters/diy/mouths/smile-closed.png'
      }
    }, {
      id: 'diy-mouth-smile-open',
      attrs: {
        src: 'affinity-engine/characters/diy/mouths/smile-open.png'
      }
    }, {
      id: 'diy-mouth-smile-toothy',
      attrs: {
        src: 'affinity-engine/characters/diy/mouths/smile-toothy.png'
      }
    }, {
      id: 'diy-nose-neutral',
      attrs: {
        src: 'affinity-engine/characters/diy/noses/neutral.png'
      }
    }, {
      id: 'diy-outfit-trendy',
      attrs: {
        src: 'affinity-engine/characters/diy/outfits/trendy.png'
      }
    }, {
      id: 'diy-pose-standing',
      attrs: {
        src: 'affinity-engine/characters/diy/poses/standing.png'
      }
    }, {
      id: 'diy-bedroom',
      attrs: {
        src: 'affinity-engine/backdrops/diy-bedroom.png'
      }
    }]
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
