/*const previews = document.querySelectorAll('.gallery img');
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

previews.forEach(preview => {
  preview.addEventListener('click', () => {
    const modal = document.querySelector(preview.dataset.modalTarget)
    openModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(preview => {
  preview.addEventListener('click', () => {
    const modal = preview.closest('.modal')
    closeModal(modal)
  })
})

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}*/