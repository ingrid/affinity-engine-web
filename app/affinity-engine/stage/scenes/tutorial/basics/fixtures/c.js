import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';
import ReplayableScriptMixin from 'affinity-engine-web/mixins/replayable-script';

export default Scene.extend(ReplayableScriptMixin, {
  start: task(function * (script) {
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

    yield script.text('engines.tutorial.basics.tenMinutesLater');
    yield ember._.text('engines.tutorial.basics.thanksForComing');

    this.get('replay').perform(script, 'tutorial.basics.fixtures.a');
  })
});
