import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import '../styles/Map.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Chicken from '../assets/chicken.jpeg';
import Muffin from '../assets/muffin.jpg';
import Yogurt from '../assets/yogurt.jpg';
import GreenIcon from '../assets/Green2.png';
class MapPage extends Component {
  constructor() {
    super();
    this.state = {
      modal: false
    }
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({
      modal: true
    });
  }

  handleClose() {
    this.setState({
      modal: false
    });
  }

  render() {
    return (
      <div style={{width: "80%"}}>
        <Map
          google={this.props.google}
          zoom={15}
          initialCenter={{
            lat: 43.2609,
            lng: -79.9192
          }}
        >

          <Marker
            title={'Current Location'}
            name={'You are here!'}
             />

          <div className="modal">
            <Modal
              style={{ color: 'White', width: "50%", height: "50%", borderRadius: 20, marginLeft: "25%", marginTop: "2%", borderColor: "black", borderwidth: 1 }}
              open={this.state.modal}
              onClose={this.handleClose}
            >
              <div>
                <h2>Fortinos (Main St.)</h2>
                <h4>Hours of Operation:</h4>
                <p>Saturday	7a.m.–9p.m.</p>
                <p>Sunday	7a.m.–9p.m.</p>
                <p>Monday-Friday	7a.m.–9p.m.</p>
                <h4>Items available:</h4>
                <Carousel infiniteLoop={true} showThumbs={false}>
                  <div>
                    <img src={Chicken} style={{width: '50%', height: '50%'}}/>
                  </div>
                  <div>
                    <img src={Muffin} style={{width: "50%", height: "50%"}}/>
                  </div>
                  <div>
                    <img src={Yogurt} style={{width: "50%", height: "50%"}}/>
                  </div>
                </Carousel>
              </div>
            </Modal>
          </div>

          <Marker
            onClick={this.handleOpen}
            title={'Fortinos (Main St.)'}
            name={'Fortinos (Main St.)'}
            position={{ lat: 43.2553, lng: -79.9289 }}
            onMouseover={this.onMouseoverMarker}
            icon={{
                url: GreenIcon
              }}
          />

            <Marker
                onClick={this.handleOpen}
                title={'Snooty Fox'}
                name={'Snooty Fox'}
                position={{ lat: 43.2618, lng: -79.9052 }}
                onMouseover={this.onMouseoverMarker}
                icon={{
                    url: GreenIcon
                }}
          />

            <Marker
                onClick={this.handleOpen}
                title={'Boston Pizza'}
                name={'Boston Pizza'}
                position={{ lat: 43.2572, lng: -79.9277 }}
                onMouseover={this.onMouseoverMarker}
                icon={{
                    url: GreenIcon
                }}
          />

          <InfoWindow onClose={this.onInfoWindowClose}>
            {/* <div>
                <h1>{this.state.selectedPlace.name}</h1>
                </div> */}
          </InfoWindow>
        </Map>
      </div >
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCiX5KnW9YIg1Ot17lgBwKfxMELLU7mNbM')
})(MapPage)