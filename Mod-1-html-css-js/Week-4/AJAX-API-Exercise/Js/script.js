$.ajax({ //AJAX request to see in console 
    url: 'http://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen'
}).then(
    (data) => {
        console.log(data);
    },
    () => {
        console.log('bad request');
    }
);


$(() => { // API request to display in html

    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen'
    }).then(
        (data) => {
            console.log(data);
            $('#title').html(data.Title);
            $('#year').html(data.Year);
            $('#rating').html(data.Rated);


        },
        () => {
            console.log('bad request');
        }
    );
})

$.ajax({
    url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json",
    type: "GET",
    data: {
        "$limit": 5000,
        "$$app_token": "YOURAPPTOKENHERE"
    }
}).done(function(data) {
    alert("Retrieved " + data.length + " records from the dataset!");
    console.log(data);
});



// ../Css/style.css
//../Js/script.js