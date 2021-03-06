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





// import validator from 'validator';



// class FormValidator {
//   constructor(validations) {
//     // validations is an array of rules specific to a form
//     this.validations = validations;
//   }  validate(state) {
//     // start out assuming valid
//     let validation = this.valid();    // for each validation rule
//     this.validations.forEach(rule => {
    
//       // if the field isn't already marked invalid by an earlier rule
//       if (!validation[rule.field].isInvalid) {
//         // determine the field value, the method to invoke and
//         // optional args from the rule definition
//         const field_value = state[rule.field].toString();
//         const args = rule.args || [];
//         const validation_method = typeof rule.method === 'string' ?
//                                 validator[rule.method] :
//                                 rule.method        // call the validation_method with the current field value
//         // as the first argument, any additional arguments, and the
//         // whole state as a final argument.  If the result doesn't
//         // match the rule.validWhen property, then modify the
//         // validation object for the field and set the isValid
//         // field to false
//         if(validation_method(field_value, ...args, state) != rule.validWhen) {
//           validation[rule.field] = { 
//             isInvalid: true, 
//             message: rule.message 
//           }
//           validation.isValid = false;
//         }
//       }
//     });
//     return validation;
//   }  // create a validation object for a valid form
//   valid() {
//     const validation = {}
    
//     this.validations.map(rule => (
//         validation[rule.field] = { isInvalid: false, message: '' }
//     ));    return { isValid: true, ...validation };
//   }
// }



class Header extends React.Component {
  render() {
    return (
      <div className='row pt-4'>
        <div className='col-sm-7 border-top border-start' >
          <img src={fibank} className="App-logo" alt="fibank" />
          <h2 className="textOver">?????????????????? "?????????? ????????????"</h2>
        </div>

        <div className='col-sm-5 border-top border-end '>
          <p>???? ?????????? ?????????????????????????? ?????????? ????<br />
            <b>???????????????? "?????????????????? ??????????????????"</b></p>
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

          <h4>?????????????????? ???? ????????????????</h4>
          <span>?????? ????????????: &nbsp;&nbsp;&nbsp;&nbsp;</span>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
            <label className="form-check-label" for="inlineRadio1">?????? ??????????????????</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
            <label className="form-check-label" for="inlineRadio2">?????????????????????????? ???? ?????????????????????? ?????????? </label>
          </div>
        </div>



        <div className='row-sm-12'>



          <form className="row g-3">
            <div className="col-5">
              {/* <label for="customRange1" className="form-label">Example range</label> */}
              <input type="range" className="form-range  element" style = {{marginTop : '30px'}} max="25000" min="500" step="2" id="customRange1" onChange={this.onChangeRange} />
            </div>
            <div className="col-3">
              <label for="creditAmount" className="control-label ">?????????? ??????????:	</label>
              <input id="creditAmount" name="creditAmount" type="text" className="form-control" value='500' />



            </div>
            <div className="col-4">
              <button type="submit" style = {{marginTop : '25px',marginLeft : '45px'}} className="btn btn-primary mb-3">?????????? ??????????????????????</button>
            </div>
          </form>
        </div>


        <div className='row-sm-12'>



          <form className="row g-3">
            <div className="col-5">
              <label for="customRange1" className="form-label">???????????? ?????????? :</label>

            </div>
            <div className="col-3">
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                <label className="form-check-label" for="inlineRadio1">????</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                <label className="form-check-label" for="inlineRadio2">????</label>
              </div>



            </div>

          </form>
        </div>


        <div className='row-sm-12'>



          <form className="row g-3">
            <div className="col-5">
              <label for="customRange1" className="form-label">???????????????? ?????????? ?? SMS ???????????????? :</label>

            </div>
            <div className="col-3">
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                <label className="form-check-label" for="inlineRadio1">????</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                <label className="form-check-label" for="inlineRadio2">????</label>
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

        {/**?????? 1 - ???????????????????????????? - ??????, ??????*/}
        <div className='row-sm-12'>

          <h4>????????????????????????????</h4>

          <div className="row g-3">
            <div className="col">
              <span>??????????(??????, ??????????????, ??????????????):</span>
              <input type="text" className="form-control" />
            </div>

            <div className="col-sm-3">
              <span>??????:</span>
              <input type="text" className="form-control" />
            </div>
          </div>

        </div>
        {/** ???????? -  ?????? 1 - ???????????????????????????? - ??????, ??????*/}

        {/**?????? 2 - ?????????? ??????????, ????????????????,?????????????? ??????????????, ????????*/}
        <div className="row g-4">
          <div className="col-sm-2">
            <span>?????????? ?????????? ???:</span>
            <input type="text" className="form-control" />
          </div>
          <div className="col-sm-2">
            <span>???????????????? ????:</span>

            <input type="text" className="form-control" />
          </div>
          <div className="col-sm-4" style={{marginTop : '15px'}}>

            <label for="basic-url" className="form-label"   >?????????????? ??????????????:</label>
            <div className="input-group mb-3 row">

              <select className="form-select" id="basic-addon1" style={{ width: '30%' }}>
                <option selected>??????</option>
                <option value="1">087</option>
                <option value="2">088</option>
                <option value="3">089</option>
                <option value="4">098</option>
                <option value="5">099</option>
              </select>
              <input type="text" className="form-control" style={{ width: '70%' }} aria-describedby="basic-addon3" placeholder="??????????" />
            </div>



          </div>

          <div className="col-sm-4">
            <span>Email:</span>
            <input type="text" className="form-control" />
          </div>
        </div>
        {/** - ???????? ?????? 2 - ?????????? ??????????, ????????????????,?????????????? ??????????????, ???????? */}



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
