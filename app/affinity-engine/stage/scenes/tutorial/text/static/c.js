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

    const caption = script.text('engines.tutorial.basics.caption.scene3', { classNames: 'ae-paper ae-caption ae-caption-center', fixed: true });

    yield script.text('engines.tutorial.basics.tenMinutesLater');

    caption.close();

    yield ember._.text('engines.tutorial.basics.thanksForComing');

    this.get('replay').perform(script, 'tutorial.text.static.a');
  })
});
