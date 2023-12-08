import {videoInfoURL, videoURL} from "../../links/videoLinks.js";

export async function fetchVideoInfo(id) {
    return await fetch(videoInfoURL + id)
}