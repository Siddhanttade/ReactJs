import React from 'react'

function Card({name, btnText="visit Now"}) {// Destructuring props to get name and btnText
  // If you want to use props, you can destructure them like this:here we have given a default value for btntext
    // props can be used to pass data to the Card component if needed
  
  console.log(name);
  return (
    <div className="w-60 flex flex-col rounded-xl bg-black min-h-[19rem] ">
        <div>
          <img
            src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
            alt="test"
            className="object-cover object-center rounded-t-xl"
          />
        </div>
        <div className="flex flex-col py-3 px-3 pb-10">
          <div className="flex justify-between ">
            <h1 className="font-bold ">{name}</h1>
            <h1>Price</h1>
            <button>{btnText}</button>
          </div>
          <div className="flex  justify-between">
            <p>#345</p>
            <p>0.01</p>
          </div>
        </div>
      </div>
  )
}

export default Card