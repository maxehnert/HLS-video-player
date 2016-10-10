const video = document.getElementById('hls-video');
const channelsPostfix = document.querySelectorAll('.channel');
const streamURLPostfix = '.m3u8';


const clickChannel = () => {
  console.log(event.target.dataset.channel);
  // let newStream = `${streamUrlPrefix}${event.target.dataset.channel}${streamURLPostfix}`;
  let newStream = 'http://cf2.myomnibox.com/slc-rc-2/cnn/playlist.m3u8';
  console.log(video.src);

  hls.destroy();

   hls = new Hls();

  hls.attachMedia(video);
  hls.on(Hls.Events.MEDIA_ATTACHED,function() {
    hls.loadSource(newStream);

    hls.on(Hls.Events.MANIFEST_PARSED, function(event,data) {
     console.log("manifest loaded, found " + data.levels.length + " quality level");
   });
 });
};

Array.from(channelsPostfix, el => el.addEventListener('click', clickChannel, false));



let hls = new Hls();
// bind them together
hls.attachMedia(video);
hls.on(Hls.Events.MEDIA_ATTACHED,function() {
    console.log("video and hls.js are now bound together !");
    const loadInitialChannel = document.querySelector('.marketing ul > li').dataset.channel;
    // hls.loadSource(`${streamUrlPrefix}${loadInitialChannel}${streamURLPostfix}`);
    // hls.loadSource("http://www.streambox.fr/playlists/x36xhzz/x36xhzz.m3u8");
    // hls.loadSource('http://cf2.myomnibox.com/slc-rc-1/cbssports_temp/playlist.m3u8');
    hls.loadSource('http://cf2.myomnibox.com/slc-rc-2/cnn/playlist.m3u8');
    hls.on(Hls.Events.MANIFEST_PARSED, function(event,data) {
     console.log("manifest loaded, found " + data.levels.length + " quality level");
   });
 });
