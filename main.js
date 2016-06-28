var data = {
    red: {
        title: 'Red',
        body: 'Russian blue eat prawns daintily with a claw then lick paws clean wash down prawns with a lap of carnation milk then retire to the warmest spot on the couch to claw at the fabric before taking a catnap get video posted to internet for chasing red dot. Attack feet thug cat but vommit food and eat it again for nap all day, yet my left donut is missing, as is my right hunt anything that moves play time. Stare at ceiling vommit food and eat it again, this human feeds me, i should be a god roll on the floor purring your whiskers off destroy couch as revenge, or find empty spot in cupboard and sleep all day. Pee in the shoe. Sit on the laptop flop over plan steps for world domination jump around on couch, meow constantly until given food, so meow for food, then when human fills food dish, take a few bites of food and continue meowing but toy mouse squeak roll over. Sleep nap. Destroy the blinds sun bathe, but attack the dog then pretend like nothing happened, but find something else more interesting, so claw drapes loves cheeseburgers.'
    },

    green: {
        title: 'Green',
        body: 'Kitty scratches couch bad kitty. Lie on your belly and purr when you are asleep. Wake up wander around the house making large amounts of noise jump on top of your human\'s bed and fall asleep again hack up furballs lick arm hair for stare at wall turn and meow stare at wall some more meow again continue staring for cat snacks. Intently stare at the same spot hola te quiero favor packaging over toy lick butt and make a weird face. Kitty power! Get video posted to internet for chasing red dot eat from dog\'s food for sleep on keyboard. Scream at teh bath hack up furballs for poop in the plant pot kitty power! or hide when guests come over.'
    },

    blue: {
      title: 'Blue',
      body: 'Meow all night having their mate disturbing sleeping humans sniff other cat\'s butt and hang jaw half open thereafter attack dog, run away and pretend to be victim use lap as chair play riveting piece on synthesizer keyboard roll on the floor purring your whiskers off or chew foot. Intently stare at the same spot sit by the fire for scratch at the door then walk away, lie on your belly and purr when you are asleep walk on car leaving trail of paw prints on hood and windshield. Soft kitty warm kitty little ball of furr destroy couch as revenge, so peer out window, chatter at birds, lure them to mouth scratch the furniture pelt around the house and up and down stairs chasing phantoms or fall over dead (not really but gets sympathy).'
    }
};
//displays all data for each tab
// console.log(data);

var anchors = document.querySelectorAll('a');
//pull anchor tags


function hoverEvent(evt) {
  for (i=0; i < anchors.length; i++) {
  anchors[i].classList.remove('hover');
  }
  evt.target.classList.add('hover');
}
//changes background color of links when moused over
//how do you get background color to go away when not mousing over a link?
//mdn -- setTimeout
// setTimeout(function() {
//       evt.target = "";
//     }, 500);
//   } false;

  for (i=0; i < anchors.length; i++) {
  anchors[i].addEventListener('mouseover', hoverEvent); }

function renderContent(whatContent) {
  document.querySelector('.content h1').textContent = data[whatContent].title;
  document.querySelector('.content main').textContent = data[whatContent].body;
}
//function renders content that pulls from variable and places into html element

window.addEventListener('hashchange', function() {
  var dataToRender = location.hash.slice(1);
  //removes # so variable changes to name of data that is clicked
  renderContent(dataToRender);
});

renderContent('red');
//call function so default page has content
