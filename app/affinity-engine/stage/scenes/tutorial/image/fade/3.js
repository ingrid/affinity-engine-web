import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';
import ReplayableScriptMixin from 'affinity-engine-web/mixins/replayable-script';

export default Scene.extend(ReplayableScriptMixin, {
  start: task(function * (script) {
    const diy = yield script.image('diy').fadeIn(10000);
    yield diy.fadeOut();

    this.get('replay').perform(script);
  })
});
