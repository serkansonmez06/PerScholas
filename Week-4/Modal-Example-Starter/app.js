$(() => { // created a document ready function

    //Grabbing Elements
    const $open = $('#openModal'); // 1-declare variable and assigned id 
    const $popUpModal = $('#modal');
    const $closeB = $('#close');

    //Event Handlers
    const openModal = () => { //2-created function display textbox
            $popUpModal.show();

        }
        //Event Listeners
    $open.on('click', openModal); //3- created a event listener when we click on openmodal func invoke

    const close = () => {
            $popUpModal.hide();
        }
        //Event Listeners

    $closeB.on('click', close);

})


window.alert('are you over 18? if your answer is yes, please continue');