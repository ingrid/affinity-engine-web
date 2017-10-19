import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';
import ReplayableScriptMixin from 'affinity-engine-web/mixins/replayable-script';

export default Scene.extend(ReplayableScriptMixin, {
  start: task(function * (script) {
    yield script.image('diy').fadeIn().position('right', { duration: 1000 }).position('left', { duration: 1000 }).position('center', { duration: 1000 });

    this.get('replay').perform(script);
  })
});
