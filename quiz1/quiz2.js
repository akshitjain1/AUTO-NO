window.onload = function() {
    let timeLeft = 90;
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
        document.querySelector("button").disabled = true;
    }
};
function checkAnswer() {
    let score = 0;
    const feedbackMessages = {
        question1: "The smallest prime number is 2.",
        question2: 'The name of the closest star to Earth is Proxima Centauri.',
        question3: 'The Pilgrims came to America on the Mayflower.',
         question4: 'It takes 5 minutes to make 100 parts on 100 machines.',
         question5: 'The three primary colors are Red, Blue, and Yellow.',
         question6: 'A stack is a Last In First Out (LIFO) data structure, while a heap is a priority queue data structure.',
         question7: 'A static memory allocation is a memory allocation that occurs at compile time, while a dynamic memory allocation is a memory allocation that occurs at runtime.',
         question8:' A valid way to represent a boolean value in C programming language is using a char variable with a value of True or False.',
         question9: 'Repeat-until is not a valid loop in Java.',
         question10: '^ is not a valid operator in C++.',
         question11: 'SyntaxError is not a valid exception in Java.',
         question12: 'sort() is not a valid method in the ArrayList class in Java.',
         question13: 'length() is not a valid method in the String class in Java. It should be length().',
         question14: 'SyntaxError is not a valid exception in Java.',
         question15: 'sqrt() is a valid method in the Math class in Java that returns the square root of a number.',
        
    };

    // Question 1
    const answer1 = document.querySelector('input[name="answer1"]:checked');
    if (answer1 && answer1.value === '3') {
        score += 20;
        document.getElementById('feedback1').innerHTML = feedbackMessages.question1;
    } else {
        document.getElementById('feedback1').innerHTML = "Incorrect. Please review the question.";
    }

    // Question 2
    const answer2 = document.querySelector('input[name="answer2"]:checked');
    if (answer2 && answer2.value === '1') {
        score += 20;
        document.getElementById('feedback2').innerHTML = feedbackMessages.question2;
    } else {
        document.getElementById('feedback2').innerHTML = "Incorrect. your AP GP is weak revise these topics";
    }

    // Question 3
    const answer3 = document.querySelector('input[name="answer3"]:checked');
    if (answer3 && answer3.value === '3') {
        score += 20;
        document.getElementById('feedback3').innerHTML = feedbackMessages.question3;
    } else {
        document.getElementById('feedback3').innerHTML = "Incorrect. Please review the question.";
    }
    // Question 4
    const answer4 = document.querySelector('input[name="answer4"]:checked');
    if (answer4 && answer4.value === '1') {
        score += 20;
        document.getElementById('feedback4').innerHTML = feedbackMessages.question1;
    } else {
        document.getElementById('feedback4').innerHTML = "Incorrect. Please focus on your reasoning questions";
    }
    // Question 4
    const answer5 = document.querySelector('input[name="answer5"]:checked');
    if (answer5 && answer5.value === '1') {
        score += 20;
        document.getElementById('feedback5').innerHTML = feedbackMessages.question1;
    } else {
        document.getElementById('feedback5').innerHTML = "Incorrect. Please focus on your reasoning questions";
    }
    const answer6 = document.querySelector('input[name="answer6"]:checked');
    if (answer6 && answer6.value === '3') {
        score += 20;
        document.getElementById('feedback5').innerHTML = feedbackMessages.question1;
    } else {
        document.getElementById('feedback5').innerHTML = "Incorrect. Please focus on your reasoning questions";
    }
    const answer7 = document.querySelector('input[name="answer7"]:checked');
    if (answer7 && answer7.value === '1') {
        score += 20;
        document.getElementById('feedback5').innerHTML = feedbackMessages.question1;
    } else {
        document.getElementById('feedback5').innerHTML = "Incorrect. Please focus on your reasoning questions";
    }
    const answer8 = document.querySelector('input[name="answer8"]:checked');
    if (answer8 && answer8.value === '1') {
        score += 20;
        document.getElementById('feedback5').innerHTML = feedbackMessages.question1;
    } else {
        document.getElementById('feedback5').innerHTML = "Incorrect. Please focus on your reasoning questions";
    }
    const answer9 = document.querySelector('input[name="answer9"]:checked');
    if (answer9 && answer9.value === '4') {
        score += 20;
        document.getElementById('feedback5').innerHTML = feedbackMessages.question1;
    } else {
        document.getElementById('feedback5').innerHTML = "Incorrect. Please focus on your reasoning questions";
    }
    const answer10 = document.querySelector('input[name="answer10"]:checked');
    if (answer10 && answer10.value === '4') {
        score += 20;
        document.getElementById('feedback5').innerHTML = feedbackMessages.question1;
    } else {
        document.getElementById('feedback5').innerHTML = "Incorrect. Please focus on your reasoning questions";
    }
    const answer11 = document.querySelector('input[name="answer11"]:checked');
    if (answer11 && answer11.value === '4') {
        score += 20;
        document.getElementById('feedback5').innerHTML = feedbackMessages.question1;
    } else {
        document.getElementById('feedback5').innerHTML = "Incorrect. Please focus on your reasoning questions";
    }
    const answer12 = document.querySelector('input[name="answer12"]:checked');
    if (answer12 && answer12.value === '4') {
        score += 20;
        document.getElementById('feedback5').innerHTML = feedbackMessages.question1;
    } else {
        document.getElementById('feedback5').innerHTML = "Incorrect. Please focus on your reasoning questions";
    }
    const answer13 = document.querySelector('input[name="answer13"]:checked');
    if (answer13 && answer13.value === '1') {
        score += 20;
        document.getElementById('feedback5').innerHTML = feedbackMessages.question1;
    } else {
        document.getElementById('feedback5').innerHTML = "Incorrect. Please focus on your reasoning questions";
    }
    const answer14 = document.querySelector('input[name="answer14"]:checked');
    if (answer14 && answer14.value === '3') {
        score += 20;
        document.getElementById('feedback5').innerHTML = feedbackMessages.question1;
    } else {
        document.getElementById('feedback5').innerHTML = "Incorrect. Please focus on your reasoning questions";
    }
    const answer15 = document.querySelector('input[name="answer15"]:checked');
    if (answer15 && answer15.value === '1') {
        score += 20;
        document.getElementById('feedback5').innerHTML = feedbackMessages.question1;
    } else {
        document.getElementById('feedback5').innerHTML = "Incorrect. Please focus on your reasoning questions";
    }
    
    let result = document.getElementById('result');
    if (score >= 100) {
        result.innerHTML = `Correct! Your score is ${score}. Passed!`;
    } else {
        result.innerHTML = `Try Hard next time. Your score is ${score}. please revise as per the feedback and come back soon`;
    }
}
