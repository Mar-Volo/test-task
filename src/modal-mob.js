(() => {
  const refs = {
    openModalmobBtn: document.querySelector("[open]"),
    closeModalmobBtn: document.querySelector("[close]"),
    modalmob: document.querySelector("[modal]"),
  };
  refs.openModalmobBtn.addEventListener("click", toggleModal);
  refs.closeModalmobBtn.addEventListener("click", toggleModal);
  function toggleModal() {
    refs.modalmob.classList.toggle("is-hidden");
  }
})();