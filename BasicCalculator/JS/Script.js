
  var a = document.getElementById('firstInput');//1- variable assigned to document.getElementById, so it can pick the value and pass
                                                // throught function
  var b = document.getElementById('secondInput');
  var results= document.getElementById('finalResult');

  function average() {
    results.value = (Number(a.value) + Number(b.value)/2)
  }

  function subtraction(){
    results.value = Number(a.value) - Number(b.value);
  }
  function division(){
    results.value = Number(a.value) / Number(b.value);
  }// 2- results value gets value property so input number can pass through it otherwise it wont pick value entered by users
  // 3- var a pick variable and went through the function (/) and pass the results and from there document.getElementById pick final resul, print it inspect
  //finalresul input box
  function multiple(){
    results.value = Number(a.value) * Number(b.value);
  }

  function addition(){
    results.value = Number(a.value) + Number(b.value);
  }
