import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';
import ReplayableScriptMixin from 'affinity-engine-web/mixins/replayable-script';

export default Scene.extend(ReplayableScriptMixin, {
  start: task(function * (script) {
    yield script.text('engines.direction.text.attribute.instant.line1', { caption: 'engines.direction.text.attribute.instant.ember' });
    yield script.text('engines.direction.text.attribute.instant.line2', { caption: 'engines.direction.text.attribute.instant.diy' });
    yield script.text('engines.direction.text.attribute.instant.line3', { instant: true, caption: 'engines.direction.text.attribute.instant.ember' });

    this.get('replay').perform(script);
  })
});
