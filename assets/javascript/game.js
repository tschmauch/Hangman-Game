// Wait for the page to load
$(document).ready(function () {

	// declare array of possible solutions
var movieArray = ['Frankenstein','King Kong','Snow White and the Seven Dwarfs','The Wizard of Oz','Pinocchio','Citizen Kane','Casablanca','Psycho','Lawrence of Arabia','The Godfather','Taxi Driver','Alien','E.T. The Extra-Terrestrial','L.A. Confidential','Toy Story 2','Finding Nemo','The Dark Knight','Up','Toy Story 3','Mad Max: Fury Road','Inside Out','Spotlight','Star Wars: Episode VII - The Force Awakens','Zootopia','Arrival','Hell or High Water','Manchester by the Sea','The Jungle Book','The Big Sick','Dunkirk','Lady Bird','Wonder Woman','Logan','Baby Driver','War for the Planet of the Apes','The Post','Interstellar'];

// array of posters, give the page some visual appeal
var poster = ['./../images/alien.jpg','./../images/arrival.jpg','./../images/baby_driver.jpg','./../images/big_sick.jpg','./../images/casablanca.jpg','./../images/citizen_kane.jpg','./../images/dark_knight.jpg','./../images/dunkirk.jpg','./../images/e_t_the_extra_terrestrial.jpg','./../images/finding_nemo.jpg','./../images/frankenstein.jpg','./../images/godfather.jpg','./../images/hell_or_high_water.jpg','./../images/inside_out.jpg','./../images/interstellar.jpg','./../images/jungle_book.jpg','./../images/king_kong.jpg','./../images/la_confidential.jpg','./../images/lady_bird.jpg','./../images/lawrence_of_arabia.jpg','./../images/logan.jpg','./../images/mad_max_fury_road.jpg','./../images/manchester_by_the_sea.jpg','./../images/pinocchio.jpg','./../images/post.jpg','./../images/psycho.jpg','./../images/snow_white_and_the_seven_dwarfs.jpg','./../images/spotlight.jpg','./../images/star_wars_episode_vii__the_force_awakens.jpg','./../images/taxi_driver.jpg','./../images/toy_story_three.jpg','./../images/toy_story_two.jpg','./../images/Up.jpg','./../images/war_for_the_planet_of_the_apes.jpg','./../images/wizard_of_oz.jpg','./../images/wonder_woman.jpg','./../images/zootopia.jpg'];




// Load Random Poster from Poster Array and load into posterArea

// Select random Movie from Movie array, create new array with each individual character as own var, set as solution, create underscores equal to number of letters in solutionArea

// Detect key presses, if key is part of solution swap underscore for character, if key is not part of solution write key to guesses made
$(document).on('keyup', function(event) {
	event.key
})






















}