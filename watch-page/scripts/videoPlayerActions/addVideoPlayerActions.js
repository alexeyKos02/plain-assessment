import {fetchVideoInfo} from "./fetchVideo.js";
import {videoURL} from "../../links/videoLinks.js";

function changeVideoPlayerDomTree(id) {
    const videoPlayer = document.getElementById("video-player")
    videoPlayer.src = videoURL + id
}

function changeVideoPlayerInfoDomTree(video) {
    const viewsCount = document.getElementById("views-count")
    viewsCount.textContent = video.views
    const title = document.getElementById("video-title")
    title.textContent = video.title
    const description = document.getElementById("video-description")
    description.textContent = video.description
}

export function displayVideo(id) {
    fetchVideoInfo(id).then((response) => {
        response.json().then((video) => {
            changeVideoPlayerInfoDomTree(video)
            changeVideoPlayerDomTree(video.vimeoId)
        })
    }).catch(error => alert("Ошибка при получении видео" + error.status))
}
