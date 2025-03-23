// import react from react; 

function Spinner() {

  return (
    <>
      <div className="custom-overlay  d-flex justify-content-center" >
        <div className=" spin d-flex justify-content-center flex-column">
          <div className="d-flex flex-column align-items-center ">
            <div className=" spinner-border text-primary " role="status">

            </div>
            <p className=" text text-primary">Loading</p>
          </div>
        </div>
      </div>
    </>
  )


}
export default Spinner;