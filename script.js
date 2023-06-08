function callAPI() {
    var inputField = document.getElementById("query");
    let searchQuery = inputField.value;
    console.log(searchQuery + " llll");
    const outputContainer = document.querySelector(".output-shower");
    outputContainer.innerHTML = '';
    fetch('https://zillow56.p.rapidapi.com/search?location=' + searchQuery, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "zillow56.p.rapidapi.com",
            "x-rapidapi-key": "5369683703msh0d8168b0fd53192p121c77jsn2464802197da"
        }
    })
    .then(response => response.json())
    .then(response => {
        console.log(response, "LL");

        const outputContainer = document.querySelector(".output-shower");

        console.log(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
            const house = response.results[i];
            console.log("l");
            const card = document.createElement("div");
            card.className = "card";

            const image = document.createElement("img");
            image.src = house.imgSrc; 
            image.alt = "House Image";
            card.appendChild(image);

            const infoContainer = document.createElement("div");
            infoContainer.className = "info-container";

            const ul = document.createElement("ul");

            const properties = ["City", "Address", "Bedrooms", "Bathrooms", "Price"];
            for (let j = 0; j < properties.length; j++) {
                const property = properties[j];

                const li = document.createElement("li");

                const spanProperty = document.createElement("span");
                spanProperty.style.fontSize = "55px !important";
                spanProperty.style.color = "royalblue !important";
                spanProperty.style.fontFamily = "system-ui";
                spanProperty.textContent = property;

                li.appendChild(spanProperty);
                
                if (j==0){
                    li.textContent += ": "+house.city;
                }

                else if (j==1){
                    li.textContent += ": "+house.streetAddress;
                }

                else if (j==2){
                    li.textContent += ": "+house.bedrooms;
                }

                else if (j==3){
                    li.textContent += ": "+house.bathrooms;
                }

                else {
                    li.textContent += ": $"+house.price;
                }
                

                ul.appendChild(li);
            }

            infoContainer.appendChild(ul);

            card.appendChild(infoContainer);

            outputContainer.appendChild(card);
        }
    })
    .catch(err => {
        console.log(err, "Lhuman");
    });
}




