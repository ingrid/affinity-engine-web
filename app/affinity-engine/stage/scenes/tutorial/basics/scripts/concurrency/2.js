import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';
import ReplayableScriptMixin from 'affinity-engine-web/mixins/replayable-script';

export default Scene.extend(ReplayableScriptMixin, {
  start: task(function * (script) {
    yield script.text('engines.tutorial.basics.micTest');
    yield script.text('engines.tutorial.basics.hearingYou');

    this.get('replay').perform(script);
  })
});
