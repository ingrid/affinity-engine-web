import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';
import ReplayableScriptMixin from 'affinity-engine-web/mixins/replayable-script';

export default Scene.extend(ReplayableScriptMixin, {
  start: task(function * (script) {
    yield script.text('engines.tutorial.basics.micTest', { caption: 'Diy' });
    const choice1 = yield script.menu(['engines.tutorial.basics.hearingYou', 'engines.tutorial.basics.notHearingYouStatic', 'engines.tutorial.basics.notHearingYouVolume']);
    yield script.text(choice1.text, { caption: 'Ember', captionPosition: 'right' });

    yield script.text('engines.tutorial.basics.micTest2', { caption: 'Diy' });
    const choice2 = yield script.menu(['engines.tutorial.basics.hearingYouBetter', 'engines.tutorial.basics.hearingYouWorse']);
    yield script.text(choice2.text, { caption: 'Ember', captionPosition: 'right' });

    this.get('replay').perform(script);
  })
});
