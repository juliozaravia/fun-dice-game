/*
 * Project: Pig Game 
 * File: Globals - Support resource file.
 * Description: It allows us to have globally available all the variables / constants necessary to execute the operations requested by the user. 
 * @author
 * Julio Zaravia <julio.zaravia.dev@gmail.com>
 */

'use strict'

// Object that contains the immutable values that will be used globally within our application.
export const static_params = Object.freeze({ 
    'top_score': 20,
    'dice_sides': 6 
})

// Object that contains the mutable values that will be used globally within our application.
export let dynamic_params = {
    'global_score': [0,0],
    'current_score': 0,
    'active_player': 0,
    'is_playing': true 
}

// An object that contains the control values to perform specific actions.
export const action_mode = Object.freeze({ 
    'add': 1, 
    'remove': 2, 
    'toggle': 3 
})