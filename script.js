// Getting the elements
const body = document.querySelector('body');
const lightsOut0 = document.querySelectorAll('.lightsOut0');
const lightsOut1 = document.querySelectorAll('.lightsOut1');
const lightsOut2 = document.querySelectorAll('.lightsOut2');
const lightsOut3 = document.querySelectorAll('.lightsOut3');
const lightsOut4 = document.querySelectorAll('.lightsOut4');

//An array of all the lights elements(column of lights) to be used in a loop
const lightsArray = [
  lightsOut0,
  lightsOut1,
  lightsOut2,
  lightsOut3,
  lightsOut4,
];

let lightsRunning = false;

body.addEventListener('click', function () {
  //   setTimeout(function () {
  //     for (let i = 0; i < lightsArray.length; i++) {
  //       turnOffLights(lightsArray[i]);
  //     }
  //   }, 2000);

  //This doesn't work
  //   for (let i = 0; i < lightsArray.length; i++) {
  //     setTimeout(turnOffLights(lightsArray[i]), i * 1000);
  //   }

  for (let i = 0; i < lightsArray.length; i++) {
    setTimeout(function () {
      turnOffLights(lightsArray[i]);
    }, i * 1200);
  }
});

//Turn Off Lights function that takes in a nodelist(column of lights) then turns off those lights
const turnOffLights = function (nodelist) {
  for (const light of nodelist) {
    light.style.backgroundColor = 'red';
  }
};
