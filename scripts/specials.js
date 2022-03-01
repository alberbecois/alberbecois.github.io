

/* function to populate the province dropdown menu
*/
/*function populateList() {
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
*/

/// validate name form
/**
 *  validates user data entry
 */
 function validateForm() {
    // declare variables
    let txtFirstName = document.getElementById('fName');
    let txtLastName = document.getElementById('lName');
    let emailInput = document.getElementById('txtEmail');
    let selectedProvince = document.getElementById('selectProvince');
    let PhoneNum = document.getElementById('txtPhone');
    
    // validate first name
    if (txtFirstName.value === '') {
        window.alert('You must enter a first name');
        txtFirstName.focus();
        return false;
    } // end if
    else
    // validate last name
    if (txtLastName.value === '') {
        window.alert('You must enter a last name');
        txtLastName.focus();
        return false;   
    } // end if
    else

    // validate province
    if (selectedProvince.value === '') {
        window.alert('You must select a province');
        selectedProvince.focus();
        return false;   
    } // end if
    else
     // validate phone
     if (PhoneNum.value === '') {
        window.alert('You must enter a valid phone number');
        PhoneNum.focus();
        return false;   
    } // end if
    else
    // validate email address
    if (emailInput.value === '') {
        window.alert('You must enter a valid email address');
        emailInput.focus();
        return false;
    } // end if
    else {
        return true;
    } // end else

    
} // end function validateForm
