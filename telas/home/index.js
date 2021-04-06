import React, { useState, useRef } from 'react';
import { 
  View, 
  ScrollView, 
  Text, 
  StyleSheet, 
  Dimensions, 
  ImageBackground, 
  TextInput, 
  Image,
  TouchableOpacity } from 'react-native';
  import Icon from 'react-native-vector-icons/MaterialIcons';
  import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/core';
import items from '../../assets/movies.json';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export default function App({route}) {

  const carouselRef = useRef(null);

  const navigation = useNavigation();

  const [movies] = useState(items);

  const [background, setBackground] = useState (movies[0].img)
  const [activeIndex, setActiveIndex ] = useState(0);

  const _rederItem = ({item, index}) => {
    return (
      <View>
        <TouchableOpacity>
          <Image source= {{uri: item.img}} style= {styles.carouselImg} />
          <Text style= {styles.carouselText}>{item.title} </Text>
          <Icon name="play-circle-outline" size= {30} color= "#fff" style={styles.carouselIcon} />
        </TouchableOpacity>
      </View>

    );

  };

 return (
   <ScrollView style = {styles.container}>
     <View style={{flex:1, height: screenHeight}}>
        <View style={{...StyleSheet.absoluteFill, backgroundColor: '#000'}}>
          <ImageBackground source={{uri: background }} style={styles.imgBg} blurRadius={5}>
            
            <View>
              <Text style = {styles.textUser}>Olá, { route.params?.user } tudo bem?</Text>
            </View>
            
            <View style={styles.viewSearch}>
              <TextInput style={styles.input} placeholder="Buscar Filmes"/>
              <TouchableOpacity style={styles.icon}>
                <Icon name="search" color="#000" size={25}/>
              </TouchableOpacity>
            </View>
           
            <View style={styles.slideView}>
              <Carousel style={styles.carousel} ref={carouselRef} data={movies} renderItem={_rederItem} sliderWidth={screenWidth} itemWidth={200} inactiveSlideOpacity= {0.5} onSnapToItem= {(index) => { setBackground(movies[index].img); setActiveIndex(index); }}/>        
            </View>

            <View style={styles.maisInfo}>
              <View style={{marginTop:10}}>
                <Text style={styles.filmeTitle}> {movies[activeIndex].title} </Text>
                <Text style={styles.filmeDesc}> {movies[activeIndex].text} </Text>
              </View>
                
            </View>

          </ImageBackground>
        </View>
     </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },

  imgBg: {
    flex: 1,
    width: null,
    height: null,
    opacity: 1,
    justifyContent: "flex-start",
    backgroundColor: '#000'
  },

  viewSearch: {
    backgroundColor: '#fff',
    elevation: 10,
    borderRadius: 5,
    width: '95%',
    flexDirection: 'row',
    alignSelf: 'center',
  },

  input: {
    width: '90%',
    padding: 13,
    paddingLeft: 20,
    fontSize: 17,
  },

  icon: {
    position: 'absolute',
    right: 20,
    top: 11,
  },

  textInicial: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    marginVertical: 10,
  },

  slideView: {
    width: '100%',
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },

  carousel: {
    flex: 1,
    overflow: 'visible',
  },

  carouselImg: {
    marginVertical: 20,
    alignSelf: 'center',
    width: 200,
    height: 290,
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  carouselText: {
    display: 'none',
  },

  carouselIcon: {
     position: 'absolute',
     top: 15,
     right: 15,
  },

  maisInfo: {
    backgroundColor: '#fff',
    width: screenWidth,
    height: screenHeight,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',

  },

  filmeTitle: {
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#131313',
    marginBottom: 3,
    textAlign: 'center'
  },

  filmeDesc: {
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 14,
    color: '#131313',
    textAlign: 'center',
  },

  textUser: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    marginVertical: 10,
    textAlign: 'center',
    padding: 10,
  },


});

