import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';
import ReplayableScriptMixin from 'affinity-engine-web/mixins/replayable-script';

export default Scene.extend(ReplayableScriptMixin, {
    start: task(function * (script) {
      const diy = script.character('diy');

      yield script.text('engines.direction.text.attribute.transition-in.announcer1', { caption: 'engines.direction.text.attribute.transition-in.announcer' });
      yield script.text('engines.direction.text.attribute.transition-in.announcer2', { caption: 'engines.direction.text.attribute.transition-in.announcer' });
      yield diy._.text('engines.direction.text.attribute.transition-in.diy1');
      yield script.text('engines.direction.text.attribute.transition-in.announcer3', { caption: 'engines.direction.text.attribute.transition-in.announcer' });
      yield diy._.text('engines.direction.text.attribute.transition-in.diy2', { transitionIn: { effect: { translateX: ['0%', '-100%'], opacity: [1, 1]}, duration: 1200 }, instant: true });
      yield script.text('engines.direction.text.attribute.transition-in.announcer4', { caption: 'engines.direction.text.attribute.transition-in.announcer' });

      this.get('replay').perform(script);
    })
});
