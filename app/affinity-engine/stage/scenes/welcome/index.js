import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script) {
    const bedroom = script.backdrop('diy-bedroom').fadeIn();
    const stage = script.layer('engine.stage').transition({ translateY: '20%', translateX: '13%', opacity: 0 }, 0);
    const ember = script.character('ember').state({ eyes: 'left', expression: 'proud' }).fadeIn();
    const diy = script.character('diy').transition({ translateZ: '-5px', translateY: '-5%' }).fadeIn();

    yield diy._.text("Uh, this is embarrassing. [[pause 750]] I can't get the camera on.");
    yield ember._.text("I think you have to click that button.");
    yield diy._.text("This one? [[pause 500]] Oh, right.");

    yield script.pause(100);

    stage.transition({ opacity: 1 });

    yield script.pause(750);

    diy.expression('excited');

    yield script.pause(250);
    ember.delay(250).state({ eyes: 'neutral' }).delay(250);
    const bingoText = diy._.text('Bingo! [[pause 500]] [[expression neutral]] Now just one more sec while I get it adjusted. [[pause 750]] And');

    yield script.pause(1500);
    diy.transition({ translateZ: '50px', translateY: '5%', left: '50%' }, 1000);
    ember.delay(250).state({ eyes: 'neutral' });
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

    ember.state({ eyes: 'left' });
    yield diy.expression('smiling')._.text("Hi everyone! [[pause 750]] My name's Diy.");
    diy.state({ expression: 'neutral', eyes: 'right' });
    yield ember.state({ eyes: 'neutral', expression: 'smiling' })._.text("Hey! [[pause 750]] [[expression proud]] I'm Ember.");
    ember.expression('neutral');
    yield diy.state({ eyes: 'neutral', expression: 'smiling' })._.text("We'd like to welcome you to the Affinity Engine website! [[pause 500]] [[expression excited]] Ember and I will be your tour guides.");
    diy.state({ eyes: 'neutral', expression: 'neutral' });
    yield ember.expression('smiling')._.text("In particular, we're going to show you how to use the Affinity Engine to make games.");
    ember.delay(500).state({ expression: 'neutral', eyes: 'left' });
    yield diy.state({ expression: 'excited', eyes: 'right' }).state({ brows: 'down' }, 325).state({ brows: 'up' }, 325)._.text("Games you'll love.");
    diy.state({ brows: 'neutral' });
    yield ember._.text("Yes, [[pause 500]] [[expression smiling]] games you'll love, [[pause 500]] [[expression proud]] [[pause 250]] [[cps *0.95]] even the schmaltzy ones.");
    yield script.pause(250);
    yield diy.state({ eyes: 'neutral', expression: 'smiling' })._.text("Seriously, we hope you try. [[pause 500]] [[expression neutral]] It's what Ember and I are here for. [[pause 500]] [[expression excited]] We want to help you bring something beautiful into this world. &#x02764; &#x02764; &#x02764;");
    diy.state({ eyes: 'right', expression: 'neutral' });
    yield ember.state({ expression: 'smiling', eyes: 'neutral' })._.text("And there's no better way than to get started. [[pause 500]] [[state (hash eyes=left expression=proud)]] Right?");
    ember.delay(250).expression('neutral');
    yield diy.state({ eyes: 'neutral', expression: 'smiling' })._.text("Right! [[pause 500]] You'll find everthing you need here in the docs. [[pause 500]] Hope we get to talk again soon, though!");
    yield ember.expression('proud')._.text("I'm sure we will. [[pause 400]] [[state (hash eyes=neutral expression=smiling)]] [[pause 350]] Be seeing you all around!");

    diy.delay(50).state({ eyes: 'right' });
    ember.delay(150).state({ eyes: 'left', expression: 'proud' });

    script.layer('engine').transition({ opacity: 0 }, 750);
  })
});
