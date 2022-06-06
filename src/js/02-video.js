import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import '../css/common.css';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let saveTimeFromLocalStorage = localStorage.getItem('videoplayer-current-time');

player.on('timeupdate', throttle(setItemFromLocalStorage, 1000));

function setItemFromLocalStorage({ seconds }) {
  console.log('hello start');

  localStorage.setItem('videoplayer-current-time', seconds);
}

player.setCurrentTime(saveTimeFromLocalStorage);






// const iframe = document.querySelector('iframe');
// const player = new Vimeo.Player(iframe);



// const onPlay = function(data) {
//     // data is an object containing properties specific to that event
// };
// player.on('play', onPlay);


// // ON
// player.on('eventName', function(data) {
//     // data is an object containing properties specific to that event
// });