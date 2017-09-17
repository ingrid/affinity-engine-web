import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';
import ReplayableScriptMixin from 'affinity-engine-web/mixins/replayable-script';

export default Scene.extend(ReplayableScriptMixin, {
  start: task(function * (script) {
    yield script.text('engines.direction.text.attribute.caption-position.default', { caption: 'engines.direction.text.attribute.caption-position.caption' });
    yield script.text('engines.direction.text.attribute.caption-position.center', { caption: 'engines.direction.text.attribute.caption-position.caption', captionPosition: 'center' });
    yield script.text('engines.direction.text.attribute.caption-position.right', { caption: 'engines.direction.text.attribute.caption-position.caption', captionPosition: 'right' });
    yield script.text('engines.direction.text.attribute.caption-position.left', { caption: 'engines.direction.text.attribute.caption-position.caption', captionPosition: 'left' });

    this.get('replay').perform(script);
  })
});
