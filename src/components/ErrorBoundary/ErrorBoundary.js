import {Component} from "react";
import {ServerError} from "../Pages/ServerError";



class ErrorBoundary extends Component {

    state ={
        error: false
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: true
        })
    }

    render() {
        if(this.state.error) {
            return <ServerError/>
        }

        return this.props.children
    }
}

export default ErrorBoundary;