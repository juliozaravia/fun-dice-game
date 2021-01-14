# Pig Game - The fun dice game

### 1. What is Pig Game?
Pig Game is a dice game in which the players take turns to roll a single die as many times as they wish, adding all roll results to a running total, but losing their gained score for the turn if they roll a 1. The one who reaches 100 points wins.

### 2. What are the rules and how is it played?

Pig Game is a very simple game, if you want to review its rules [**you can access this link**](https://www.thesprucecrafts.com/pig-dice-game-complete-rules-of-pig-411405 "Pig Game rules").

### 3. How was it programmed?

Obviously I used **JavaScript for the functionality and HTML / CSS for the structure**, however the credit is not all mine. The game's user interfaces were **[developed by Jonas Schmedtmann for his JavaScript course at Udemy](https://www.udemy.com/course/the-complete-javascript-course/ "developed by Jonas Schmedtmann for his JavaScript course at Udemy")**. 

I took as a challenge to improve the functionality and **ended up changing the way it was programmed in JavaScript**, however the HTML view and the CSS style were not modified, only used.

Note: The original game requires the player to reach 100 points to win. To speed up the tests I set this value to only 20 points, you can assign the value you see fit. You can do this by going to /script/modules/global.js and editing the following code:

```javascript
export const static_params = Object.freeze({ 
    'top_score': 20,
    'dice_sides': 6 
})
```

### 4. Anything else?

- All constructive criticisms are very well received, you can send them to me at **julio.zaravia.dev@gmail.com** or **hey@juliozaravia.com**.
- If you are going to criticize this project in an offensive way, please don't do it, **remember that no one comes to this world knowing everything**.
- If you want to improve the code, you are free to do so, **just let me know what you changed or improved so I can learn from you**.
- I know, my English is poor. I am working on it too. Thanks for understand.
- That's it, I really enjoyed working on this version, if you took the time to read this, you are a good person and I wish you a good day.

### 5. Some screenshots

![Pig Game 01](http://www.juliozaravia.com/git-images/pig-game-1.png "Pig Game 01")

![Pig Game 02](http://www.juliozaravia.com/git-images/pig-game-2.png "Pig Game 02")

![Pig Game 03](http://www.juliozaravia.com/git-images/pig-game-3.png "Pig Game 03")
