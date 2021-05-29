$(document).ready(() => {
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
                                    $('<a>', {
                                        href: '#',
                                        class: 'btn btn-primary',
                                        text: 'Responder quiz'
                                    })
                                ]
                            })
                        ]
                    })
                });

            
            $('.row').append($baseDiv);
        });
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