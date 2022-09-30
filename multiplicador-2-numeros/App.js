import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { styles } from './styles';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { a: 0, b: 0, resul: 0, resulText: '' };
    this.calcula = this.calcula.bind(this);
  }
  calcular() {
    let multi = this.state.a * this.state.b;
    let x = this.state;
    x.resul = mult;
    this.setState(x);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.entrada}>
          <Text style={{ fontSize: 28, color: 'orange', textAlign: 'center' }}>
            Multiplicação de 2 números
          </Text>
          <TextInput
          style={styles.input}
            placeholder="Digite um primeiro numero: "
            keyboardType="numeric"
            onChangeText={(n1) => {
              this.setState({ n1 });
            }}
          />
          <TextInput
          style={styles.input}
            autoCapitalize="none"
            placeholder="Digite  um segundo numero:"
            keyboardType="numeric"
            onChangeText={(n2) => {
              this.setState({ n2 });
            }}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={this.calcular}>
          <Text style={styles.buttontext}>Calcular</Text>
        </TouchableOpacity>
        <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
        <Text style={[styles.resultado, { fontSize: 20 }]}>
          {this.state.resultadoText}
        </Text>
      </View>
    );
  }
}
