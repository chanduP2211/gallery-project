import { Component, Host, h, State, Listen } from '@stencil/core';

@Component({
  tag: 'demo-adesa',
  styleUrl: 'demo-adesa.css',
  shadow: true,
})
export class DemoAdesa {

  @State() valid:boolean = false;

  @Listen('dataShowed', { target: 'window' })
  handleScroll() {
   this.valid = false;
  }
  render() {

    return (
      <Host>
        <div class='parent'>
          <div class="child child1">
            <div class='heading'>
            <h1><p class='head'> VIPS</p><p>honda&Acura remarketing</p></h1>
            </div>
            <div></div>
            <div class="logout">
              <li>Welcome Jesica|Logout</li>
              <li>Customer Support</li>
              <li class='select'>
                <select name="" id="">
                  <option value="">AKURA OF BROOKLYN</option>
                  <option value="">My Transactions</option>
                </select>
              </li>
            </div>
          </div>
          <div class="child child2">
            <ul>
              <li>Home</li>
              <li>Buy</li>
              <li>Tools</li>
              <li>Watchlist</li>
              <li>My Transactions</li>
              <li>My Account</li>
              <li>Dealer Consigned</li>
              <li>Resources</li>
            </ul>
          </div>
          <div class="child child3">
            <input type="text" placeholder='Enter VIN,Year,Make,Model'/>
            <button>search</button>
          </div>
          <div class="child childi">
           <div class="child child4">
            <ol>
              <li>&lt;  Back to Results</li>
              <li>Next Vehicle  &gt;</li>
            </ol>
            <div class='imag'  onClick={()=>{
                this.valid = true}}>
              <div >
              <img src="../asset/1.1.jpg" alt="" width={500} height={200} />
              </div>
              <div class='img1'>
                <img src="../asset/1.1.jpg" alt=""  width={160} height={60}/>
                <img src="../asset/1.2.png" alt=""  width={160} height={60}/> 
                <img src="../asset/1.3.jpg" alt=""  width={160} height={60}/>
                <img src="../asset/2.jpg" alt=""  width={160} height={60}/>
                <img src="../asset/admin.jpg" alt=""  width={160} height={60}/> 
                <img src="../asset/admin1.jpg" alt=""  width={160} height={60}/>
              </div>
            </div>
           </div>
          <div class="child child5">
            <ul>
              <li  class='list1 list'>Vehicle in Watchlist</li>
              <li class='list2 list'>Add Note</li>
              <li class='list3 list'>Printer Friendly</li>
              <li class='list4 list'>Show Retail View</li>
            </ul>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolor dolores facere consequuntur ex, commodi nihil illum veniam reiciendis, laboriosam reprehenderit debitis! Porro, dolores nemo! Facere praesentium vero totam officiis.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eum. Omnis recusandae quaerat rem esse odit? Facere asperiores accusantium tempora iusto sequi velit dolorum iste enim, nihil repellendus tempore quibusdam.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi laborum iure et dolore facere excepturi deserunt, aliquam accusamus reprehenderit earum. Sed iste id cum quos nostrum velit in. Aspernatur, pariatur.
            </div>
            </div>
          </div>
        </div>
        <div class={this.valid?'show gallery':'hide'}>
        </div>
        <div class={this.valid?'gallery':'hide'}>
            <gallery-grid/>
        </div>
      </Host>
    );
  }

}
