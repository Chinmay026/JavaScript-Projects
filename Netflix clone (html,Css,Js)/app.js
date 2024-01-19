let movies = [
  {
    name: "Avengers: Endgame",
    poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
    rating:9.5,
    cast: "Robert Downey Jr . Chris Evans  . Mark Ruffalo . Chris Hemsworth . Scarlett Johansson"
  },
  {
    name:"Jujutsu Kaisen 0",
    poster:"https://m.media-amazon.com/images/M/MV5BODM0NmVjMzUtOTJhNi00N2ZhLWFkYmMtYmZmNjRiY2M1YWY4XkEyXkFqcGdeQXVyOTgxOTA5MDg@._V1_.jpg",
    rating: 9.8,
    cast: "Yuta Okkotsu . Rika Orimoto . Toge Inumaki . Satoru Gojo .  Suguru Geto "
  },
  {
    name:"Black Clover: Sword of the Wizard King",
    poster:"https://m.media-amazon.com/images/M/MV5BMjU0MWMzNTctMjM5MC00MmVhLWIzZjQtYzk3OGRiYjQ2NDk2XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg",
    rating: 8.5,
    cast: "Asta . Conrad Leto . Jester Garandros . Edward Avalache . Lovilia . Millie Maxwell"
  },
  {
    name:"Demon Slayer - The Movie: Mugen Train",
    poster:"https://m.media-amazon.com/images/M/MV5BODI2NjdlYWItMTE1ZC00YzI2LTlhZGQtNzE3NzA4MWM0ODYzXkEyXkFqcGdeQXVyNjU1OTg4OTM@._V1_.jpg",
    rating: 9.3,
    cast: "Tanjiro . Nezuko . Rengoku . Akaza . Zenitsu . Inosuke . Muzan Kibutsuji"
  },
  {
    name:"Doctor Strange",
    poster:"https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_FMjpg_UX1000_.jpg",
    rating: 9.0,
    cast: "Doctor Strange . Ancient One . wong .  Thor . Kaecillus . Dr.Christine"
  },
  {
    name:"Venom: Let There Be Carnage",
    poster:"https://m.media-amazon.com/images/M/MV5BNzI2Mjg3YjgtOGRlNy00YWMzLWFkMTQtYzcyYjU5ZjRjNmM1XkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg",
    rating:8.0,
    cast: "Carnage . Eddie Brock . Shriek . Venom . Mrs Chen . Detective Mulligan"
  },
  {
    name:"K.G.F: Chapter 1",
    poster:"https://m.media-amazon.com/images/M/MV5BMjY1MmM2N2ItYjc1NS00Yjc1LTkxYmQtNGJiMjYwMTlmNDE5XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
    rating:9.5,
    cast: "Yash . Srinidhi Shetty . Ananth Nag . Vasista N. Smiha . Archana Jois . Achyuth Kumar"
  },
  {
    name:"The Dark Knight",
    poster:"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    rating: 9.8,
    cast: "Joker . Bruce Wayne . Two-Face . ScareCrow . Rachel Dawes . James Gordon . Alferd PennyWorth"
  },
  {
    name:"Blue Lock",
    poster:"https://m.media-amazon.com/images/M/MV5BODBmM2JmY2EtMzRlZC00Njk0LTg5NGMtZjdjMjQ5ZTJhYWQ3XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg",
    rating: 9.8,
    cast: "Yoichi Isagi . Seishiro Nagi . Reo Mikage . Asahi Naruhaya . Gin Gigamaru . Chigiri"
  },
  {
    name:"Solo Leveling ",
    poster:"https://m.media-amazon.com/images/M/MV5BODJkZTM3MWYtOTkxNS00YWUxLTg5NjAtOTk4ZWM5MTBmMzAyXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg",
    rating: 9.8,
    cast: "Jinwoo Sung .  Sung Jin-ah . Cha Hae-In . Antares . Hwan . Thomas Andre"
  },
  {
    name:"Hanu Man",
    poster:"https://m.media-amazon.com/images/M/MV5BYWUwMGFmODMtYmFhNy00YTJlLWFiZDMtZDMwM2Q3NGZkNTgxXkEyXkFqcGdeQXVyMTU4Mzg1OTU2._V1_FMjpg_UX1000_.jpg",
    rating: 9.0,
    cast: "Teja Sajja . Varalaxmi Sharath . Vinay Rai . Amrita Aiyer . Vennal Kishor"
  },
  {
    name:"Kung Fu Panda 4",
    poster: "https://m.media-amazon.com/images/M/MV5BZDY0YzI0OTctYjVhYy00MTVhLWE0NTgtYTRmYTBmOTE3YTViXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
    rating: 9.5,
    cast: "Jackie Chan . Awkwafina . Jack Black . James Hong . Dustin Hoffman . Bryan Cranston"
  }
];


function searchMovie () {
  let movieName = document.getElementById('search').value;

  if(movieName !=="") {
  
  let result = movies.filter(function(movie){
    return movie.name.toUpperCase().includes(movieName.toUpperCase())
  })

  displayMovies(result);

  }
  else{
    displayMovies(movies);
  }
}

function displayMovies (data){
  /*let movieDIV = document.createElement("div");
  movieDIV.classList.add("movie");

  let overlayDIV = document.createElement("div");
  overlayDIV.classList.add("overlay");

  movieDIV.appendChild(overlayDIV);

  console.log(movieDIV);*/

  document.getElementById("movies").innerHTML="";
  
  let htmlString = ``;

  for(let i=0;i<data.length;i++){
    
    htmlString=htmlString+
    `
    <div class="movie">
     <div class="overlay">
       <div class="video"> </div>
       <div class="details">
         <h1>${data[i].name}</h1>
         <h2>IMDB : ${data[i].rating}</h2>
         <p>${data[i].cast}</p>
 
       </div>
     </div>

      <img class="poster" src="${data[i].poster}" alt="">

    </div>

    `
  };

  document.getElementById("movies").innerHTML= htmlString;


}

displayMovies(movies);