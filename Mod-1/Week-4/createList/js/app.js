const list = [];

$('form').on('submit', (e) => {
    console.log($('#input-box-fn').val());
    list.push($('#input-box-fn').val());
    e.preventDefault();
    $(e.currentTarget).trigger('reset');
    render();
});

const render = () => { //prints the item
    // console.log('list:', list);
    // $('ul').empty();
    // list.forEach((item) => { //it iterates the array
    //     console.log(item);
    $('ul').append('<li>' + list[list.length - 1] + '</li>');
    // });
    $('li').on('click', (e) => {

        $(e.currentTarget).css('text-decoration', 'line-through');
        $(e.currentTarget).effect('shake');
    })
}