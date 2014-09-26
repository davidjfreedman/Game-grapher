function app() {
    // 1. get search data from searchbox
    // 1.5. error tests
    // 2. input query into tag search api
    // 3. for each result in, run pageview api
    // 4. table results
    function KotakuSearch() {
        this.api_key = "&apikey=84xAbAUBOgSWYWfzkAfMzm3PPLkwQOLd&callback=?";
        this.urlStart = "https://www.kimonolabs.com/api/";
    };

    KotakuSearch.prototype.QueryTest = function(query) {
        if (query === "") {
            return alert("Please input a text query");
        };
    };

    KotakuSearch.prototype.TagSearch = function(query) {
        // this.QueryTest(query);
        var fullURL = this.urlStart + "2ffj476w?.js" + this.api_key;
        return $.getJSON(fullURL);
    };

    KotakuSearch.prototype.DateCheck = function(date) {
        var articleDay = date.substr(0, date.indexOf(' '););
        var actualWeekdays = [
            "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        ]
        var setdate = new Date();
        var dateToday = setdate.getDay(); // 5
        var dayToday = actualWeekdays[dateToday]; // Friday
        var articleWeekdays = new Array(6);
        articleWeekdays[0] = dayToday;
        var dayToSet = dateToday - 1;
        if (dayToSet < 0) {
            dayToSet = 6;
        }
        for (i = 1; i <= 6; i++) {
            if (dayToSet < 0) {
                dayToSet = 6;
            };
            articleWeekdays[i] = actualWeekdays[dayToSet];
            dayToSet = dayToSet - 1;
        };
        return 0 - articleWeekdays.indexOf(date);
        articles have string days
        turn days into integer difference from Today
        set today value as actual date string
        set value of all other string dates as actual date string









        // if (date.indexOf("Today") > -1) {
        //     // get date in July 28, 2010 format
        // } else if (articleDay === "Sunday" || articleDay === "Monday" || articleDay === "Tuesday" || articleDay === "Wednesday" || articleDay === "Thursday" || articleDay === "Friday" || articleDay === "Saturday") {
        //     var dayToday = new Date();
        //     var dayToday = dayToday.getDay();
        //     var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        //     weekday.forEach(function() {
        //         if (articleDay === weekday) {
        //             var articleDay = index;
        //         }
        //     });
        //     var dayDifference = dayToday - articleDay; //-1

        //    	}
    };
}

KotakuSearch.prototype.ShowResults = function(query) {
    $.when(
        this.TagSearch(query)
    ).then(
        function(results) {
            console.log(results);
            var data = results.results.TagSearch;
            $('.resultsAmount')[0].innerText = "There are " + data.length + " results for this search.";
            console.log(data);
            console.log(data[0]);
            var arraySpot = 0;
            var arrayDate = data[0].Date.text;
            if (isNaN(date.charAt(1)))) {
                return;
            }
            for (i = 0, i < (data.length - 1), i++) {
            	
            }
            console.log(arrayDate);

            // var  a for array spot
            // var vardate = first date based on selector (ie month, week, day, etc)
            // for(i<array.length, i=0, i++) {
            // 	get that pageview result
            // 	get date in correct format
            // 	if daily(
            // 		if dateofpost === vardate
            // 		array[a] += pageview)
            // 		else (
            // 			a++
            // 			vardate++)
            // 	similar for others
            // place array results in table based on selectors
            // place table in div
            // }
        })
};

var search = new KotakuSearch;
$('.searchForm').on('submit', function(query) {
    query.preventDefault();
    var searchQuery = ($(".searchBox").val());
    search.ShowResults(searchQuery);

})
};

window.onload = app;
