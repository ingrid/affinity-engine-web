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

    const shake = (duration, rotation) => {
      script.layer('stage').transition({ effect: { rotateZ: rotation }, duration: duration / 8, loop: 4, easing: 'easeInOutSine' });
    }
    const jump = (duration) => {
      script.layer('stage').transition({ effect: { translateY: '-15%' }, duration: duration / 8, loop: 4, easing: 'easeInOutSine' });
    }
    yield ember._.text("engines.tutorial.text.bestTutorial.cb", { callbacks: { shake, jump } });
    yield diy._.text("engines.tutorial.text.favorite.rateClosing");

    this.get('replay').perform(script);
  })
});
