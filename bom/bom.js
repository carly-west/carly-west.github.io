const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");


button.addEventListener("click", function() {
    const value = input.value.trim()

    if (value) {
         let myItem = input.value;
        input.value = "";

        const listItem = document.createElement("li");
        const listText = document.createElement("span");
        const listBtn = document.createElement("button");

        listItem.appendChild(listText);
        listText.textContent = myItem;
        listItem.appendChild(listBtn);
        listBtn.textContent = "\u274C";
        list.appendChild(listItem);

        

        listBtn.addEventListener("click", function(e){
            list.removeChild(listItem);
        })

        input.focus();
    } else {
        input.dataset.state = "invalid";
    }

   

})