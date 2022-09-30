import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class App extends Component {
  render() {
    return (
      <View>
        <Text>{'\n'}</Text>
        <Text style={{ color: '#FF0000', fontSize: 25, margin: 15 }}>
           Meu Perfil
        </Text>

        <Image
          source={require('')}
          style={{ width: 300, height: 300 }}
        />

        <Text>{'\n'}</Text>
        <Text>Nome: Gustavo Ramos </Text>
        <Text>Idade: 25 anos</Text>
        <Text>Formação: Ensino Medio </Text>
        <Text>Experiencia: banco de dados</Text>
        <Text>Projetos: Otimizaçao do IOT  industrialmente e domesticamente</Text>
      </View>
    );
  }
}

export default App;
