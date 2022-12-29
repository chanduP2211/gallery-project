import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'example-third',
  styleUrl: 'example-third.css',
  shadow: true,
})
export class ExampleThird {

  render() {
    return (
      <Host>
      <h1>Example31</h1>
      </Host>
    );
  }

}
