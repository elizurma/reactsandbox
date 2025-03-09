$(document).ready(function() {
    const $root = $('#counter-root');
    const Counter = window.CounterComponent.default;
    
    // Initial render
    ReactDOM.render(
        React.createElement(Counter, {
            initialCount: 0,
            language: 'en'
        }),
        $root[0] // Convert jQuery object to DOM element
    );

    // Language switch handler
    $('#language-switch').on('change', function() {
        const language = $(this).val();
        ReactDOM.render(
            React.createElement(Counter, {
                initialCount: window.ReactCounter.getCount(),
                language: language
            }),
            $root[0]
        );
    });
});