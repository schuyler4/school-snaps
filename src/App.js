import React from 'react';
import { Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import LoginForm from './components/LoginForm';
import reducers from './reducers';
import PageContainer from './components/PageContainer';

function App() {
  return (
    <Provider store={createStore(reducers)}>
      <View>
        <PageContainer />
      </View>
    </Provider>
  );
}

export default App;
