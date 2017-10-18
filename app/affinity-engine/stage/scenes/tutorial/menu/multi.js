import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';
import ReplayableScriptMixin from 'affinity-engine-web/mixins/replayable-script';

export default Scene.extend(ReplayableScriptMixin, {
  start: task(function * (script) {
    const food = yield script.menu([
      { key: 'engines.tutorial.menu.kale.key', text: 'engines.tutorial.menu.kale.text', multi: true },
      { key: 'engines.tutorial.menu.kimchi.key', text: 'engines.tutorial.menu.kimchi.text', multi: true },
      { key: 'engines.tutorial.menu.almonds.key', text: 'engines.tutorial.menu.almonds.text', multi: true },
      { key: 'engines.tutorial.menu.custom.key', text: 'engines.tutorial.menu.custom.text', inputable: true, multi: true },
      { key: 'engines.tutorial.menu.multiSubmit.key', text: 'engines.tutorial.menu.multiSubmit.text', multiSubmit: true }
    ], { text: 'engines.tutorial.menu.text1' });
    yield script.text(food.key);
    yield script.text(food.text);
    yield script.text(food.value);

    for (let i = 0; i < food.selections.length; ++i) {
      yield script.text(food.selections[i].value);
    }

    this.get('replay').perform(script);
  })
});
