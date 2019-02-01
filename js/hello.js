function sayHello(){
    var input = document.getElementById('name');

    var h2Print = document.getElementById('inner');

    var isPopup = document.getElementById('popup').checked
    var isPage = document.getElementById('page').checked
    var isConsole = document.getElementById('console').checked

    console.log(h2Print);
    if(input.value !== ""){
        if(isPopup){
            h2Print.innerText = "";
            alert("Hello " + input.value);
        }

        if(isConsole){
            h2Print.innerText = "";
            console.log("Hello " + input.value);
        }

        if(isPage){
            h2Print.innerText = "Hello " + input.value;
        }
    }
}