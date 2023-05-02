const signupBtn = document.getElementById("signup-btn");
const modalOverlay = document.getElementById("modal-overlay");
const modal = document.getElementById("modal");
const cancelBtn = document.getElementById("cancel-btn");

signupBtn.addEventListener("click", function () {
  modalOverlay.style.display = "block";
  modal.style.display = "block";
});

// modalOverlay.addEventListener("click", function () {
//   modalOverlay.style.display = "none";
//   modal.style.display = "none";
// });

cancelBtn.addEventListener("click", function () {
  modalOverlay.style.display = "none";
  modal.style.display = "none";
});
