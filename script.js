/* 
The Quiz Game in the console

1. Build a function constructor called Question to describe a question. A quesion should include:
a) question itself
b) the answer from which the player can choose the correct one (choose an adequate data structure here: array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it to the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task)

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you display it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct or not (Hint: write another method for this)

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programers code (Hint: I learned a special technique to do exactly that)


*/



(function () {
  let counter = 0;

  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  Question.prototype.displayQuestion = function () {
    console.log(this.question);

    for (let i = 0; i < this.answers.length; i++) {
      console.log(i + ': ' + this.answers[i]);
    }
  }

  Question.prototype.checkAnswer = function (ans) {
    if (ans === this.correct) {
      counter++;
      console.log('Correct answer! You have: ' + counter + ' points!');
    } else {
      console.log('Wrong answer. Please try again');
    }
  }

  let q1 = new Question(
    'Is JS the coolest programmimng language in the world?',
    ['Yes', 'No'],
    0
  );

  let q2 = new Question(
    'What is the name of this course\'s teacher?',
    ['Steve', 'Bill', 'Jonas'],
    2
  );

  let q3 = new Question(
    'What does best describing coding',
    ['Borign', 'Hard', 'Fun', 'Tediuos'],
    2
  );

  let questions = [q1, q2, q3];

  function nextQuestion() {
    let n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    // parseInt converts a string to a number
    const answer = prompt('Please select the correct answer.');

    if (answer !== 'exit') {
      questions[n].checkAnswer(parseInt(answer));
      nextQuestion();
    }
  }
  
  nextQuestion();

})();
  