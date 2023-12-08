import {displayVideo} from "../videoPlayerActions/addVideoPlayerActions.js";

export function changePlaylistDomTree() {
    const playlist = document.getElementById("playlist-wrapper")
    const videos = playlist.querySelectorAll(".playlist-card")
    for (let video of videos) {
        video.addEventListener("click", (e) => {
            const v = video.id
            let id = Number(String(video.id).replace("card", ""))
            const currentVideoDiv = document.querySelector(".active-card")
            currentVideoDiv.className = "playlist-card"
            const nextVideoDiv = document.getElementById("card" + id)
            nextVideoDiv.className += " active-card"
            window.scrollTo(0, 0);
            displayVideo(id)
        })
    }
}