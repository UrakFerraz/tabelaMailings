


// dropdown ações
var acoesBtn = document.querySelector('.gestorMailingLineActionsWrapper');
var acoesDropdown = document.querySelector('.gestorMailingDropdownActionsWrapper');

acoesBtn.onclick = function() {
  if (acoesDropdown.style.display == 'none') {
    acoesDropdown.style.display = 'flex';
  } else {
    acoesDropdown.style.display = 'none';
  }
}

function fecharModal() {
  acoesDropdown.style.display = 'none';
}

// hover sort icons
function sortHov(obj) {
  var sortIcon = obj.getElementsByClassName("sortSvgPath")[0];
  sortIcon.style.fill = 'gray';
}

function sortHovOut(obj) {
  var sortIcon = obj.getElementsByClassName("sortSvgPath")[0];
  sortIcon.style.fill = '#eee2df';
}


// classificar tabelas
function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++;      
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}


// ações deletar

var deletarBtn = document.querySelector('#gestorMailingDeletarBtn');
var deletarDialogBox = document.querySelector('.deleteConfirmContainer');
var BtnOK = document.querySelector('.BtnOk');

deletarBtn.onclick = function() {
  deletarDialogBox.style.display = 'flex';
  acoesDropdown.style.display = 'none';
}

BtnOK.onclick = function() {
  deletarDialogBox.style.display = 'none';
}


// ações duplicar

var acoesDuplicarBtn = document.querySelector('#gestorMailingDuplicarBtn');
var duplicateContainer = document.querySelector('.duplicateContainer');
var duplicarBtn = document.querySelector('.duplicarBtn');

acoesDuplicarBtn.onclick = function() {
  duplicateContainer.style.display = 'flex';
  acoesDropdown.style.display = 'none';
}


duplicarBtn.onclick = function() {
  duplicateContainer.style.display = 'none';
}