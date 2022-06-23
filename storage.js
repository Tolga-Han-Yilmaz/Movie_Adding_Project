class Storage {
 
  static addFilmToStorage(newFilm) {
   

    let films = this.getFilmsFromStorage();
    films.push(newFilm); // filmler eklendi.
   
    localStorage.setItem("films", JSON.stringify(films));
  }

  static getFilmsFromStorage() {
    let films;
    if (localStorage.getItem("films") === null) {
      // local'de films isminde bir obje var yoksa. films = [] arrayı oluşturulacak
      films = [];
    } else {
      
      films = JSON.parse(localStorage.getItem("films")); 
    }
    return films;
  }

 
  // local'den kalıcı olarak silme
  static deleteFilmFromStorage(filmTitle) {
    let films = this.getFilmsFromStorage();
    films.forEach(function (film, index) {
      // silinen filmin title'ı localden gelecek text e eşitse silinecek
      if (film.title === filmTitle) {
        films.splice(index, 1);
      }
    });
    localStorage.setItem("films", JSON.stringify(films));
  }

  // localden filmlerin hepsini silme
  static clearAllFilmsFromStorage() {
    localStorage.removeItem("films");
  }
}
