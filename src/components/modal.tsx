import { Component, h, Prop, Host } from '@stencil/core';

import CloseIcon from '../../assets/icons/cancel.svg';

@Component({
  tag: 'my-modal',
  styleUrl: 'modal.scss',
  shadow: true
})

export class Modal {
  @Prop() visible : boolean = false; 


  getCssClass = () => {
    return !this.visible && 'hide' 
  }
  render() {
    console.log(this.visible)
    const className = this.getCssClass();

    return (  
        <div class={`modal ${className}`}> 
          <img src={CloseIcon} alt="Close icon" class="closeIcon"/>
          <div class="modalHeader">
            <slot name="header"></slot>
          </div>
          <div class="modalContent">
            <slot name="content"></slot>
          </div>
        </div>
    );
  }

}
