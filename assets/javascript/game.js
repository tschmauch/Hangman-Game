// Wait for the page to load
$(document).ready(function () {

	// declare array of possible solutions
	var movieArray = ['Frankenstein', 'King Kong', 'Snow White and the Seven Dwarfs', 'The Wizard of Oz', 'Pinocchio', 'Citizen Kane', 'Casablanca', 'Psycho', 'Lawrence of Arabia', 'The Godfather', 'Taxi Driver', 'Alien', 'E.T. The Extra-Terrestrial', 'L.A. Confidential', 'Toy Story 2', 'Finding Nemo', 'The Dark Knight', 'Up', 'Toy Story 3', 'Mad Max: Fury Road', 'Inside Out', 'Spotlight', 'Star Wars: Episode VII - The Force Awakens', 'Zootopia', 'Arrival', 'Hell or High Water', 'Manchester by the Sea', 'The Jungle Book', 'The Big Sick', 'Dunkirk', 'Lady Bird', 'Wonder Woman', 'Logan', 'Baby Driver', 'War for the Planet of the Apes', 'The Post', 'Interstellar'];

	// array of posters, give the page some visual appeal
	var posterArray = ['./assets/images/alien.jpg', './assets/images/arrival.jpg', './assets/images/baby_driver.jpg', './assets/images/big_sick.jpg', './assets/images/casablanca.jpg', './assets/images/citizen_kane.jpg', './assets/images/dark_knight.jpg', './assets/images/dunkirk.jpg', './assets/images/e_t_the_extra_terrestrial.jpg', './assets/images/finding_nemo.jpg', './assets/images/frankenstein.jpg', './assets/images/godfather.jpg', './assets/images/hell_or_high_water.jpg', './assets/images/inside_out.jpg', './assets/images/interstellar.jpg', './assets/images/jungle_book.jpg', './assets/images/king_kong.jpg', './assets/images/la_confidential.jpg', './assets/images/lady_bird.jpg', './assets/images/lawrence_of_arabia.jpg', './assets/images/logan.jpg', './assets/images/mad_max_fury_road.jpg', './assets/images/manchester_by_the_sea.jpg', './assets/images/pinocchio.jpg', './assets/images/post.jpg', './assets/images/psycho.jpg', './assets/images/snow_white_and_the_seven_dwarfs.jpg', './assets/images/spotlight.jpg', './assets/images/star_wars_episode_vii__the_force_awakens.jpg', './assets/images/taxi_driver.jpg', './assets/images/toy_story_three.jpg', './assets/images/toy_story_two.jpg', './assets/images/Up.jpg', './assets/images/war_for_the_planet_of_the_apes.jpg', './assets/images/wizard_of_oz.jpg', './assets/images/wonder_woman.jpg', './assets/images/zootopia.jpg'];

	// Starting value of guesses allowed, starting wins and losses

	var winCount = 0;
	var lossCount = 0;
	$('#wins').html('Wins: ' + winCount);
	$('#losses').html('Losses: ' + lossCount);

	function hangmanRound() {
		// Load Random Poster from Poster Array and load into posterArea
		var randomPoster = posterArray[Math.floor(Math.random() * posterArray.length)];
		$('#displayPoster').attr("src", randomPoster);

		// resets value of guesses allowed
		var guessesRemaining = 6;
		$('#guessLeft').text(guessesRemaining);

		// Select random Movie from Movie array, create new array with each individual character as own var, set as solution, create underscores equal to number of letters in solutionArea
		var randomMovie = movieArray[Math.floor(Math.random() * movieArray.length)];
		console.log(randomMovie);
		var solutionArray = randomMovie.toLowerCase().split("");
		console.log(solutionArray);
		var solutionAreaCurrent = [];
		var uniqueSolutionAreaCurrent = [];
		var uniqueSolutionArray = [];

		// This for loop puts the _'s in the solution area
		for (i = 0; i < solutionArray.length; i++) {
			var blank = $("<p class='solveArea'>");
			$(blank).attr('data-solution', solutionArray[i]);
			$(blank).addClass(solutionArray[i]);
			if (solutionArray[i] === ":" || solutionArray[i] === "." || solutionArray[i] === "-") {
				$(blank).text(solutionArray[i]);
				solutionAreaCurrent.push(solutionArray[i]);
			}
			else if (solutionArray[i] === " ") {
				$(blank).html('&#160');
				solutionAreaCurrent.push(solutionArray[i]);
			}
			else {
				$(blank).text("_ ")
			};
			$('#solutionArea').append(blank);
		};

		// Detect key presses, if key is part of solution swap underscore for character, if key is not part of solution write key to guesses made
		// If Guesses Remaining gets to 0, tally a loss, and start over with new movie
		// If solution is found, tally a win, and start over with new movie
		$(document).on('keyup', function (event) {
			var validGuess = "qwertyuioplkjhgfdsazxcvbnm1234567890";

			console.log(event.key);
			if ($.inArray(event.key, solutionArray) > -1) {
				for (i = 0; i < solutionArray.length; i++) {
					if (event.key === solutionArray[i]) {
						$('.' + event.key).text(solutionArray[i]);
					}
				}
				solutionAreaCurrent.push(event.key);
				
				$.each(solutionAreaCurrent, function(i, el){
					if($.inArray(el, uniqueSolutionAreaCurrent) === -1) uniqueSolutionAreaCurrent.push(el);
			});
			$.each(solutionArray, function(j, ej){
				if($.inArray(ej, uniqueSolutionArray) === -1) uniqueSolutionArray.push(ej);
		});
			console.log(uniqueSolutionAreaCurrent.sort().toString());
			console.log(uniqueSolutionArray.sort().toString());

				// if uniqueSolutionAreaCurrent = uniqueSolutaionArray
				// 	win!
				if (uniqueSolutionArray.sort().toString() === uniqueSolutionAreaCurrent.sort().toString()) {
				winCount++;
				$('#losses').text('Losses: ' + lossCount);
				$('#wins').text('Wins: ' + winCount);
				$('#solutionArea').html(' ');
				$('#guessMade').html(' ');
				uniqueSolutionAreaCurrent = [];
				uniqueSolutionArray = [];
				hangmanRound();
				}


			}
			else {
				for (i = 0; i < validGuess.length; i++) {
					if (event.key === validGuess[i]) {
						guessesRemaining--;
						$('#guessLeft').text(guessesRemaining);
						$('#guessMade').append(event.key + ',  ');
					}
				}
				if (guessesRemaining === 0) {
					lossCount++;
					$('#losses').text('Losses: ' + lossCount);
					$('#wins').text('Wins: ' + winCount);
					console.log('Wins: ' + winCount);
					console.log('Losses: ' + lossCount);
					// resets blanks
					$('#solutionArea').html(' ');
					$('#guessMade').html(' ');
					hangmanRound();
				}
			}
		})
	}
	hangmanRound();
});