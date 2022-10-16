
//page loads with 1st question loaded
//when click answer:
    //submit form
        //checks if answer is right
        //change img background to green(update class to be correct) or red(update class to be incorrect)
        //adds to score
        // wait a sec then:
        //reset button
            //loads next question
//if all questions are done- show a finish screen with total score

const catQuiz = {}

catQuiz.catQuestionList = [
    {
        q: `Who goes by the nickname "peanut"?`,
        a: `xena`,
    },
    {
        q: `Who became a new woman after getting spayed late in life?`,
        a: `rose`,
    },
    {
        q: `Who greets you at the door when you get home?`,
        a: `both`,
    },
    {
        q: `Which of The Ladies is a gravy lover?`,
        a: `xena`,
    },
    {
        q: `Who is older?`,
        a: `xena`,
    },
    {
        q: `Which of The Ladies keeps me company while I code?`,
        a: `rose`,
    },
    {
        q: `Who, just like people, likes to sit on the dining room chairs?`,
        a: `both`,
    },
    {
        q: `Who is the most vocal?`,
        a: `rose`,
    },
    {
        q: `Who throws up the most?`,
        a: `xena`,
    },
    {
        q: `Which of The Ladies has the stinkiest poops?`,
        a: `rose`,
    },
]

catQuiz.catQuestionListIndex = -1
catQuiz.userScore = 0

// Resets radio buttons for next question (unchecks radio button & removes coloured background)
catQuiz.uncheckRadio =  () => {
    $("input:radio[name=cats]").prop("checked", false);
    $("img").filter('.' + catQuiz.userAnswer).removeClass("correct incorrect")
    $("input[type=radio]").attr('disabled', false)
}

// Updates score in HTML
catQuiz.updateUserScore =  () => {
    $(".score p").text(`${catQuiz.userScore} / ${catQuiz.catQuestionList.length}`)
}

// Loads questions & user score. Changes to end screen when there are no more questions
catQuiz.catQuestionLoader = () => {
    if (catQuiz.catQuestionListIndex === catQuiz.catQuestionList.length-1){
        $(".catQ").text("fin")
        $("label img").remove()
        $(".question").css('min-height', 'auto')
    } else {
    $( () => {
        catQuiz.catQuestionListIndex = catQuiz.catQuestionListIndex +=1
        $(".catQ").text(catQuiz.catQuestionList[catQuiz.catQuestionListIndex].q)
    })
    }
}

// Checks if user answer is correct & applies colour background accordingly
catQuiz.catQuestionAnswerChecker = () => {
    catQuiz.userAnswer = $("input:radio[name=cats]:checked").val()
    if (catQuiz.userAnswer === catQuiz.catQuestionList[catQuiz.catQuestionListIndex].a){
        catQuiz.userScore = catQuiz.userScore + 1
        $("img").filter('.' + catQuiz.userAnswer).addClass("correct")
    } else {
        $("img").filter('.' + catQuiz.userAnswer).addClass("incorrect")
    }
}

// Submit answer & loads next q on radio button selection
catQuiz.submitOnRadio = () => {
    // Sets radio button to submit form
    $("input[type=radio]").on("change", function(){
        $(this).closest("form").submit();
        $("input[type=radio]").attr('disabled', true)
        })
        // Removes default submit actions
        $("form").submit((e) => {
            e.preventDefault()
        // Checks user answer & updates score
        catQuiz.catQuestionAnswerChecker()
        catQuiz.updateUserScore()
        // Waits 2sec, then loads next question & unchecks radio
        setTimeout(
            () => {
            catQuiz.catQuestionLoader()
            catQuiz.uncheckRadio()
        }, 1000);
            })   
}

catQuiz.restart = () => {
    $(".restart").click(function() {
    location.reload();
    })
}

catQuiz.init = () => {
    catQuiz.updateUserScore()
    catQuiz.catQuestionLoader()
    catQuiz.submitOnRadio()
    catQuiz.restart()
}

$( () => {
    catQuiz.init ()
});