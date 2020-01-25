import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

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
            <>
                <div className="storeSetInfo">
                    <TextField
                        required
                        id="filled-required"
                        label="Store Name"
                        onChange={this.handleStoreNameChange}
                    />
                </div>

                <div>
                    <TextField
                        required
                        id="filled-required"
                        label="Store Location"
                        onChange={this.handleStoreLocationChange}
                    />
                </div>

                <div>
                    <TextField
                        required
                        id="filled-required"
                        label="Store Hours"
                        onChange={this.handleStoreHoursChange}
                    />
                </div>
            </>
        );
    }
}

export default StoreSetInfo;
