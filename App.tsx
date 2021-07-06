import React from 'react';
import AppStack from './src/routes/AppStack';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from './src/hooks/useAuth';

export default function App() {
  return (
    <>
      <AuthProvider>
        <AppStack />
        <StatusBar style="auto" />
      </AuthProvider>
    </>
  );
}
