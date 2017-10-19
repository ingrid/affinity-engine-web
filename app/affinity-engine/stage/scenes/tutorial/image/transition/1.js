import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';
import ReplayableScriptMixin from 'affinity-engine-web/mixins/replayable-script';

export default Scene.extend(ReplayableScriptMixin, {
  start: task(function * (script) {
    yield script.image('diy').fadeIn().transition({ effect: { left: '50%' }, duration: 1000 }).transition({ effect: { translateZ: '-50px' }, duration: 1000 });

    this.get('replay').perform(script);
  })
});
