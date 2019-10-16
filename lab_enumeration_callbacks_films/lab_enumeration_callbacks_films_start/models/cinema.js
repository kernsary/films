const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getTitles = function () {
  return this.films.map(film => film.title);
};

Cinema.prototype.findFilmByTitle = function (title) {
  return this.films.find(film => film.title === title);
};

Cinema.prototype.filterByGenre = function (genre) {
  return this.films.filter(film => film.genre === genre);
};

Cinema.prototype.areFilmsFromYear = function (year) {
  return this.films.some(film => film.year === year);
};

Cinema.prototype.allFilmsOverLength = function(length){
  return this.films.every(film => film.length > length);
};

Cinema.prototype.totalRunning = function(){
  return this.films.reduce((total,film) => total + film.length, 0);
};

Cinema.prototype.filmsByProperty = function(property,value){
  return this.films.filter(film => film[property] === value);
};

module.exports = Cinema;
