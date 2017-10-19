import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';
import ReplayableScriptMixin from 'affinity-engine-web/mixins/replayable-script';

export default Scene.extend(ReplayableScriptMixin, {
  start: task(function * (script) {
    yield script.image('diy', { height: 400 }).fadeIn().state({ expression: 'sad' }).state({ expression: 'smiling' });

    this.get('replay').perform(script);
  })
});
