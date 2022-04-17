import fibank from './fibank.png';               /* from './logo.svg';*/
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Range from 'rc-slider';



class Header extends React.Component {
  render() {
    return (
      <div className='row pt-4'>
        <div className='col-sm-7 border-top border-start' >
          <img src={fibank} className="App-logo" alt="fibank" />
          <h2 className="textOver">Овърдрафт "Лесен кредит"</h2>
        </div>

        <div className='col-sm-5 border-top border-end '>
          <p>До Първа Инвестиционна банка АД<br />
            <b>Дирекция "Дигитално банкиране"</b></p>
        </div>
      </div>
    );
  }
}

class Body extends React.Component {
  onChangeRange = () => {
    var rangeValue = document.getElementById('customRange1').value;
    document.getElementById('creditAmount').value = rangeValue;
  }

  render() {
    return (
      <div className='row pt-4 border bg-light' >
        { /**</div> // <div className='row pt-4' onMouseDown={this.hadleMouseDown}>*/}
        <div className='col-sm-12'>

          <h4>ПАРАМЕТРИ НА ИСКАНЕТО</h4>
          <span>Вид искане: &nbsp;&nbsp;&nbsp;&nbsp;</span>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
            <label className="form-check-label" for="inlineRadio1">Нов овърдрафт</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
            <label className="form-check-label" for="inlineRadio2">Предоговаряне на съществуващ лимит </label>
          </div>
        </div>



        <div className='row-sm-12'>



          <form className="row g-3">
            <div className="col-5">
              {/* <label for="customRange1" className="form-label">Example range</label> */}
              <input type="range" className="form-range  element" style = {{marginTop : '30px'}} max="25000" min="500" step="2" id="customRange1" onChange={this.onChangeRange} />
            </div>
            <div className="col-3">
              <label for="creditAmount" className="control-label ">Желан лимит:	</label>
              <input id="creditAmount" name="creditAmount" type="text" className="form-control" value='500' />



            </div>
            <div className="col-4">
              <button type="submit" style = {{marginTop : '25px',marginLeft : '45px'}} className="btn btn-primary mb-3">ВИДЕО КОНСУЛТАЦИЯ</button>
            </div>
          </form>
        </div>


        <div className='row-sm-12'>



          <form className="row g-3">
            <div className="col-5">
              <label for="customRange1" className="form-label">Банков Пакет :</label>

            </div>
            <div className="col-3">
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                <label className="form-check-label" for="inlineRadio1">Да</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                <label className="form-check-label" for="inlineRadio2">Не</label>
              </div>



            </div>

          </form>
        </div>


        <div className='row-sm-12'>



          <form className="row g-3">
            <div className="col-5">
              <label for="customRange1" className="form-label">Кредитна карта с SMS известия :</label>

            </div>
            <div className="col-3">
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                <label className="form-check-label" for="inlineRadio1">Да</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                <label className="form-check-label" for="inlineRadio2">Не</label>
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

          <div className="row g-3">
            <div className="col">
              <span>Имена(Име, Презиме, Фамилия):</span>
              <input type="text" className="form-control" />
            </div>

            <div className="col-sm-3">
              <span>ЕГН:</span>
              <input type="text" className="form-control" />
            </div>
          </div>

        </div>
        {/** край -  ред 1 - кредитоискател - име, егн*/}

        {/**ред 2 - лична карта, календар,мобилен телефон, поща*/}
        <div className="row g-4">
          <div className="col-sm-2">
            <span>Лична Карта №:</span>
            <input type="text" className="form-control" />
          </div>
          <div className="col-sm-2">
            <span>Издадена на:</span>

            <input type="text" className="form-control" />
          </div>
          <div className="col-sm-4" style={{marginTop : '15px'}}>

            <label for="basic-url" className="form-label"   >Мобилен телефон:</label>
            <div className="input-group mb-3 row">

              <select className="form-select" id="basic-addon1" style={{ width: '30%' }}>
                <option selected>КОД</option>
                <option value="1">087</option>
                <option value="2">088</option>
                <option value="3">089</option>
                <option value="4">098</option>
                <option value="5">099</option>
              </select>
              <input type="text" className="form-control" style={{ width: '70%' }} aria-describedby="basic-addon3" placeholder="Номер" />
            </div>



          </div>

          <div className="col-sm-4">
            <span>Email:</span>
            <input type="text" className="form-control" />
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





      </div >



    );


  }

}



export default App;
