import React from "react";
import Tabs from './TabsDemoComponents/Tabs'
import './App.tab.css';

function App() {
    return (
      <div>
        <h1>Tabs Demo</h1>
        <Tabs>
          <div label="Gator">
            See ya <em> BUDDY </em>!!
           </div>
           <div label="Croc">
             After, something else
           </div>
           <div label="Oh">
             last tab to show
           </div>
        </Tabs>
      </div>
    );
}

export default App;