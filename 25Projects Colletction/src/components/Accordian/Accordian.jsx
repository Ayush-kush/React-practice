import React, { useState } from "react";
import data from './data'
import './Accordian.css'

function Accordian() {
  const [selected, setSelected] = useState(null);
  const [multiEnable, setMultiEnable] = useState(false);
  const [multipleId, setMultipleId] = useState([]);

  function handleSingleSelection(getCurrentId) {
    // console.log(getCurrentId)
    setSelected(getCurrentId)
  }

  function handleMultiSelection(getCurrentId) {
    let newMultiId = [...multipleId];
    const findIndexOfCurrentId = newMultiId.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) newMultiId.push(getCurrentId)
    else newMultiId.splice(findIndexOfCurrentId, 1);

    setMultipleId(newMultiId)

  }
  console.log(selected, multipleId);

  return (
    <div className="wrapper">
      <button onClick={() => setMultiEnable(!multiEnable)}>Enable MultiSelection</button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div onClick={multiEnable ? () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)} className="title">
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {
                multiEnable ?
                  multipleId.indexOf(dataItem.id) !== -1 &&
                  <div className="content">{dataItem.answer}</div> :
                  selected === dataItem.id &&
                  <div className="content">{dataItem.answer}</div>

              }
            </div>
          ))
        ) : (
          <div>No data found !</div>
        )}
      </div>
    </div>
  );
}

export default Accordian;
