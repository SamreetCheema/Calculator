let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        try{
        if (e.target.innerHTML == '='){
            string = eval(string);
            if (string === Infinity || isNaN(string)) {
            string = "Error";
            document.querySelector('input').value = string;
            }
            else{
            document.querySelector('input').value = string;
            }
        }
        else if (e.target.innerHTML == 'AC'){
            string = "";
            document.querySelector('input').value = string;
        }
      else if (e.target.innerHTML == '+/-') {

    // Match last number in expression
    let match = string.match(/(-?\d+\.?\d*)$/);

    if (match) {

        let number = match[0];

        // Toggle sign
        let toggled =
            number.startsWith('-')
            ? number.slice(1)
            : '-' + number;

        // Replace last number
        string = string.slice(0, -number.length) + toggled;

        document.querySelector('input').value = string;
    }
}

        else{
        console.log(e.target);
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }
    }
  catch(error){
    string = "";
    document.querySelector('input').value = "Error";
}
    })
})