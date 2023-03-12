import React from 'react'

function Card() {
    return (
        <>
            <div className='cards'>
                <a href='https://drive.google.com/file/d/1hXbxc9Gg1QuYzBZCfH6Q332dlxibN9gu/view?usp=sharing' target="_blank">
                    <img src="https://i.postimg.cc/mgywMD79/bce-cover-book.png" alt="" /> </a>
                <div className='cards__stats'>
                    {/* <span>{props.id}</span> */}
                </div>
                <p className='cards__title'>BCE</p>
            </div>
            <div className='cards'>
                <a href='https://drive.google.com/file/d/1BPNFde02LudceYBSWMn5g1VgaCRnuqQ-/view?usp=sharing' target="_blank">
                    <img src="https://i.postimg.cc/25jxxDxK/krezig-book.png" alt="" /> </a>
                <div className='cards__stats'>
                    {/* <span>{props.id}</span> */}
                </div>
                <p className='cards__title'>Maths 1 </p>
            </div>


        </>

    )
}

export default Card