import React, { Suspense } from "react";
import { ErrorInfo } from "react";
import { FallbackLoader } from "widgets/app/FallbackLoader";

interface ErrorBoundaryProps {
    children: React.ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(_: Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }
  
    componentDidCatch(error: Error, _: ErrorInfo) {
        // Example "componentStack":
        //   in ComponentThatThrows (created by App)
        //   in ErrorBoundary (created by App)
        //   in div (created by App)
        //   in App
        // logErrorToMyService(error, info.componentStack);
        console.log(error)
    }
  
    render() {
        const {hasError} = this.state
        const {children} = this.props

        if (hasError) {
            // You can render any custom fallback UI
            return (
                <Suspense fallback={<FallbackLoader />}>
                    {/* <AppError /> */}
                </Suspense>
            );
        }
    
        return children;
    }
}

export default ErrorBoundary