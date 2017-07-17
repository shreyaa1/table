window.addRowTop =function(){
var table= document.getElementById("myTable");
var totalTD = $(table).find('td').length;
var totalTR = $(table).find('tr').length;
var totalColumn = totalTD/totalTR;
var newRow = table.insertRow(0);
  for (var j=0; j < totalColumn; j++){
    var row = newRow.insertCell(0);
    row.innerHTML= 'CELL';
  }
}

window.addRowBelow =function(){
var table= document.getElementById("myTable");
var totalTD = $(table).find('td').length;
var totalTR = $(table).find('tr').length;
var totalColumn = totalTD/totalTR;
var newRow = table.insertRow(totalTR);
  for (var j=0; j < totalColumn; j++){
    var row = newRow.insertCell(0);
    row.innerHTML= 'CELL';
  }
}

window.deleteRowTop = function(){
      document.getElementById("myTable").deleteRow(0);
  }

  window.deleteRowBelow = function(){
    var table= document.getElementById("myTable");
    var totalTR = $(table).find('tr').length;
        document.getElementById("myTable").deleteRow(totalTR-1);
    }

window.addColumnFirst = function() {
      var table= document.getElementById("myTable"); // $('#myTable')[0]
      for(var i=0; i < $(table).find('tr').length; i++){
      var c =   $(table).find('tr')[i].insertCell(0);
      c.innerHTML = 'CELL';
      }
  }
  window.addColumnLast = function() {
      var table= document.getElementById("myTable"); // $('#myTable')[0]
      for(var i=0; i < $(table).find('tr').length; i++){
        var totalTD = $(table).find('td').length;
        var totalTR = $(table).find('tr').length;
        var totalColumn = totalTD/totalTR;
      var c =   $(table).find('tr')[i].insertCell(totalColumn);
      c.innerHTML = 'CELL';
      }
  }

  window.deleteColumnFirst = function() {
  var table=  document.getElementById("myTable");
  for(var i=0; i < $(table).find('tr').length; i++){
  var c =   $(table).find('tr')[i].deleteCell(0);

}}

window.deleteColumnLast = function() {
var table=  document.getElementById("myTable");
for(var i=0; i < $(table).find('tr').length; i++){
  var totalTD = $(table).find('td').length;
  var totalTR = $(table).find('tr').length;
  var totalColumn = totalTD/totalTR;
  var c =   $(table).find('tr')[i].deleteCell(totalColumn-1);

}}
