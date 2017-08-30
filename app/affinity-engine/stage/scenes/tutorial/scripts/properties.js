import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script) {
    yield script.text("Whoa! This is really cool!", { name: 'Diy', namePosition: 'right' });
    script.text("Yeah? Let me see.", { name: 'Ember' });
  })
});
