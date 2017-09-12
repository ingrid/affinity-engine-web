import Ember from 'ember';
import { task } from 'ember-concurrency';

export default Ember.Mixin.create({
  replay: task(function * (script) {
    yield script.menu([{ text: 'replay?', icon: { type: 'refresh' } }]);
    yield script.layer('stage').transition({ effect: { opacity: 0 }, duration: 250 });
    script.scene(get(this, '_id'));
  })
});
