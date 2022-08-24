const units = document.getElementsByClassName("unit");
const courseSelector = document.getElementById("courses");
const cNum = document.getElementsByClassName("cNum");
let streakNum = document.getElementById("streakNum");

//for every element with class name "unit"
for (const unit of units) {
    unit.addEventListener('click', ()=>{
        console.log("unit");
        if (unit.firstElementChild.style.display === "none") {
            unit.firstElementChild.classList.add("active");
            unit.firstElementChild.classList.remove("close");
            unit.firstElementChild.style.display = "initial";
            setTimeout(()=>{ unit.lastElementChild.style.display="block"; }, "500");
        }
    })
}

function exitIFrame(exitBtn) {
    exitBtn.style.display = "none";
    const lframe = exitBtn.parentElement.firstElementChild;
    lframe.classList.remove("active");
    lframe.classList.add("close");
    setTimeout(()=>{ lframe.style.display="none"; }, "500");
}

if (courseSelector) {
    courseSelector.addEventListener("change", ()=>{
        //change link!! //courseSelector value must be in link for course
        const pickedCourse = courseSelector.value;
        window.location.href = `${pickedCourse}.html`;
    })
}

//make a function that increases the streakNum if you visit the site and you 
//visited yesterday, if you didn't visit yesterday, reset the streakNum to 0
function changeStreakNum() {
    let streak = localStorage.getItem("streak");
    if (streak) {
        streak = parseInt(streak);
        streak++;
        localStorage.setItem("streak", streak);
        streakNum.innerHTML = localStorage.getItem("streak");
    } else {
        localStorage.setItem("streak", "1");
        streakNum.innerHTML = "1";
    }
}

//run changeStreakNum() function only when it's the first time you visit the site on a certain day
window.onload = ()=>{
    if (localStorage.getItem("visited") == "false") {
        localStorage.setItem("visited", "true");
        for (let c of cNum) {
            if (c.innerHTML == new Date().getDate()) {
                localStorage.setItem(c.innerHTML, "true");
            }
        }
        changeStreakNum();
    } else {
        
        localStorage.setItem("streak", "0");
        changeStreakNum();
    }
} //note for me: make this work with days, not just on every page load

//make the calendar show the current day in red, for fun
let today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();
let date = document.getElementById("date");
date.innerHTML = day + "/" + month + "/" + year;
date.style.color = "red";

//make the cNum containing the current date number red color
for (let c of cNum) {
    if (c.innerHTML == new Date().getDate()) {
        c.style.backgroundColor = "red";
        c.style.color = "white";
    }
}

//keep the dates I visited the site on in the past orange color
for (let c of cNum) {
    if (localStorage.getItem(c.innerHTML) == "true") {
        c.style.backgroundColor = "orange";
        console.log(localStorage.getItem(c.innerHTML));
    }
}

//clear localStorage for calendar on first day of the month
if (new Date().getDate() == "1") {
    localStorage.clear(); //maybe?? or localStorage.removeItem(key);??
}
//make the calendar work with days, not just on every page load
if (localStorage.getItem(new Date().getDate()) == "true") {
    for (let c of cNum) {
        if (c.innerHTML == new Date().getDate()) {
            c.style.backgroundColor = "orange";
            c.style.color = "white";
        }
    }
}
