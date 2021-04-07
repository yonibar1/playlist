import axios from 'axios';
import { storageService } from './storage.service';

async function loadVideos(keyWord) {
    const res = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${keyWord}&maxResults=5&order=viewCount&key=AIzaSyBcH4OmsIRtxC5g6j39XtU04btQ54xP9rE`
    );
    storageService.store('videos', res.data.items);
    return res.data.items;
}

export const youtubeService = {
  loadVideos,
};
