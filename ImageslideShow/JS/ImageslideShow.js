
  index =0; //6-declare variable outside of the local scope.

  function imageSlides(x){ //1- create function

    var images = ["http://1ttnwj3qbvu23kfodm1zk0a9-wpengine.netdna-ssl.com/wp-content/uploads/pyrenees-aigues-tortes-national-park-hd-s.jpg",
     "http://1ttnwj3qbvu23kfodm1zk0a9-wpengine.netdna-ssl.com/wp-content/uploads/pt-serradaestrela-photo-paulomagalhaes-hd-s.jpeg",
     "http://1ttnwj3qbvu23kfodm1zk0a9-wpengine.netdna-ssl.com/wp-content/uploads/pyrenees-aigues-tortes-national-park-hd-s.jpg",
     "https://thairesidents.com/wp-content/uploads/2018/12/37691995_255857698531677_4672055683602972672_n.jpg",
     "https://thairesidents.com/wp-content/uploads/2018/12/22-DEW_6928-800x533.jpg"] //2- create array with 5 images in it

    if (x>0){  //  7-  is x = 1 && is index<4 = - create if statements and first condition for to move Forward
                //if x is greater than 0 which is (1) increment index ++, and if index is less than 4 increment index ++ as well.

      if (index<4){
        index++;
      }else {
        index=0;   //7- in other condition index will be 0 which is first image of the array.
                  //it tells the begining of index. after index of 4 index assiged to be 0. and start over from begining
                  //otherwise it will keep increment it and will exceed length of the array- keep increment it without changing any images
      }
    }
    if (x<0){  //8- is x = -1 && is index>0 = create second if statements inside function for decrement it.
      //if arguments is less than 0 decrement index which is index-- and if index is greater than 0 decremet index.

      if (index>0) {
        index--;
      }else {
        index=4;  //8-in other condition index will be 4 which is last image of the array.
                 // it tells the end of index. when you decrement it after index of 0, index assiged to be 4. and start over from at the end <!--of array-->
                 //otherwise it will keep decrement it without changing any images
   }

  }
  document.getElementById('img').src = images[index];
                           // 5-we need to call function with document.getElementById event header by  img id which we created for
                              //image tag and src assigned to images(array) and included index inside [] to get index of array
  console.log(index); //9- to see plus 1 and plus see. doesnt have any impact on images or imageSlides
   }
