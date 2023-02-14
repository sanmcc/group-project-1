fightButton = document.getElementById("fightButton");

function onClick($this) {
  var catBreed = $this.value;
  if (catBreed == "") {
    console.log("no input");
  } else {
    // document.getElementById("dogB").disabled = true;
    localStorage.setItem("kitty", catBreed);
  }
}

function onClick2($this) {
  var dogBreed = $this.value;
  if (dogBreed == "") {
    console.log("no input");
  } else {

    localStorage.setItem("doggo", dogBreed);

     
  }};
  
  fightButton.addEventListener("click", function() {
    var fightPage = "./search-results.html"
    location.assign(fightPage)
    
  });

fightButton.addEventListener("click", function () {
  var fightPage = "./search-results.html";
  location.assign(fightPage);
});

var imgProp = {
  padding: "3px",
  backgroundColor: "#eded01",
  borderSize: "1ps",
  borderStyle: "inset",
  borderColor: "red",
};

function highlightImg() {
  // document.getElementById("dogB").disabled = true;

  var allimgs = document.getElementsByTagName("img");
  var nrallimgs = allimgs.length;

  for (i = 0; i < nrallimgs; i++) {
    allimgs[i].onclick = function () {
      this.style.padding = imgProp.padding;
      this.style.backgroundColor = imgProp.backgroundColor;
      this.style.borderSize = imgProp.borderSize;
      this.style.borderStyle = imgProp.borderStyle;
      this.style.borderColor = imgProp.borderColor;
    };
  }

  // $("img").on('click',function(e){
  //   e.preventDefault();
  //   $("img").removeClass('active');

  //   $(this).addClass('active');

  // }
// )
};

highlightImg();
