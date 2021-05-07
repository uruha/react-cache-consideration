import React from 'react';
import {
  QueryClient,
  QueryClientProvider
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import './App.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      suspense: true
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <h1>Suspence with Query</h1>
    </QueryClientProvider>
  );
}

export default App;
