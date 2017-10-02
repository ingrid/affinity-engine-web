import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';
import ReplayableScriptMixin from 'affinity-engine-web/mixins/replayable-script';

export default Scene.extend(ReplayableScriptMixin, {
  start: task(function * (script) {
    const diy = script.character('diy');
    const ember = script.character('ember');

    yield diy._.text('engines.direction.text.attribute.class-names.diy1');
    yield diy._.text('engines.direction.text.attribute.class-names.diy2', { classNames: ['ae-full ae-paper'] });
    yield diy._.text('engines.direction.text.attribute.class-names.diy3', { classNames: ['ae-block ae-coastal'] });
    yield diy._.text('engines.direction.text.attribute.class-names.diy4', { classNames: ['ae-full ae-coastal'] });
    yield diy._.text('engines.direction.text.attribute.class-names.diy5', { classNames: ['ae-block ae-transparent'] });
    yield diy._.text('engines.direction.text.attribute.class-names.diy6', { classNames: ['ae-full ae-transparent'] });
    yield diy._.text('engines.direction.text.attribute.class-names.diy7');
    yield script.pause(150);
    yield ember._.text('engines.direction.text.attribute.class-names.ember1');
    yield script.text('engines.direction.text.attribute.class-names.ember2', { classNames: ['ae-text ae-paper ae-bottom-block', 'class-names-demo-rumble'] });
    yield ember._.text('engines.direction.text.attribute.class-names.ember3');
    yield ember._.text('engines.direction.text.attribute.class-names.ember4', {classNames: ['ae-text ae-paper ae-bottom-block', 'class-names-demo-spin'] });
    yield ember._.text('engines.direction.text.attribute.class-names.ember5', {classNames: ['ae-text ae-paper ae-bottom-block', 'class-names-demo-sparkle'] });
    yield ember._.text('engines.direction.text.attribute.class-names.ember6', {classNames: ['ae-text ae-paper ae-bottom-block', 'class-names-demo-sparkle', 'class-names-demo-spin'] });

    this.get('replay').perform(script);
  })
});
