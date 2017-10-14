import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';
import ReplayableScriptMixin from 'affinity-engine-web/mixins/replayable-script';

export default Scene.extend(ReplayableScriptMixin, {
  start: task(function * (script) {
    const ember = script.character('ember');

    yield ember._.text('engines.direction.text.attribute.transition-out.ember1');
    yield ember._.text('engines.direction.text.attribute.transition-out.ember2', { transitionOut: { effect: { translateY: ['-100%', '0%'], opacity: [0, 1]}, duration: 1200 }});

    this.get('replay').perform(script);
  })
});
