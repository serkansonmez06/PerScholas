$(() => { //jquery selects and access jquery
    $('form').on('submit', function(e) { //collect data from form on submit button , run everything from this func
        e.preventDefault(); //preventdefault from if the event does not get explicitly handled
        let $createdList = $(` 
                  <li>
                     <p>${$('#input-box').val()}</p>
                  </li>
              `); // collect input value for to do list 
        $createdList.css('background-color', 'lightgreen'); //  Added the blue color to the to do list items which entered by user
        $(e.currentTarget).trigger('reset'); //clear the input box user can add more items
        let remove = $("<input type='submit' value='REMOVE' id='remove'/>").click( //Add  remove button to the to do list items after this are done

            function() { // allow you to target the parent of the input which is the the current to do list item
                let list = $(this).parent();
                list.remove();
            }
        );
        let complete = $(
            "<input type='submit' value='COMPLETED'/>" //create complete button for items are done
        ).click(function() { //after you click on it function runs
            var list2 = $(this).parent();
            list2.fadeOut(function() { //things are done- fades out
                $createdList.css('background-color', 'orange'); //color
                $('#complete').append(list2); //add items at the end of the compelete, which moves items to left
                $createdList.append(remove); //adds remove button to thing are done
                list2.fadeIn(); //fade in 
            });
            $(this).remove(); // removes items
        });
        $createdList.append(complete); //Added the completed list item to the list
        $('#todo').append($createdList); //create list items to the to do list
    });
});