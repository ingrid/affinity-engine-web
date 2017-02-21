import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script) {
    yield script.text('This is my first direction!');
    script.text('And now that that is out of the way, let us proceed with our second direction.');
  })
});
