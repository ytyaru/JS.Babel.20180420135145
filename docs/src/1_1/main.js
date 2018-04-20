document.addEventListener('DOMContentLoaded', function(){
    import {sub_method} from "sub.js"
    sub_method();
    const getMessage = () => "Hello Babel !!";
    document.body.innerHTML = getMessage();
}, false);
