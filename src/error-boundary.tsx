import { Component, type ErrorInfo, type ReactNode } from "react";

interface ErrorBoundaryProps {
	children: ReactNode;
}

interface ErrorBoundaryState {
	hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	override state: ErrorBoundaryState = {
		hasError: false,
	};

	override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error(error, errorInfo);
	}

	static getDerivedStateFromError() {
		return {
			hasError: true,
		};
	}

	override render() {
		if (this.state.hasError) {
			return (
				<main className="app-shell">
					<section className="app-card">
						<div className="app-feedback" role="alert">
							<h2 className="app-feedback__title">Could not load todos</h2>
							<p className="app-feedback__copy">
								The local todo database could not be read right now.
							</p>
						</div>
					</section>
				</main>
			);
		}

		return this.props.children;
	}
}
