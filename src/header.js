import './index.css'
export function Header(){
    return(
    <div id='heading' className='test'>
        <h1>This is Header</h1>  
        {sum(2,3)}       
        {4*5};
        <label htmlFor='sub'>Subscribe</label>
        <input type='checkbox' id='sub'/>
    </div>)
}
function sum(a,b){
    return a+b
}