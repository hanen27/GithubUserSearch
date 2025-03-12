import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import './src/localization/i18n';
import AppNavigator from './src/navigation/AppNavigator';
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppNavigator />
    </QueryClientProvider>
  );
};

export default App;
