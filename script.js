let units = document.getElementsByClassName("unit");
let courseSelector = document.getElementById("courses");
let exit = document.getElementById("exit"); //iframe

//for every element with class name "unit"
for (let unit of units) {
    unit.addEventListener('click', function() {
        console.log("unit");
        if (unit.firstElementChild.style.display == "none") {
            unit.firstElementChild.classList.add("active");
            unit.firstElementChild.classList.remove("close");
            unit.firstElementChild.style.display = "initial";
            setTimeout(()=>{ unit.lastElementChild.style.display="block"; }, "500");
        }
    })
}

function exitIFrame(exitBtn) {
    exitBtn.style.display = "none";
    let lframe = exitBtn.parentElement.firstElementChild;
    lframe.classList.remove("active");
    lframe.classList.add("close");
    setTimeout(()=>{ lframe.style.display="none"; }, "500");
}

if (courseSelector) {
    courseSelector.addEventListener("change", function() {
    //change link!! //courseSelector value must be in link for course
        let pickedCourse = courseSelector.value;
        window.location.href = pickedCourse + ".html";
    })
}
