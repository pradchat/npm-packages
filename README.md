Formvalidator contains couple of useful functions, in our daily web-development life we usually use these.  Hope it'll make developer's life bit easy.  
Happy Coding ..

<i><b>isInitcap</b></i> - every word/s first char should be in uppercase & maximum one space can be allowed within words
<br/>
<b><u>Example</u> -</b>
<br/>
    const validator = require("@think-smart/text-utility");<br>
    validator.isInitCap("Hey, How Are You?") - true<br>
    validator.isInitCap("Hey, how Are You?") - false

<i><b>initCap</b></i> - Make first character of all words in a sentence in uppercase
<br/>
<b><u>Example</u> -</b>
<br/>
    const validator = require('@think-smart/text-utility');<br>
    validator.initCap('hey john, how are you!') - Hey John, How Are You!