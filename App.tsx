import React from 'react';
import { View } from 'react-native';

import { BackgroundImage } from './source/components';

console.disableYellowBox = true;

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <BackgroundImage />
    </View>
  )
}

export default App;
