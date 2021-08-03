import React, {useState} from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider(props){
  const [displayCompleted, setDisplayCompleted] =  useState(false);
  const [numberDisplayed, setNumberDisplayed] = useState(3);
  const [sortType, setSortType] = useState('assignee');

  const handleDisplayNumber = (num)=>{
    // if(typeof num !== 'number'){
    //   console.log(num)
    //   console.log("input must be a number");
    // } else {
      setNumberDisplayed(num);
      console.log(num);
    // }
  }

  const handleDisplayComplete = (e)=>{
    console.log(e);
    if(e === true){
      setDisplayCompleted(true);
    }else{
      setDisplayCompleted(false)
    }
  }



  return(
    <SettingsContext.Provider value={{displayCompleted,handleDisplayComplete,numberDisplayed,sortType,setSortType,handleDisplayNumber}}>
      {props.children}
    </SettingsContext.Provider>

  )
}

export default SettingsProvider;