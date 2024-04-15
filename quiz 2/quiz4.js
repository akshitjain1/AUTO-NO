window.onload = function() {
    let timeLeft = 180;
    const timerDisplay = document.getElementById("timer");

    function countdown() {
        if (timeLeft > 0) {
            timerDisplay.innerHTML = timeLeft + " seconds remaining";
            timeLeft--;
        } else {
            clearInterval(timer);
            disableFormsAndButton(); // Call the function to disable form and button.
            timerDisplay.innerHTML = "Time's up!";
            checkAnswer(); // Call checkAnswer function when time is up.
        }
    }

    const timer = setInterval(countdown, 1000);

    function disableFormsAndButton() { // Added a function to disable forms and button.
        document.getElementById("quiz-form1").disabled = true;
        document.getElementById("quiz-form2").disabled = true;
        document.getElementById("quiz-form3").disabled = true;
        document.getElementById("quiz-form4").disabled = true;
        document.getElementById("quiz-form5").disabled = true;
        document.getElementById("quiz-form6").disabled = true;
        document.getElementById("quiz-form7").disabled = true;
        document.getElementById("quiz-form8").disabled = true;
        document.getElementById("quiz-form9").disabled = true;
        document.getElementById("quiz-form10").disabled = true;
        document.getElementById("quiz-form11").disabled = true;
        document.getElementById("quiz-form12").disabled = true;
        document.getElementById("quiz-form13").disabled = true;
        document.getElementById("quiz-form14").disabled = true;
        document.getElementById("quiz-form15").disabled = true;
        document.querySelector("button").disabled = true;
    }
};
function checkAnswer() {
    let score = 0;
    const feedbackMessages = {
        question1: "Mary will be 24 years old when she is twice her brother's age. Your topic is strong.",
        question2: "The biggest fraction is 5/8. Your topic is strong.",
        question3: "The biggest fraction is 5/8. Your topic is strong.",
        question4: "The biggest fraction is 5/8. Your topic is strong.",
        question5: "The biggest fraction is 5/8. Your topic is strong.",
        question6: "Mary will be 24 years old when she is twice her brother's age. Your topic is strong.",
        question7: "The biggest fraction is 5/8. Your topic is strong.",
        question8: "The biggest fraction is 5/8. Your topic is strong.",
        question9: "The biggest fraction is 5/8. Your topic is strong.",
        question10: "The biggest fraction is 5/8. Your topic is strong.",
        question11: "Mary will be 24 years old when she is twice her brother's age. Your topic is strong.",
        question12: "The biggest fraction is 5/8. Your topic is strong.",
        question13: "The biggest fraction is 5/8. Your topic is strong.",
        question14: "The biggest fraction is 5/8. Your topic is strong.",
        question15: "The biggest fraction is 5/8. Your topic is strong."
    };

    // Question 1
    const answer1 = document.querySelector('input[name="answer1"]:checked');
    if (answer1 && answer1.value === '3') {
        score += 5;
        document.getElementById('feedback1').innerHTML = feedbackMessages.question1;
    } else {
        document.getElementById('feedback1').innerHTML = "Incorrect. Please review the question.";
    }

    // Question 2
    const answer2 = document.querySelector('input[name="answer2"]:checked');
    if (answer2 && answer2.value === '2') {
        score += 5;
        document.getElementById('feedback2').innerHTML = feedbackMessages.question2;
    } else {
        document.getElementById('feedback2').innerHTML = "Incorrect. your AP GP is weak revise these topics";
    }

    // Question 3
    const answer3 = document.querySelector('input[name="answer3"]:checked');
    if (answer3 && answer3.value === '1') {
        score += 5;
        document.getElementById('feedback3').innerHTML = feedbackMessages.question3;
    } else {
        document.getElementById('feedback3').innerHTML = "Incorrect. Please review the question.";
    }
    // Question 4
    const answer4 = document.querySelector('input[name="answer4"]:checked');
    if (answer4 && answer4.value === '1') {
        score += 5;
        document.getElementById('feedback4').innerHTML = feedbackMessages.question4;
    } else {
        document.getElementById('feedback4').innerHTML = "Incorrect. Please focus on your reasoning questions";
    }
    // Question 5
    const answer5 = document.querySelector('input[name="answer5"]:checked');
    if (answer5 && answer5.value === '1') {
        score += 5;
        document.getElementById('feedback5').innerHTML = feedbackMessages.question5;
    } else {
        document.getElementById('feedback5').innerHTML = "Incorrect. Please focus on your reasoning questions";
    }
    
     // Question 6
     const answer6 = document.querySelector('input[name="answer6"]:checked');
     if (answer6 && answer6.value === '1') {
         score += 5;
         document.getElementById('feedback6').innerHTML = feedbackMessages.question6;
     } else {
         document.getElementById('feedback6').innerHTML = "Incorrect. Please focus on your reasoning questions";
     }
     // Question 7
     const answer7 = document.querySelector('input[name="answer7"]:checked');
     if (answer7 && answer7.value === '1') {
         score += 5;
         document.getElementById('feedback7').innerHTML = feedbackMessages.question7;
     } else {
         document.getElementById('feedback7').innerHTML = "Incorrect. Please focus on your reasoning questions";
     }
     // Question 8
     const answer8 = document.querySelector('input[name="answer8"]:checked');
     if (answer8 && answer8.value === '1') {
         score += 5;
         document.getElementById('feedback8').innerHTML = feedbackMessages.question8;
     } else {
         document.getElementById('feedback8').innerHTML = "Incorrect. Please focus on your reasoning questions";
     }
     // Question 9
     const answer9 = document.querySelector('input[name="answer9"]:checked');
     if (answer9 && answer9.value === '1') {
         score += 5;
         document.getElementById('feedback9').innerHTML = feedbackMessages.question9;
     } else {
         document.getElementById('feedback9').innerHTML = "Incorrect. Please focus on your reasoning questions";
     }

     // Question 10
     const answer10 = document.querySelector('input[name="answer10"]:checked');
     if (answer10 && answer10.value === '1') {
         score += 5;
         document.getElementById('feedback10').innerHTML = feedbackMessages.question10;
     } else {
         document.getElementById('feedback10').innerHTML = "Incorrect. Please focus on your reasoning questions";
     }

      // Question 11
      const answer11 = document.querySelector('input[name="answer11"]:checked');
      if (answer11 && answer11.value === '1') {
          score += 5;
          document.getElementById('feedback11').innerHTML = feedbackMessages.question11;
      } else {
          document.getElementById('feedback11').innerHTML = "Incorrect. Please focus on your reasoning questions";
      } 
      
      // Question 12
      const answer12 = document.querySelector('input[name="answer12"]:checked');
      if (answer12 && answer12.value === '1') {
          score += 20;
          document.getElementById('feedback12').innerHTML = feedbackMessages.question12;
      } else {
          document.getElementById('feedback12').innerHTML = "Incorrect. Please focus on your reasoning questions";
      } 
      
      // Question 13
      const answer13 = document.querySelector('input[name="answer13"]:checked');
      if (answer13 && answer13.value === '1') {
          score += 5;
          document.getElementById('feedback13').innerHTML = feedbackMessages.question13;
      } else {
          document.getElementById('feedback13').innerHTML = "Incorrect. Please focus on your reasoning questions";
      } 
      
      // Question 14
      const answer14 = document.querySelector('input[name="answer14"]:checked');
      if (answer14 && answer14.value === '1') {
          score += 5;
          document.getElementById('feedback14').innerHTML = feedbackMessages.question14;
      } else {
          document.getElementById('feedback14').innerHTML = "Incorrect. Please focus on your reasoning questions";
      } 
      
      // Question 15
      const answer15 = document.querySelector('input[name="answer15"]:checked');
      if (answer15 && answer15.value === '1') {
          score += 5;
          document.getElementById('feedback15').innerHTML = feedbackMessages.question15;
      } else {
          document.getElementById('feedback15').innerHTML = "Incorrect. Please focus on your reasoning questions";
      }

    let result = document.getElementById('result');
    if (score >= 30) {
        result.innerHTML = `Correct! Your score is ${score}. Passed!`;
    } else {
        result.innerHTML = `Try Hard next time. Your score is ${score}. please revise as per the feedback and come back soon`;
    }
}
