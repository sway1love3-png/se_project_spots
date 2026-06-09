const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input",
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input",
);

const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");
const newPostForm = newPostModal.querySelector(".modal__form");
const cardImageInput = newPostModal.querySelector("#card-image-input");
const cardCaptionInput = newPostModal.querySelector("#card-caption-input");

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");
const cardsList = document.querySelector(".cards__list");

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  openModal(editProfileModal);
});

editProfileCloseBtn.addEventListener("click", function () {
  closeModal(editProfileModal);
});

newPostBtn.addEventListener("click", function () {
  openModal(newPostModal);
});

newPostCloseBtn.addEventListener("click", function () {
  closeModal(newPostModal);
});

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  closeModal(editProfileModal);
}

function createCard(imageUrl, caption) {
  const card = document.createElement("li");
  card.classList.add("card");

  const cardImage = document.createElement("img");
  cardImage.src = imageUrl;
  cardImage.alt = caption;
  cardImage.classList.add("card__image");

  const cardContent = document.createElement("div");
  cardContent.classList.add("card__content");

  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card__title");
  cardTitle.textContent = caption;

  const likeBtn = document.createElement("button");
  likeBtn.type = "button";
  likeBtn.classList.add("card__like-btn");

  cardContent.appendChild(cardTitle);
  cardContent.appendChild(likeBtn);

  card.appendChild(cardImage);
  card.appendChild(cardContent);

  return card;
}

function handleNewPostSubmit(evt) {
  evt.preventDefault();

  console.log("Image Link:", cardImageInput.value);
  console.log("Title/Caption:", cardCaptionInput.value);

  newPostForm.reset();

  closeModal(newPostModal);
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

newPostForm.addEventListener("submit", handleNewPostSubmit);
