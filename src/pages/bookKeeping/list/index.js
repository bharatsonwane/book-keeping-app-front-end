import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Searchbox } from 'src/components/searchbox';

function BookKeepingList() {
      const [search, changeSearch] = useState("");
      const dispatch = useDispatch();
      const onChangeSearch = (e) => {
        let value = e.target.value;
    
        changeSearch(value);
      };

  return (
    <>
         <div
           className={`p-2 container-fluid d-flex flex-row justify-content-between bg-primary text-white`}
         >
           <h4>Home</h4>
           <div className="w-20">
             <Searchbox
               value={search}
               onChange={onChangeSearch}
               placeholder={"Search on home"}
             />
           </div>
         </div>
         <div>
           <button
             onClick={() => {
            //    dispatch(FetchData());
             }}
           >
             Fetch Data
           </button>
           <div style={{ height: "100vh" }}>kadaks</div>
         </div>
       </>
  )
}

export default BookKeepingList