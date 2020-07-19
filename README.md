validate form fields using regular expressions

isInitcap - every word/s first char should be in uppercase & maximum one space can be allowed within words
<br/><br/>
<b><u>Example</u> -</b>
<br/>
    let validator = require("form-field-isvalid");<br>
    validator.isInitcap("Hey, How Are You?") - true<br>
    validator.isInitcap("Hey, how Are You?") - false