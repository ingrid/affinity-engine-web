import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';
import ReplayableScriptMixin from 'affinity-engine-web/mixins/replayable-script';

export default Scene.extend(ReplayableScriptMixin, {
  start: task(function * (script) {
    script.character('diy').position('left').fadeIn();
    yield script.character('ember').position('right').fadeIn();

    yield script.text('engines.tutorial.basics.micTest', { caption: 'Diy' });
    yield script.text('engines.tutorial.basics.hearingYou', { caption: 'Ember', captionPosition: 'right' });

    this.get('replay').perform(script);
  })
});
