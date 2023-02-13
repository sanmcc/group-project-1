  var timeEl = document.querySelector("#clock");
  var ko = document.getElementById("timer");
  var player = document.getElementById("player");
  var dogPunch = document.getElementById("punch2");
  var kittyPunch = document.getElementById("punch1");
  var punchPic = "Assets\images\punch.png"

  function getKitty(catBreed){
    var queryCatURL = "https://api.thecatapi.com/v1/images/search?breed_ids=" + catBreed 
    const kitty = document.getElementById("kitty")
    fetch(queryCatURL)
       .then(function(response) {
          return response.json();
      })
      .then(function(data) {
        JSON.stringify(data) 
        console.log(data)  
        var kittyURL = data[0].url
        var image = document.createElement("img")
        image.setAttribute("src", kittyURL);
        image.style.width = "400px";
        kitty.appendChild(image);
      })
    }

  function getDoggo(dogBreed) {
    const doggo = document.getElementById("doggo")
    var queryDogURL = "https://dog.ceo/api/breed/" + dogBreed + "/images"
  
    fetch(queryDogURL)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
      JSON.stringify(data)
      console.log(data)
      var doggoURL = data.message[3]
      console.log(doggoURL)
      var image = document.createElement("img")
      image.setAttribute("src", doggoURL);
      image.style.width = "400px";
      doggo.appendChild(image);
  })}


  
  var secondsLeft = 12;
  
  function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        ko.style.visibility = 'hidden';
        fightMe();
      }
  
    }, 1000);
  }
 
  function fightMe() {
    setTimeout(
      function () {
    kittyPunch.style.display = "block";
    fightMe2();
      }, 2000);
  }
  
  function fightMe2() {
    setTimeout(
      function () {
    dogPunch.style.display = "block";
      }, 2000);
  }

getKitty(localStorage.getItem("kitty"));
getDoggo(localStorage.getItem("doggo"));
player.addEventListener("play", () => {
  setTime();
})
