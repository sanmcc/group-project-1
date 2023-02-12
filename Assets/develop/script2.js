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

getKitty(localStorage.getItem("kitty"));
getDoggo(localStorage.getItem("doggo"));

