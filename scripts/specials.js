

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
/**
 *  validates user data entry
 */
 function validateForm() {
    // declare variables
    let txtFirstName = document.getElementById('fName');
    let txtLastName = document.getElementById('lName');
    let emailInput = document.getElementById('txtEmail');

    // validate poduct
    if (txtFirstName.value === '') {
        window.alert('You must enter a first name');
        txtFirstName.focus();
        return false;
    } // end if
    else
    // validate quantity
    if (txtLastName.value === '') {
        window.alert('You must enter a last name');
        txtLastName.focus();
        return false;   
    } // end if
    else
    // validate shipping method
    if (emailInput.value === '') {
        window.alert('You must enter a valid email address');
        emailInput.focus();
        return false;
    } // end if
    else {
        return true;
    }

    
}
