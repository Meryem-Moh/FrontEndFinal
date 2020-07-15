
import React, { Component } from "react";
import {HashRouter} from "react-router-dom";

//import Footer from './Footer';
import Home from '../MainPage/Home';
import Header from '../HeaderComponent';
import { Box, Flex } from 'rebass'


class Main extends Component {



    render() {
      return (
        <HashRouter>

          <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: '100vh'
                }}>
                <Box
                  sx={{
                    p: 3
                  }}>

                  <Header />

                </Box>
                <Box
                  sx={{
                    flex: '1 1 auto',
                    p: 3
                  }}>

                      
                 
                </Box>
                <Box
                  sx={{
                    p: 3
                  }}>

                

                </Box>
              </Box>

       
        
        </HashRouter>
      );
    }
  }
export default Main;

