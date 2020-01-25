import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../styles/StoreSetInfo.css';
import '../food_background.png';

class StoreSetInfo extends Component {
    constructor() {
        super();
        this.state = {
            storeName: "",
            storeLocation: "",
            storeHours: ""
        }
    }

    handleStoreNameChange = (e) => {
        this.setState({
            storeName: e.target.value
        });
    }

    handleStoreAddressChange = (e) => {
        this.setState({
            storeLocation: e.target.value
        });
    }

    handleStoreHoursChange = (e) => {
        this.setState({
            storeHours: e.target.value
        });
    }

    render() {
        return (
            <div>
                <div className = "upperbody"> 
                    <div className = "home">
                        <Button className = "homeButton" variant="contained">Home</Button>
                    </div>
                    <div className = "map">
                        <Button className = "mapButton" variant="contained">Map</Button>
                    </div>  
                </div>
                <div className = "body">

                    <div className="storeSetInfo">
                        <TextField
                            required
                            id="filled-required"
                            label="Store Name"
                            onChange={this.handleStoreNameChange}
                        />
                    </div>

                    <div className = "storeLocation">
                        <TextField
                            required
                            id="filled-required"
                            label="Store Location"
                            onChange={this.handleStoreLocationChange}
                        />
                    </div>

                    <div className = "storeHours">
                        <TextField
                            required
                            id="filled-required"
                            label="Store Hours"
                            onChange={this.handleStoreHoursChange}
                        />
                    </div>

                    <div>
                        <Button className = "button" variant="contained">Submit</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default StoreSetInfo;
