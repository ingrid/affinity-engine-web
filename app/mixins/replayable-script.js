import Ember from 'ember';
import { task } from 'ember-concurrency';

export default Ember.Mixin.create({
  replay: task(function * (script, id) {
    script.layer('stage.image').transition({ effect: { opacity: 0.1 }, duration: 750 });

    yield script.pause(350);
    yield script.menu([{ text: 'engines.replay', icon: { type: 'refresh' } }]);

    script.layer('stage.image').transition({ effect: { opacity: 0.00001 }, duration: 250 });
    yield script.pause(350);

    script.scene(id || get(this, '_id'));
  })
});
