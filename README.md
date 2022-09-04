Form validator helps to <b>validate form-fields</b> in a smarter way  
<br>
<b>Example</b>
const validator = require('@think-smart/form-validator');<br>    

<b>isInitCap</b> - Every word/s first char should be in uppercase & maximum one space can be allowed within words
<br/>
    validator.isInitCap("Hey, How Are You?") - true<br>
    validator.isInitCap("Hey, how Are You?") - false<br>
<br>
<b>initCap</b> - Make first character of all words in a sentence in uppercase
<br/>
    validator.initCap('hey john, how are you!') - Hey John, How Are You!<br>
<br>
<b>trimSpace</b> - Remove extra space within words
<br/>
    validator.trimSpace('hi   john   ,   will    call you tomorrow   .  OK   ?') - hi john, will call you tomorrow. OK?