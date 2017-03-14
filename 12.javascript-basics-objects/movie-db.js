var movies = [
    {
        title: "Batman v Superman: Dawn of Justice",
        rating: 3.1,
        hasWatched: true
    },
    {
        title: "The Revenant",
        rating: 3.9,
        hasWatched: true
    },
    {
        title: "Captain America: Civil War",
        rating: 3.4,
        hasWatched: true
    },
    {
        title: "Mad Max - Fury Road",
        rating: 3.9,
        hasWatched: false
    },
    {
        title: "The Secret Life of Walter Mitty",
        rating: 3.2,
        hasWatched: true
    },
    {
        title: "Changeling",
        rating: 3.6,
        hasWatched: false
    }
];

function getMovieReport(movie) {
    var report = "You have ";

    if (movie.hasWatched) {
        report += "watched";
    } else {
        report += "not seen";
    }

    report += " \"" + movie.title + "\" - " + movie.rating + " stars";
    return report;
}

movies.forEach(function(movie) {
    console.log(getMovieReport(movie));
});