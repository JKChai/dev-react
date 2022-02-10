import React, { useState } from "react";

// https://www.cluemediator.com/add-or-remove-input-fields-dynamically-with-reactjs

function addRemove() {

    const [inputList, setInputList] = useState([{}]);

    // handle input change
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list); 
        };
        
    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
        };
        
    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { firstName: "", lastName: "" }]);
        };

        
    return(
        handleInputChange,
        handleRemoveClick,
        handleAddClick,
        inputList
    );
}


function App() {

    return (
        <div className="App">
            <h3><a href="http://cluemediator.com">Clue Mediator</a></h3>
            {addRemove.inputList.map((x, i) => {
                return (
                    <div className="box" key={i}>
                        <input 
                            key={i}
                            name="firstName"
                            value={ x.firstName }
                            onChange={e => addRemove.handleInputChange(e, i)}
                        />
                        <input
                            key={i}
                            className="ml10"
                            name="lastName"
                            value={ x.lastName }
                            onChange={e => addRemove.handleInputChange(e, i)}
                        />
                        <div className="btn-box">
                            {addRemove.inputList.length !== 1 && 
                            <button className="mr10" onClick={() => 
                            addRemove.handleRemoveClick(i)}>Remove</button>}
                            {addRemove.inputList.length - 1 === i && 
                            <button onClick={addRemove.handleAddClick}>Add</button>}
                        </div>
                    </div>
                );
            })}
            <div style={{ marginTop: 20 }}>{addRemove.inputList}</div>
        </div>
    );
}

export default App;