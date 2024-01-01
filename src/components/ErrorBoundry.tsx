import React, { Component, ErrorInfo } from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundry extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('ErrorBoundary caught an error: ', error, info);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oooops. That is not good</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundry;
