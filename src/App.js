import React from 'react';
import './App.css';
import AllCountryScores from './AllCountryScores';

function App() {
  let arrOfObj = AllCountryScores()
 console.log(arrOfObj)
  return (
    <div className="App">
        <p>High scores per country</p>
        
          {arrOfObj.map((obj,index) => {
            return (
              <table key = {index}>
                <thead>
                <th>{"HIGH SCORES: " + obj.name}</th>
                </thead>
                <tbody>
                {obj.scores.map((scorObj,index2) => {
                    return (
                      <tr key = {index2}>
                        <td>{scorObj.n}</td>
                        <td>{scorObj.s}</td>
                      </tr>
                          )
                      })
                }
                </tbody>
              </table>
              
            )
           })
          }
          
        
    </div>
  );
}

export default App;
