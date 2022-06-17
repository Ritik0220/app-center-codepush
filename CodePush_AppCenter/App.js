import React from 'react';
import {View,Text} from 'react-native';
import withCodePush from './codepush';



class App extends React.Component {
   render() {
    return (
      <View style={{justifyContent:'center', alignItems:'center'}}>
      <Text>
        Hello I am a react native app.....
      </Text>
      <Text>
        testing Codepush...
      </Text>
      <Text>
        testing 123..
      </Text>

      </View>
     );
  }
}

export default withCodePush(App);