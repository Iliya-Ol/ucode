let movie = [
    {
    title: "Legend",
    img: '<img src ="assets/images/Legend.jpg">',
    date: "September, 2015",
    actors: ["Tom Hardy", "Emily Browning", "Colin Morgan"],
    description: `The film tells the story of the twins Reggie and Ronnie Cray, 
    iconic figures of the British underworld in the 1960s. 
    The brothers led the most powerful gang in the East End. 
    Their track record includes armed robberies, racketeering, arson, assassination attempts, 
    murders and their own nightclub, where even Hollywood celebrities have traveled. 
    Among their victims are crime bosses Jack McVitty and George Cornell.`,  
},
{
    title: "Snatch",
    img: '<img src ="assets/images/Jackpot.jpg">',
    date: "September, 2000",
    actors: ["Jason Statham", "Brad Pitt", "Dennis Farina"],
    description: `Four-fingered Frankie had to ship a stolen diamond from England to the United States to his boss, Evie. 
    But instead, the hero finds himself in the midst of big trouble. 
    Having made a bet on an underground boxing match, Frankie finds himself in a whirlpool of very undesirable events.`,  
},
{
    title: "Reservoir Dogs",
    img: '<img src ="assets/images/Fury_Dogs.jpg">',
    date: "January, 1992",
    actors: ["Quentin Tarantino", "Steve Buscemi", "Tim Roth"],
    description: `This should have been the perfect crime. 
    Having conceived to rob a jewelry store, crime boss Joe Cabot 
    gathered together six experienced and completely unfamiliar criminals. 
    But from the very beginning, everything went wrong, and the usual robbery turned into a bloody carnage.`,  
},
];

let boxMovie = document.querySelector(".box-movie-list"),
    boxActros = document.querySelector(".box-main-actors");

let box = document.querySelector(".box-movie-detail");
    box.innerHTML = render(movie[0]);
    boxMovie.innerHTML = renderMovieList(movie, 0);

document
    .querySelectorAll(".movie-button")
    .forEach((item, id) => item.addEventListener("click", changeMovie));

function render(arr) {
    result = "";
    result += `
      <div class="info-img-container">
          <div class="info-container">
      <div class="box-movie-info">
      <h2 class="title">${arr.title}</h2>
      <p class="date">${arr.date}</p>
      <div class="box-main-actors">
      ${renderActors(arr.actors)}
            </div>
      <div class="box-text">
        <p>
          ${arr.description}
        </p>
      </div>
      </div>
      </div>
      <div class="box-img">
     ${arr.img}
      </div>
  </div>
  `;
  return result;
}

function renderActors(arr) {
  result = "";
  arr.forEach((item) => {
    result += `<div>${item}</div>`;
    return result;
  });
  return result;
}

function renderMovieList(movie, id) {
  let result = "";
  for (let i = 0; i < movie.length; i++) {
    result += `
    <div id="${i}" class="movie-button ${+id === i ? "show" : ""}">${
      movie[i].title
    }</div>
    `;
  }
  return result;
}

function changeMovie(e) {
  let id = e.target.id;
  box.innerHTML = render(movie[id]);
  boxMovie.innerHTML = renderMovieList(movie, id);
  document
    .querySelectorAll(".movie-button")
    .forEach((item) => item.addEventListener("click", changeMovie));
}



 