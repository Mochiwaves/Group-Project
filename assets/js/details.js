var submitBtnEl = document.querySelector("#searchBtn");
var titleInputEl = document.querySelector("#titleInput");
var linkApiContainer = document.querySelector("#linkApiConatainer");

//button action
var submitBtnHandler = function(event) {
    var songTitle = titleInputEl.value.trim();

    if(songTitle) {
        //REPLACE THIS WITH THE API FETCH FUNCTION!!!
        linkApi(songTitle);
        titleInputEl.value = "";
    } else {
        console.log("Unable to get song links!");
    }
    
};

//fetching api link
var linkApi = function(query) {
    fetch("https://shazam-core.p.rapidapi.com/v1/tracks/search?query=" + query , {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "shazam-core.p.rapidapi.com",
		"x-rapidapi-key": "333a96a30cmsh3375c9daa90e5cbp103f03jsn9dcc86580cd3"
	}
})
.then(function (response) {
    if (response.ok) {
        console.log(response);
        response.json()
        .then(function(data) {
            var output = "<h2>Song/Albums</h2>";
            data.forEach(function(post) {
                
                output += `
                    <div>
                        <h3>${post.heading.title}</h3>
                            <img src="${post.images.default}"/>
                            </div>
            `});
            document.querySelector("#linkApiContainer").innerHTML = output;
            //showInfo(data);
            console.log(data);
        })
        .catch(function(error) {
            console.log("couldn't connect to server")
        });
    };
    

});

//Not sure what to call inside the function so the "query" will be used for the meantime
var showInfo = function(query){
    for (var i = 0; i < query.length; i++) {
        var infoEl = document.createElement("div");



        linkApiContainer.appendChild(infoEl);

    }

}
    //var apiUrl = "";

    //fetch(apiUrl)
    //.then(function(response) {
      //  console.log(data);
    //});



};


submitBtnEl.addEventListener("click", submitBtnHandler);