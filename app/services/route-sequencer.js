import Ember from 'ember';

const {
  Service,
  computed,
  get
} = Ember;

const { inject: { service } } = Ember;

export default Service.extend({
  intl: service(),

  routes: computed({
    get() {
      const t = (name) => {
        return get(this, 'intl').t(`application.routes.${name}`);
      };

      return {
        welcome: {
          name: t('welcome'),
          routes: {
            index: {
              name: t('overview')
            }, 'how-to-use-this-documentation': {
              name: t('howToUseThisDocumentation')
            }, acknowledgements: {
              name: t('acknowledgements')
            }, 'road-to-release': {
              name: t('roadToRelease')
            }
          }
        }, tutorial: {
          name: t('tutorial'),
          routes: {
            index: {
              name: t('overview')
            }, installation: {
              name: t('installation'),
              routes: {
                index: {
                  name: t('overview')
                }, 'tooling': {
                  name: t('toolingSetup')
                }, 'ember': {
                  name: t('emberSetup')
                }, 'quickstarts' : {
                  name: t('quickstarts')
                }, 'es6-support' : {
                  name: t('es6Support')
                }
              }
            }, scripts: {
              name: t('scripts'),
              routes: {
                index: {
                  name: t('quickstart')
                }, 'your-first-direction': {
                  name: t('yourFirstDirection')
                }, concurrency: {
                  name: t('concurrency')
                }, attributes: {
                  name: t('attributes'),
                  version: {
                    operator: '>=',
                    threshold: '0.2'
                  }
                }, commands: {
                  name: t('commands')
                }
              }
            }, fixtures: {
              name: t('fixtures')
            }
          }
        }, api: {
          name: t('api'),
          routes: {
            index: {
              name: t('overview')
            }, engine: {
              name: t('engine'),
              routes: {
                index: {
                  name: t('overview')
                }, usage: {
                  name: t('usage')
                }, configuration: {
                  name: t('configuration'),
                  routes: {
                    index: {
                      name: t('overview')
                    }, defaults: {
                      name: t('defaults')
                    }, usage: {
                      name: t('usage')
                    }, 'configuration-tiers': {
                      name: t('configurationTiers')
                    }
                  }
                }, fixtures: {
                  name: t('fixtures'),
                  routes: {
                    index: {
                      name: t('overview')
                    }, backdrops: {
                      name: t('backdrops')
                    }, characters: {
                      name: t('characters')
                    }, images: {
                      name: t('images')
                    }, keyframes: {
                      name: t('keyframes')
                    }
                  }
                }
              }
            }, stage: {
              name: t('stage'),
              routes: {
                index: {
                  name: t('overview')
                }, usage: {
                  name: t('usage')
                }, scenes: {
                  name: t('scenes'),
                  routes: {
                    index: {
                      name: t('overview')
                    }, data: {
                      name: t('data')
                    }
                  }
                }, directions: {
                  name: t('directions'),
                  routes: {
                    index: {
                      name: t('overview')
                    }, backdrop: {
                      name: t('backdrop')
                    }, character: {
                      name: t('character')
                    }, image: {
                      name: t('image')
                    }, layer: {
                      name: t('layer')
                    }, menu: {
                      name: t('menu')
                    }, pause: {
                      name: t('pause')
                    }, random: {
                      name: t('random')
                    }, scene: {
                      name: t('scene')
                    }, sound: {
                      name: t('sound')
                    }, text: {
                      name: t('text')
                    }
                  }
                },
                links: {
                  name: t('links'),
                  version: {
                    operator: '>=',
                    threshold: '0.2'
                  }
                }
              }
            }, components: {
              name: t('components'),
              routes: {
                index: {
                  name: t('overview')
                }, 'menu-bar': {
                  name: t('menuBar'),
                  routes: {
                    index: {
                      name: t('overview')
                    }, buttons: {
                      name: t('buttons'),
                      routes: {
                        index: {
                          name: t('overview')
                        }, load: {
                          name: t('load')
                        }, reset: {
                          name: t('reset')
                        }, resize: {
                          name: t('resize')
                        }, rewind: {
                          name: t('rewind')
                        }, save: {
                          name: t('save')
                        }
                      }
                    }
                  }
                }, curtain: {
                  name: t('curtain')
                }
              }
            }, plugins: {
              name: t('plugins'),
              routes: {
                index: {
                  name: t('overview')
                }, 'animator-velocity': {
                  name: t('animatorVelocity')
                }, 'data-manager-rewindable-lokijs': {
                  name: t('dataManagerRewindableLokijs')
                }, 'preloader-createjs': {
                  name: t('preloaderCreatejs')
                }, 'sound-manager-createjs': {
                  name: t('soundManagerCreatejs')
                }, 'translator-ember-intl': {
                  name: t('translatorEmberIntl')
                }
              }
            }
          }
        }
      };
    }
  })
});
