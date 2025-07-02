import React, { useState } from "react";
import data from "../components/data.js";
import styles from "./Accordian.module.css";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setenableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);
  function handleSingleSelection(getCurrentId) {
    // console.log(getCurrentId);
    setSelected(getCurrentId == selected ? null : getCurrentId);
  }
  function handleMultiSelection(getCurrentId) {
    let cpystr = [...multiple];
    const findindex = cpystr.indexOf(getCurrentId);
    if (findindex == -1) {
      cpystr.push(getCurrentId);
    } else {
      cpystr.splice(findindex, 1);
    }
    setMultiple(cpystr);
    console.log(findindex);
  }
  return (
    <div className={styles.wrapper}>
      <button
        id={styles.btn}
        onClick={() => {
          setenableMultiSelection(!enableMultiSelection);
        }}
      >
        SetMultiSelection
      </button>
      <div className={styles.accordian}>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              onClick={
                enableMultiSelection
                  ? () => handleMultiSelection(dataItem.id)
                  : () => handleSingleSelection(dataItem.id)
              }
              className={styles.item}
            >
              <div className={styles.title}>
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) != -1 && (
                    <div className={styles.content}>{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className={styles.content}>{dataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No data</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;

//   { {selected == dataItem.id ? (
//     <div className={styles.content}>{dataItem.answer}</div>
//   ) : null} }
