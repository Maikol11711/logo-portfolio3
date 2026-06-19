function like(btn) {
  let span = btn.querySelector("span");
  span.textContent = parseInt(span.textContent) + 1;
}

function dislike(btn) {
  let span = btn.querySelector("span");
  span.textContent = parseInt(span.textContent) + 1;
}

function download() {
  alert("Aquí luego conectaremos la descarga real 🔥");
}
