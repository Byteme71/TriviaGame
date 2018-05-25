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
}
];


// console.log(testQuestions[0].question);
// console.log(testQuestions[0].answers.a);
// console.log(testQuestions[0].answers.b);
// console.log(testQuestions[0].answers.c);


var score = 0;
var userAnswers = [];

var counter = 0
var timer = 20;

function displayQuestions() {
   
    $(".Test-questions").html(testQuestions[counter].question);
    $(".Test-answers-a").html("<span class='ans' value='a'>" + testQuestions[counter].answers.a + "</span>");
    $(".Test-answers-b").html("<span class='ans' value='b'>" + testQuestions[counter].answers.b + "</span>");
    $(".Test-answers-c").html("<span class='ans' value='c'>" + testQuestions[counter].answers.c + "</span>"); 
}



$("#submit").on("click", function(event) {
    $("button").replaceWith();
    displayQuestions();
});



$(document).on('click', '.ans', function(event){
    console.log($(this).attr('value'));
    //compare answers 
    displayQuestions();
    // counter++;
    var userChoice = $(this).attr('value')
    console.log(userChoice)
    console.log(testQuestions[counter].correctAnswer)

    if(userChoice === testQuestions[counter].correctAnswer){
        score ++;
        counter ++;
        displayQuestions();
        alert("YES");

    }
    else if(userChoice !== testQuestions[counter].correctAnswer){
        counter ++;
        displayQuestions();
        alert("NO");
  }

})

















})