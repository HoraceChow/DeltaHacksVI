import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';

class MapPage extends Component {
    constructor() {
      super();
      this.state = {
        modal: false
      }
    }

    handleOpen = () => {
        this.setState({
            modal: true
        })
    }   

    handleClose = () => {
        this.setState({
            modal: false
        })
    }   
    
    markerModal() {
        
    }
  
    render() {
      return (
        <div>
            <Map 
                google={this.props.google}
                zoom={15}
                initialCenter={{
                    lat: 43.2609,
                    lng: -79.9192
                  }}
                >
            
            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

            <Marker
                title={'Fortinos (Main St.)'}
                name={'Fortinos (Main St.)'}
                position={{lat: 43.2553, lng: -79.9289}}
                onMouseover={this.onMouseoverMarker}
                 />

            <InfoWindow onClose={this.onInfoWindowClose}>
                {/* <div>
                <h1>{this.state.selectedPlace.name}</h1>
                </div> */}
            </InfoWindow>
            </Map>
        </div>
      );
    }
  }

  export default GoogleApiWrapper({
    apiKey: ('AIzaSyCiX5KnW9YIg1Ot17lgBwKfxMELLU7mNbM')
  })(MapPage)