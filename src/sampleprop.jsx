import React from "react"

let obj1={
    title:"KGF1",
    imgUrl:"https://m.media-amazon.com/images/I/81bL2oihZSL._AC_UL480_FMwebp_QL65_.jpg",
    desc:"ROCKY"
}

let obj2={
    title:"KGF2",
    imgUrl:"https://m.media-amazon.com/images/I/71OespuvBkL._AC_UL480_FMwebp_QL65_.jpg",
    desc:"ROCKY BHAI"


}

const Cinema=()=>{
    return(
        <>
        <Movie title={obj1.title} img={obj1.imgUrl} desc={obj1.desc}></Movie>
        <Movie title={obj2.title} img={obj2.imgUrl} desc={obj2.desc}></Movie>
        </>
    )

}


const Movie=()=>{
    return(
        <>
        <Cinema></Cinema>
        </>
    )

    
}