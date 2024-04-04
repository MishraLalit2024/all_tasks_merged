/**
 * Developer Name:  Lalit Mishra
 * Developer ID:    24DEV018
 * Date:            05-MAR-2024
 * 
 * Descriptoin:     This module will ftech the keywords and operator from the user Input;
 */



function splitter(req, res, next){
    
    let str = JSON.stringify(req.body.input);
    
    let arr = [];
    let empty = "";

    for (let i = 1; i < str.length-1; i++) {
        const ch = str.charAt(i);

        if(/^[a-zA-Z0-9 ]+$/.test(ch)){
            empty += ch;
        }
        else{
            if(empty!==""){
                arr.push(empty);
                empty="";
            }
            arr.push(ch);
        }
    }
    if(empty!==""){
        arr.push(empty);
    }

    //declaring empty array for fields that has search options:
    let firstName=[], lastName=[], email=[], status=[],mobile=[], city=[];

    for (let i = 0; i < str.length; i++) {
        if(i%2==0){
            let operator = arr[i];

            //switch case for fetching the operator and assigning fields to the keywords:
            switch (operator) {
                case '_':
                    firstName.push(arr[i+1]);
                    break;
                case '^':
                    lastName.push(arr[i+1]);
                    break;
                case '$':
                    email.push(arr[i+1]);
                    break;
                case '}':
                    status.push(arr[i+1]);
                    break;
                case '{':
                    mobile.push(arr[i+1]);
                    break;
                case ':':
                    city.push(arr[i+1]);
                    break;
                default:
                    break;
            }
        }
        
    }

    //Creating and returning the result:
    let dataInput = [firstName, lastName, email, status, mobile, city];
    return dataInput;
}

module.exports = splitter;