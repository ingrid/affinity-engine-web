import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';
import ReplayableScriptMixin from 'affinity-engine-web/mixins/replayable-script';

export default Scene.extend(ReplayableScriptMixin, {
  start: task(function * (script) {
    yield script.text('engines.direction.text.attribute.caption.withCaption', { caption: 'engines.direction.text.attribute.caption.caption' });
    yield script.text('engines.direction.text.attribute.caption.withoutCaption');

    this.get('replay').perform(script);
  })
});
