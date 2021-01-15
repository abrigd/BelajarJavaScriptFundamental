


function fMatrix(dimensi) {
    //location.reload();
//return false;


  counter = 0;

  /*
  while (counter <= dimensi) {
    lstBuah += "<li>" + counter + "</li>";
    counter++;

    {
      var x = document.getElementById("myTable").insertRow(r);
      for (var c = 0; c < parseInt(cn, 10); c++) {
        var y = x.insertCell(c);
        y.innerHTML = "Row-" + r + " Column-" + c;
      }
    }
  }

  */
 var dimensiT1=dimensi;
 document.getElementById("tabel1").innerHTML = "<p>Masukan nilai matrix 1</p>";
  for (var r = 0; r < parseInt(dimensiT1, 10); r++) {
    var x = document.getElementById('tabe1').insertRow(r);
    for (var c = 0; c < parseInt(dimensiT1, 10); c++) {
      var y = x.insertCell(c);
      //y.innerHTML = "<input type='number' id='angka1'></input>";
      //y.innerHTML = "<input type='number' id='angka1'"+toString(r)+toString(c)+"'></input>"
      y.innerHTML = "<input type='number' id='angka1"+String(c)+String(r)+"'></input>"
    }
  }

  
  var dimensiT2=dimensi;
  document.getElementById("tabel2").innerHTML = "<p>Masukan nilai matrix 2</p>";
  for (var r = 0; r < parseInt(dimensiT2, 10); r++) {
    var x = document.getElementById('tabe2').insertRow(r);
    for (var c = 0; c < parseInt(dimensiT2, 10); c++) {
      var y = x.insertCell(c);
      //y.innerHTML = "Row-" + r + " Column-" + c;
      y.innerHTML = "<input type='number' id='angka2"+String(c)+String(r)+"'></input>"
      
      //console.log(c);
    }
  }



  //document.getElementById("matrix").innerHTML = lstBuah;
  //document.getElementById('hello').innerHTML = 'hi';
  //console.log("lstBuah");
}

function calculate(dimensi) {
    var dimensiT3=dimensi;
    //document.getElementById("tabel3").innerHTML = "<p>Masukan nilai matrix 1</p>";
     for (var r = 0; r < parseInt(dimensiT3, 10); r++) {
       var x = document.getElementById('tabe3').insertRow(r);
       for (var c = 0; c < parseInt(dimensiT3, 10); c++) {
         var y = x.insertCell(c);
         //y.innerHTML = "<input type='number' id='angka1'></input>";
         //y.innerHTML = "<input type='number' id='angka1'"+toString(r)+toString(c)+"'></input>"
         //y.innerHTML = "<input type='number' id='angka3"+String(c)+String(r)+"' value='angka1"+String(c)+String(r)+"'+'angka2"+String(c)+String(r)+"'></input>"
        var a = parseInt(document.getElementById("angka1"+String(c)+String(r)+"").value);
        var b = parseInt(document.getElementById("angka2"+String(c)+String(r)+"").value);
        var z=a+b;
        console.log(z);
         y.innerHTML = "<input type='number' id='angka3"+String(c)+String(r)+"' value='"+String(z)+"'></input>"
       }
     }
}
