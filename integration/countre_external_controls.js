$(document).ready(function () {
    // External controls
    $('#external-increment').on('click', function () {
        if (window.ReactCounter) {
            window.ReactCounter.increment();
        }
    });

    $('#external-decrement').on('click', function () {
        if (window.ReactCounter) {
            window.ReactCounter.decrement();
        }
    });

    // Set custom value
    $('#set-count-btn').on('click', function () {
        const newCount = parseInt($('#count-input').val(), 10);
        if (!isNaN(newCount) && window.ReactCounter) {
            window.ReactCounter.setCount(newCount);
        }
    });

    // Subscribe to counter updates
    if (window.ReactCounter) {
        window.ReactCounter.subscribe(function(count) {
            $('#external-count-display').text(count);
        });
    }
});
