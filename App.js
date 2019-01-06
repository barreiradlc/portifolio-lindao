import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MapaComponente from './mapa';
import BlogComponente from './blog';
import Icon from '@expo/vector-icons/Ionicons';
import { 
  createSwitchNavigator, 
  createAppContainer, 
  createDrawerNavigator, 
  createBottomTabNavigator,
  createStackNavigator } from 'react-navigation';


  
export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

class Mapa extends React.Component {
  render() {
    return (
      
        <MapaComponente />
      
    );
  }
}

class BoasVindas extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      
        <Text> Olá, este app é puramente explicativo</Text>
        <Text> e nele utilizo diversos componentes </Text>
        <Text> para exemplificar meu conhecimento  </Text>
        <Text> com a ferramenta em questão.</Text>
        <Text> Se guie pelos blocos abaixo </Text>
        <Text></Text>
		<Text></Text>

		<View style={styles.sessao}>
			<Text></Text>
			<Text> Aqui jaz um mapa consumindo uma API  </Text>
			<Text> publica de bicicletas em Nova York</Text>
			<Text></Text>
			<Button 
			title="mapa" 
			onPress={() => this.props.navigation.navigate('Mapa')} />
		</View>

		<View>
			<Text></Text>
			<Text></Text>
			<Text></Text>
		</View>
	
		<View style={styles.sessao}>
			<Text></Text>
			<Text> Nesta sessão um exemplo de consumo de API  </Text>
			<Text> de um blog regenciado por mim no endereço: </Text>
			<Text>https://portifolio-xerozo.000webhostapp.com</Text>
			<Text></Text>
			<Button 
			title="Blog" 
			onPress={() => this.props.navigation.navigate('Blog')} />

		</View>        
        
      </View>
    );
  }
}

class Blog extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        
        <BlogComponente />

      </View>
    );
  }
}

const BlogTabNavigator = createBottomTabNavigator({
  
  BoasVindas,
  Mapa,
  Blog

}, {
  navigationOptions: ({ navigation }) => {
    const { routeName } = navigation.state.routes
    [navigation.state.index];
    return{
      headerTitle: routeName
    };
  }
}
); 

const BlogStackNavigator = createStackNavigator({
  BlogStackNavigator: BlogTabNavigator
}, {
  defaultNavigationOptions:({navigation}) => {
    return{ headerLeft :<Icon name="md-menu" size={30} /> }
  }
})

const AppDrawerNavigator = createDrawerNavigator({
  Blog: {screen: BlogTabNavigator}
});

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: {screen: BoasVindas},
  Blog: {screen: Blog},
  Mapa: {screen: Mapa}
});

const AppContainer = createAppContainer(AppDrawerNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    justifyContent: 'center',
  },
  sessao: {
    backgroundColor: '#eee',
    
	padding: 2
  },
});
