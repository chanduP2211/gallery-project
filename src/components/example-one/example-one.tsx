import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'example-one',
  styleUrl: 'example-one.css',
  shadow: true,
})
export class ExampleOne {

  @State() valid:boolean = true;
  @State() id:HTMLInputElement ;
  @State() name:HTMLInputElement ;
  @State() city:HTMLInputElement ;


  submiting(){
    this.valid = false
  }


  render() {
    let content = '';
    if(this.valid)
    content =(
      <div class='parent'>
      <div class='child'>
      <label>NAME</label>
      <input type="text" ref={el=>this.name = el}/>
    </div>
    <div  class='child'>
      <label>ID</label>
      <input type="text" ref={el=>this.id = el}/>
    </div>
    <div  class='child'>
      <label>CITY</label>
      <input type="text" ref={el=>this.city = el}/>
    </div>
    <div  class='child'>
        <button onClick={this.submiting.bind(this)}>SUBMIT</button>
    </div>
    </div>
    )
    else
      content = (
        <demo-story 
             id = {this.id.value}
             name = {this.name.value}
             city = {this.city.value}>
           <p  slot="my-text">Hii {this.name.value}....Your id is {this.id.value}....From {this.city.value}....Your Data Found</p>
           <p>No Data found</p>
         </demo-story>
    )
    return (
      <Host>
       { content }
      </Host>
    );
  }


}


