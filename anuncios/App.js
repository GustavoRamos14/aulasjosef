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
          Anuncios
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
          <View style={styles.box1}>
            <Image
              source={require('./assets/nike.jpeg')}
              style={{ width: 250, height: 200 }}
            />
            <Text
              style={{
                textAlign: 'center',
                textTransform: 'capitalize',
                color: 'white',
              }}>
              volante thurstmaster t150 com pedais - preto
            </Text>
            <Text
              style={{
                textAlign: 'center',
                textTransform: 'capitalize',
                color: 'white',
              }}>
              A partir de R$ 2249,99{' '}
            </Text>
          </View>
          <View style={styles.box2}>
            <Image
              source={require('.https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thrustmaster.com%2Fpt-br%2Fproducts%2Ft150-force-feedback%2F&psig=AOvVaw2a3vy4sesmleRIz38hkuMK&ust=1664657638205000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCJDWl46zvfoCFQAAAAAdAAAAABAD')}
              style={{ width: 250, height: 200 }}
            />
            <Text
              style={{
                textAlign: 'center',
                textTransform: 'capitalize',
                color: 'white',
              }}>
              Beliche
            </Text>
            <Text style={{ textAlign: 'center', color: 'white' }}>
              'de 2 andares'
            </Text>
            <Text
              style={{
                textAlign: 'center',
                textTransform: 'capitalize',
                color: 'white',
              }}>
              de R$:1500 por R$:1190,90{' '}
            </Text>
          </View>
          <View style={styles.box3}>
            <Image
              source={require('.https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.magazineluiza.com.br%2Fbusca%2Fbeliche%2B2%2F&psig=AOvVaw1w92u6AuSZDu-v-m_iArO8&ust=1664657761252000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCMikq8ezvfoCFQAAAAAdAAAAABAH')}
              style={{ width: 250, height: 200 }}
            />
            <Text
              style={{
                textAlign: 'center',
                textTransform: 'capitalize',
                color: 'white',
              }}>
              Relógio - Preto
            </Text>
            <Text
              style={{
                textAlign: 'center',
                textTransform: 'capitalize',
                color: 'white',
              }}>
              R$ 299,90{' '}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default App;
