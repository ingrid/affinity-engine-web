import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';
import ReplayableScriptMixin from 'affinity-engine-web/mixins/replayable-script';

export default Scene.extend(ReplayableScriptMixin, {
  start: task(function * (script) {
    yield script.text('engines.tutorial.basics.micTest', { caption: 'Diy' });
    yield script.text('engines.tutorial.basics.hearingYou', { caption: 'Ember', captionPosition: 'right' }).transition({ effect: { opacity: 0.5 }, duration: 500 }).transition({ effect: { opacity: 1 }, duration: 500, loop: 3 });

    this.get('replay').perform(script);
  })
});
