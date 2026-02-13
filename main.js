// Music Play Button
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

let playing = false;

musicBtn.addEventListener("click", () => {
  if (!playing) {
    bgMusic.play();
    musicBtn.textContent = "⏸ Pause Music";
    playing = true;
  } else {
    bgMusic.pause();
    musicBtn.textContent = "🎵 Play Our Song";
    playing = false;
  }
});