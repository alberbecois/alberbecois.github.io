

/* function to populate the province dropdown menu
*/
function populateList() {
var select = document.getElementById("selectProvince");
var provinces = ["ON", "QC", "SK", "AB", "BC", "NWT", "YK", "NB", "NS", "PEI", "NU"];
     //alert('hi there');
    for(var i = 0; i < provinces.length; i++) {
    var opt = document.createElement('option');
    opt.innerHTML = provinces[i];
    opt.value = provinces[i];
    sel.appendChild(opt);
    }
   
} // end of function populateList


/// validate name form
function validateFirstNameForm() {
    let x = document.forms["input-group-text"]["fName"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
}

document.addEventListener('click', validateFirstNameForm, false)