  var timeEl = document.querySelector("#clock");
  var ko = document.getElementById("timer");
  var player = document.getElementById("player");
  var start = document.getElementById("start");
  
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
        image.style.height = "400px";
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
      image.style.height = "400px";
      doggo.appendChild(image);
  })}


  
  var secondsLeft = 12;
  
  function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft;
      start.style.display = "none";
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        ko.style.visibility = 'hidden';
        fightMe();
      }
  
    }, 1000);
  }
 
  function fightMe() {
    var kittyPunch = document.getElementById("punch1");
    setTimeout(
      function () {
    kittyPunch.style.display = "block";
    fightMe2();
      }, 3000);
  }
  
  function fightMe2() {
    var dogPunch = document.getElementById("punch2");
    setTimeout(
      function () {
    dogPunch.style.display = "block";
    fightMe3();
      }, 3000);
  }

  function fightMe3() {
    var kittyPunch = document.getElementById("punch3");
    setTimeout(
      function () {
    kittyPunch.style.display = "block";
    fightMe4();
      }, 3000);
  }

  function fightMe4() {
    var dogPunch = document.getElementById("punch4");
    setTimeout(
      function () {
    dogPunch.style.display = "block";
    displayKO();
      }, 3000);
  }

  function displayKO() {
    var koDiv = document.getElementById("ko")
    koDiv.style.display = "block";
    setTimeout(
      function () {
      
      chickenDinner();
      }, 3000);
  }

  function chickenDinner() {
    var num = Math.floor(Math.random() * 10) + 1;
    if (num >= 5) {
      kittyWins = localStorage.getItem("kitty");
      localStorage.setItem("winner", kittyWins)
      var championPage = "./stage.html"
      location.assign(championPage)
    } else {
      doggoWins = localStorage.getItem("doggo");
      localStorage.setItem("winner", doggoWins);
      var championPage = "./stage.html"
      location.assign(championPage)
    }
  }

getKitty(localStorage.getItem("kitty"));
getDoggo(localStorage.getItem("doggo"));
player.addEventListener("play", () => {
  setTime();
})
