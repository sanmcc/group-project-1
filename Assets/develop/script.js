fightButton = document.getElementById("fightButton")

function onClick($this) {
  var catBreed = $this.value;
  if (catBreed == ''){
     console.log("no input");
  } else {
      localStorage.setItem("kitty", catBreed);
}};

function onClick2($this) {
  var dogBreed = $this.value;
  if (dogBreed == ''){
     console.log("no input");
  } else {
      localStorage.setItem("doggo", dogBreed);
}};

fightButton.addEventListener("click", function() {
  var fightPage = "./search-results.html"
  location.assign(fightPage)
});