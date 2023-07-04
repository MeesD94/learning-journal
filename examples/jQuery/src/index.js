
$(document).ready(function() {
    console.log('Document is ready! jQuery is working');

    $('p').addClass('color-red'); // Add the 'color-red' class to the element.

    $('.div_class').css('font-size', '2em');// Add the css property 'font-size' with the size of '2em' to the property
                                            // with the class 'div_class'
    $('#third_div').text('Change the text for div with id: #third_div'); //Change the text for div with id: #third_div

    $("[data-custom='customAttribute']").removeClass('hide-element'); // Removed the class hide-element to show it.


    $('#btn-one').click(function (){
        $('#animation-one').animate({left: '200px'}); // Move block to the right.
    });

    $('#btn-two').click(function (){
        $('#animation-two').animate({
            left: '200px',
            width: 25
        },3000);
    });

    $('#dbl-click').dblclick(function () {
        $('#dbl-click').css('color','green'); // Set color to green after double click
    });

    $('#hover').hover(function () {
        $('#hover').css('font-size', '1.5em');
    });

    let i = 0;
    $("#input-press").keypress(function(){
        $("span").text (i += 1);
    });

    $('#get').click(function () {
        let pokemon = $('#pokemon-name').val();
        let url = 'https://pokeapi.co/api/v2/pokemon/' + pokemon;
        $.get(url)
            .done(function (data) {
            $('#get-response').text(data.weight);
            })
            .fail(function () {
                $('#get-response').text('Cant find pokemon: ' + pokemon);
            })
    });


});