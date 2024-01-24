export default function initModal() {
  const openModalButton = document.querySelector('#open-modal');
  const closeModalButton = document.querySelector('#close-modal');
  const modal = document.querySelector('#modal');
  const fade = document.querySelector('#fade');

  const toggleModal = () => {
    modal.classList.toggle('hide');
    fade.classList.toggle('hide');
  };

  [openModalButton, closeModalButton, fade].forEach((elment) => {
    elment.addEventListener('click', () => toggleModal());
  });
}
