import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(err) {
    return { hasError: true };
  }

  componentDidCatch(err, errInfo) {
    console.log(err + "and their info ==>" + errInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something Went Wrong!</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
