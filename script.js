let inputItem = document.querySelector("#input");
let searchIcon = document.querySelector(".s-icon");
let btns = document.querySelector("#xyz");





function search(){
    const val = inputItem.value;
    window.location.href = `https://www.google.com/search?q=${val}`
};
searchIcon.addEventListener("click", search);

inputItem.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        search();
    }
});

btns.addEventListener("click", search);