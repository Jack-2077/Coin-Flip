import React, { Component } from 'react'
import './ShowCoin.css'

class ShowCoin extends Component{
    render() {
        console.log(this.props.info.url);
        return (
            <div className="Coin">
             <img src={this.props.info.url} alt={this.props.info.side}/>
            </div>
        )
    }
}

export default ShowCoin