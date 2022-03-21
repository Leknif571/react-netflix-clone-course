/* eslint-disable import/no-anonymous-default-export */
// import React from 'react';
import All from "./content/All";
import SearchAppBar from "./content/navbar";
import Login from "./page/Login";
import { Provider } from 'react-redux';
import { Store } from './Store/store';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import Wwatch from "./page/Wwatch";
import MyList from "./page/MyList";
import Home from "./page/Home";
import RoutingMenu from "./Routing/route";
import {
  Routes,
  Route,
} from "react-router-dom";

const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  

function App() {
    return(
        <ThemeProvider theme={theme}>
        <Provider store={Store}>
          

        <div>
 
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/mylist" element={<MyList/>}/>
          <Route path="/who-watch" element={<Wwatch/>}/>
          
        </Routes>
            {/* <SearchAppBar/> */}
           
            {/* <Wwatch/> */}
            {/* <MyList /> */}
            {/* <Home/> */}
            {/* <All/> */}
        </div>

        </Provider>
        </ThemeProvider>
    )
}

export default App;
