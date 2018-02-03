// Wait for the page to load
$(document).ready(function () {

	// declare array of possible solutions
var movieArray = ['Frankenstein','King Kong','Snow White and the Seven Dwarfs','The Wizard of Oz','Pinocchio','Citizen Kane','Casablanca','Psycho','Lawrence of Arabia','The Godfather','Taxi Driver','Alien','E.T. The Extra-Terrestrial','L.A. Confidential','Toy Story 2','Finding Nemo','The Dark Knight','Up','Toy Story 3','Mad Max: Fury Road','Inside Out','Spotlight','Star Wars: Episode VII - The Force Awakens','Zootopia','Arrival','Hell or High Water','Manchester by the Sea','The Jungle Book','The Big Sick','Dunkirk','Lady Bird','Wonder Woman','Logan','Baby Driver','War for the Planet of the Apes','The Post','Interstellar'];

// array of posters, give the page some visual appeal
var posterArray = ['./assets/images/alien.jpg','./assets/images/arrival.jpg','./assets/images/baby_driver.jpg','./assets/images/big_sick.jpg','./assets/images/casablanca.jpg','./assets/images/citizen_kane.jpg','./assets/images/dark_knight.jpg','./assets/images/dunkirk.jpg','./assets/images/e_t_the_extra_terrestrial.jpg','./assets/images/finding_nemo.jpg','./assets/images/frankenstein.jpg','./assets/images/godfather.jpg','./assets/images/hell_or_high_water.jpg','./assets/images/inside_out.jpg','./assets/images/interstellar.jpg','./assets/images/jungle_book.jpg','./assets/images/king_kong.jpg','./assets/images/la_confidential.jpg','./assets/images/lady_bird.jpg','./assets/images/lawrence_of_arabia.jpg','./assets/images/logan.jpg','./assets/images/mad_max_fury_road.jpg','./assets/images/manchester_by_the_sea.jpg','./assets/images/pinocchio.jpg','./assets/images/post.jpg','./assets/images/psycho.jpg','./assets/images/snow_white_and_the_seven_dwarfs.jpg','./assets/images/spotlight.jpg','./assets/images/star_wars_episode_vii__the_force_awakens.jpg','./assets/images/taxi_driver.jpg','./assets/images/toy_story_three.jpg','./assets/images/toy_story_two.jpg','./assets/images/Up.jpg','./assets/images/war_for_the_planet_of_the_apes.jpg','./assets/images/wizard_of_oz.jpg','./assets/images/wonder_woman.jpg','./assets/images/zootopia.jpg'];




// Load Random Poster from Poster Array and load into posterArea
var randomPoster = posterArray[Math.floor(Math.random() * posterArray.length)];
$('#displayPoster').attr("src", randomPoster);

// Select random Movie from Movie array, create new array with each individual character as own var, set as solution, create underscores equal to number of letters in solutionArea
var randomMovie = movieArray[Math.floor(Math.random() * movieArray.length)];
console.log(randomMovie);
var solutionArray = randomMovie.toLowerCase().split("");
console.log(solutionArray);

for (i=0; i < solutionArray.length; i++) {
	var blank = $("<p>");
	$(blank).attr('data-solution', solutionArray[i]);
	if (solutionArray[i] === ":" || solutionArray[i] === ".") {
		$(blank).text(solutionArray[i]);
	}
	else if (solutionArray[i] === " ") {
		$(blank).html('&#160 &#160');
	}
	else {
	$(blank).text("_ ")};
	$('#solutionArea').append(blank);
}

// Detect key presses, if key is part of solution swap underscore for character, if key is not part of solution write key to guesses made
// $(document).on('keyup', function(event) {
// 	event.key
// })





});