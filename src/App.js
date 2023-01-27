import { useState } from "react";

function App() {
  const [exp, setExp] = useState("");
  const [res, setRes] = useState("");

  const appendInExp = val => setExp(exp + val);

  const handleBackspace = () => setExp(exp.slice(0, -1));

  const handleAllClear = () => {
    setExp("");
    setRes("");
  };

  const getResult = () => {
    if(exp === "") return;

    try {
      let total = eval(exp) + "";

      let totalArr = total.split(".");

      total = totalArr[0];
      if (totalArr.length === 2) {
        total += ".";

        if(totalArr[1].length > 2) total += totalArr[1].slice(0, 3);
        else total += totalArr[1];
      }
        
      setRes(total);
    } catch (e) {
      if (e instanceof SyntaxError) {
        alert(e.message);
      }
    }
  };

  return (
    <div className="cal-box">
      <div className="dis-box">
        <div className="exp">{exp}</div>
        <div className="res">{res}</div>
      </div>
      <div className="btn-box">
        <div className="row">
          <button className="clr opt">
            <span
              className="material-symbols-outlined"
              onClick={() => handleAllClear()}
            >
              delete
            </span>
          </button>
          <button className="bck opt">
            <span
              className="material-symbols-outlined"
              onClick={() => handleBackspace()}
            >
              backspace
            </span>
          </button>
          <button className="opt" onClick={() => appendInExp("(")}>
            {"("}
          </button>
          <button className="opt" onClick={() => appendInExp(")")}>
            {")"}
          </button>
        </div>
        <div className="row">
          <button className="one" onClick={() => appendInExp("1")}>
            1
          </button>
          <button className="two" onClick={() => appendInExp("2")}>
            2
          </button>
          <button className="three" onClick={() => appendInExp("3")}>
            3
          </button>
          <button className="divide opt" onClick={() => appendInExp("/")}>
            /
          </button>
        </div>
        <div className="row">
          <button className="four" onClick={() => appendInExp("4")}>
            4
          </button>
          <button className="five" onClick={() => appendInExp("5")}>
            5
          </button>
          <button className="six" onClick={() => appendInExp("6")}>
            6
          </button>
          <button className="product opt" onClick={() => appendInExp("*")}>
            *
          </button>
        </div>
        <div className="row">
          <button className="seven" onClick={() => appendInExp("7")}>
            7
          </button>
          <button className="eight" onClick={() => appendInExp("8")}>
            8
          </button>
          <button className="nine" onClick={() => appendInExp("9")}>
            9
          </button>
          <button className="plus opt" onClick={() => appendInExp("+")}>
            +
          </button>
        </div>
        <div className="row row4">
          <button className="eq" onClick={() => getResult()}>
            =
          </button>
          <button className="zero" onClick={() => appendInExp("0")}>
            0
          </button>
          <button className="dec" onClick={() => appendInExp(".")}>
            .
          </button>
          <button className="minus opt" onClick={() => appendInExp("-")}>
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
