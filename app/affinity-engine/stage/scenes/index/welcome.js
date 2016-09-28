import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script) {
    script.backdrop('diy-bedroom').fadeIn();
    const diy = script.character('diy').position('centerLeft').transition({ top: 0 }).fadeIn();
    const ember = script.character('ember').position('right').transition({ top: 0 }).fadeIn();
  })
});
