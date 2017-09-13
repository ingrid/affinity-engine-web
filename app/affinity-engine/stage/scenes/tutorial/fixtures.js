import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script) {
    script.character('diy').position('left').fadeIn();
    yield script.character('ember').position('right').fadeIn();

    yield script.text('engines.tutorial.micTest', { caption: 'Diy' });
    script.text('engines.tutorial.hearingYou', { caption: 'Ember', captionPosition: 'right' });
  })
});
