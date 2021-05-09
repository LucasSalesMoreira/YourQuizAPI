function requestToNewQuiz() {
    const quiz = {
        author: 'LucasSales',
        title: 'XXXXXXX',
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

requestToNewQuiz();