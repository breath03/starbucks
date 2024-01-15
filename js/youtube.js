// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  // 밑에의 매개변수에서의 player는 html에서의 player라는 id를 가진 태그(?) <div id="player"></div> 를 의미하는 것
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', // videoId값은 최초 재생할 유튜브 영상 ID를 의미한다.
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      onReady: function(event) {
        event.target.mute(); //음소거
      }
    }
  });
}