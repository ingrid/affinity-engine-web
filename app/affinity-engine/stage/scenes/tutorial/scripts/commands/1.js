import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script) {
    yield script.text("Mic test, mic test.", { caption: 'Diy' });
    script.text("Hearing you loud and clear!", { caption: 'Ember', captionPosition: 'right' }).transition({ effect: { opacity: 0.5 }, duration: 500 });
  })
});
