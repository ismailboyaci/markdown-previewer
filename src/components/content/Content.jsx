import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeClick, changeText } from "../../redux/markdownApp";
import { marked } from "marked";

function Content() {
  const dispatch = useDispatch();

  const markedVal = useSelector((state) => state.userText);
  const helpText = useSelector((state) => state.helpText);
  const clicked = useSelector((state) => state.clicked);

  const createMarkUp = (val) => {
    return { __html: marked(val) };
  };

  const handleChange = (e) => {
    dispatch(changeText(e.target.value));
  };
  const handleClick = () => {
    dispatch(changeClick(!clicked));
  };

  useEffect(() => {
    const textarea = document.getElementById("textarea");
    if (clicked === true) {
      textarea.disabled = true;
    } else {
      textarea.disabled = false;
    }
  }, [clicked]);

  return (
    <div className="container ">
      <div className="row buttonDiv ">
        <button className="btn buttonStyle" onClick={handleClick}>
          ?
        </button>
      </div>
      <div className="row">
        <div className="col-lg-6 mt-4">
          <textarea
            id="textarea"
            value={`${clicked ? helpText : markedVal}`}
            cols="75"
            rows="30"
            className="text-panel-left"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="col-lg-6 mt-4">
          <div
            className="text-panel-right"
            dangerouslySetInnerHTML={createMarkUp(
              clicked ? helpText : markedVal
            )}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Content;
