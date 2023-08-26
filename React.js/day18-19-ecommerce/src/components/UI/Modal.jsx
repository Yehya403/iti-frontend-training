import React from "react";

const Modal = (props) => {
    const {modalButton , modalTitle , children , className} = props
    console.log(className)
  return (
    <>
      <button
        type="button"
        className={className}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        {modalButton}
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {modalTitle}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
                {children}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
