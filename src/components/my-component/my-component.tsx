import { Component, Prop, h} from '@stencil/core';


@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @Prop() first: string;
  @Prop() middle: string;
  @Prop() last: string;
  @Prop() backgroundColor:string='Red';
  render() {
    return (<div>
      <div class='example'>
       <div class='example1' style={{ backgroundColor: this.backgroundColor }}><example-one/></div> 
       <div class='example2'> <example-two/></div> 
       <div class='example3'> <example-third/></div> 
      </div>
      <demo-story/>
      <h2 style={{ color: this.backgroundColor }}>Hello world</h2>
      <h1 style={{ color: this.backgroundColor }}>Hello wonderful {this.first}jiii {this.middle} dd{this.last}</h1>
    </div>)
  }
}
