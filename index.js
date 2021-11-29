const { response } = require("express");
const express = require("express");
const { request } = require("http");
const app = express();

const PORT = 9000;

const movies = [
  {
    id: "100",
    title: "X-Men Origins: Wolverine",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZWRhMzdhMzEtZTViNy00YWYyLTgxZmUtMTMwMWM0NTEyMjk3XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",
    rating: "8.5",
    summary:
      "The early years of James Logan, featuring his rivalry with his brother Victor Creed, his service in the special forces team Weapon X, and his experimentation into the metal-lined mutant Wolverine.",
    cast: "Hugh Jackman,Liev Schreiber,Lynn Collins",
    directors: "Gavin Hood",
    trailer: "https://www.youtube.com/embed/8IxT7WFL6Ec",
    language: "English",
  },
  {
    id: "101",
    title: "Avengers: Infinity War",
    poster:
      "https://cdna.artstation.com/p/assets/images/images/018/256/764/large/george-britton-infinitywarposterv2.jpg?1558723043",
    rating: "8.4",
    summary:
      "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    cast: "Robert Downey Jr,Chris Evans,Mark Ruffalo",
    directors: "Anthony Russo,Joe Russo",
    trailer: "https://www.youtube.com/embed/6ZfuNTqbHE8",
    language: "English",
  },
  {
    id: "102",
    title: "Avatar",
    poster: "https://movieposters2.com/images/670908-b.jpg",
    rating: "7.8",
    summary:
      "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    cast: "Sam Worthington,Zoe Saldana,Stephen Lang",
    directors: "James Cameron",
    trailer: "https://www.youtube.com/embed/5PSNL1qE6VY",
    language: "English",
  },
  {
    id: "103",
    title: "Deadpool",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    rating: "8.8",
    summary:
      "A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.",
    cast: "Ryan Reynolds,Morena Baccarin,T.J. Miller",
    directors: "Tim Miller",
    trailer: "https://www.youtube.com/embed/Xithigfg7dA",
    language: "English",
  },
  {
    id: "104",
    title: "La La Land",
    poster: "https://m.media-amazon.com/images/I/91jrKX9xjQL._AC_SL1500_.jpg",
    rating: "8.0",
    summary:
      "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
    cast: "Ryan Gosling,Emma Stone,Rosemarie DeWitt",
    directors: "Damien Chazelle",
    trailer: "https://www.youtube.com/embed/0pdqf4P9MB8",
    language: "English",
  },
  {
    id: "105",
    title: "Bãhubali: The Beginning",
    poster:
      "https://rukminim1.flixcart.com/image/416/416/j95y4cw0/poster/f/v/w/large-bahubali-part-2-baahubali-2-first-look-poster-bahubali-the-original-imaevknqbcgcyr99.jpeg?q=70",
    rating: "8.0",
    summary:
      "In ancient India, an adventurous and daring man becomes involved in a decades-old feud between two warring peoples.",
    cast: "Prabhas,Rana Daggubati,Sathyaraj",
    directors: "S.S. Rajamouli",
    trailer: "https://www.youtube.com/embed/CYcKs5fknb8",
    language: "telugu",
  },
  {
    id: "106",
    title: "Soorarai Pottru",
    poster:
      "https://www.socialnews.xyz/wp-content/uploads/2020/08/22/20200822_132614.jpg",
    rating: "9.1",
    summary:
      "Nedumaaran Rajangam 'Maara' sets out to make the common man fly and in the process takes on the world's most capital intensive industry and several enemies who stand in his way.",
    cast: "Suriya,Paresh Rawal,Gaurav Pareek",
    directors: "Sudha Kongara",
    trailer: "https://www.youtube.com/embed/fa_DIwRsa9o",
    language: "tamil",
  },
  {
    id: "107",
    title: "Thor: Ragnarok",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXS-tpDDEoEPRviBQuPCEBhC11cQLp_ijBzg&usqp=CAU",
    rating: "7.9",
    summary:
      "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.",
    cast: "Chris Hemsworth,Tom Hiddleston",
    directors: "Taika Waititi",
    trailer: "https://www.youtube.com/embed/3TvOIbqtfxE",
    language: "English",
  },
];

app.get("/", (request, response) => {
  response.send("Hello,🌍!!!😍");
});

app.get("/movies", (req, res) => {
  //req -> query params
  console.log(req.query);
  //filtering movies with language
  const { language, rating } = req.query;

  //filtering movie by rating and language
  let filterMovies = movies;
  if(language){
    filterMovies = filterMovies.filter((mv)=> mv.language === language)
  }

  if(rating){
    filterMovies = filterMovies.filter((mv)=> mv.rating == rating);
  }
  res.send(filterMovies) 

  // //filtering movie if query have language
  // if (language) {
  //   const filterMovie = movies.filter((mv) => mv.language === language);
  //   res.send(filterMovie);
  // } else {
  //   res.send(movies);
  // } //it returns js array to json data using stringify node js having the function,, Js data ->JSON data
});

app.get("/movies/:id", (req, res) => {
  console.log(req.params); //using params we get the id, here it is the req
  const { id } = req.params; //using array destructure
  const movie = movies.find((mv) => mv.id === id); //filterng or finding the particular movie
  // console.log(movie);
  // res.send(movie);           //it returns js array to json data using stringify node js having the function,, Js data ->JSON data

  movie
    ? res.send(movie)
    : res.status(404).send({ message: "No matching found" });
});

app.listen(PORT, () => console.log("App is started in port:", PORT));

// const movies = [
//     {
//      "id": "100",
//      "title": "X-Men Origins: Wolverine",
//      "poster": "https://m.media-amazon.com/images/M/MV5BZWRhMzdhMzEtZTViNy00YWYyLTgxZmUtMTMwMWM0NTEyMjk3XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",
//      "rating": "8.5",
//      "summary": "The early years of James Logan, featuring his rivalry with his brother Victor Creed, his service in the special forces team Weapon X, and his experimentation into the metal-lined mutant Wolverine.",
//      "cast": "Hugh Jackman,Liev Schreiber,Lynn Collins",
//      "directors": "Gavin Hood",
//      "trailer": "https://www.youtube.com/embed/8IxT7WFL6Ec"
//     },
//     {
//      "id": "101",
//      "title": "Avengers: Infinity War",
//      "poster": "https://cdna.artstation.com/p/assets/images/images/018/256/764/large/george-britton-infinitywarposterv2.jpg?1558723043",
//      "rating": "8.4",
//      "summary": "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
//      "cast": "Robert Downey Jr,Chris Evans,Mark Ruffalo",
//      "directors": "Anthony Russo,Joe Russo",
//      "trailer": "https://www.youtube.com/embed/6ZfuNTqbHE8"
//     },
//     {
//      "id": "102",
//      "title": "Avatar $$$",
//      "poster": "https://movieposters2.com/images/670908-b.jpg",
//      "rating": "7.8",
//      "summary": "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//      "cast": "Sam Worthington,Zoe Saldana,Stephen Lang",
//      "directors": "James Cameron",
//      "trailer": "https://www.youtube.com/embed/5PSNL1qE6VY"
//     },
//     {
//      "id": "105",
//      "title": "Bãhubali: The Beginning",
//      "poster": "https://rukminim1.flixcart.com/image/416/416/j95y4cw0/poster/f/v/w/large-bahubali-part-2-baahubali-2-first-look-poster-bahubali-the-original-imaevknqbcgcyr99.jpeg?q=70",
//      "rating": "8.0",
//      "summary": "In ancient India, an adventurous and daring man becomes involved in a decades-old feud between two warring peoples.",
//      "cast": "Prabhas,Rana Daggubati,Sathyaraj",
//      "directors": "S.S. Rajamouli",
//      "trailer": "https://www.youtube.com/embed/CYcKs5fknb8"
//     },
//     {
//      "id": "106",
//      "title": "Soorarai Pottru",
//      "poster": "https://www.socialnews.xyz/wp-content/uploads/2020/08/22/20200822_132614.jpg",
//      "rating": "9.1",
//      "summary": "Nedumaaran Rajangam 'Maara' sets out to make the common man fly and in the process takes on the world's most capital intensive industry and several enemies who stand in his way.",
//      "cast": "Suriya,Paresh Rawal,Gaurav Pareek",
//      "directors": "Sudha Kongara",
//      "trailer": "https://www.youtube.com/embed/fa_DIwRsa9o"
//     },
//     {
//      "trailer": "https://www.youtube.com/embed/3TvOIbqtfxE",
//      "title": "Thor: Ragnarok",
//      "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXS-tpDDEoEPRviBQuPCEBhC11cQLp_ijBzg&usqp=CAU",
//      "rating": "8.0",
//      "cast": "Chris Hemsworth,Tom Hiddleston",
//      "directors": "Taika Waititi",
//      "summary": "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.",
//      "id": "107"
//     },
//     {
//      "trailer": "https://www.youtube.com/embed/Xithigfg7dA",
//      "title": "Deadpool",
//      "poster": "https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
//      "rating": "8.8",
//      "cast": "A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.",
//      "directors": "Tim Miller",
//      "summary": "A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.",
//      "id": "108"
//     },
//     {
//      "trailer": "s",
//      "title": "c",
//      "poster": "d",
//      "rating": "x",
//      "cast": "xsa",
//      "directors": "a",
//      "summary": "x",
//      "id": "109"
//     }
//    ];

// app.get("./movies",(request,response)=> {
//     response.send("Hello,World");
// });

// app.get("./movies",(request,response)=>{
//     console.log(request.query);
//     response.send(movies);
// });

// app.get("./movies/:id",(request,response)=>{
//     console.log(request.params);
//     const {id} = request.params;
//     const movie = movies.find((mv)=> mv.id === id);
//     console.log(movie);
//     movie
//     ? response.send(movie)
//     :response.send(404)
// })
