import React from "react";

export default function Alert(props) {
  // const hideAlert = () => {
  //     document.getElementById("alertBox").style.display = "none";
  // }

  const capatilize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <div style={{ height: "45px" }}>
      {props.alert && (
        <div
          id="alertBox"
          className={`alert ${props.alert.type} alert-dismissible`}
          role="alert"
        >
          <div className="text-white h-[3rem] flex items-center">
            <strong className="mx-5">{capatilize(props.alert.type)}!</strong>
            {props.alert.msg}
          </div>
          {/* <button id='cross' type="button" className="close" onClick={hideAlert} data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button> */}
        </div>
      )}
    </div>
  );
}
