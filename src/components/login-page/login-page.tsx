import { Component, Host, h, State, Element} from '@stencil/core';

@Component({
  tag: 'login-page',
  styleUrl: 'login-page.css',
  shadow: true,
})
export class LoginPage {

  @State() username:string = 'chandu';
  @State() password:string = "1606";
  @State() check_username:boolean = false;
  @State() check_password:boolean = false;
  @State() valid:boolean = true;
  @State() component:string;
  @Element() el:HTMLElement;


  connectedCallback(){
    alert("connectedCallback called")
    console.log("connectedCallback called")
  }
  componentWillLoad(){
    alert("componentWillLoad called")
    console.log("componentWillLoad called")
  }
  componentWillRender(){
    alert("componentWillRender called")
    console.log("componentWillRender called")
  }
  componentDidRender(){
    alert("componentDidRender called")
    console.log("componentDidRender called")
  }
  componentDidLoad(){
    alert("componentDidLoad called")
    console.log("componentDidLoad called");
    (this.el.shadowRoot.querySelector('button') as HTMLButtonElement).style.backgroundColor = 'green'
  }
  componentShouldUpdate(){
    alert("componentShouldUpdate called")
    console.log("componentShouldUpdate called")
  }
  componentWillUpdate(){
    alert("componentWillUpdate called")
    console.log("componentWillUpdate called")
  }
  componentDidUpdate(){
    
    alert("componentDidUpdate called")
    console.log("componentDidUpdate called");

    // (this.el.shadowRoot.querySelector('button') as HTMLButtonElement).style.backgroundColor = 'red'
    
  }
  disconnectedCallback(){
    alert("disconnectedCallback called")
    console.log("disconnectedCallback called")
  }
  render() {
    alert("render called")
    console.log("render called")
    if(this.valid)
    this.component = (
      <div class='baseDiv'>
      <div class="parentDiv">
         <div class='childDiv1'>
           <label>NAME</label>
           <input type="text" class='username'/>
           <p class = {this.check_username?"visible":"hide"}>INVALID</p>
           <label>PASSWORD</label>
           <input type="text" class='password'/>
           <p class = {this.check_password?"visible":"hide"}>INVALID</p>
         </div>
         <div class='childDiv2'>
           <button onClick={this.submiting.bind(this)}>SUBMIT</button>
         </div>
      </div>
  </div>
    )
    else
    this.component = (
      <demo-adesa user = {this.username}>
            <input type="text" placeholder='Enter VIN,Year,Make,Model'/>
            <button>search</button>
            <div slot='content'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolor dolores facere consequuntur ex, commodi nihil illum veniam reiciendis, laboriosam reprehenderit debitis! Porro, dolores nemo! Facere praesentium vero totam officiis.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eum. Omnis recusandae quaerat rem esse odit? Facere asperiores accusantium tempora iusto sequi velit dolorum iste enim, nihil repellendus tempore quibusdam.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi laborum iure et dolore facere excepturi deserunt, aliquam accusamus reprehenderit earum. Sed iste id cum quos nostrum velit in. Aspernatur, pariatur.
            </div>
      </demo-adesa>
    ) 
    return (
      <Host>
       {this.component}
      </Host>
    );
  }
  submiting(){
    const user_username = (this.el.shadowRoot.querySelector(".username") as HTMLInputElement).value
    const user_password = (this.el.shadowRoot.querySelector(".password") as HTMLInputElement).value
    if(user_username === "" || user_username != this.username)
      this.check_username = true;
    else if(user_password === "" || user_password != this.password){
      this.check_username = false;
      this.check_password = true
    }
    else
          this.valid = false
  }
}
