


let food = ["Pizza", "Cheesecake", "Sushi", "Raspberries", "Burritos", "cookies"];


function displayGifs() {
    
    let typedfood = $(this).attr("data-name");
    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + typedfood + "&api_key=exib8aSfwLH5i29IjP0P0IAT1lSdMfZh&limit=10";


$.ajax({
    url: queryURL,
    method: "GET"
    })
    
    .then(function(response) {
    console.log(response.data);


    $("#gifs-section").empty();
    
    let gifs = response.data; 

    for (let i = 0; i < gifs.length; i++) {
        
        let gifDiv = $("<div>"); 
        let rating = gifs[i].rating; 

        let p = $("<p>").text("Rating: " + rating); 

        let foodImage = $("<img>"); 

        foodImage.attr("src", gifs[i].images.fixed_height.url); 
        gifDiv.append(p);
        gifDiv.append(foodImage); 

        $("#gifs-section").prepend(gifDiv);
    }
    

    });  

}


function renderButtons() {
    
    $("#buttons-section").empty();

    for (let i = 0; i < food.length; i++) {

        let newB = $("<button>");
        
        newB.addClass("food");
        
        newB.attr("data-name", food[i]);
        
        newB.text(food[i]);
        
        $("#buttons-section").append(newB);
    }
}

$("#add-food").on("click", function(event) {
    event.preventDefault();
    
    let typedfood = $("#food-input").val().trim(); 
    food.push(typedfood);
    renderButtons(); 
    });

    $(document).on("click", ".food", displayGifs);

    renderButtons(); 




