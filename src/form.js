import {startLoading, stopLoading,loadingMessage} from './loading'
import { pegaId,loadVideo } from './yt-api'

const form = document.querySelector('#form')

form.addEventListener('submit', async (e)=>{
    e.preventDefault()
    try{
        loadingMessage("Conectando com o backend")
        startLoading()
        const formData = new FormData(form)
        const url = formData.get('url')
        //ele espera o promise ser feito
        await loadVideo(url)
        //depois substituir esse link por
        await axios.get('http://localhost:3333/audio?v='+ pegaId(url))
    }catch(error){
        console.log('[SUBMIT_ERROR]',error)
    } finally{
        stopLoading()
    }
})