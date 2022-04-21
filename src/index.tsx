import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Navigation from './navigation';
import AuthProvider from './context/Auth';

const  App: React.FC = () => {

return (
  <AuthProvider>
    <StatusBar style='light' />
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
  </AuthProvider>
)

};

export default  App;