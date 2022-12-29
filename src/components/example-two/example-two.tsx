import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'example-two',
  styleUrl: 'example-two.css',
  shadow: true,
})
export class ExampleTwo {

  @State() content:string = 'chandu'

  render() {
    return (
      <Host>
        <div >
        <div class="parent">
               <div class="child child1"onClick={this.m1.bind(this,'1')}> <a href="gif"> <h1>1</h1></a></div>
               <div class="child child2"onClick={this.m1.bind(this,'2')}><h1>2</h1></div>
               <div class="child child3"onClick={this.m1.bind(this,'3')}><h1>3</h1></div>
               <div class="child child4"onClick={this.m1.bind(this,'4')}><h1>4</h1></div>
               <div class="child child5"onClick={this.m1.bind(this,'5')}><h1>5</h1></div>
               <div class="child child6"onClick={this.m1.bind(this,'6')}><h1>6</h1></div>
               <div class="child child7"onClick={this.m1.bind(this,'7')}><h1>7</h1></div>
               <div class="child child8"onClick={this.m1.bind(this,'8')}><h1>8</h1></div>
               <div class="child child9"onClick={this.m1.bind(this,'9')}><h1>9</h1></div>
               <div class="child child7"onClick={this.m1.bind(this,'10')}><h1>10</h1></div>
               <div class="child child8"onClick={this.m1.bind(this,'11')}><h1>11</h1></div>
               <div class="child child9"onClick={this.m1.bind(this,'12')}><h1>12</h1></div>
        </div>
        </div>
       
        <div class='content' id="#idn">
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos modi, architecto voluptate, itaque totam eligendi quod deserunt corporis ut eius debitis expedita ipsum, esse quidem excepturi exercitationem natus optio id?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam omnis minus est ducimus saepe itaque molestiae facere fugiat illum! Debitis suscipit ipsum nemo similique totam alias id impedit sapiente fugit!Loremlore
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia ratione odio placeat. Aut mollitia ab, deleniti fugiat vitae illo dignissimos sint nisi similique culpa doloribus minus facere officiis? Reiciendis, dolor.
          </h1>
          <h1 id="#gif">ukdfjijsadlfkas</h1>
          {this.content}
          <a href="#">Top</a>
         
        </div>
      </Host>
    );
  }
m1(arg:string){

  this.content  = arg+"********"+"Content met consectetur adipisicing elit. Ducimus fugiat doloremque incidunt perferendis laboriosam alias fuga tenetur quasi non, reiciendis atque pariatur eaque ab, nesciunt, iure minus doloribus maiores obcaecatLorem, ipsum dolor sit aimet consectetur adipisicing elit. Ducimus fugiat doloremque incidunt perferendis laboriosam alias fuga tenetur quasi non, reiciendis atque pariatur eaque ab, nesciunt, iure minus doloribus maiores obcaecatLorem, ipsum dolor sit aimet consectetur adipisicing elit. Ducimus fugiat doloremque incidunt perferendis laboriosam alias fuga tenetur quasi non, reiciendis atque pariatur eaque ab, nesciunt, iure minus doloribus maiores obcaecatLorem, ipsum dolor sit aimet consectetur adipisicing elit. Ducimus fugiat doloremque incidunt perferendis laboriosam alias fuga tenetur quasi non, reiciendis atque pariatur eaque ab, nesciunt, iure minus doloribus maiores obcaecatLorem, ipsum dolor sit aimet consectetur adipisicing elit. Ducimus fugiat doloremque incidunt perferendis laboriosam alias fuga tenetur quasi non, reiciendis atque pariatur eaque ab, nesciunt, iure minus doloribus maiores obcaecatLorem, ipsum dolor sit aimet consectetur adipisicing elit. Ducimus fugiat doloremque incidunt perferendis laboriosam alias fuga tenetur quasi non,  doloremque incidunt perferendis laboriosam alias fuga tenetur quasi non, reiciendis atque pariatur eaque ab, nesciunt, iure minus doloribus maiores obcaecatLorem, ipsum dolor sit aimet consectetur adipisicing elit. Ducimus fugiat doloremque incidunt perferendis laboriosam alias fuga tenetur quasi non, reiciendis atque pariatur eaque ab, nesciunt, iure minus doloribus maiores obcaecatLorem, ipsum dolor sit aimet consectetur adipisicing elit. Ducimus fugiat doloremque incidunt perferendis laboriosam alias fuga tenetur quasi non, reiciendis atque pariatur eaque ab, nesciunt, iure minus doloribus maiores obcaecatLorem, ipsum dolor sit aimet consectetur adipisicing elit. Ducimus fugiat doloremque incidunt perferendis laboriosam alias fuga tenetur quasi non, reiciendis atque pariatur eaque ab, nesciunt, iure minus doloribus maiores obcaecatLorem, ipsum dolor sit aimet consectetur adipisicing elit. Ducimus fugiat doloremque incidunt perferendis laboriosam alias fuga tenetur quasi non, reiciendis atque pariatur eaque ab, nesciunt, iure minus doloribus maiores obcaecatLorem, ipsum dolor sit aimet consectetur adipisicing elit. Ducimus fugiat doloremque incidunt perferendis laboriosam alias fuga tenetur quasi non, reiciendis atque pariatur eaque ab, nesciunt, iure minus doloribus maiores obcaecatLorem, ipsum dolor sit aimet consectetur adipisicing elit. Ducimus fugiat doloremque incidunt perferendis laboriosam alias fuga tenetur quasi non, reiciendis atque pariatur eaque ab, nesciunt, iure minus doloribus maiores obcaecatLorem, ipsum dolor sit aimet consectetur adipisicing elit. Ducimus fugiat doloremque incidunt perferendis laboriosam alias fuga tenetur quasi non, reiciendis atque pariatur eaque ab, nesciunt, iure minus doloribus maiores obcaecatLorem, ipsum dolor sit aimet consectetur adipisicing elit. Ducimus fugiat doloremque inasi non, reiciendis atque pariatur eaque ab, nesciunt, iure minus doloribus maiores obcaecatLorem, ipsum dolor"   
}
}
