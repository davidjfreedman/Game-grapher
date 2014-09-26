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
        this.QueryTest(query);
        var fullURL = this.urlStart + "2ffj476w?.js" + this.api_key + "&kimpath2=" + query;
        console.log(fullURL);
        return $.get(fullURL);
    };

    KotakuSearch.prototype.ShowResults = function(query) {
        $.when(
            this.TagSearch(query)
        ).then(
            function(results) {
                console.log(results);
                // set up new array
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
