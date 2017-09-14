import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';
import ReplayableScriptMixin from 'affinity-engine-web/mixins/replayable-script';

export default Scene.extend(ReplayableScriptMixin, {
  start: task(function * (script) {
    yield script.text('engines.tutorial.basics.micTest', { caption: 'Diy', classNames: 'ae-coastal ae-block' });
    yield script.text('engines.tutorial.basics.hearingYou', { caption: 'Ember', captionPosition: 'right', classNames: 'ae-coastal ae-block' });

    this.get('replay').perform(script);
  })
});
