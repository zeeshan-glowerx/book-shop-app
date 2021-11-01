import React from 'react'
import { cardData } from "../../BookCard/Data";
import { useParams } from "react-router-dom";

const LeftSideBar = () =>{
  const { id } = useParams();
    return (
        <div className="leftsidebar__container">
        {cardData.map((elem, ind) => {
          return elem.id === id ? (
            <>
              <img src={elem.imgUrl} height={250} alt="" />
              <p>PUBLISHED: <span> {elem.PUBLISHED}</span></p>
              <p>PAGES: <span>{elem.PAGES}</span></p>
              <p>DOWNLOADS: <span>{elem.DOWNLOADS}</span></p>
            </>
          ) : (
            <></>
          );
        })}
      </div>
    )
}

export default LeftSideBar
