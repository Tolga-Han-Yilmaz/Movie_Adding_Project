class UI {

  static addFilmToUI(newFilm) {
    
    const filmLists = document.getElementById("films");
   
    filmLists.innerHTML += `
  <tr>
    <td><img src="${newFilm.url}" class="img-fluid img-thumbnail" style="width:300px;"></td>
    <td>${newFilm.title}</td>
    <td>${newFilm.director}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
  </tr>
                                          `;
  }

 
  // input alanını boşaltma
  static clearInputs(element1, element2, element3) {
    // ui.clearInputs(titleElement, directorElement, urlElement);
    element1.value = "";
    element2.value = "";
    element3.value = "";
  }

  
  // Hata mesajı
  static displayMessage(message, type) {
   
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;

    // alert ilk card-body in alt tarafına eklendi
    firstCardbody.appendChild(alert);

    // 1 s sonra uyarı mesajı kaybolacak
    setTimeout(function () {
      alert.remove();
    }, 1000);
  }

 
  static loadAllFilms(films) {
    const filmList = document.getElementById("films");

    films.forEach(function (film) {
      filmList.innerHTML += `
        <tr>
          <td><img src="${film.url}" class="img-fluid img-thumbnail" style="width:300px;"></td>
          <td>${film.title}</td>
          <td>${film.director}</td>
          <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
                                                `;
    });
  }


  // filmler arayüzden kaldırıldı
  static deleteFilmFromUI(element) {
    element.parentElement.parentElement.remove();
  }

  // bütün filmleri silme
  static clearAllFilmsFromUI() {
    const filmList = document.getElementById("films");
    while (filmList.firstElementChild !== null) {
      filmList.firstElementChild.remove();
    }
  }
}
