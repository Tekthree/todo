import React, {useState} from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider(props){
  const [displayCompleted, setDisplayCompleted] =  useState(true);
  const [numberDisplayed, setNumberDisplayed] = useState(3);
  const [sortType, setSortType] = useState('assignee');

  return(
    <SettingsContext.Provider value={{displayCompleted,numberDisplayed,sortType}}>
      {props.children}
    </SettingsContext.Provider>

  )
}

export default SettingsProvider;