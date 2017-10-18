import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';
import ReplayableScriptMixin from 'affinity-engine-web/mixins/replayable-script';

export default Scene.extend(ReplayableScriptMixin, {
  start: task(function * (script) {
    yield script.menu(['engines.tutorial.menu.kale.text', 'engines.tutorial.menu.kimchi.text', 'engines.tutorial.menu.almonds.text']);

    this.get('replay').perform(script);
  })
});
