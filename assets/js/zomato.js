//81567c6d0a81c709e1edf53310578e0c from zomato
// Conflict testing
//curl -X GET --header "Accept: application/json" --header "user-key: 81567c6d0a81c709e1edf53310578e0c" "https://developers.zomato.com/api/v2.1/restaurant?res_id=16774318"

$(document).ready(function() {
    var entityID = "499";
    var entityType = "city";
    var typeFood = "mexican";
    // var numberResults = "10";
    var tableBody = document.getElementById('repo-table');

    // AJAX call for Zomato API
    function ajaxCall(){
        $.ajax({
            url: "https://developers.zomato.com/api/v2.1/search?entity_id=" + entityID + "&entity_type=" + entityType + "&q=" + typeFood + "%20food",
            method: "GET",
            headers: {
                "user-key": "81567c6d0a81c709e1edf53310578e0c",
                "Content-type": "application/json"
            },
            
        // When call is finished...
        }).done(function (res){

            // Log the information in the console
            console.log(res);
            
            // For loop to populate the table with restaurant information
            for (var i = 0; i < res.restaurants.length; i++){
                var createTableRow = document.createElement('tr');
                var tableData = document.createElement('td');
                var link = document.createElement('a');
    
                link.textContent = res.restaurants[i].restaurant.events_url;
                link.href = res.restaurants[i].restaurant.events_url;
    
                tableData.appendChild(link);
                createTableRow.appendChild(tableData);
                tableBody.appendChild(createTableRow);
                $("#restaurant-table").append(res[i])
            };
        });  
    };
    
    // When the "restaurants button" is clicked...
    $("#restaurants-button").click(function(){
        // Run "ajaxCall" function
        ajaxCall(); 
    });
});

//$("#repo-table").append("hello");   