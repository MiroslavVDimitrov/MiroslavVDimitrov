import fibank from './fibank.png';               /* from './logo.svg';*/
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';

{/**  class Calendar extends React.Component {
//   componentDidMount(){
//     <script>
//     $( function() {
//       $( "#datepicker" ).datepicker({
//         showOn: "button",
//         buttonImage: "images/calendar.gif",
//         buttonImageOnly: true,
//         buttonText: "Select date"
//       })
//     } );
//     </script>
//   }

 

  render() {
    return (
    <div>
    
      <p>Date: <input type="text" id="datepicker"/></p>
    
    
    </div>

    );
  }
}*/}





class Header extends React.Component {
  render() {
    return (
      <div className='row pt-4'>
        <div className='col-sm-7 border-top'>
          <img src={fibank} className="App-logo" alt="fibank" />
          <h2 class="textOver">Овърдрафт "Лесен кредит"</h2>
        </div>

        <div className='col-sm-5 border-top border-left '>
          <p>Дирекция "Дигитално банкиране"<br />
            <b>До Първа Инвестиционна банка АД</b></p>
        </div>
      </div>
    );
  }
}

class Body extends React.Component {
  hadleMouseDown = () => {
    alert('Down');
  }

  render() {
    return (
      <div className='row pt-4 border bg-light' >
        { /**</div> // <div className='row pt-4' onMouseDown={this.hadleMouseDown}>*/}
        <div className='col-sm-12'>

          <h4>ПАРАМЕТРИ НА ИСКАНЕТО</h4>
          <span>Вид искане: &nbsp;&nbsp;&nbsp;&nbsp;</span>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
            <label class="form-check-label" for="inlineRadio1">Нов овърдрафт</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
            <label class="form-check-label" for="inlineRadio2">Предоговаряне на съществуващ лимит </label>
          </div>
        </div>



        <div className='row-sm-12'>



          <form class="row g-3">
            <div class="col-5">
              <label for="customRange1" class="form-label">Example range</label>
              <input type="range" class="form-range" max="25000" min="500" step="2" id="customRange1" />
            </div>
            <div class="col-3">
              <label for="creditAmount" class="control-label " ng-hide="!hasLable" ng-bind-html="labelText | translate">Желан лимит:	</label>
              <input id="creditAmount" name="creditAmount" ng-change="getVerbalAmount()" ng-disabled="sgPropMeta.readOnly" ng-model="creditRequestForm.creditAmount" ng-model-options="{ updateOn: 'blur' }" sg-prop-metadata="creditAmount" type="text" class="form-control ng-pristine ng-untouched ng-valid ng-scope" />



            </div>
            <div class="col-4">
              <button type="submit" class="btn btn-primary mb-3">ВИДЕО КОНСУЛТАЦИЯ</button>
            </div>
          </form>
        </div>


        <div className='row-sm-12'>



          <form class="row g-3">
            <div class="col-5">
              <label for="customRange1" class="form-label">Банков Пакет :</label>

            </div>
            <div class="col-3">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                <label class="form-check-label" for="inlineRadio1">Да</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                <label class="form-check-label" for="inlineRadio2">Не</label>
              </div>



            </div>

          </form>
        </div>


        <div className='row-sm-12'>



          <form class="row g-3">
            <div class="col-5">
              <label for="customRange1" class="form-label">Кредитна карта с SMS известия :</label>

            </div>
            <div class="col-3">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                <label class="form-check-label" for="inlineRadio1">Да</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                <label class="form-check-label" for="inlineRadio2">Не</label>
              </div>



            </div>

          </form>
        </div>






      </div>




    );
  }
}


class Footer extends React.Component {
  hadleMouseDown = () => {
    alert('Down');
  }

  render() {
    return (

      <div className='row pt-4 border bg-light' >
        { /**</div> // <div className='row pt-4' onMouseDown={this.hadleMouseDown}>*/}

        {/**ред 1 - кредитоискател - име, егн*/}
        <div className='row-sm-12'>

          <h4>кредитоискател</h4>

          <div class="row g-3">
            <div class="col">
              <span>Имена(Име, Презиме, Фамилия):</span>
              <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
            </div>

            <div class="col-sm-3">
              <span>ЕГН:</span>
              <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
            </div>
          </div>

        </div>
        {/** край -  ред 1 - кредитоискател - име, егн*/}

        {/**ред 2 - лична карта, календар,мобилен телефон, поща*/}
        <div class="row g-4">
          <div class="col-sm-2">
            <span>Лична Карта №:</span>
            <input type="text" class="form-control" placeholder="City" aria-label="City" />
          </div>
          <div class="col-sm-2">
            <span>Издадена на:</span>

            {/* <input type="text" class="form-control" placeholder="State" aria-label="State" /> */}
          </div>
          <div class="col-sm-4">

            <label for="basic-url" class="form-label" >Мобилен телефон:</label>
            <div class="input-group mb-3 row">

              <select class="form-select" id="basic-addon1" style={{ width: '30%' }}>
                <option selected>КОД</option>
                <option value="1">087</option>
                <option value="2">088</option>
                <option value="3">089</option>
                <option value="4">098</option>
                <option value="5">099</option>
              </select>
              <input type="text" class="form-control" style={{ width: '70%' }} aria-describedby="basic-addon3" placeholder="Номер" />
            </div>


            {/**  <span className='col'>Мобилен телефон:</span>
            <select class="form-select " id="inputGroupSelect04-sizing-sm" aria-label="label">
              <option selected>КОД</option>
              <option value="1">087</option>
              <option value="2">088</option>
              <option value="3">089</option>
              <option value="4">098</option>
              <option value="5">099</option>
            </select>
            <input type="text" class="form-control row-sm-4" placeholder="City" aria-label="Номер" />
            */}
          </div>

          <div class="col-sm-4">
            <span>Email:</span>
            <input type="text" class="form-control" />
          </div>
        </div>
        {/** - край ред 2 - лична карта, календар,мобилен телефон, поща */}



      </div>




    );
  }
}


class App extends React.Component {

  render() {
    return (
      <div className='container col-sm-10' >
        <Header />
        <Body />
        <Footer />
        {/* <Calendar /> */}


      </div >
      /**  <div className="Blank">
         <div className='Blank1'>
         <p class="all-caps  bold">Дирекция "Дигитално банкиране"</p>
         <p class="all-caps">До Първа Инвестиционна банка АД</p>
     </div>
     <div className='Blank2'>
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <p>
           Edit <code>src/App.js</code> and save to reload.
         </p>
         <a
           className="App-link"
           href="https:altaph.eu"
           target="_blank"
           rel="noopener noreferrer"
         >
           Learn 
         </a>
       </header>
     </div>
 
     <div className='Blank3'>
         
     <h4 class="col col-full bold margin-b-10 ng-scope" translate="PAGES.CREDIT_REQUEST_FORM.PARAM_REQ">Параметри на искането</h4>
       
     </div>
   </div>
   
 
 
   
   <body className='Body' >
     <div className='Blank'>
     <div class="row1" >
     <img src={fibank} className="App-logo" alt="fibank" />
           <h4 class="textOver">Овърдрафт "Лесен кредит"</h4>
         </div> 
         <div translate="PAGES.SG_MTGL_REQ_FORM.RECEIVER" class="ng-scope">
         <p class="all-caps">До Първа Инвестиционна банка АД</p>
           <p class="all-caps  bold">Дирекция "Дигитално банкиране"</p>
           
 
 
 
 
 </div>
     </div>
 
     <div className='row1' ala>
     <div class="row">
         <h4 class="text">Параметри на искането</h4>
       </div>
         <div translate="PAGES.SG_MTGL_REQ_FORM.RECEIVER" class="ng-scope">
         <p class="all-caps">До Първа Инвестиционна банка АД</p>
           <p class="all-caps  bold">Дирекция "Дигитално банкиране"</p>
           
 
 
 
 
 </div>
     </div>
 
   </body>
   */
      /*{ <body className='Body'>
      <div className='Blank'>
      <div className='row1'>
        <div className='row11'>
          <div className='logo'>
          <img src={fibank} className="App-logo" alt="fibank" />
          </div>
          <div className='later'>
          <p class="all-caps">До Първа Инвестиционна банка АД </p>
          <p class="all-caps  bold">Дирекция "Дигитално банкиране"</p>
      
      
      
          </div>
        </div>
       
        <div className='order'> <p>Овърдрафт "Лесен кредит"</p></div>
      </div>
      <div className='row2'>
        <div className='row11'>
          <div className='logo'>
          <img src={fibank} className="App-logo" alt="fibank" />
          </div>
          <div className='later'>
          <p class="all-caps">До Първа Инвестиционна банка АД</p>
      <p class="all-caps  bold">Дирекция "Дигитално банкиране"</p>
      
      
      
          </div>
        </div>
       
        <div className='order'> <h2 class="bold ng-scope" translate="PAGES.SG_OVERDARFT_FORM.H2.HEADER">Овърдрафт "Лесен кредит"</h2></div>
      </div>
      
      <div className='row3'>
        <div className='row11'>
          <div className='logo'>
          <img src={fibank} className="App-logo" alt="fibank" />
          </div>
          <div className='later'>
                <h4 >До Първа Инвестиционна банка АД</h4>
          
                <p  bold > Дирекция "Дигитално банкиране"</p>
          </div>
        </div>
       
        <div className='order'> <h2 class="textOver">Овърдрафт "Лесен кредит"</h2></div>
      </div>
      
      
      
      
      
      
      
      
      
      </div>
      
      
      
      
      
      </body> }*/


    );


  }

}



export default App;
