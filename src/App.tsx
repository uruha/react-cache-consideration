import React, { lazy, Suspense } from 'react';
import {
  QueryClient,
  QueryClientProvider,
  QueryErrorResetBoundary
} from 'react-query';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { ReactQueryDevtools } from 'react-query/devtools';
import './App.css';

const List = lazy(() => import('../src/components/List'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      suspense: true
    }
  }
});

const ErrorMessage: React.FC<FallbackProps> = ({ error, resetErrorBoundary }) => (
  <div>
    There was an error!{" "}
    <button onClick={() => resetErrorBoundary()}>Try again</button>
    <pre style={{ whiteSpace: "normal" }}>{error.message}</pre>
  </div>
);

const App: React.VFC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <h1>Suspence with Query</h1>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            fallbackRender={ErrorMessage}
            onReset={reset}>
            <Suspense fallback={<h2>Loading</h2>}>
              <List />
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </QueryClientProvider>
  );
};

export default App;
