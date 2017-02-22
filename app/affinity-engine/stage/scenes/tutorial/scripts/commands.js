import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script) {
    yield script.text('How would you like some quinoa salad?').name('Diy');
    script.text('I would love some!').name('Ember').namePosition('right');
  })
});
