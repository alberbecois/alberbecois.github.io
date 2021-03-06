
/*jshint esversion: 6 */
/*jshint unused:false*/
/*    
 *    WC4 Team Project
 *    Author: Emma Middleton, Joshua Knutson, Mobin Syed, Johan Elder
 *    Date: March 2, 2022
 */
/* function to populate the province dropdown menu
*/
function populateList() {
    //create the array for the dropdown menu list
    var provinces = ["Selection...", "ON", "QC", "SK", "AB", "BC", "NWT", "YK", "NB", "NS", "PEI", "NU"];
    
        // pass the contents of the array into the list elements
        let pLen = provinces.length;
    
        let results = "<ul>";
           for (let i = 0; i < pLen; i++) {
              results += "<option>" + provinces[i] + "</option>";
           }
           results += "</ul>";
    
    
        document.getElementById('selectProvince').innerHTML = results;
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
        let selectedProvince = document.getElementById('selectProvince');
        let phoneInput = document.getElementById('txtPhone');
        
        // validate first name
        if (txtFirstName.value === '') {
            window.alert('SVP entrer votre prenom');
            txtFirstName.focus();
            return false;
        } // end if
        else
        // validate last name
        if (txtLastName.value === '') {
            window.alert('SVP entrer votre nom');
            txtLastName.focus();
            return false;   
        } // end if
        else
        // validate email address
        if (emailInput.value === '') {
            window.alert('SVP entrer un courriel valide');
            emailInput.focus();
            return false;
        } // end if
        else
        // validate phone
        if (phoneInput.value === '') {
          window.alert('SVP entrer un num??ro de t??l??phone valide');
          phoneInput.focus();
          return false;   
        } // end if
        else
        // validate province
        if (selectedProvince.value === 'Selection...') {
          window.alert('SVP choisir une province');
          selectedProvince.focus();
          return false;   
        } // end if
        else {
            return true;
        } // end else
    
        
    } // end function validateForm
    
    // function to verify phone number
    function verifyPhone(){
      var phoneNum = document.getElementById("txtPhone");
      
      phoneNum.addEventListener('input', () => {
        phoneNum.setCustomValidity('');
        phoneNum.checkValidity();
      });
      
      phoneNum.addEventListener('invalid', () => {
        if(phoneNum.value === '') {
          phoneNum.setCustomValidity('Entrer un num??ro de t??l??phone valide!');
        } else {
          phoneNum.setCustomValidity('Entrer un num??ro de t??l??phon dans ce format: 123-456-7890');
        }
      });
      } // end of function verifyPhone
    
