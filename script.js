let steps = 0;
let goal = 10000;

function addStep() {
  steps++;
  document.getElementById("steps").innerText = steps;

  // Update progress
  let percent = (steps / goal) * 100;
  document.getElementById("progressBar").style.width = percent + "%";

  document.getElementById("goalText").innerText =
    steps + " / " + goal + " Steps";

  // Stats calculation
  document.getElementById("cal").innerText = (steps * 0.04).toFixed(2);
  document.getElementById("dist").innerText = (steps * 0.0008).toFixed(2);
  document.getElementById("time").innerText = Math.floor(steps / 100);
}

function setGoal() {
  goal = document.getElementById("goalInput").value;
}

function updateProfile() {
  let name = document.getElementById("name").value;
  alert("Profile Updated: " + name);
}

// DARK MODE
document.getElementById("modeBtn").onclick = function () {
  document.body.classList.toggle("dark");

  this.innerText =
    document.body.classList.contains("dark")
      ? "☀ Light Mode"
      : "🌙 Dark Mode";
};