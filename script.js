// DOM CALLS

const main = document.getElementById("main");
const modal = document.getElementById("modal");
const ratingGroup = document.getElementById("ratingGroup");
const ratingButtons = ratingGroup.querySelectorAll("button");
const submitBtn = document.getElementById("submitBtn");
const selectedRating = document.getElementById("selectedRating");

// Rating button functionality

for (const button of ratingButtons) {
    button.addEventListener ("click", (e) => {
        for (const b of ratingButtons) { b.classList.remove("active")}
        e.target.classList.add("active");
        selectedRating.textContent = e.target.textContent;
        submitEnable()
    })
}

// Submit button event

function submitEnable () {
    submitBtn.classList.remove("disabled")
    submitBtn.addEventListener("click", () => {
        main.classList.add("hidden")
        modal.classList.remove("hidden")
    })
}