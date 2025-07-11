import React,{ Component } from "react";
import Chip from '@mui/material/Chip';

 class ErrorBoundary extends Component{
    constructor(props){
        super(props)
        this.state={
            hasError :  false
        }
    }

    static getDerivedStateFromError(error){
        return{
            hasError : true
        }
    }

    componentDidCatch(error,errorInfo){
        console.error('error......',error,errorInfo)
    }

    render(){
        if(this.state.hasError){
            return (
                <div className=".d-inline-flex">
                    <Chip label="There is something wrong with data" />
                </div>
                )
        }else{
            return this.props.children
        }
    }
}

export default ErrorBoundary