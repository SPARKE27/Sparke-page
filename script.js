const audioElement = document.getElementById("bg-music");
const tracks = [
  "ncs1.mp3", // Replace with your actual track paths
  "ncs2.mp3",
  "ncs3.mp3"
];

let currentTrack = 0;

// Play/Pause functionality
function toggleMusic() {
  audioElement.muted = false; // Unmute the audio on first play
  if (audioElement.paused) {
    audioElement.play().catch((err) => {
      console.warn("Playback failed:", err);
    });
  } else {
    audioElement.pause();
  }
}

// Skip to next track
function nextTrack() {
  currentTrack = (currentTrack + 1) % tracks.length;
  audioElement.src = tracks[currentTrack];
  audioElement.play();
}

// Skip to previous track
function prevTrack() {
  currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
  audioElement.src = tracks[currentTrack];
  audioElement.play();
}

// Change volume
function changeVolume(event) {
  audioElement.volume = event.target.value / 100;
}

// Set initial track
audioElement.src = tracks[currentTrack];
audioElement.volume = 0.5; // Default volume
audioElement.loop = true; // Ensure the track loops
audioElement.addEventListener("ended", () => {
  currentTrack = (currentTrack + 1) % tracks.length; // Move to the next track
  audioElement.src = tracks[currentTrack]; // Update the source
  audioElement.play(); // Play the next track
});





