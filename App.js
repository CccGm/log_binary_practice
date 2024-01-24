import React from 'react';
import {SafeAreaView} from 'react-native';
import Navigation from './src/routes/Navigation';

function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f3efef'}}>
      <Navigation />
    </SafeAreaView>
  );
}

export default App;
