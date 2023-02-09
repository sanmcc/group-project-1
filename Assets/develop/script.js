const dogList = document.getElementById('doggoDropDown');
const listButton = document.querySelector('.list');

window.addEventListener('load', populateList);
window.addEventListener('load', getDogTerm);
//click and change
dogList.addEventListener('change', getBreedImage);
listButton.addEventListener('click', getBreedImage);


// window.location(href = './search-results.html');

//FETCH CALLS
//wikipedia dog term serach
function getDogTerm(){
  fetch('https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=dog&formatversion=2')
    .then(checkStatus)
    .then(response => response.json())
    .then(data => displayDogInfo(data))
    .catch(error => notifyUser(error))
}

//populate List
function populateList(){
  fetch('https://dog.ceo/api/breeds/list/all')
    .then(checkStatus)
    .then(response => response.json())
    .then(data => createListItems(data.message))
    .catch(error => notifyUser(error))
}

//getBreedImage
function getBreedImage(){
    // window.location.href = "./search-results.html";
  //get list value
  let selectedBreed = dogList.options[dogList.selectedIndex].value;
  //build url
  let url = `https://dog.ceo/api/breed/${selectedBreed}/images`;
  //fetch call
  fetch(url)
    .then(checkStatus)
    .then(response => response.json())
    .then(data => getImageURL(data.message))
    .catch(error => console.log(error))
    
}

function createImageGrid(){
  fetch('https://dog.ceo/api/breeds/image/random/3')
  .then(checkStatus)
  .then(response => response.json())
  .then(data => createGrid(data.message))
  .catch(error => notifyUser(error))
}

//HELPER FUNCTIONS
//checkStatus
function checkStatus(response){
  if(response.ok){
    return Promise.resolve(response);
  }else{
    return Promise.reject(new Error(response.statusText));
  }
}

//getImageURL
function getImageURL(data){
  //get random number
  let randomNumberURL = data[Math.floor(Math.random()*data.length)+1];
  listImageContainer.innerHTML = `<img src="${randomNumberURL}" alt="${extractBreedName(data)}"/>`;
}

//createListItems
function createListItems(data){
  let output = '';
  Object.keys(data).forEach(key => output+=`<option value="${key}">${fixBreed(key)}</option>`);
  document.getElementById('doggoDropDown').innerHTML = output;
}

//notifyUser
function notifyUser(error){
  const errorContainer = document.querySelector('.alert');
  errorContainer.innerHTML = `There was an error with the server request (${error}). <br> Click the button again.`;
  errorContainer.style.display = 'block';
  setTimeout(()=>{
    errorContainer.innerHTML = '';
    errorContainer.style.display ='none';
  },4000)
}

//fixBreed
function fixBreed(breedName){
  if(breedName === 'germanshepherd'){
    return 'German Shepherd';
  }else if(breedName === 'mexicanhairless'){
    return 'Mexican Hairless';
  }else if(breedName === 'stbernard'){
    return 'St. Bernard';
  }else if(breedName === "african"){
    return 'African Wild Dog';
  }else if(breedName === 'bullterrier'){
    return 'Bull Terier';
  }
  return capitalize(breedName);
}

//capitalize breed name
function capitalize(breedName){
  return breedName.replace(/\-/g,' ')
                  .split(" ")
                  .map(word => word.charAt(0).toUpperCase()+word.slice(1))
				          .join(" ");
}

//extract breed name
function extractBreedName(data){
  let regex = /https:\/\/images\.dog\.ceo\/breeds\/(\w+-?\w+)\/\w+\.\w+/g;
  let match = regex.exec(data);
  return fixBreed(match[1]);
}

