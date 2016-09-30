import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script) {
    script.backdrop('diy-bedroom').fadeIn();
    const diy = script.character('diy').transition({ left: '17%', top: '-4%' }).fadeIn();
    const ember = script.character('ember').transition({ left: '83%', top: '1%' }).fadeIn();

    yield ember.expression('smiling')._.text('engines.index.emberIntro');
    yield diy.expression('smiling')._.text('engines.index.diyIntro');
    yield ember.expression('proud')._.text('engines.index.emberAffinityIntro');
    yield diy._.text('engines.index.diyDocumentation');
    yield ember._.text('engines.index.emberDocumentation');
    yield diy.expression('default')._.text('engines.index.diyCheckIn');
    yield ember.expression('obviously')._.text('engines.index.emberMailingList');
    yield diy.expression('excited')._.text('engines.index.diyKickstarter');
    yield ember._.text('engines.index.emberKickstarter');
    yield diy.expression('smiling')._.text('engines.index.diyReadMore');
    yield ember.expression('proud')._.text('engines.index.emberOpensource');
    yield diy._.text('engines.index.diyBrowser');
    yield ember._.text('engines.index.emberModular');
    yield diy.expression('excited')._.text('engines.index.diyEasyScripts');
    yield ember.expression('smiling')._.text('engines.index.emberBye');
    yield diy.expression('excited')._.text('engines.index.diyBye');

    yield script.pause(500);

    script.layer('engine').transition({ opacity: 0 }, 750);
  })
});
