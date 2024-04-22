import { loadingMessage } from "./loading";

var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.YTPlayer = null
    function pegaId(url){
        const [part1, part2] = url.split('?v=')
        const[videoId] = part2.split('&')
        return videoId
    }
export function loadVideo(url){
    loadingMessage('Carregando video do youtube')
    
    return new Promise((resolve, reject)=>{
    window.YTPlayer = new YT.Player('youtubeVideo',{
        videoId: pegaId(url),
        events: {
            'onReady':() => resolve()
        }
    })
})   
}