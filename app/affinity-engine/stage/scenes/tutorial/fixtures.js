import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script) {
    script.character('diy').position('left').fadeIn();
    yield script.character('ember').position('right').fadeIn();

    yield script.text("Mic test, mic test.", { caption: 'Diy' });
    script.text("Hearing you loud and clear!", { caption: 'Ember', captionPosition: 'right' });
  })
});
