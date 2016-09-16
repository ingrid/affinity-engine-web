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
        index: {
          name: t('welcome')
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
                }
              }
            }, usage: {
              name: t('usage'),
              routes: {
                index: {
                  name: t('overview')
                }, templates: {
                  name: t('templates')
                }, 'engine-id': {
                  name: t('engineId')
                }, focus: {
                  name: t('focus')
                }, 'block-component': {
                  name: t('engineBlockComponent')
                }, preloading: {
                  name: t('preloadingAssets')
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
          name: t('stage')
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
