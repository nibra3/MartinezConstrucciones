// Visor de fotos de "Nuestros Trabajos".
// Al hacer clic en una foto (grande o miniatura) se abre ampliada en un Modal de Bootstrap.
// Las flechas recorren solo las fotos del mismo trabajo.

const visorEl = document.getElementById('visor');
const visor = new bootstrap.Modal(visorEl);
const visorImg = visorEl.querySelector('.visor-img');
const visorPie = visorEl.querySelector('.visor-pie');
const btnAnterior = visorEl.querySelector('.visor-anterior');
const btnSiguiente = visorEl.querySelector('.visor-siguiente');

let fotos = [];   // links del trabajo abierto
let actual = 0;   // posición de la foto que se está viendo

function mostrar(indice) {
  // Vuelve al principio o al final si se pasa de largo
  actual = (indice + fotos.length) % fotos.length;

  const link = fotos[actual];
  const img = link.querySelector('img');
  const etiqueta = link.closest('figure, .miniatura').querySelector('.etiqueta');

  visorImg.src = link.href;
  visorImg.alt = img.alt;
  visorPie.textContent = `${etiqueta.textContent} · ${img.alt} · ${actual + 1} / ${fotos.length}`;
}

document.querySelectorAll('.trabajo').forEach(trabajo => {
  const links = [...trabajo.querySelectorAll('.ampliar')];

  links.forEach((link, i) => {
    link.addEventListener('click', e => {
      e.preventDefault(); // no abrir la imagen sola en otra página
      fotos = links;
      mostrar(i);
      visor.show();
    });
  });
});

btnAnterior.addEventListener('click', () => mostrar(actual - 1));
btnSiguiente.addEventListener('click', () => mostrar(actual + 1));

// Flechas del teclado (solo con el visor abierto)
document.addEventListener('keydown', e => {
  if (!visorEl.classList.contains('show')) return;
  if (e.key === 'ArrowLeft') mostrar(actual - 1);
  if (e.key === 'ArrowRight') mostrar(actual + 1);
});

// Deslizar con el dedo en el celular
let inicioX = null;
visorImg.addEventListener('touchstart', e => { inicioX = e.touches[0].clientX; });
visorImg.addEventListener('touchend', e => {
  if (inicioX === null) return;
  const distancia = e.changedTouches[0].clientX - inicioX;
  if (Math.abs(distancia) > 50) mostrar(actual + (distancia < 0 ? 1 : -1));
  inicioX = null;
});
