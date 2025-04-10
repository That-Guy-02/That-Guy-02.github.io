// Array of video file names
const videos = ["video01.mp4", "video02.mp4", "video03.mp4"];
const videoFolder = "videos/";

const mainVideo = document.getElementById("mainVideo");
const textBox = document.getElementById("textBox");

let currentVideoIndex = 0;
let videoTimeStamps = Array(videos.length).fill(0);

// Load and play the initial video
mainVideo.src = videoFolder + videos[currentVideoIndex];
mainVideo.currentTime = videoTimeStamps[currentVideoIndex];
mainVideo.muted = false;
mainVideo.play();

// Handle text box click to switch video
textBox.addEventListener("click", () => {
  // Save the current video's playback time
  videoTimeStamps[currentVideoIndex] = mainVideo.currentTime;

  // Pick a new video index different from the current one
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * videos.length);
  } while (newIndex === currentVideoIndex);

  // Switch to the new video
  currentVideoIndex = newIndex;
  mainVideo.src = videoFolder + videos[currentVideoIndex];
  mainVideo.currentTime = videoTimeStamps[currentVideoIndex];
  mainVideo.play();
});
