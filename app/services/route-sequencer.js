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
          name: t('overview')
        }, engine: {
          name: t('engine'),
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
                }, 'affinity-engine' : {
                  name: t('affinityEngineInstallation')
                }, 'quickstarts' : {
                  name: t('quickstarts')
                }
              }
            }, usage: {
              name: t('usage'),
              routes: {
                index: {
                  name: t('overview')
                }, 'basic-routing': {
                  name: t('basicRouting')
                }, arguments: {
                  name: t('arguments')
                }, 'block-params': {
                  name: t('blockParams')
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
        }, stage: {
          name: t('stage'),
          routes: {
            index: {
              name: t('overview')
            }, scenes: {
              name: t('scenes')
            }, directions: {
              name: t('directions')
            }
          }
        }, 'menu-bar': {
          name: t('menuBar')
        }, curtain: {
          name: t('curtain')
        }, plugins: {
          name: t('plugins')
        }
      };
    }
  })
});
