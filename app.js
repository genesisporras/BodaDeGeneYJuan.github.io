const modalAdd= document.querySelector('#modalAdd');

const openModal = () => {
    modalAdd.style.display = 'flex';
}

const closeModal = () => {
    modalAdd.style.display = 'none';
}

modalAdd.onclick = (e) => {
    if(e.target == modalAdd){
        closeModal();
    }
}

function onClickPhoto(arg) {
    document.getElementById(arg).style.transform = 'scale(1)'
}

function onClosePhoto(arg) {
    window.event.preventDefault()
    document.getElementById(arg).style.transform = 'scale(0)'
}