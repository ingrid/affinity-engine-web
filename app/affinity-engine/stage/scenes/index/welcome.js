import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script) {
    script.backdrop('diy-bedroom').fadeIn();
    const diy = script.character('diy').transition({ left: '17%', top: '-4%' }).fadeIn(750);
    const ember = script.character('ember').transition({ left: '83%', top: '1%' }).fadeIn(750);

    yield script.pause(1250);

    yield ember._.text('engines.index.emberIntro');
    yield diy._.text('engines.index.diyIntro');
    diy.expression('default');
    yield ember._.text('engines.index.emberAffinityIntro');
    ember.expression('default');
    yield diy._.text('engines.index.diyDocumentation');
    yield ember._.text('engines.index.emberDocumentation');
    yield diy._.text('engines.index.diyCheckIn');
    yield ember._.text('engines.index.emberMailingList');
    ember.expression('default');
    yield diy._.text('engines.index.diyKickstarter');
    diy.expression('default');
    yield ember._.text('engines.index.emberKickstarter');
    yield diy._.text('engines.index.diyReadMore');
    diy.expression('default');
    yield ember._.text('engines.index.emberOpensource');
    ember.expression('default')
    yield diy._.text('engines.index.diyBrowser');
    yield ember._.text('engines.index.emberModular');
    ember.expression('default')
    yield diy._.text('engines.index.diyEasyScripts');
    diy.expression('default');
    yield ember._.text('engines.index.emberBye');
    yield diy._.text('engines.index.diyBye');

    yield script.pause(150);

    ember.expression('default');

    yield script.pause(125);

    diy.expression('default');

    yield script.pause(250);

    script.layer('engine').transition({ opacity: 0 }, 750);
  })
});
