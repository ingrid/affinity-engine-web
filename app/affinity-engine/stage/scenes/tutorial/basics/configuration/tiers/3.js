import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';
import ReplayableScriptMixin from 'affinity-engine-web/mixins/replayable-script';

export default Scene.extend(ReplayableScriptMixin, {
  start: task(function * (script) {
    yield script.text('engines.tutorial.basics.micTest', { caption: 'Diy' });
    const choice = yield script.menu(['engines.tutorial.basics.hearingYou', 'engines.tutorial.basics.notHearingYouStatic', 'engines.tutorial.basics.notHearingYouVolume']);
    yield script.text(choice.text, { caption: 'Ember', captionPosition: 'right' });

    this.get('replay').perform(script);
  })
});
