import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector('video')
const playbutton = document.getElementById('PlayButton');
const mutebutton = document.getElementById('MuteButton');

const player = new MediaPlayer({el: video, plugins: [
    new AutoPlay(),
    new AutoPause()
]});

playbutton.onclick = () => player.togglePlay();
mutebutton.onclick = () => player.toggleMute();

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    })
}