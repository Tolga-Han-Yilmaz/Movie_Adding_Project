// Selector
const form = document.getElementById("film-form");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");
const firstCardbody = document.querySelectorAll(".card-body")[0];
const secondCardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");


// Tüm eventleri yükleme
eventListeners();
function eventListeners() {
  form.addEventListener("submit", addFilm); // film ekle butonu submit olduğunda yapılacak işlemler

  // sayfa yüklendiğinde eventi --> veriler arayüzde kalıcı olacak
  document.addEventListener("DOMContentLoaded", function () {
    //localdeki tüm veriler alınacak
    let films = Storage.getFilmsFromStorage();
    // filmsler aşağıdaki fonksiyona gönderilecek
    UI.loadAllFilms(films);
  });
  // filmleri silme eventi
  secondCardbody.addEventListener("click", deleteFilm);
  //(20) --> filmlerin hepsini aynı anda silme
  clear.addEventListener("click", clearAllFilms);
}

// film ekle butonu submit olduğunda yapılacak işlemler
function addFilm(e) {
  // input'a girilen değerler alındı
  const title = titleElement.value;
  const director = directorElement.value;
  const url = urlElement.value;
  // bütün inputlara değer girilmesi için
  if (title === "" || director === "" || url === "") {
    // Hata --> eğer input alanlarından birisi boş girilirse hata versin
  
    UI.displayMessage("Tüm alanları doldurunuz", "danger");
  } else {
    // eğer input alanlarının hepsi doluysa yapılacak işlemler
    const newFilm = new Film(title, director, url); // film.js'de oluşturulan constructor a gönderilecek ve yeni film oluşturulacak

    UI.addFilmToUI(newFilm); // yukarıda oluşturulan "ui" objesine fonksiyon eklendi. arayüze film eklenecek

    // local'e film yüklenecek
    Storage.addFilmToStorage(newFilm);

    UI.displayMessage("Film başarıyla eklendi", "success");
  }
  UI.clearInputs(titleElement, directorElement, urlElement); //doldurulan input alanını otomatik olarak boşaltmak için çağrılan fonksiyon --> ui.js deki elementlere gidecek

  e.preventDefault();
}

// filmleri silme
function deleteFilm(e) {
  if (e.target.className == "btn btn-danger") {
    UI.deleteFilmFromUI(e.target);
    // film local'den silinecek
    Storage.deleteFilmFromStorage(
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent
    ); // film ismine ulaşıldı --> fonksiyon storage.js de yapılacak
    UI.displayMessage("Silme işlemi başarılı.", "warning");
  }
  e.preventDefault();
}


// filmlerin hepsini silme
function clearAllFilms(e) {
  if (confirm("Emin misiniz?")) {
    UI.clearAllFilmsFromUI();
    Storage.clearAllFilmsFromStorage();
  }
  UI.displayMessage("Filmlerin hepsi silindi.", "dark");
  e.preventDefault();
}
