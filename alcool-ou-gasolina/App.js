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
    this.state = { alc: 0, gasol: 0, result: 0, resultText: '' };
    this.calcula = this.calcula.bind(this);
  }
  calcula() {
    let calcu = this.state.alc / this.state.gasol;

    let x = this.state;

    x.resultado = calcu;

    if (x.resultado < 0.7) {
      x.resultadoText = 'o derivado da cana-de-açúcar(alcool) é o melhor para abastecer';
    } else {
      x.resultadoText = 'Gasolina é melhor.';
    }

    this.setState(c);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.entrada}>
          <Text> {'\n'}</Text>
          <Text style={{ fontSize: 28, color: 'black', textAlign: 'center' }}>
            Alcool ou Gasolina
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Preço  Alcool: "
            keyboardType="numeric"
            onChangeText={(alcool) => {
              this.setState({ alc });
            }}
          />
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            placeholder="Preço  gasolina:"
            keyboardType="numeric"
            onChangeText={(gasolina) => {
              this.setState({ gasol });
            }}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={this.calcular}>
          <Text style={styles.buttontext}>Verificar</Text>
        </TouchableOpacity>
        <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
        <Text style={[styles.resultado, { fontSize: 20 }]}>
          {this.state.resultadoText}
        </Text>
      </View>
    );
  }
}
