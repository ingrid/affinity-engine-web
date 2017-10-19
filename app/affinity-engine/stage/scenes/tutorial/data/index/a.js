import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';
import ReplayableScriptMixin from 'affinity-engine-web/mixins/replayable-script';

export default Scene.extend(ReplayableScriptMixin, {
  start: task(function * (script) {
    const response = yield script.menu([{ text: 'engines.tutorial.data.answer', inputable: true }], { text: 'engines.tutorial.data.question' });

    yield script.text({ key: 'engines.tutorial.data.response', options: { name: response.value } });

    script.scene('tutorial.data.index.b');
  })
});
