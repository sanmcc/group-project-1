
key = "live_gsirAvhM93Ah5N5pUAur0zJtJcxgZPpkebrc0AF4nHn2Ba7xch9xMxMn5eq7pu74"
dogURL = "https://api.thedogapi.comv1/images/search?breed_ids=chihuahua&include_breeds=true" + key

fetch(dogURL)
     .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        
      console.log(data);
    });
petFinderKey = "1MTEMQwK0T863IS5RH2G4gVDoQ7zt5zuwevi4YXwLUyFpzQlWn"
secret = "sOy0RQC5L7BIw5lw7n6ENRsX70lpJNeDjNPZ6c99"
curl -d "grant_type=client_credentials&client_id=lyric-dawg&client_secret=sOy0RQC5L7BIw5lw7n6ENRsX70lpJNeDjNPZ6c99" https://api.petfinder.com/v2/oauth2/token
