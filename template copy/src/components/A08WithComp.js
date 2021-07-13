import React, { Component } from 'react'

function A08WithComp(Comp) {
    return class InnerComp extends Component {

        // 사전 작업...
        state = {
            age: 30,

        }

        clickEvent = () => console.log('clicked')

        render() {
            console.log('1. With Component')
            return (
                <>
                    <h4>Inner Component</h4>
                    <Comp age={this.state.age} clickEvent={this.clickEvent} />
                </>
            )
        }
    }
}

export default A08WithComp
