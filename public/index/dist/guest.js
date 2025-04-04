import redirect from "./redirect.js";

export default function initGuest() {
  const guestButton = document.getElementById("guest-btn");
  const guestName = document.getElementById("guest-name");

  guestButton.onclick = playAsGuest.bind(guestName.value.toString());

  guestName.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      playAsGuest(guestName.value.toString());
    }
  });
}

function playAsGuest(username) {
  if (/^([a-zA-Z0-9_]{3,10})$/.test(username)) {
    redirect(username);
  } else {
    alert("Invalid username. \nUsername should be between 3 to 10 characters \nPlease use only letters, numbers, and underscores.");
  }
}