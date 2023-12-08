import {videoInfoURL, videoURL} from "../../links/videoLinks.js";

export async function fetchVideoInfo(id) {
    return await fetch(videoInfoURL + id)
}

export async function fetchVideo(id) {
    return await fetch(videoURL + id)
}