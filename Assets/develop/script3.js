var winnerPic = document.getElementById("winnerPic");
var catWins = localStorage.getItem("kitty");
var dogWins = localStorage.getItem("doggo");
var winner = localStorage.getItem("winner");
var catPlayer = document.getElementById("catPlayer");
var dogPlayer = document.getElementById("dogPlayer");

if (winner == catWins) {
    getKitty(winner);
}   else {
    getDoggo(winner);
}

function getKitty(winner){
    var queryCatURL = "https://api.thecatapi.com/v1/images/search?breed_ids=" + winner 
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
        image.style.height = "300px";
        winnerPic.appendChild(image);
        catPlayer.style.display = "block";
      })
    }

function getDoggo(winner) {
    var queryDogURL = "https://dog.ceo/api/breed/" + winner + "/images"
  
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
      winnerPic.appendChild(image);
      dogPlayer.style.display = "block";
  })}