import React from 'react'
import  { useState } from "react"; //rfc diyip enterladık bu hazır snippetı kurdu.
import { Grid, GridRow } from "semantic-ui-react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useHistory } from "react-router";
import Category from './Category';
import PhotoGrid from '../pages/PhotoGrid';
import './Dashboard';
import Modal from '../pages/Modal';
import Login from '../pages/Login';
import Photos from '../pages/Photos';
import SignUp from '../pages/SignUp';


export default function Dashboard(props) {

    
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    return (
        <div>
        <ToastContainer position="bottom-left" />
        <Grid  >
            <Grid.Row >
                <Grid.Column width="3" >
                    <Category/>
                </Grid.Column>
                <Grid.Column width="13"  >
                    <Routes>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/photos" component={SignUp} />
                    </Routes>
                    
                    <PhotoGrid setSelectedPhoto={setSelectedPhoto}/>
                    { selectedPhoto && <Modal selectedPhoto={selectedPhoto} setSelectedPhoto={setSelectedPhoto} /> }
                  
                
                </Grid.Column>
            </Grid.Row>
        </Grid>
        
        </div>
    )
}
/*

        */