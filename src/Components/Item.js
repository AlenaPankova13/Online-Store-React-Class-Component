import React, { Component } from 'react'

export class Item extends Component {
    render() {
        return (
            <div className='item'>
                <img src={this.props.item.image} alt='candel' width={300} height={400}/>
                <h2>{this.props.item.name}</h2>
                <p>{this.props.item.description.substring(0,100)}</p>
                <b>{this.props.item.price}.00 $</b>
                <div className='add_to_cart'>+</div>
            </div>
        )
    }
}
