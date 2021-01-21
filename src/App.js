import React, {useState, useEffect} from "react";
import Main from "./Components/Main";
import Profile from "./Components/Profile";
import Loader from "./Components/Loader";


function App() {
     const [profile, setProfile] = useState([]);
     const [allProfiles, setAllProfiles] = useState([]);
     const [searchInput, setSearchInput] = useState('');
     const [genderFilter, setGenderFilter] = useState('');
     const [paymentFilter, setPaymentFilter] = useState('')
     const [currentPage, setCurrentPage] = useState(1);
     const [isLoading, setIsLoading] = useState(false)

  //fetch data function
 useEffect(() => {
   setIsLoading(true)
   fetch("https://api.enye.tech/v1/challenge/records")
   .then(response => response.json())
   .then(data => {
    setIsLoading(false)
     setProfile(data.records.profiles)
     setAllProfiles(data.records.profiles)
  }) 
}, [])


//get the search input value
 const handleChange = ({target}) => {
 setSearchInput(target.value.toLowerCase());
}

//get search filter value

const handleGenderSelect = ({target}) => {
  const genderType = target.value;

  if (genderType) {
    const newGender = allProfiles.filter( person =>  person.Gender.toLowerCase() === genderType);
    setProfile(newGender);
    return;
  }
  setProfile(allProfiles);
}

const handlePaymentSelect = ({target}) => {
  const paymentType = target.value;

  if(paymentType) {
  const newPayment = allProfiles.filter( person => person.PaymentMethod.toLowerCase() === paymentType);
  setProfile(newPayment)
  return;
  }
  setProfile(allProfiles)
}

//calculate pagination
const perPage = 20;
const lastIndex = currentPage * perPage;
const firstIndex =  lastIndex - perPage;
const NumberOfPages = (profile.length / perPage);
const currentProfile = profile.slice(firstIndex, lastIndex);
let NumberOfPagesArr = [];

 for(let i = 1; i <= NumberOfPages; i++) {
  NumberOfPagesArr.push(i)
 }

//set currentpage 
const handleClick = (e) => {
      console.log(e)
      setCurrentPage(e)
}
 

  return (
    <div className="App">
       <Main handleChange={handleChange} inputValue={searchInput} handleGenderSelect={handleGenderSelect} genderValue={genderFilter} handlePaymentSelect={handlePaymentSelect} paymentValue={paymentFilter} />
        <div className="profile__details-container">
       { isLoading ? <Loader/ > :
           currentProfile.filter( person => { 
            const name = person.FirstName + ' ' + person.LastName; 
            return name.toLowerCase().includes(searchInput);
           }).map((person, index) => <Profile key={index} user={person} />)
          }
        </div>
      
        <div className="paginationButtons">
       {
         NumberOfPagesArr.map( number =>  <button className={number === currentPage ? 'active' : ''} onClick={ () => handleClick(number)}>{number}</button>)
       }
        </div>
    </div>
  )
}
export default App;




