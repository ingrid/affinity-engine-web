import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script) {
    yield script.text('engines.tutorial.micTest', { caption: 'Diy' });
    script.text('engines.tutorial.hearingYou', { caption: 'Ember', captionPosition: 'right' }).transition({ effect: { opacity: 0.5 }, duration: 500 });
  })
});
