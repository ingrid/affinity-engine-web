import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';
import ReplayableScriptMixin from 'affinity-engine-web/mixins/replayable-script';

export default Scene.extend(ReplayableScriptMixin, {
  start: task(function * (script) {
    const diy = script.character({
      links: {
        all: {
          attrs: {
            caption: 'Diy'
          }
        }
      }
    });
    const ember = script.character({
      links: {
        all: {
          attrs: {
            caption: 'Ember',
            captionPosition: 'right'
          }
        }
      }
    });

    yield diy._.text("engines.tutorial.text.textTutorial.style");
    yield ember._.text("engines.tutorial.text.bestTutorial.tagless");
    yield diy._.text("engines.tutorial.text.favorite.tagless");

    this.get('replay').perform(script);
  })
});
