import axios from 'axios'
import {storageService} from './storage.service'

async function loadVideos(keyWord='shlomo artzi') {
    const data = storageService.load('videos')
    if(!data || !data.length){
        console.log('Axios');
        console.log(keyWord,'KeyWord');
        const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${keyWord}&maxResults=10&order=viewCount&key=AIzaSyBcH4OmsIRtxC5g6j39XtU04btQ54xP9rE`)
        storageService.store('videos',res.data.items)
        console.log(res.data.items);
        return res.data.items
    }
    else return data
}

export const youtubeService = {
    loadVideos
}
