import { Component, ReactNode } from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import styles from './ErrorBoundary.module.scss';

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='flex flex-col mt-32 items-center'>
          <p className='text-xl'>Something went wrong, please try again later.</p>
          <LoadingSpinner />
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
