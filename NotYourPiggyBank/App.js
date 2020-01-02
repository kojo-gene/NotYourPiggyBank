import React, { Component } from 'react';
import { newStyle } from './src/styleFormat/welcomescreenStyle'
import { 
  Text, 
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity
} from 'react-native';

import bgImage from './src/components/images/piggybank.jpg'

export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      showPass: true,
      press: false
    }
  }

  showPass =() => {
    if (this.state.press == false) {
      this.setState({ showPass: false, press: true })
    } else {
      this.setState({ showPass: false, press: false })
    }
  }

  render() {
    return (
      <ImageBackground source={bgImage} style={newStyle.backgroundContainer}>
        <View style={newStyle.welcomeMessage}>
          <Text style={newStyle.welcomeTitle}>Welcome</Text>
          <Text>Don't let another person walk away from the table without paying their fair share again!</Text>
        </View>

        <View style={newStyle.inputContainer}>
          <TextInput 
            style={newStyle.input}
            placeholder={'Username'}
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
            underlineColorAndroid='transparent'       
          />
        </View>

        <View style={newStyle.inputContainer}>
          <TextInput 
            style={newStyle.input}
            placeholder={'Password'}
            secureTextEntry={this.state.showPass}
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
            underlineColorAndroid='transparent'       
          />

          <TouchableOpacity style={newStyle.btnEye} onPress={this.showPass.bind(this)}>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={newStyle.btnLogin}>
          <Text style={newStyle.text}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={newStyle.btnCNU}>
          <Text style={newStyle.text}>Create User</Text>
        </TouchableOpacity>

      </ImageBackground>
    ); 
  }
}
