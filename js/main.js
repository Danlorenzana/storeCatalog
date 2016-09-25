// product constructor
function Music(artist, title, genre, year, image) {
	this.artist  = artist
	this.title  = title
	this.genre = genre
	this.year = year
	this.image = image
}

// create new products from the product constructor
var incubus  = new Music("Incubus", "Morning View", "NU Metal", 2001, "img/incubus.jpg")
var soad  = new Music("System of a Down", "Toxicity", "NU Metal", 2001, "img/soad.jpg")
var kanyeWest    = new Music("Kanye West", "Graduation", "Rap", 2007, "img/kanye.jpg")
var childishGambino   = new Music("Childish Gambino", "Camp", "Rap", 2011, "img/childish.jpg")
var nirvana  = new Music("Nirvana", "In Utero", "Grunge", 1993, "img/nirvana.jpg")
var sia = new Music("Sia", "This is Acting", "Pop", 2016, "img/sia.jpg")
var muse = new Music("Muse", "Drones", "Alternative", 2015, "img/muse.jpg")
var spiceGirls = new Music("Spice Girls", "Spice", "pop", 1996, "img/spice.jpg")

// create an array to add products to
var musicArray = new Array

// add products to array of products
musicArray.push(incubus, soad, kanyeWest, childishGambino, nirvana, sia, muse, spiceGirls)
console.log(incubus.artist)
// loop through products array
for(var i = 0; i < musicArray.length; i++) {
// 	// create new elements for each product
	var newItem  = document.createElement("div")
	var newDiv   = document.createElement("div")
	var newDiv2   = document.createElement("div")
	var albumH1   = document.createElement("h1")
	var artistH3   = document.createElement("h3")
	var genreP  = document.createElement("p")
	var yearP  = document.createElement("p")
	var btn      = document.createElement("button")
	var image    = document.createElement("img")


// 	// create text for new elements
	var tArtist   = document.createTextNode(musicArray[i].artist)
	var tAlbum   = document.createTextNode(musicArray[i].title)
	var tGenre  = document.createTextNode(musicArray[i].genre)
	var tYear  = document.createTextNode(musicArray[i].year)
	var tButton = document.createTextNode("Buy Album")

// 	// update source attribute
	image.src = musicArray[i].image

// 	// update class attributes
	image.className = "img-responsive"
	btn.className = "btn btn-primary btn-lg"
	newItem.className = "col-sm-offset-1 col-sm-10 itemFrame text-left"
	newDiv.className = "col-sm-3 albumBox"
	newDiv2.className = "col-sm-9 infoBox"
// 	// add text to elements
	albumH1.appendChild(tAlbum)
	btn.appendChild(tButton)
	artistH3.appendChild(tArtist)
	genreP.appendChild(tGenre)
	yearP.appendChild(tYear)
	

// 	// add elements to new div
	newDiv2.appendChild(albumH1)
	newDiv2.appendChild(btn)
	newDiv.appendChild(image)
	newDiv2.appendChild(artistH3)
	newDiv2.appendChild(genreP)
	newDiv2.appendChild(yearP)
	

// 	// add new div to new item div
	newItem.appendChild(newDiv)
	newItem.appendChild(newDiv2)

// 	// add new item to the element with id="shirts"
	document.getElementById("products").appendChild(newItem)
}
