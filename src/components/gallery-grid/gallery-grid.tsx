import { Component, Host, h, State, Event } from '@stencil/core';
import { EventEmitter } from 'puppeteer';

@Component({
  tag: 'gallery-grid',
  styleUrl: 'gallery-grid.css',
  shadow: true,
})
export class GalleryGrid {
  [x: string]: any;

@State() content:string = "child1"
@State() valid:boolean = false
@State() data:HTMLDivElement
@State() image1="image10"
@State() image2="image2"
@State() image3="image3"
@State() image9="image20"
@State() image4="image4"
@State() image5="image5"
@State() image6="image6"
@State() image7="image7"
@State() image8="image8"
@Event({   composed: true,
  cancelable: true,
  bubbles: true}) dataShowed:EventEmitter

  //branch1
  render() {
    return (
      <Host>
      <div class='baseParent'>
      <div class='cancel' onClick={()=>this.dataShowed.emit("cancel")}>
          <span >x</span>
         </div>
         <div class='base'>
            <div class="parent1">
                <div class="sub sub1"><label onClick={this.leftClick.bind(this)}>&lt;</label></div>
                <div class={this.content+" "+"sub2"}>
                </div>
                <div class="sub sub3"><label onClick={this.rightClick.bind(this)}>&gt;</label></div>
            </div>
            <div class="parent2">
                <div class={this.content == "child1"?"child child1 red":"child child1"} onClick={this.clicking.bind(this,"child1")}></div>
                <div class={this.content == "child2"?"child child2 red":"child child2"} onClick={this.clicking.bind(this,"child2")}></div>
                <div class={this.content == "child3"?"child child3 red":"child child3"} onClick={this.clicking.bind(this,"child3")}></div>
                <div class={this.content == "child4"?"child child4 red":"child child4"} onClick={this.clicking.bind(this,"child4")}></div>
                <div class={this.content == "child5"?"child child5 red":"child child5"} onClick={this.clicking.bind(this,"child5")}></div>
                <div class={this.content == "child6"?"child child6 red":"child child6"} onClick={this.clicking.bind(this,"child6")}></div>
                <div class={this.content == "child7"?"child child7 red":"child child7"} onClick={this.clicking.bind(this,"child7")}></div>
                <div class={this.content == "child8"?"child child8 red":"child child8"} onClick={this.clicking.bind(this,"child8")}></div>
                <div class={this.content == "child9"?"child child9 red":"child child9"} onClick={this.clicking.bind(this,"child9")}></div>
                <div class={this.content == "child10"?"child child10 red":"child child10"}onClick={this.clicking.bind(this,"child10")} ></div>
            </div>
         </div>
       
         </div>
      </Host>
    );
  }
  clicking(arg:string){
  this.valid = true;
  this.content = arg;
  }
  rightClick(){
  let data:string[] = this.content.split("")
  let data1 = "child"+ (+data[data.length-1] + 1)
  this.content = data1;
  }
  leftClick(){
    let data:string[] = this.content.split("child")
    let data1= ''
    if(+data[data.length-1]>1)
     data1 = "child"+ (+data[data.length-1] - 1)
  else if(+data[data.length-1]>9)
     data1 = "child"+ (+data[data.length-1] - 1)
  else
     data1 = "child10"

  this.content = data1;
  }
}
