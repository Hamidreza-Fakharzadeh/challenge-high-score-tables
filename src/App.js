import React from 'react';

import AllCountryScores from './AllCountryScores';
import './App.css';
import './grid.css';

function App() {
  let arrOfObj = AllCountryScores()
 console.log(arrOfObj)
  return (
    <div className="App container">
      <div className ="main-div row">
        
        <div className ="table-score lg-col-12 md-col-12">
        <h1 className ="heading">High scores per country</h1>
          {arrOfObj
               .sort( () => (Math.random() - 0.5) )
               .map((obj,index) => {
                    return (
                      <div key = {index} className ="body-score">
                          <h2 className ="country">{"HIGH SCORES: " + obj.name}</h2>
                          
                            {obj.scores.map((scorObj,index2) => {
                                  return (
                                    <div key = {index2} className ="last-div row">
                                      <div className = "last-child1 lg-col-6 md-col-6">{scorObj.n}</div>
                                      <div className = "last-child2 lg-col-6 md-col-6" >{scorObj.s}</div>
                                    </div>
                                  )
                              })
                           }
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
