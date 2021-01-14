/*
 * Project: Pig Game 
 * File: Elements - Element extraction file
 * Description: It allows us to extract the elements from the DOM and store them in containers that will be processed as required. 
 * @author
 * Julio Zaravia <julio.zaravia.dev@gmail.com>
 */

'use strict'
import * as helpers from './helpers.js'

// We capture the elements that will allow us to carry out operations in the game
export const dice_container = helpers.container_catcher('.dice')
export const first_player_container = helpers.container_catcher('.player--0')
export const second_player_container = helpers.container_catcher('.player--1')
export const button_new_game = helpers.container_catcher('.btn--new')
export const button_roll_dice = helpers.container_catcher('.btn--roll')
export const button_hold_score = helpers.container_catcher('.btn--hold')