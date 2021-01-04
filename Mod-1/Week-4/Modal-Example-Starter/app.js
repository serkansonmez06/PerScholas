$(() => { // created a document ready function

    //Grabbing Elements
    const $open = $('#openModal'); // 1-declare variable and assigned id 
    // const $open = document.querySelector('#openModel');

    const $popUpModal = $('#modal');
    //const $openUpModal = document.querySelector('#model');

    const $closeB = $('#close');
    //const $closeB = document.querySelector('#close');

    //Event Handlers
    const openModal = () => { //2-created function display textbox
            $popUpModal.show();

        }
        //Event Listeners
    $open.on('click', openModal); //3- created a event listener when we click on openmodal func invoke
    //document.getByElement('openModal).addEventListener('click', openModal);
    const close = () => {
            $popUpModal.hide();
        }
        //Event Listeners

    $closeB.on('click', close);

})


window.alert('are you over 18? if your answer is yes, please continue');