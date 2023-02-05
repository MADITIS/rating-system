const ratingParent = document.querySelector(".rating-container")
let ratings = document.querySelectorAll(".circle.bg-accent")
let button = document.querySelector("button")
const responseParent = document.querySelector(".response-container")
const responseText = document.querySelector(".response-text-rating")
const mainContainer = document.querySelector(".main-container")
console.log(button)
let selected

ratingParent.addEventListener('click', handleRatings)
button.addEventListener("click", buttonHandler)

function handleRatings(event) {
    let target = event.target
    if (ratingParent.contains(target) && target.parentElement == ratingParent) {
        console.log(target.textContent)
        target.classList.toggle("selected")
        removeSelected(target)
        checkSelected()
    }
}

function buttonHandler(event) {
    console.log("button activated", selected)
    if (selected) {
        responseParent.classList.add("display-response")
        setTimeout(() => {
            responseParent.classList.add("shift-left")
        }, 0.005);

        responseText.innerHTML = `You selected ${selected.textContent} out of 5`
        // mainContainer.classList.add("shift-left-2")
        // setTimeout(() => {
        //     // responseParent.classList.add("shift-left")
        // }, 0.005);
        mainContainer.style.display = "none"
    }
}

function checkSelected() {
    ratings.forEach((value) => {
        if (value.matches(".selected")) {
            selected = value
        }
    })
}

function removeSelected(target) {
    ratings.forEach((value) => {
        if ((value != target)) {
            value.classList.remove("selected")
        }
    })
}