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
            }
          }
        }, overview: {
          name: t('overview'),
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
                }
              }
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
              name: t('fixtures')
            }, components: {
              name: t('components')
            }, plugins: {
              name: t('plugins')
            }
          }
        }, engine: {
          name: t('engine'),
          routes: {
            index: {
              name: t('overview')
            }, installation: {
              name: t('installation')
            }, usage: {
              name: t('usage')
            }, arguments: {
              name: t('arguments')
            }, 'block-params': {
              name: t('blockParams')
            }
          }
        }, components: {
          name: t('components'),
          routes: {
            index: {
              name: t('overview')
            }, stage: {
              name: t('stage'),
              routes: {
                index: {
                  name: t('overview')
                }, usage: {
                  name: t('usage')
                }, scenes: {
                  name: t('scenes')
                }, directions: {
                  name: t('directions'),
                  routes: {
                    index: {
                      name: t('overview')
                    }
                  }
                }
              }
            }, 'menu-bar': {
              name: t('menuBar'),
              routes: {
                index: {
                  name: t('overview')
                }
              }
            }, curtain: {
              name: t('curtain'),
              routes: {
                index: {
                  name: t('overview')
                }
              }
            }
          }
        }, plugins: {
          name: t('plugins')
        }
      };
    }
  })
});
