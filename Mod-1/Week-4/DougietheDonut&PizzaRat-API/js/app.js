$(() => { //jquery document ready func
    $('form').on('click', (e) => { // onclick function runs
        e.preventDefault(); //default action that belongs to the event will not occur.
        let userInput = $('input[type="text"]').val(); //collects data from input
        const button = $(e.target).val();

        if (userInput < 1) {
            userInput = 10;
        }
        //Reset the ordered list if the burough buttton is clicked but ignore the NYPD response button
        if (button != 'NYPD Response') {
            $('ol').html(``);
        }

        $.ajax({
            url: 'https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=' +
                button.toUpperCase(), //collected data is lowercase
        }).then(
            (data) => {
                // This will print the number of complaints number that user input it
                var count = 0;
                for (let index = 0; index < data.length; index++) {
                    if (data[index].agency == 'NYPD' && count < Number(userInput)) {
                        count++;
                        $('ol').append(`
            <li> 
            <strong>Borough</strong><span id="borough">${
              data[index].borough // brough data will get from ajax request. data class borough property
            }</span>
            <br>
            <strong>Descriptor</strong>:<span id="descriptor">${
              data[index].descriptor // brough data will get from ajax request. data class descriptor property
            }</span>
            <br>
            <strong>Agency</strong>:<span id="agency">${data[index].agency // brough data will get from ajax request. data class agency property
            }</span> 
            <br>
            <div ><strong>Resolution description</strong>:<span><br><section>${
              data[index].resolution_description// brough data will get from ajax request. data class description of response property
            }</section></span></div>
            <input type="submit" value="NYPD Response" onclick="response(${count.toString()})" class="btn btn-info" id="bit">
            </li>
            
            <hr>
            `);
                    }
                }
            },
            () => {}
        );
    });
});

function response(x) {
    var myNodelist = document.querySelectorAll('div');

    $(myNodelist[x]).animate({
            height: 'toggle',
        },
        'slow'
    );
}