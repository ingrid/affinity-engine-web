import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';
import ReplayableScriptMixin from 'affinity-engine-web/mixins/replayable-script';

export default Scene.extend(ReplayableScriptMixin, {
  start: task(function * (script) {
    yield script.text('engines.direction.text.attribute.class-names.line1', { caption: 'engines.direction.text.attribute.class-names.ember' });
    yield script.text('engines.direction.text.attribute.class-names.line2', { classNames: ['ae-text ae-paper ae-bottom-block', 'class-names-demo-rumble'] });
    yield script.text('engines.direction.text.attribute.class-names.line3', { caption: 'engines.direction.text.attribute.class-names.ember' });
    yield script.text('engines.direction.text.attribute.class-names.line4', { caption: 'engines.direction.text.attribute.class-names.ember', classNames: ['ae-text ae-paper ae-bottom-block', 'class-names-demo-spin'] });
    yield script.text('engines.direction.text.attribute.class-names.line5', { caption: 'engines.direction.text.attribute.class-names.ember', classNames: ['ae-text ae-paper ae-bottom-block', 'class-names-demo-sparkle'] });
    yield script.text('engines.direction.text.attribute.class-names.line6', { caption: 'engines.direction.text.attribute.class-names.ember', classNames: ['ae-text ae-paper ae-bottom-block', 'class-names-demo-sparkle', 'class-names-demo-spin'] });

    this.get('replay').perform(script);
  })
});
