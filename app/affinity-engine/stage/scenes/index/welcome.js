import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script) {
    script.backdrop('diy-bedroom').fadeIn();
    const diy = script.character('diy').position('left').transition({ top: 0 }).fadeIn();
    const ember = script.character('ember').position('centerRight').transition({ top: 0 }).fadeIn();

    yield ember._.text('Hello');
  })
});
