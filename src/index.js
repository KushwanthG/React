import React, { useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import Timerref from './useRef';
import Homes from './home';
import MyComponent from './useMemo';
import { Provider } from 'react-redux';
import A from './App';
import User from './store/user';
import Lazy from './lazy';
import 'bootstrap/dist/css/bootstrap.css';
import {store} from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './routing/home';
import MainComp from './routing/mainComp';
import Routee from './store/logins';
import ValidForm from './validationForm';
import BankingApp from './banking/mainBanking';
import UseMemos from './useMemo';
import ButtonUsage from './mui';
import Calculators from './Calculator/cal';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Mainaxios from './axios/mainaxios';
import MainApps from './useContext/mainApps';
import MovieList from './UsersChoice/movieList';
import FoodList from './UsersChoice/FoodList';
import Connect from './UsersChoice/route';
import UserForm from './store/user';
import TodoList from './store/TodoList';
import UseMemo from './useMemo';
import Movie from './sampleProps';
import SampleForm from './samplebutton';
import Sampleuseeffect from './sampleuseeffect';
import Sampleusereducer from './sampleusereducer';
import MyFoodList from './UsersChoice/Myfood';
import praticeeffect from './pratice/praticeeffect';
import praticeref from './pratice/praticeref';
import UseCallbackExample from './pratice/praticecall';
import UseMemoExample from './pratice/praticememo';
import Timer from './pratice/praticeeffecttimer';
import Root from './navigate/root';


let rot=ReactDOM.createRoot(document.getElementById('root'));

rot.render(
  <ul>
    {/* <Timer></Timer> */}
    {/* {<Timerref></Timerref>} */}
    {/* { <Provider store={store}>
       {/* <Counter/> */}
       {/* <TodoList></TodoList>
    </Provider> */}

    {/* <MainComp></MainComp> */}
    {/* <ValidForm></ValidForm> */}
    {/* <Lazy>
    
    </Lazy> */}
    {/* <React.StrictMode>
    <BankingApp />
  </React.StrictMode> */}
  {/* { <MovieList></MovieList>} */}
  {/* <FoodList></FoodList>  */}
  {/* <MyFoodList></MyFoodList> */}
  
      {/* <Connect/> */}

  
  {/* <UseCallbackExample></UseCallbackExample>
  <UseMemoExample></UseMemoExample> */}

      {/* <ButtonUsage></ButtonUsage> */}
    {/* <Calculators></Calculators> */}
    {/* {<AxiosComponent></AxiosComponent>} */}

    {/* Use the Provider component from react-redux to make the Redux store available to your React components. */}
    {/* {<MyComponent></MyComponent>} */}
    {/* {<LoginContextProvider></LoginContextProvider>} */}
    {/* {<Home></Home>} */}
    {/* <UseMemos></UseMemos>
    <UseCallbackFun></UseCallbackFun>
   */}
   {/* <UserForm></UserForm> */}
   {/* {<App/>} */}
   {/* <Mainaxios/> */}
   {/* <MainApps></MainApps> */}
   {/* <Movie></Movie> */}
   {/* <SampleForm></SampleForm>
   <Sampleuseeffect></Sampleuseeffect> */}
   {/* <Sampleusereducer></Sampleusereducer> */}
   <Root></Root>
  </ul>
)
reportWebVitals();
