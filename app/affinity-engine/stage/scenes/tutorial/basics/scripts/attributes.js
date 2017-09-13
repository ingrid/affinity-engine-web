import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script) {
    yield script.text('engines.tutorial.basics.micTest', { caption: 'Diy' });
    script.text('engines.tutorial.basics.hearingYou', { caption: 'Ember', captionPosition: 'right' });
  })
});
