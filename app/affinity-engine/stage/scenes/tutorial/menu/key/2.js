import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';
import ReplayableScriptMixin from 'affinity-engine-web/mixins/replayable-script';

export default Scene.extend(ReplayableScriptMixin, {
  start: task(function * (script) {
    const food = yield script.menu([{ key: 'engines.tutorial.menu.kale.key', text: 'engines.tutorial.menu.kale.text' }, { key: 'engines.tutorial.menu.kimchi.key', text: 'engines.tutorial.menu.kimchi.text' }, { key: 'engines.tutorial.menu.almonds.key', text: 'engines.tutorial.menu.almonds.text' }], { text: 'engines.tutorial.menu.text1' });

    switch (food.key) {
      case 'engines.tutorial.menu.kale.key': yield script.text('engines.tutorial.menu.kale.choice'); break;
      case 'engines.tutorial.menu.kimchi.key': yield script.text('engines.tutorial.menu.kimchi.choice'); break;
      case 'engines.tutorial.menu.almonds.key': yield script.text('engines.tutorial.menu.almonds.choice'); break;
    }

    this.get('replay').perform(script);
  })
});
