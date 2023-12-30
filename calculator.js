function showText(number)
        {
            display.innerHTML += number;
        }

        function calculate()
        {
            let content = display.innerText;
            let answer = eval(content);
            
           display.innerHTML=answer
            
        }

        function clearDisplay()
        {      
            display.innerText = "";
            //document.getElementById('display').innerHTML = "";
        }

        function backSpace()
        {
            let number =  display.innerHTML; //document.getElementById('display').innerHTML;
            let newNumber = number.slice(0,-1);
           document.getElementById('display').innerHTML = newNumber;
           //display.innerHTML = newText
        }