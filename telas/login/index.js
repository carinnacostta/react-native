import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ImageBackground, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import bgImage from '../../assets/background.jpg';
import logo from '../../assets/logo.png';

export var width = Dimensions.get('window').width;



const Login = ({navigation}) => {
  const [user, onChangeText] = React.useState("");
    
  const handleScreenLogin = (user) => {
    navigation.navigate('home', {user: user});
  }

  return (

    <ImageBackground source= {bgImage} style={styles.backgroundContainer}>
      {/* <View>
          <Image source= {logo} style={styles.logo} />
      </View> */}
    
      <View style={styles.container}>

        <Text style={styles.titulo}> Mais que cinema </Text>
        <Text style={styles.paragrafo}> A melhor forma de escolher filmes em um clique! </Text>

        <View>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={user}
            placeholder={"Digite seu nome"}
          />
        </View>
          
        <TouchableOpacity style={styles.botao} onPress={() => handleScreenLogin(user) }>        
          <Text style={styles.botaoTexto}>Entrar</Text>        
        </TouchableOpacity>
      
      </View>

    </ImageBackground>

  )

}

export default Login 

//Folha de estilos
const styles = StyleSheet.create({
    backgroundContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
        height: null,
    },

    logo: {
        width: 160,
        height: 160,
        marginBottom: 30,
        marginTop: 60,

    },

    container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    },

    titulo: {
      fontSize: 25,
      color: '#fff'
      
    },

    paragrafo: {
      fontSize: 15,
      color: '#fff',
      marginTop: 10,
      marginBottom: 20,
    
    },

    botao: {
      justifyContent: 'center',
      alignItems: 'center',
      margin: 15,
      backgroundColor: '#fff',
      padding: 15,
      width: 300,
      borderRadius: 30,
      marginBottom: 90,
    },

    botaoTexto: {
      color: '#433B67',
      fontSize: 16,
    },

    bottom: {
      position: 'absolute',
      bottom: 40,
    },

    socials: {
      flexDirection: 'row',
      marginTop: 20,
    },

    socialsItems: {
        marginLeft: 10,
        marginRight: 10,
    },

    input: {
      justifyContent: 'center',
      alignItems: 'center',
      margin: 15,
      backgroundColor: '#fff',
      padding: 15,
      width: 300,
      borderRadius: 20
    }

});
