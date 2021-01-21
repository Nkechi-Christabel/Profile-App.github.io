import React from "react";


function Profile(props) {
    return(
      <div className="profile p-5">
          <h3>Name: {props.user.FirstName} {props.user.LastName}</h3>
          <p>Email: {props.user.Email}</p>
          <p>Gender: {props.user.Gender}</p>
          <p>Last Login: {props.user.LastLogin}</p>
          <p>Payment Method: {props.user.PaymentMethod}</p>
          <p>Credit Card Type: {props.user.CreditCardType}</p>
          <p>Phone Number: {props.user.PhoneNumber}</p>
          <p>User Name: {props.user.UserName}</p>
      </div>
    )
}


export default Profile;