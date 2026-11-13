import { Component, PropsWithChildren } from "react";
import { Alert,Button } from "@mui/material";

interface State{
    hasError: boolean;
}
export default class ErrorBoundary extends Component<PropsWithChildren,State>{
    state:State = {hasError: false};
    static getDerivedStateFromError():State{
        return {hasError: true};
    }
    handleReset=()=>{
        this.setState({hasError: false});
    };
    render() {
    if (this.state.hasError) {
      return <Alert severity="error" action={
        <Button color="inherit" size="small" onClick={this.handleReset}> 
        Retry
        </Button>
      }>Something went wrong</Alert>;
    }
    return this.props.children;
  }
}