import React, { useState } from 'react';

import AllCountryScores from './AllCountryScores';
import './App.css';
import './grid.css';

function App() {
  let arrOfObj = AllCountryScores()
 const[toggled, setToggled] = useState(false);
 const toggler = () => {
   toggled ? setToggled(false) : setToggled(true)
 }
  return (
    <div className="App container">
      <div className ="main-div row">
        
        <div className ="table-score lg-col-12 md-col-12">
        <button onClick={toggler}>Toggle</button>  
        <h1 className ="heading">High scores per country</h1>

          {arrOfObj.sort(function(leterA, leterB) {
                   if(leterA.name.toLowerCase() < leterB.name.toLowerCase())
                   return -1;
                   if(leterA.name.toLowerCase() > leterB.name.toLowerCase())
                   return 1;
                   return 0;
                 })

               .map((obj,index) => { 
                 
                 
                    return (
                      <div key = {index} className ="body-score">
                          <h2 className ="country" >{"HIGH SCORES: " + obj.name}</h2>
                          
                            {!toggled ? obj.scores.sort(function(scores, scores2) {
                              return scores.s - scores2.s})
                              .map((scorObj,index2) => {

                                  return (
                                        <div key={index2} className ="last-div row">
                                          <div className = "last-child1 lg-col-6 md-col-6">{scorObj.n}</div>
                                          <div className = "last-child2 lg-col-6 md-col-6" >{scorObj.s}</div>
                                        </div>
                                  )
                              })
                           : obj.scores.sort(function(scores, scores2) {
                            return scores2.s - scores.s })
                            .map((scorObj,index2) => {

                                return (
                                      <div key={index2} className ="last-div row">
                                        <div className = "last-child1 lg-col-6 md-col-6">{scorObj.n}</div>
                                        <div className = "last-child2 lg-col-6 md-col-6" >{scorObj.s}</div>
                                      </div>
                                )
                            }) }
                      </div>
                   )
                })
          }
          </div>
          </div> 
    </div>
  );
}

export default App;
