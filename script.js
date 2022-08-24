const units = document.getElementsByClassName("unit");
const courseSelector = document.getElementById("courses");
const exit = document.getElementById("exit"); // iframe

// for every element with class name "unit"
for (const unit of units) {
  unit.addEventListener("click", function () {
    console.log("clicked unit!");
    if (unit.firstElementChild.style.display == "none") {
      unit.firstElementChild.classList.add("active");
      unit.firstElementChild.classList.remove("close");
      unit.firstElementChild.style.display = "initial";
      setTimeout(() => {
        unit.lastElementChild.style.display = "block";
      }, "500");
    } else {
      console.log("uh oh");
    }
  });
}

courseSelector.addEventListener("change", function () {
  // change link!! //courseSelector value must be in link for course
  const pickedCourse = courseSelector.value;
  window.location.href = pickedCourse + ".html";
});

function exitIFrame(exitBtn) {
  console.log("exit");
  exitBtn.style.display = "none";
  const iframe = exitBtn.parentElement.firstElementChild;
  iframe.classList.remove("active");
  iframe.classList.add("close");
  setTimeout(() => {
    iframe.style.display = "none";
  }, "500");
}
