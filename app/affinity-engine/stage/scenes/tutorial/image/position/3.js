import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';
import ReplayableScriptMixin from 'affinity-engine-web/mixins/replayable-script';

export default Scene.extend(ReplayableScriptMixin, {
  start: task(function * (script) {
    yield script.image('diy', { positions: { superCustom: {
      left: '38%',
      translateX: '-50%',
      rotateY: '25deg'
    } } }).fadeIn().position('superCustom', { duration: 1000 });

    this.get('replay').perform(script);
  })
});
