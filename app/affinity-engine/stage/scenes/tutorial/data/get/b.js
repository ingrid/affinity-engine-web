import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';
import ReplayableScriptMixin from 'affinity-engine-web/mixins/replayable-script';

export default Scene.extend(ReplayableScriptMixin, {
  start: task(function * (script, data) {
      yield script.text({ key: 'engines.tutorial.data.response2', options: { name: data.get('name') } });

    this.get('replay').perform(script, 'tutorial.data.get.a');
  })
});
