validate form fields using regular expressions

isInitcap - every word/s first char should be in uppercase & maximum one space can be allowed within words
Example - 
    let validator = require("form-field-isvalid");

    validator.isInitcap("Hey, How Are You?") - true
    validator.isInitcap("Hey, how Are You?") - false