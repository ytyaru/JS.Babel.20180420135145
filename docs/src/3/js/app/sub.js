define(function() {
    return {
        print: function() {
	    console.log("Hello Babel + require.js !!");
	    const getMessage = () => "Hello Babel + require.js !!";
	    document.body.innerHTML = getMessage();
            alert("Hello Babel + require.js !!");
        }
    };
});
/*
export function print() {
    const getMessage = () => "Hello Babel !!";
    document.body.innerHTML = getMessage();
    alert('sub.js');
};
*/
