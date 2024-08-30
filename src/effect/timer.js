import useGetApiData from "./utils"
export default function Timer() {
  let data =useGetApiData("https://fakestoreapi.com/products/1")
  return(
    <>
    <h1>Custom Hook</h1>
    <div>{Object.keys(data)}</div>
    <div>{data.title}</div>
    </>
  )  }
