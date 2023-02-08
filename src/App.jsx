import React, {useState}  from 'react';
import {Routes,Route} from "react-router-dom";
import MainPage from './MainPage';
import SidePage from './SidePage';
import UpperSection from './UpperSection';
function App(){
    return(
        <div>
     <UpperSection></UpperSection>
     <div className='flex'>
     <SidePage></SidePage>
     <MainPage></MainPage>
     </div>
     </div>
    );
}

export default App;













