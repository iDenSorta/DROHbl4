import React from "react"
import GalleryAircraft from "../data/galleryAircraft"

function Aircraft() {
    return (
      <>
      <section className="block h-[100%] mx-auto bg-green-400 columns-1 xl:columns-2 p-6">
        
          {
            GalleryAircraft.map((item, index)=>
              {
              return (
                <div className="w-auto h-auto py-2 touch-auto" key={index}>
                  <img src={item.imgSrc} />
                </div>)
            }

          )}
          
        
      </section>
    

    </>
    )
  }
  
  export default Aircraft