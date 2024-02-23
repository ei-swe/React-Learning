import React from "react";

function ListRendering () {
    const list = ["Ei","Ei","Swe","Khet","Swe"]
    return(
        <div>
            {
                list.map((item, index) => (
                    <h3 key={index}>{item}</h3>
                ))
            }
        </div>
    )
}
export default ListRendering