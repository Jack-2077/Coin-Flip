import React, { Component } from 'react'
import {choice} from './helpers'
import ShowCoin from './ShowCoin'
import HEADS from "../src/heads.png";
import TAILS from "../src/tails.png";
import './Coin.css'

class Coin extends Component{
    static defaultProps = {
        coins: [
            { side: "heads", url: HEADS },
            { side: "tails", url: TAILS}
        ]
    }
    constructor(props)
    {
        super(props)  
        this.state = {
            currCoin: null,
            total: 0,
            nheads: 0,
            ntails: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    flipCoin() {
        const newCoin = choice(this.props.coins)
        this.setState(prevState => {
            return {
                currCoin: newCoin,
                total: prevState.total + 1,
                nheads: prevState.nheads + (newCoin.side === "heads" ? 1 : 0),
                ntails: prevState.ntails + (newCoin.side === "tails" ? 1 : 0)
            }
        })
    }

    handleClick() {
            this.flipCoin()
    }

    render()
    {
        return (
            <div className="Coin">
                <h2>Let's flip a coin!</h2>
                {this.state.currCoin && <ShowCoin info={this.state.currCoin} />}
                <button onClick={this.handleClick}>FLIP MEEEEE</button>
            <p>Out of {this.state.total} flips, there have been {this.state.nheads} heads and {this.state.ntails} tails</p>
            </div>
        )
    }
}

export default Coin