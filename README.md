
# The Ladies: A Cat Quiz 😸
<a href="https://itsoliviasparks-the-ladies-cat-quiz.netlify.app">Live Site</a>

## About
The dynamic duo, widely referred to as The Ladies, are my two cats. They each have their own unique quirks-- How well do you know them?

The Ladies: A Cat Quiz is a playful web app that focuses on using jQuery to interact with the user's interface.

## Project Purpose & Goal
This is my first project utilizing JavaScript! This app is an exercise in manipulating the DOM based on user input.

## Tech Stack
jQuery, JavaScript, CSS, & HTML

## Use
- On page load the user is presented with a question about my cats
    - There are three possible answers: Xena, Rose, or both
    - Each answer is a radio button styled with a cat photo
- `onClick` of an answer, the form `submits`, the user is indicated if they got the question right, their score is updated, and after one second, the next question loads
- After the final question is answered, the user's final score is displayed and they have the option of re-trying the quiz

## Problems Solved
### New Syntax
This project was created early in my coding journey. It was the first JavaScript project that I `name spaced` & utilized `ES6 arrow functions`. Getting comfortable using this new syntax was a challenge.

### Learning Data Structures
This logic is located in `script.js`
```
catQuiz.catQuestionList = [
    {
        q: `Who goes by the nickname "peanut"?`,
        a: `xena`,
    },
    {
        q: `Who became a new woman after getting spayed late in life?`,
        a: `rose`,
    },
...
    {
        q: `Who, just like people, likes to sit on the dining room chairs?`,
        a: `both`,
    },
]  
```
This project was also the first time I started to work with data. Organizing the questions & answers into an array of objects was challenging but after researching the difference between `objects` & `arrays` I was able to successfully organize the data.


