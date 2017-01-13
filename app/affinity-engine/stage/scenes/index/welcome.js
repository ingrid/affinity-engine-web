import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script) {
    const bedroom = script.backdrop('diy-bedroom').fadeIn();
    const stage = script.layer('engine.stage').transition({ translateY: '20%', translateX: '13%', opacity: 0 }, 0);
    const ember = script.character('ember').transition({ left: '83%', top: '1%', translateX: '-50%' }).fadeIn();
    const diy = script.character('diy').transition({ left: '32%', top: '-4%', translateZ: '-5px', translateX: '-50%', translateY: '-10%' }).fadeIn();

    yield diy._.text("Uh, this is embarrassing. [[pause 750]] I can't get the camera on.");
    yield ember._.text("I think you have to click that button.");
    yield diy._.text("This one? [[pause 500]] Oh, right.");

    yield script.pause(100);

    stage.transition({ opacity: 1 });

    yield script.pause(750);

    diy.expression('excited');

    yield script.pause(250);

    const bingoText = diy._.text('Bingo! [[pause 500]] [[expression neutral]] Now just one more sec while I get it adjusted. [[pause 750]] And');

    yield script.pause(1500);
    diy.transition({ translateZ: '50px', translateY: '10%', left: '50%' }, 1000).transition({ translateZ: '50px' }, 750, { queue: 'closer' });
    yield script.pause(500);
    stage.transition({ translateY: '-6%', translateX: '1%', rotateZ: '3deg' }, 750).then(() => {
      stage.transition({ translateY: '2%', translateX: '-1%', rotateZ: '-1deg' }, 750).then(() => {
        stage.transition({ translateY: 0, translateX: 0, rotateZ: 0 }, 400);
      });
    });

    yield script.pause(2000);

    bingoText.close();

    yield diy._.text('Perfect.');
    diy.transition({ translateZ: 0, translateY: 0, left: '32%' }, 1250);
    yield script.pause(250);

    yield diy.expression('smiling')._.text("Hi everyone! [[pause 750]] My name's Diy.");
    diy.state({ expression: 'neutral', eyes: 'right' });
    yield ember.expression('smiling')._.text("Hey! [[pause 750]] [[expression proud]] I'm Ember.");
    ember.expression('neutral');
    yield diy.state({ eyes: 'neutral', expression: 'smiling' })._.text("And welcome to the Affinity Engine website. [[pause 500]] [[expression excited]] Ember and I will be your tour guides.");
    diy.state({ eyes: 'neutral', expression: 'neutral' });
    yield ember.expression('smiling')._.text("In particular, we're going to show you how to use the Affinity Engine to make games.");
    ember.expression('neutral');
    yield diy.state({ expression: 'excited', eyes: 'right' })._.text("Games you'll love.");
    yield ember.state({ eyes: 'left' }).delay(400).state({ eyes: 'rolled', expression: 'bemused' }).delay(150);
    yield ember.state({ eyes: 'left', expression: 'proud' })._.text("Yes, [[pause 500]] games you'll love.");
    yield script.pause(250);
    yield diy.state({ eyes: 'neutral', expression: 'smiling' })._.text("In all seriousness, I hope you try. [[pause 500]] [[expression neutral]] It's what Ember and I are here for. [[pause 500]] [[expression excited]] We want to help you bring something beautiful into this world. &#x02764; &#x02764; &#x02764;");
    diy.state({ eyes: 'right', expression: 'neutral' });
    yield ember.expression('smiling')._.text("And on that cherry note, [[pause 250]] [[expression neutral]] let's let them get to it.");
    ember.delay(100).state({ eyes: 'neutral', expression: 'neutral' });
    yield diy.state({ eyes: 'neutral', expression: 'smiling' })._.text("Oh, right! [[pause 500]] Hope we get to talk again soon!");
    yield ember.expression('smiling')._.text("You'll find our little vingettes peppered throughout the documentation. [[pause 500]] Be seeing you around!");

    ember.delay(50).state({ eyes: 'left', expression: 'proud' });

    script.layer('engine').transition({ opacity: 0 }, 750);
  })
});
