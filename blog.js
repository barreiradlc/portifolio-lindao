import React, { Component } from 'react'
import { FlatList, View, Text, StyleSheet, Image } from 'react-native'

class HttpExample extends Component {
   state = {
      data: '',
      media: ''
   }
   componentDidMount = () => {
      fetch('https://portifolio-xerozo.000webhostapp.com/wp-json/wp/v2/posts', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);
         this.setState({
            data: responseJson
         })
      })
      .catch((error) => {
         console.error(error);
      });
      fetch('https://portifolio-xerozo.000webhostapp.com/wp-json/wp/v2/media', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);
         this.setState({
            media: responseJson
         })
      })
      .catch((error) => {
         console.error(error);
      });
   }

   // componentDidMount = () => {
   //    fetch('https://portifolio-xerozo.000webhostapp.com/wp-json/wp/v2/media', {
   //  method: 'GET'
   //    })
   //    .then((response) => response.json())
   //    .then((responseJson) => {
   //       console.log(responseJson);
   //       this.setState({
   //          media: responseJson
   //       })
   //    })
   //    .catch((error) => {
   //       console.error(error);
   //    });
   // }

   render() {
      return (
         <View >
            
            <FlatList
        style={styles.item}
        data={this.state.data}
        renderItem={({item}) => 
        <View style={styles.container}>

         <Text style={styles.titulo}> {item.title.rendered} </Text>


         <Image style={styles.media} source={{ uri: item.fimg_url }} />

         <Text style={styles.conteudo}> {item.excerpt.rendered} </Text>

         <Text style={styles.data}> Publicado em: {item.date}</Text>

        </View>
        

        }
          keyExtractor={({id}, index) => id}
        />

        <Text></Text>

      {/* <FlatList
        style={styles.item}
        data={this.state.media}
        renderItem={({item}) => 
        <View style={styles.container}>
        
          

            <Image source={{ uri: item.source_url }} />

          

        </View>
        
          
        }
          keyExtractor={({id}, index) => id}
      /> */}

         </View>
      )
   }
}

const styles = StyleSheet.create({
    container: {
      borderRadius: 4,
      borderWidth: 0.5,
      borderColor: '#d6d7da',
		marginTop: 25,
		marginBottom: 15,
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#eee',
      alignItems: 'center',
    },
    conteudo: {
      fontSize: 15,
      fontWeight: 'bold',
	   borderColor: '#000',
	   alignItems: 'center',
      justifyContent: 'center',
     
    },
    titulo: {
      fontSize: 19,
      fontWeight: 'bold',
	   borderColor: '#000',
	   alignItems: 'center',
      justifyContent: 'center',
     
    },
    activeTitle: {
	   color: 'red',
	   fontSize: 12,
	},
	data: {
		color: '#000',
	  },
	item: {
		padding: 5,
		borderColor: '#000',
		borderWidth: 5
   },
   media:
   {
      width: 200, 
      height: 150,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 2,
   }

  });


export default HttpExample