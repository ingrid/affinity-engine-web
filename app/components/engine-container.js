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

let isMobile = false;

if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;

export default Component.extend({
  classNames: ['engine-container'],

  isFocused: true,
  isMobile,
  intl: service(),

  config: computed('scene', {
    get() {
      const intl = get(this, 'intl');
      const title = `engines.${get(this, 'scene').replace('/', '.')}.title`;
      return assign({
        children: {
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
                      translateX: [, 10],
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
        height: 400,
        defaultPosition: 'ember-spot',
        positions: {
          'ember-spot': {
            left: ['83%', '84%'],
            top: ['1%', '2%'],
            translateX: '-50%'
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
            nails: 'ember-nails-red',
            shoes: 'ember-shoes-red-pumps',
            top: 'ember-top-red-tank',
            pants: 'ember-pants-shredded-jeans',
            jacket: 'ember-jacket-red-letter-jacket',
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
        height: 420,
        defaultPosition: 'diy-spot',
        positions: {
          'diy-spot': {
            left: ['32%', '31%'],
            top: ['-4%', '-3%'],
            translateX: '-50%'
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
      id: 'ember-earing-gold-left',
      attrs: {
        src: 'affinity-engine/characters/ember/earings/gold-left.png'
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
      id: 'ember-jacket-red-letter-jacket',
      attrs: {
        src: 'affinity-engine/characters/ember/jackets/red-letter-jacket.png'
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
      id: 'ember-nails-natural',
      attrs: {
        src: 'affinity-engine/characters/ember/nails/natural.png'
      }
    }, {
      id: 'ember-nails-red',
      attrs: {
        src: 'affinity-engine/characters/ember/nails/red.png'
      }
    }, {
      id: 'ember-nose-neutral',
      attrs: {
        src: 'affinity-engine/characters/ember/noses/neutral.png'
      }
    }, {
      id: 'ember-pants-shredded-jeans',
      attrs: {
        src: 'affinity-engine/characters/ember/pants/shredded-jeans.png'
      }
    }, {
      id: 'ember-shoes-red-pumps',
      attrs: {
        src: 'affinity-engine/characters/ember/shoes/red-pumps.png'
      }
    }, {
      id: 'ember-top-red-tank',
      attrs: {
        src: 'affinity-engine/characters/ember/tops/red-tank.png'
      }
    }, {
      id: 'diy-bottom-grey-pants',
      attrs: {
        src: 'affinity-engine/characters/diy/bottoms/grey-pants.png'
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
      id: 'diy-complexion-blush',
      attrs: {
        src: 'affinity-engine/characters/diy/complexions/blush.png'
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
      id: 'diy-jacket-blue',
      attrs: {
        src: 'affinity-engine/characters/diy/jackets/blue.png'
      }
    }, {
      id: 'diy-jewlery-friendship',
      attrs: {
        src: 'affinity-engine/characters/diy/jewlery/friendship.png'
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
      id: 'diy-pose-standing',
      attrs: {
        src: 'affinity-engine/characters/diy/poses/standing.png'
      }
    }, {
      id: 'diy-scarf-red',
      attrs: {
        src: 'affinity-engine/characters/diy/scarves/red.png'
      }
    }, {
      id: 'diy-shoes-brown-high-tops',
      attrs: {
        src: 'affinity-engine/characters/diy/shoes/brown-high-tops.png'
      }
    }, {
      id: 'diy-socks-red',
      attrs: {
        src: 'affinity-engine/characters/diy/socks/red.png'
      }
    }, {
      id: 'diy-mouth-neutral',
      attrs: {
        src: 'affinity-engine/characters/diy/mouths/neutral.png'
      }
    }, {
      id: 'diy-top-aqua-shirt',
      attrs: {
        src: 'affinity-engine/characters/diy/tops/aqua-shirt.png'
      }
    }, {
      id: 'diy-vest-brown',
      attrs: {
        src: 'affinity-engine/characters/diy/vests/brown.png'
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
