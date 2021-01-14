/*
 * Project: Pig Game 
 * File: Helpers - Support function file
 * Description: It allows us to carry out support operations necessary for the operation of the main functions. 
 * @author
 * Julio Zaravia <julio.zaravia.dev@gmail.com>
 */

'use strict'
import * as globals from './globals.js';
import * as elements from './elements.js';

// Description: It allows us to assign a value to an element of the application structure.
export const value_allocator = function (selector, value) {
    document.querySelector(selector).textContent = value
}

// Description: It allows us to change the class assigned to an element within the application structure.
export const class_updater = function (container, target_class, mode) {
    // We use the action mode received to determine what kind of action will be taken.
    if (mode === globals.action_mode.add) {
        container.classList.add(target_class)
    } else if (mode === globals.action_mode.remove) {
        container.classList.remove(target_class)
    } else if (mode === globals.action_mode.toggle) {
        container.classList.toggle(target_class)
    }
}

// Description: It allows us to capture a structure within our application.
export const container_catcher = function (selector) {
    let container = document.querySelector(selector)
    return container
}

// Description: It allows us to simulate the creation of a random number and return its value.
export const random_generator = function (range) {
    const random_number = Math.trunc(Math.random() * range) + 1
    return random_number
}

// Description: It allows us to add or remove a class from a container.
export const player_toggler = function () {
	globals.dynamic_params.current_score = 0
	value_allocator(`#current--${globals.dynamic_params.active_player}`, 0)
	class_updater(elements.first_player_container, 'player--active', globals.action_mode.toggle)
	class_updater(elements.second_player_container, 'player--active', globals.action_mode.toggle)
	globals.dynamic_params.active_player = globals.dynamic_params.active_player === 0 ? 1 : 0
}