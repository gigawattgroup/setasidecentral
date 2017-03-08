;(function(window) {

	'use strict';

	var openCtrl = document.getElementsByClassName('btn-modal'),
      closeCtrl = document.getElementById('btn-modal-close'),
			modalContainer = document.querySelector('.modal'),
      closeCtrl2 = modalContainer.querySelector('.btn-cancel'),
  	  inputName = modalContainer.querySelector('#inputName'),
  	  inputEmail = modalContainer.querySelector('#inputEmail');

			console.log(openCtrl);

	function init() {
		initEvents();
	}

	function initEvents() {
		for (var i = 0; i < openCtrl.length; i++) {
		    openCtrl[i].addEventListener('click', openModal);
		}
		//openCtrl.addEventListener('click', openModal);
		closeCtrl.addEventListener('click', closeModal);
		document.addEventListener('keyup', function(ev) {
			// escape key.
			if( ev.keyCode == 27 ) {
				closeModal();
			}
		});
	}

	function openModal() {
		console.log("open modal");
		modalContainer.classList.add('modal--open');
		//closeCtrl2.addEventListener('click', closeModal);
		inputName.focus();
	}

	function closeModal(e) {
    e.preventDefault();
		//closeCtrl2.removeEventListener('click', closeModal);
		modalContainer.classList.remove('modal--open');
		inputName.blur();
		inputEmail.blur();
		inputName.value = '';
		inputEmail.value = '';
	}

	init();

})(window);
