let showStatus = document.querySelector("h5");
let addFeature = document.getElementById("addFeature");
let cleck = 0;
addFeature.addEventListener("click", function () {
  if (cleck == 0) {
    showStatus.innerHTML = "Friend";
    showStatus.style.color = "green";
    addFeature.innerHTML = "Remove Friend";
    addFeature.style.backgroundColor = "white";
    addFeature.style.color = "black";
    cleck = 1;
  } else {
    showStatus.innerHTML = "Stranger";
    showStatus.style.color = "red";
    addFeature.innerHTML = "Add Friend";
    addFeature.style.backgroundColor = "#36A9AE";
    addFeature.style.color = "white";
    cleck = 0;
  }
  // addFriend();
});
