$(document).ready(function() {
    $('#task-form').on('submit', function(event) {
        event.preventDefault();
        let taskText = $('#task-input').val();
        if (taskText) {
            $('#task-list').append(`<li>${taskText}</li>`);
            $('#task-input').val('');
        }
    });

    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });

    $('#clear-btn').on('click', function() {
        $('#task-list').empty();
    });
});