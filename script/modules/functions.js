/*
 * Project: Pig Game 
 * File: Functions - Base function file
 * Description: It allows us to perform the main functions and behaviors within the game. 
 * @author
 * Julio Zaravia <julio.zaravia.dev@gmail.com>
 */

'use strict'
import * as globals from './globals.js'
import * as elements from './elements.js'
import * as helpers from './helpers.js'

// Description: It allows us to initialize all the values that our application needs to start a new game.
export const init = function () {
	// We assign the starting values to the pairs of our mutable object.
	globals.dynamic_params.global_score = [0, 0]
	globals.dynamic_params.current_score = 0
	globals.dynamic_params.active_player = 0
	globals.dynamic_params.is_playing = true
	// We assign the starting values to the score containers.
	helpers.value_allocator('#score--0', 0)
	helpers.value_allocator('#score--1', 0)
	helpers.value_allocator('#current--0', 0)
	helpers.value_allocator('#current--1', 0)
	// We update the container classes to return them to their initial state.
	helpers.class_updater(elements.dice_container, 'hide_block', globals.action_mode.add)
	helpers.class_updater(elements.first_player_container, 'player--winner', globals.action_mode.remove)
	helpers.class_updater(elements.second_player_container, 'player--winner', globals.action_mode.remove)
	helpers.class_updater(elements.first_player_container, 'player--active', globals.action_mode.add)
	helpers.class_updater(elements.second_player_container, 'player--active', globals.action_mode.remove)
}

// Description: It allows us to simulate the action of throwing a die and showing its current value.
export const dice_roller = function () {
	if (globals.dynamic_params.is_playing) {
		// We generate the random value that corresponds to the roll of the dice and according to the result we display the image.
		const dice = helpers.random_generator(globals.static_params.dice_sides)
		elements.dice_container.src = `../../images/dice-${dice}.png`
		helpers.class_updater(elements.dice_container, 'hide_block', globals.action_mode.remove)
		// If the value of the dice is equal to 1 control passes to the other player. 
		// Otherwise, the value of the dice is added to the current score.
		if (dice === 1) {
			helpers.player_toggler()
		} else {
			globals.dynamic_params.current_score += dice
			helpers.value_allocator(`#current--${globals.dynamic_params.active_player}`, globals.dynamic_params.current_score)
		}
	}
}

// Description: It allows us to capture the current value of the dice thrown and add it to the player's total score.
export const score_holder = function () {
	if (globals.dynamic_params.is_playing) {
		// We add up the accumulated value of the dice rolls and write it in the player's total score section.
		globals.dynamic_params.global_score[globals.dynamic_params.active_player] += globals.dynamic_params.current_score
		helpers.value_allocator(`#score--${globals.dynamic_params.active_player}`, globals.dynamic_params.global_score[globals.dynamic_params.active_player])
		// If the player's score is equal to or greater than the maximum score, the game is stopped and he is declared the winner.
		// Otherwise, control passes to the other player.
		if (globals.dynamic_params.global_score[globals.dynamic_params.active_player] >= globals.static_params.top_score) {
			globals.dynamic_params.is_playing = false
			const active_player_container = helpers.container_catcher(`.player--${globals.dynamic_params.active_player}`)
			helpers.class_updater(active_player_container, 'player--winner', globals.action_mode.add)
			helpers.class_updater(active_player_container, 'player--active', globals.action_mode.remove)
			helpers.class_updater(elements.dice_container, 'hide_block', globals.action_mode.add)
		} else {
			helpers.player_toggler()
		}
	}
}