import { TextInput, TouchableOpacity, View } from 'react-native'

export default class WelcomeButton extends Component {
        
    render () {
        return (
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
            <Text style={newStyle.text}>Not registered? -*- Create New User</Text>
            </TouchableOpacity>
        )
    }
};