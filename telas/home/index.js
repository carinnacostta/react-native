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

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export default function App({route}) {

  const carouselRef = useRef(null);

  const navigation = useNavigation();

  const [lista] = useState([
    {
        title:"Malévola",
        text: "Malévola, uma jovem de coração puro, vive em um pacífico reino na floresta, até o dia em que um exército invasor ameaça a harmonia da região, fazendo com que ela se torne a mais feroz protetora do reino.",
        release: 2018,
        img: 'https://carinacostasantos.com.br/wp-content/uploads/2021/03/background.jpg'
    },
    {
        title:"Steve Jobs",
        text: "O filme destaca momentos decisivos na vida de Steve Jobs, desde o lançamento do primeiro Macintosh, em 1984, e a criação da NeXT Inc, até a introdução revolucionária do iMac.",
        release: 2020,
        img: 'https://carinacostasantos.com.br/wp-content/uploads/2021/03/steve.jpg'
    },
    {
        title:"Star Wars",
        text: "Com o retorno do Imperador Palpatine, a Resistência toma a frente da batalha. Treinando para ser uma completa Jedi, Rey se encontra em conflito com passado e futuro.",
        release: 2020,
        img: 'https://carinacostasantos.com.br/wp-content/uploads/2021/03/starwars.jpg'
    },
    {
        title:"Matrix",
        text: "Um jovem programador é atormentado por estranhos pesadelos nos quais sempre está conectado por cabos a um imenso sistema de computadores do futuro.",
        release: 2020,
        img: 'https://carinacostasantos.com.br/wp-content/uploads/2021/03/matrix.jpg'
    },
    {
        title:"A Menina que roubava Livros",
        text: "Durante a Segunda Guerra Mundial, uma jovem garota chamada Liesel Meminger sobrevive fora de Munique lendo os livros que ela rouba.",
        release: 2020,
        img: 'https://carinacostasantos.com.br/wp-content/uploads/2021/03/livros.jpg'
    },
    {
        title:"The Social Dilema",
        text: "O Dilema das Redes nos mostra como os magos da tecnologia possuem o controle sobre a maneira em que pensamos, agimos e vivemos.",
        release: 2020,
        img: 'https://carinacostasantos.com.br/wp-content/uploads/2021/03/dilema.jpg'
    },
    {
      title:"Cavalo de Guerra",
      text: "A história da amizade entre Albert e seu cavalo Joey. Depois de ser vendido para a cavalaria inglesa durante a Primeira Guerra Mundial, o corcel emociona ambos os lados com sua bravura.",
      release: 2020,
      img: 'https://carinacostasantos.com.br/wp-content/uploads/2021/03/cavalo.jpg'
      
  },
    {
     title:"Viúva Negra",
      text: "Em Viúva Negra, após seu nascimento, Natasha Romanoff (Scarlett Johansson) é dada à KGB, que a prepara para se tornar sua agente definitiva.",
      release: 2020,
      img: 'https://carinacostasantos.com.br/wp-content/uploads/2021/03/black.jpg'
  },

    {
     title:"Avatar",
     text: "No exuberante mundo alienígena de Pandora vivem os Na'vi, seres que parecem ser primitivos, mas são altamente evoluídos. Como o ambiente do planeta é tóxico, foram criados os avatares.",
     release: 2020,
     img: 'https://carinacostasantos.com.br/wp-content/uploads/2021/03/avatar.jpg'
 },
   {
    title:"Aquaman",
    text: "A cidade de Atlantis, que já foi lar de uma das mais avançadas civilizações do mundo, agora é um reino submerso dominado pelo ganancioso Rei Orm.",
    release: 2020,
    img: 'https://carinacostasantos.com.br/wp-content/uploads/2021/03/aquaman.jpg'
},
  ]);
  const [background, setBackground] = useState (lista[0].img)
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
              <Carousel style={styles.carousel} ref={carouselRef} data={lista} renderItem={_rederItem} sliderWidth={screenWidth} itemWidth={200} inactiveSlideOpacity= {0.5} onSnapToItem= {(index) => { setBackground(lista[index].img); setActiveIndex(index); }}/>        
            </View>

            <View style={styles.maisInfo}>
              <View style={{marginTop:10}}>
                <Text style={styles.filmeTitle}> {lista[activeIndex].title} </Text>
                <Text style={styles.filmeDesc}> {lista[activeIndex].text} </Text>
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

