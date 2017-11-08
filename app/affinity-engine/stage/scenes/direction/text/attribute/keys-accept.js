import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';
import ReplayableScriptMixin from 'affinity-engine-web/mixins/replayable-script';

export default Scene.extend(ReplayableScriptMixin, {
  start: task(function * (script) {
    const diy = script.character('diy');

    yield diy._.text('engines.direction.text.attribute.keys-accept.diy1', { keys: { accept: ['KeyI']}});
    yield diy._.text('engines.direction.text.attribute.keys-accept.diy2');

    this.get('replay').perform(script);
  })
});
