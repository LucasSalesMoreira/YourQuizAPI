$(document).ready(() => {
    function setQuestions(data) {
        let questions = data.questions;
        document.getElementById('respModalLabel').innerHTML = questions[0].title_quiz;
        $modalBody = $('#modal-body');

        questions.forEach(element => {
            console.log(element);
            let id = element.id;
            let title = element.title;
            let a = element.a;
            let b = element.b;
            let c = element.c;
            let ask = element.ask;
            $modalBody.append($('<p>', { html: ask }));
        });
    }

    function addEventClick() {
        // Load quiz
        $('.btn-start').click(() => {
            $.ajax({
                url: $(this).val(),
                method: 'GET',
                dataType: 'json',
                success: function(data) {
                    setQuestions(data);
                },
                error: function(error) {
                    console.log(error);
                }
            });
        });
    }

    function setCards(quizzes) {
        quizzes.forEach(object => {
            // Montar o card
            let title = object.title;
            let author = object.author;
            let description = object.description;
            let img_url = object.img_url;

            let $baseDiv = $('<div>', {
                class: 'm-lg-4',
                html: $('<div>', {
                    class: 'card',
                    style: 'width: 18rem;',    
                    html: [
                            $('<img>', {
                                src: img_url,
                                style: 'height: 18rem;',
                                class: 'card-img-top' 
                            }),
                            $('<div>', {
                                class: 'card-body',
                                html: [
                                    $('<h5>', {
                                        class: 'card-title',
                                        text: title
                                    }),
                                    $('<p>', {
                                        class: 'card-text',
                                        text: description
                                    }),
                                    $('<button>', {
                                        type: 'button',
                                        value: `/quiz/view/${title}`,
                                        class: 'btn btn-primary btn-start',
                                        'data-toggle': 'modal',
                                        'data-target': '#respModal',
                                        text: 'Responder quiz'
                                    })
                                ]
                            })
                        ]
                    })
                });

            $('.row').append($baseDiv);
        });

        addEventClick();
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

    $('#bt-load-img').click(() => {
        $imgArray = $('#img_url');
        $imgArray[0].src = $('#input_img_url').val();
    });
});