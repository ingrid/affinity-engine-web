import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script) {
    yield script.text("Mic test, mic test!", { caption: 'Diy' });
    script.text("Sounds good.", { caption: 'Ember', captionPosition: 'right' });
  })
});
