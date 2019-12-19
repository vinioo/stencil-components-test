import { Component, Prop, h } from '@stencil/core';
import { CssClassMap } from '../../interfaces/interfaces';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true
})
export class MyButton {
  @Prop() text: string;
  @Prop()
  type: 'button' | 'reset' | 'submit' = 'button';
  @Prop()
  color: 'primary' | 'accent' | 'light' = 'primary';
  @Prop()
  shape: 'square' | 'round' = 'square';
  @Prop()
  size: 'small' | 'default' | 'large' = 'default';
  disabled: boolean;

  private getCssClassMap(): CssClassMap {
    return {
      [this.color]: true,
      [this.shape]: true,
      [this.size]: true
    };
  }

  render() {
    const classMap = this.getCssClassMap();
    return <button disabled={this.disabled} type={this.type} class={classMap}>{this.text}</button>;
  }
}
