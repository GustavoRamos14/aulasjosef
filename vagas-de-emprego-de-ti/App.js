import { styles } from './styles';
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{'\n'}</Text>
        <Text
          style={{
            fontSize: 28,
            color: 'red',
            textAlign: 'center',
            textTransform: 'capitalize',
          }}>
          Vagas
        </Text>
        <ScrollView>
        <View style={styles.box1}>
            <Text>{'\n'}</Text>
            <Text
              style={{
                textAlign: 'center',
                textTransform: 'capitalize',
                color: 'white',
              }}>
              Desenvolvedor FrontEnd
            </Text>
            <Text>{'\n'}</Text>
            <Text
              style={{
                textAlign: 'center',
                textTransform: 'capitalize',
                color: 'white',
              }}>
              Salário: R$: 4000,00
            </Text>
            <Text>{'\n'}</Text>
            <Text
              style={{
                textAlign: 'center',
                textTransform: 'capitalize',
                color: 'white',
              }}>
              Descriçao: ________________________________.
            </Text>
            <Text>{'\n'}</Text>
            <Text
              style={{
                textAlign: 'center',
                textTransform: 'capitalize',
                color: 'white',
              }}>
              Contato: +55 (99) 99999-999.
            </Text>
          </View>
          <View style={styles.box2}>
          <Text>{'\n'}</Text>
            <Text
              style={{
                textAlign: 'center',
                textTransform: 'capitalize',
                color: 'white',
              }}>
              programador em java
            </Text>
            <Text>{'\n'}</Text>
            <Text
              style={{
                textAlign: 'center',
                textTransform: 'capitalize',
                color: 'white',
              }}>
              Salário: R$: 6000,00
            </Text>
            <Text>{'\n'}</Text>
            <Text
              style={{
                textAlign: 'center',
                textTransform: 'capitalize',
                color: 'white',
              }}>
              Descriçao: ________________________________.
            </Text>
            <Text>{'\n'}</Text>
            <Text
              style={{
                textAlign: 'center',
                textTransform: 'capitalize',
                color: 'white',
              }}>
              Contato: +55 (93) 99999-999.
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default App;
