$(document).ready(() => {
    function setCards(quizzes) {
        quizzes.forEach(object => {
            console.log(object);
            // Montar o card
            let title = object.title;
            let author = object.author;
            let description = object.description;

            let $baseDiv = $('<div>', {
                class: 'm-lg-4',
                html: [
                    $('<div style="width: 18rem;">', {
                        class: 'card',
                        html: [
                            
                        ]
                    })
                ]
            });
        });
        // Setar o card
    }

    $.ajax({
        url: '/quiz/',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log(data);
            setCards(data.quizzes);
        },
        error: function(error) {
            console.log(error);
        }
    });
});