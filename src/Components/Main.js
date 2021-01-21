import React from "react";


function Main(props) {
  return (
       <main className="main">
            <div className="row filter__container pb-4">
                <div className="input-group filter__search-container col-md-6 pt-5">
                    <input type="text" className="form-control" placeholder="Search a profile"  value={props.inputValue} onChange={props.handleChange} />
                    <div className="input-group-append">
                      <button className="btn btn-secondary" type="button">
                      <i className="fa fa-search"></i>
                      </button>
                  </div>
                </div>
              
                <div className="filter__box col-md-3 pt-5">
                        <select 
                          value={props.genderFilter}
                          onChange={props.handleGenderSelect}
                          name="genderFilter">
                          <option className="filter__option" value="">Sort by Gender</option>
                          <option className="filter__option" value="male">Male</option>
                          <option className="filter__option" value="female">Female</option>
                          <option className="filter__option" value="prefer to skip">Prefer to skip</option>
                        </select>
                     
                    </div>

                    <div className="filter__box col-md-3 pt-5">
                        <select 
                          value={props.paymentFilter}
                          onChange={props.handlePaymentSelect}
                          name="paymentFilter">
                          <option className="filter__option" value="">Sort by Payment</option>
                          <option className="filter__option" value="money order">Money order</option>
                          <option className="filter__option" value="cc">CC</option>
                          <option className="filter__option" value="check">Cheque</option>
                          <option className="filter__option" value="paypal">Paypal</option>
                        </select>
                        </div>
                    </div>
              
       </main>
 )
}



export default Main;