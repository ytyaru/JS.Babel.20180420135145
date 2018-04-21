define(function() {
    class Display {
	constructor() {
	    this.msg = "Babel, require.js, class !!"
	}
	print() {
	    console.log(this.msg);
	    const getMessage = () => this.msg;
	    document.body.innerHTML = getMessage();
            alert(this.msg);
	}
    }
    return Display;
    /*
    return {
        print: function() {
	    console.log("Hello Babel + require.js !!");
	    const getMessage = () => "Hello Babel + require.js !!";
	    document.body.innerHTML = getMessage();
            alert("Hello Babel + require.js !!");
        }
    };
    */
});
/*
export function print() {
    const getMessage = () => "Hello Babel !!";
    document.body.innerHTML = getMessage();
    alert('sub.js');
};
*/
