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

    script.text("engines.tutorial.text.title", { static: true, classNames: ['ae-paper ae-caption ae-caption-center'] });

    yield diy._.text("engines.tutorial.text.textTutorial.entity");

    const flash = (duration, loops) => {
      script.layer('stage').transition({ effect: { opacity: 0 }, duration: duration / (loops * 2), loop: loops });
    }
    const spin = (duration) => {
      script.layer('stage').transition({ effect: { rotateZ: '360deg' }, duration: duration });
    }
    yield ember._.text("engines.tutorial.text.bestTutorial.cb", { callbacks: { flash, spin } });
    yield diy._.text("engines.tutorial.text.favorite.rateClosing");

    this.get('replay').perform(script);
  })
});
