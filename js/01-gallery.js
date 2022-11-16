import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

const galleryMarkup = createGalleryMarkup(galleryItems);
galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);

galleryRef.addEventListener("click", onGalleryItemsClick);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(
      ({
        preview,
        original,
        description,
      }) => `<a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>`
    )
    .join(" ");
}

function onGalleryItemsClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains(`gallery__image`)) {
    return;
  }

  const source = event.target.dataset.source;
  openWindow(source);
}
function openWindow(source) {
  const instance = basicLightbox.create(
    `<img src="${source}" width="900" height="600">`
  );
  instance.show();
  document.addEventListener("keydown", closeWindow);

  function closeWindow(event) {
    if (event.code === "Escape") {
      instance.close();
      document.removeEventListener("keydown", closeWindow);
    }
  }
}

console.log(basicLightbox);
