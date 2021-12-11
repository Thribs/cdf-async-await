function findLyrics(author, song) {
  fetch(`https://api.lyrics.ovh/v1/${author}/${song}`);
}

const form = document.querySelector("#lyrics_form");
form.addEventListener("submit", (el) => {
  el.preventDefault();
  doSubmit();
});

function doSubmit() {
  const lyrics_el = document.querySelector("#lyrics");
  const author = document.querySelector("#author");
  const song = document.querySelector("#song");

  lyrics_el.innerHTML =
    '<div class="spinner-grow" role="status"><span class="sr-only">Carregando...</span></div>';

  findLyrics(author.value, song.value)
    .then((response) => response.json())
    .then((data) =>
      data.lyrics
        ? (lyrics_el.innerHTML = data.lyrics)
        : (lyrics_el.innerHTML = data.error)
    )
    .catch((err) => (lyrics_el.innerHTML = `Something went wrong. ${err}`));
}
