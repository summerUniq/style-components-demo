import React from 'react'

export default class ErrorComponts extends React.Component {
    state = {
        hasError: false
    }



    static getDerivedStateFromError(){
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info){
        this.setState({
            hasError: true
        })
    }

    render() {
        if(this.state.hasError){
            return null
        }
        return this.props.children
    }
}
