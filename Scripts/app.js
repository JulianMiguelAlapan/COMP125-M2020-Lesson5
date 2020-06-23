// IIFE - Immediately Invoked Function Expression
(function(){

     
    // named function
    function Start()
    {
        console.log('%cApp Started...', "color:white; font-size: 24px;");

        /* let clickMeButton = document.getElementById("clickMeButton");

        if(clickMeButton)
        {
            console.log(clickMeButton);
        } */

        let buttons = document.getElementsByTagName("button");
        let buttonCount = 0;

        if(buttons)
        {
            for (const button of buttons) {
                
                if (buttonCount > 0) 
                {
                    button.style.fontSize = "80px";
                }

                
                buttonCount++;
                console.log(button);
            }
        }


        let buttonsQuery = document.querySelectorAll("button");

        if(buttonsQuery)
        {
            /*  - WORKED
            buttonsQuery.forEach(button => {
                console.log(button);
            }); */

            /*  - WORKED
            for (const button of buttonsQuery) {
                console.log(button);
            } */

            for (let index = 0; index < buttonsQuery.length; index++) {
                console.log(buttonsQuery[index]);
                
            }
        }


        let helloWorld = document.getElementsByTagName("h1")[0].textContent;

        console.log(helloWorld);

        let mainInnerHTML = document.getElementsByTagName("main")[0].innerText;

        console.log(mainInnerHTML);
    }



    window.addEventListener("load", Start);

})();