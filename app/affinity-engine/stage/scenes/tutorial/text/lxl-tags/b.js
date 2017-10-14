import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';
import ReplayableScriptMixin from 'affinity-engine-web/mixins/replayable-script';

export default Scene.extend(ReplayableScriptMixin, {
  start: task(function * (script) {
    const diy = script.character({
      links: {
        all: {
          attrs: {
            caption: 'Diy'
          }
        }
      }
    });
    const ember = script.character({
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
    });

    yield script.text('engines.tutorial.basics.anHourLater');
    yield ember._.text('engines.tutorial.basics.curtains');
    yield diy._.text('engines.tutorial.basics.ready');

    script.scene('tutorial.text.lxl-tags.c', { autosave: false });
  })
});
