import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';
import ReplayableScriptMixin from 'affinity-engine-web/mixins/replayable-script';

export default Scene.extend(ReplayableScriptMixin, {
  start: task(function * (script) {
    const diy = yield script.character('diy', { height: 400 }).fadeIn();
    yield diy._.text('engines.tutorial.image.character');

    this.get('replay').perform(script);
  })
});
