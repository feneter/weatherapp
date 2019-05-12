/* client side validation
 1. get the value
 2. check if the value is valid
 3. send back error messages (if any) for user to correct
 4. until all values are valid, then allow submit to go through
*/
/**
 * for this form, validation requirements
 *  1. first name and second name are required
 *  2. Email has to be valid
 *  3. age and year of birth should be consistent age=20, birth_year=2010
 */

 //validate first name is required.


const contact_form = document.getElementById('contact_form');
contact_form.addEventListener('submit', function(submit_event){
    // preventDefault, will cause it not to change the URL
    // 1. get first name
    let fname = document.getElementById('fname').value;
    //2. check if the value is valid
    // if a field is required, it shouldn't be blank
    if(!fname.trim()) {
        returnMessage("First name is required") 
    }

    let sname = document.getElementById('sname').value;

    //second name is required
    if(!sname.trim()){
        returnMessage("Second name is required");
    }

    // email is valid
    let email = document.getElementById('email').value;
    if(!isValidEmail(email)){
        returnMessage("Correct the email to be in valid form");
    }

    function isValidEmail(email){
        //valid email:
        // Use of Regular Expressions
        // Regex Tester: https://regex101.com/
        // MDN Regex module: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
        if(/[a-zA-Z]*[0-9]*@[a-zA-Z]*\.[a-zA-Z].*/.test(email)){ // Warning: This RegEx is invalid
            //valid email, return true
            return true;
        }
        
        return false;
    }

    //consistent age
    let age = document.getElementById('age').value;
    let birth_year = document.getElementById('birth_year').value;

    if( (new Date().getFullYear()-birth_year) != age ){
        returnMessage("Age and year of birth are inconsistent!");
    }

    function returnMessage(message) {
        document.getElementById('errors').innerHTML = message; ; // 3 send back error messaage
        submit_event.preventDefault(); //4. value invalid, don't submit the form
    }
})

