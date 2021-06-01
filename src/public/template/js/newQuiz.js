function requestToNewQuiz(num) {
    const quiz = {
        author: 'LucasSales',
        title: 'XXXXXXX_N_'+num,
        description: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_N_'+num,
        img_url: 'https://i.pinimg.com/originals/9a/ba/d9/9abad992d0fb8d55cb707396c13100f1.png',
        questions: [
            {
                ask: 'XXXXXXXXXXXXXX',
                a: 'XXXXXXX',
                b: 'XXXXXXX',
                c: 'XXXXXXX',
                right: 'b'
            },
            {
                ask: 'XXXXXXXXXXXXXX',
                a: 'XXXXXXX',
                b: 'XXXXXXX',
                c: 'XXXXXXX',
                right: 'c'
            },
            {
                ask: 'XXXXXXXXXXXXXX',
                a: 'XXXXXXX',
                b: 'XXXXXXX',
                c: 'XXXXXXX',
                right: 'a'
            }
        ]
    };

    $.ajax({
        url: '/quiz/new_quiz',
        method: 'POST',
        dataType: 'json',
        data: quiz,
        success: function(response) {
            console.log(`OK! => ${response}`);
        },
        error: function(error) {
            console.log(error);
        }
    });
}

//for (let i = 0; i < 1; i++) requestToNewQuiz(Math.floor(Math.random() * (i + 1000)));