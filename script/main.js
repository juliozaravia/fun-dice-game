/*
 * Project: Pig Game 
 * File: Main - Event control file
 * Description: It allows us to capture the click event made on the game buttons and apply the respective functions. 
 * @author
 * Julio Zaravia <julio.zaravia.dev@gmail.com>
 */

'use strict'
import * as elements from './modules/elements.js'
import * as functions from './modules/functions.js'

// We capture the events corresponding to the control elements (buttons) of our application.
elements.button_roll_dice.addEventListener('click', functions.dice_roller)
elements.button_hold_score.addEventListener('click', functions.score_holder)
elements.button_new_game.addEventListener('click', functions.init);

// We initialize all the values that our application needs to start a new game.
functions.init()