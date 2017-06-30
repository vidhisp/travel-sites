import $ from 'jquery';

class Modal {
    constructor(){
        this.openModalButton = $(".open-modal");
        this.modal = $(".modal");
        this.closeModalButton = $(".modal__close");
        this.events();
        console.log("hey");
    }
    
    events(){
        //clicking the open modal event
        console.log("hey");
        this.openModalButton.click(this.openModal.bind(this));
        
        //clicking the X close modal button
        this.closeModalButton.click(this.closeModal.bind(this));
        
        
        //pushes the escape key
        
    }
    
    openModal(){
        this.modal.addClass("modal--is-visible");
        return false;
        
    }
    
    closeModal(){
        this.modal.removeClass("modal--is-visible");
    }
}

export default Modal;