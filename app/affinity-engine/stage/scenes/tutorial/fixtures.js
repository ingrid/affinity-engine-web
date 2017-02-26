import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script) {
    script.character('ember').position('bottom right').fadeIn();
    yield script.character('diy').position('bottom left').fadeIn();

    yield script.text("I'd like to use your eyeliner.").name('Ember').namePosition('right');
    script.text("Feel free!").name('Diy');
  })
});
