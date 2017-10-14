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

    yield diy._.text('engines.tutorial.basics.micTestPause');
    const choice1 = yield script.menu(['engines.tutorial.basics.hearingYou', 'engines.tutorial.basics.notHearingYouStatic', 'engines.tutorial.basics.notHearingYouVolume']);
    yield ember._.text(choice1.text);

    yield diy._.text('engines.tutorial.basics.micTest2PartSlow');
    const choice2 = yield script.menu(['engines.tutorial.basics.hearingYouBetter', 'engines.tutorial.basics.hearingYouWorse']);
    yield ember._.text(choice2.text);

    script.scene('tutorial.text.lxl-tags.b', { autosave: false });
  })
});
