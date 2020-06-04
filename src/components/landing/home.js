import React, { Component } from 'react';

class home extends Component {
    render() {
        return (
            <div className="w3-bar w3-black">
                <a className="w3-bar-item">
                    <strong><span className="w3-text-red ">Authentication</span>&nbsp;</strong>
                  </a>
                <a className="w3-bar-item" href="/login">
                    signin
                </a>
                <a className="w3-bar-item" href="/signup">
                    signup
                </a>
            </div>
        );
    }
}

export default home;