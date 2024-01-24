import React from 'react';
import {SafeAreaView} from 'react-native';
import Navigation from './src/routes/Navigation';
import ContextApi, {ContextProvider} from './src/context/ContextApi';

function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f3efef'}}>
      <ContextProvider>
        <Navigation />
      </ContextProvider>
    </SafeAreaView>
  );
}

export default App;
