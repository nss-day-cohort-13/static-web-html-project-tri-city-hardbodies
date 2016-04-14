//=============================
//OBJECTS- we can add new ones here to automatically create more cards. 
//=============================


var planet1 = {
 name: "Fuzzy Planet",
 image: "img/fuzzyPlanet.jpg' id = 'fuzz",
 imgAlt: "Tribble Planet",
 description: "Enjoy soft, cute, plush and squishy EVERYTHING? Don't mind <span id='fuzz'>fur</span> in your bathtub? This is the place for you! Approximately 75 miles in diameter with 85% earth gravity, bounce and snuggle your way into this adorable planet today!",
 price: "$800.00"
}

var planet2 = {
 name: "Gas Giant",
 image: "img/gasPlanet.jpg",
 imgAlt: "Gas Planet",
 description: "Are you enormous? Made of clouds? Impervious to gale force winds, extreme temperatures, and gravity hundreds of times that of Earth's? Look no further- this gas giant has got it all! Build yourself an igloo made of solid oxygen and settle down in your very own permanent maelstrom today!",
 price: "$40"
}

var planet3 = {
 name: "Trojan Planet",
 image: "img/trojanPlanet.jpg",
 imgAlt: "Trojan Planet",
 description: "Hypochondriacs rejoice! This extremely well-protected planet is impervious to almost any disease and also includes a hypoallergenic asteroid barrier. Available in sizes Large, Extra Large, Enormous, and Too Big, and ribbed for your pleasure.",
 price: "$300"
}

var planet4 = {
 name: "Ice Planet",
 image: "img/icePlanet.jpg",
 imgAlt: "Ice Planet",
 description: "Perfect for the jilted lover, yeti, or Elsa, this gorgous planet may be lacking in coziness (see <a href='#fuzz'>'fuzzy planet'</a>), but features a gorgeous landscape of icicles, snowdrifts, and boulders perfect for the budding ice-architect looking to move beyond the solid-oxygen igloo.",
 price: "$60000"
}

var planet5 = {
 name: "Aqua Planet",
 image: "img/aquaPlanet.png",
 imgAlt: "Aqua Planet",
 description:  "The perfect planet for fish, orcas, and really, really strong swimmers. Seafood lovers, surfers, and otters encouraged as well. BYOB(oat) to this lovely habitat teeming with gorgous marine life and seagulls. Bask in a variety of weather events from light rain to hurricane, and don't worry about staying DRY!",
 price: "$2 million"
}

var planet6 = {
 name: "Helium Planet",
 image: "img/heliumPlanet.jpg",
 imgAlt: "Helium Planet",
 description: "An atmosphere made of helium means you and all your visitors will sport Silly Voices while on this planet! Take it a step further by furnishing with all your favorite memes, dad jokes, and hilarious gifs. Gravity 40% of earth's surface means even falling down is more funny than painful!",
 price: "$415"
}

var planet7 = {
 name: "Desert Planet",
 image: "img/desertPlanet.jpg",
 imgAlt: "Desert Planet",
 description: "Pack your sunscreen and an cause this planet is HOT! A great spot for camel-riding, pyramid-building, and podracing, this deserted desert gives you the opportunity to start fresh with a sandbox of your very own! *Water Not Included",
 price: "$969"
}

var planet8 = {
 name: "Pluto",
 image: "img/pluto.png",
 imgAlt: "Pluto",
 description: "Not technically a planet, this small space body is a great option for the budget-minded space dweller. Large heart-shaped landscape feature pre-added, because Pluto Loves You!",
 price: "FREE"
}

// =====================
// OTHER VARIABLES
// =====================


var planetArray = [planet1, planet2, planet3, planet4, planet5, planet6, planet7, planet8];

var cardSelector = document.getElementById("wrapper");

 // =================
 // LOOP This loop creates an entirely new card for each new object. this way we can not only add an infinite number of cards without writing any new HTML, but also the loop only runs once. 
 // =================


for (var i = 0; i < planetArray.length; i++) {
cardSelector.innerHTML +=
// this is the HTML that makes each card. I concatonated it so it could be as close to standard HTML format as possible, since strings in JS can't be multiline- basically this is a 'mad lib' with the white bits tying back to the keys from the object selected by the loop. 
// 
"<article class = 'card'>" +
 // "<section>" 
       "<div class='cardImage'>" +
         "<img src ='" + planetArray[i].image + "' alt = '" + planetArray[i].imgAlt + "'></img>" +
       "</div>" +
     // "</section>" +
     "<section class='rightSide'>" +
     "<h3 class = 'cardTitle'>" + planetArray[i].name +"</h3>" +
     "<section class='xxxsectionTwo'>" + //this section holds the description and price.
       "<p class = 'cardDescription'>" + planetArray[i].description + "</p>" +
       "<h5>Price = " + planetArray[i].price + " + S&H</h5>" +
     "</section>" +
     "</section>" +
    "</article>";
}



