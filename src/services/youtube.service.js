import axios from 'axios';
import { storageService } from './storage.service';

async function loadVideos(keyWord = 'omer adam') {
  const data = storageService.load('videos');
  if (!data || !data.length) {
    console.log('Axios');
    const res = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${keyWord}&maxResults=10&order=viewCount&key=AIzaSyBcH4OmsIRtxC5g6j39XtU04btQ54xP9rE`
    );
    console.log('res:', res.data);
    storageService.store('videos', res.data.items);
    return res.data.items;
  } else return data;
}

export const youtubeService = {
  loadVideos,
};
