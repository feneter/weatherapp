/* client side validation
 1. get the value
 2. check if the value is valid
 3. send back error messages (if any) for user to correct
 4. until all values are valid, then allow submit to go through

 For this case, we are returning one error message and each field will be
 highlighted in red
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
    // list/array of invalid fields
    let invalid_fields = [];
    // preventDefault, will cause it not to change the URL
    // 1. get first name field
    let fname_field = document.getElementById('fname');
    //2. check if the value is valid
    // if a field is required, it shouldn't be blank
    if(!fname_field.value.trim()) {
        //add field to invalid_fields list
        // highlight the field using class="error"
        invalid_fields.push(fname_field);
        
        // after the above statement the fname field will be 
        //<input type="text" class="error" name="fname" id="fname">
    }

    let sname_field = document.getElementById('sname');
    //second name is required
    if(!sname_field.value.trim()){
        // add field to invalid_fields
        invalid_fields.push(sname_field);
    }

    // email is valid
    let email_field = document.getElementById('email');
    if(!isValidEmail(email_field.value)){
        //add field to invalid_fields
        invalid_fields.push(email_field);
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
    let age_field = document.getElementById('age');
    let birth_year_field = document.getElementById('birth_year');

    if( (new Date().getFullYear()-birth_year_field.value) != age_field.value ){
        // add fields to invalid_fields
        invalid_fields.push(age_field);
        invalid_fields.push(birth_year_field);
    }

    /**
     * if invalid_fields has values
     * echoMessage()
     * go through each field and notifyError
     */
    if(invalid_fields.length){
        console.log(invalid_fields);
        echoMessage()
        invalid_fields.forEach(invalid_field => {
            notifyError(invalid_field);
        });
    }

    function echoMessage() {
        document.getElementById('errors').innerHTML = "Highlighted fields need to be corrected"; ; // 3 send back error messaage
        submit_event.preventDefault(); //4. value invalid, don't submit the form
    }

    /**
     * 
     * @param {DOMNode} field 
     */
    function notifyError(field) {
        field.className = "error"
    }
})

