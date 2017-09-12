import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script) {
    script.text("Mic test, mic test!");
    script.text("Hearing you loud and clear!");
  })
});
