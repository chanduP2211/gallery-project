import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'demo-story',
  styleUrl: 'demo-story.css',
  shadow: true,
})
export class DemoStory {

  @Prop() name:string;
  @Prop() id1:string
  @Prop() city:string
  @State() roll:string='117'
  render() {
    return (
      <Host>
        <div>
         <h1>NAME : {this.name}</h1>
         <h1>ID : {this.id1}</h1>
         <h1>CITY : {this.city}</h1>
         </div>
         <div>
        {
        this.roll == this.id1 ? <slot name="my-text"></slot>:<slot/>
        }
         </div>
      </Host>
    );
  }

}
