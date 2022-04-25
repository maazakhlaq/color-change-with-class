
import  React, { Component } from "react"; 
import { TouchableOpacity, 

    AppRegistry, 

    StyleSheet, 

    Text, 

    View,   

} from "react-native";  

let randomHex = () => { 

    let letters = "0123456789ABCDEF"; 

    let color = "#"; 

    for (let i = 0; i < 6; i++) { 

        color += letters[Math.floor(Math.random() * 16)]; 

    } 

    return color; 

};  

export default class Homescreen extends Component { 

    constructor(props) { 

        super(props);   

        this.state = { 

            backgroundColor: randomHex(), 

        }; 

    } 
    onClick() { 

        console.log("clicked "); 

        this.setState({ backgroundColor: randomHex() }); 

    } 

 
 

    render() { 

        return ( 

          

            <View style={[ styles.container,{ backgroundColor: this.state.backgroundColor },   ]} > 

            <View style={[{backgroundColor: this.state.backgroundColor ,flexDirection:'column' }] }> 

            <TouchableOpacity style={{marginTop:10}} onPress={this.onClick.bind(this)}> 

  <View style={styles.button}> 

      <Text style={styles.buttonText}>press me</Text> 

  </View> 

   

</TouchableOpacity>           

  <TouchableOpacity style={{marginTop:10} } onPress={this.onClick.bind(this)}> 

  <View style={styles.button}> 

      <Text style={styles.buttonText}>press me</Text> 

  </View> 

   

</TouchableOpacity></View> 

</View> 

        ); 

    } 

} 

 
 

const styles = StyleSheet.create({ 

    container: { 

        flex: 1, 

        flexDirection:'row', 

        backgroundColor: randomHex(), 

         

    }, 

    button: { 

      borderRadius: 8, 

      paddingVertical: 14, 

      paddingHorizontal: 10, 

      backgroundColor: '#f01d71', 

  }, 

  buttonText: { 

      color: 'yellow', 

      fontWeight: 'bold', 

      textTransform: 'uppercase', 

      fontSize: 16, 

      textAlign: 'center', 

  }, 

    instructions: { 

        color: "white", 

    }, 

}); 

AppRegistry.registerComponent("randomBackground", () => Homescreen); 

 