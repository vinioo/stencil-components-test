import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true
})
export class MyButton {
  @Prop() text: string;
  disabled: boolean;

  render() {
    return <button disabled={this.disabled}>{this.text}</button>;
  }
}
