// things I couldnt do: get the timer to work normally, get the last question to work, get the in between landing pages to work because of the timer not working, get the results page to work ebcause my last questions wont work. This one is bad, very bad.... need much more help. Sry.




$(document).ready ( function() { 

var testQuestions = [
{ question:"Which actress plays Katniss Everdeen in the Hunger Games movies?",
    answers: {
    a:"Jennifer Lawrence",
    b:"Sandra Bullock",
    c:"Willow Shields"
    },
    correctAnswer:"a" 
},

{ question:"What is the name of the hobbit played by Elijah Wood in the Lord of the Rings movies?",
    answers: { 
        a:"Orlando Bloom",
        b:"Frodo Baggins",
        c:"Bilbo Baggins"
    },
    correctAnswer:"b"
},
{ question:" What is the name of the kingdom where the 2013 animated movie Frozen is set??",
    answers: {
    a:"Wonderland",
    b:"Agrabah",
    c:"Arendelle."
    },
    correctAnswer:"c" 
},

{ question:"In which movie did Julia Roberts play a kind-hearted prostitute called Vivian Ward?",
    answers: { 
        a:"Ocean's Eleven",
        b:"Pretty Woman",
        c:"Erin Brockovich"
    },
    correctAnswer:"b"
},
{ question:"In which year were the Academy Awards, or Oscars, first presented?",
    answers: {
    a:"1920",
    b:"1941",
    c:"1929"
    },
    correctAnswer:"c" 
},

{ question:"What is the name of the dog from Wizard of Oz?",
    answers: { 
        a:"Toto",
        b:"Otto",
        c:"Oz"
    },
    correctAnswer:"a"
}
];

// console.log(testQuestions[0].question);
// console.log(testQuestions[0].answers.a);
// console.log(testQuestions[0].answers.b);
console.log(testQuestions[5].question);
// // console.log(testQuestions.length)
console.log(testQuestions[5].answers.a);

var score = 0;
var userAnswers;
var counter = 0;
var losses = 0;
var totalQuestions = testQuestions.length;
var timeRanOut=0;

function displayQuestions() {
   
    $(".Test-questions").html(testQuestions[counter].question);
    $(".Test-answers-a").html("<span class='ans' value='a'>" + testQuestions[counter].answers.a + "</span>");
    $(".Test-answers-b").html("<span class='ans' value='b'>" + testQuestions[counter].answers.b + "</span>");
    $(".Test-answers-c").html("<span class='ans' value='c'>" + testQuestions[counter].answers.c + "</span>"); 

    // if(counter === totalQuestions){
    //     $(".Test-questions").html(testQuestions[5].question);
    //     $(".Test-answers-a").html("<span class='ans' value='a'>" + testQuestions[5].answers.a + "</span>");
    //     $(".Test-answers-b").html("<span class='ans' value='b'>" + testQuestions[5].answers.b + "</span>");
    //     $(".Test-answers-c").html("<span class='ans' value='c'>" + testQuestions[5].answers.c + "</span>"); 
    //  }
}




function timer() {
    var clock = 20;
    $(".timer").prepend(clock);
    clock--;
    var clear = setInterval(function() {
      if (clock === 1) {
        clearInterval(clear)
        $(".timer").prepend("0, time's up!")
      } else if ($(this).click){
        clearInterval(clear)
        timer();
      } else {
        clock--;
        console.log(clock)
        timeRanOut++;
        clearInterval(clear)
      }
    }, 1000);
  }



function showResults(){

    $(".Test").replaceWith();
    $(".Test").html("You got " + score + "right! And you got " + losses + "wrong!")
}

// function showLastQuestion(){
//     if(counter === 6){
//         $(".Test-questions").html(testQuestions[5].question);
//         $(".Test-answers-a").html("<span class='ans' value='a'>" + testQuestions[5].answers.a + "</span>");
//         $(".Test-answers-b").html("<span class='ans' value='b'>" + testQuestions[5].answers.b + "</span>");
//         $(".Test-answers-c").html("<span class='ans' value='c'>" + testQuestions[5].answers.c + "</span>"); 
//      }
// }






$("#submit").on("click", function(event) {
    $("button").replaceWith();
    displayQuestions();
    timer();
});









$(document).on('click', '.ans', function(event){
    console.log($(this).attr('value'));
    //compare answers 
    displayQuestions();
    // showLastQuestion()

    // counter++;
    var userChoice = $(this).attr('value')
    console.log(userChoice)
    console.log(testQuestions[counter].correctAnswer)
    $(userChoice).push(userAnswers);

    // if(counter === 6){
    //     $(".Test-questions").html(testQuestions[5].question);
    //     $(".Test-answers-a").html("<span class='ans' value='a'>" + testQuestions[5].answers.a + "</span>");
    //     $(".Test-answers-b").html("<span class='ans' value='b'>" + testQuestions[5].answers.b + "</span>");
    //     $(".Test-answers-c").html("<span class='ans' value='c'>" + testQuestions[5].answers.c + "</span>"); 
    //  }

    if(userChoice === testQuestions[counter].correctAnswer){
        score ++;
        counter ++;
        displayQuestions();
        timer();
        alert("YES");
        // showLastQuestion();
        console.log(counter);

    }
    else if(userChoice !== testQuestions[counter].correctAnswer){
        counter ++;
        displayQuestions();
        timer();
        alert("NO");
        losses ++;
        // showLastQuestion();
        console.log(counter);
     }

})

















})