import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styles } from './styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      exibirContador: '',
    };

    this.pegarContador = this.pegaContador.bind(this);

    this.entrar1 = this.entrar1.bind(this);

    this.entrar2 = this.entrar2.bind(this);
  }

  entrar1() {
    this.setState({
      exibirContador: this.state.contador++,
    });
  }

  entrar2() {
    this.setState({
      exibirContador: this.state.contador--,
    });
  }

  pegarContador(Number) {
    this.setState({ contador: Number });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{'\n'}</Text>
        <Text> Contador de Pessoas presentes na Loja</Text>
        <TextInput
          style={styles.input}
          placeholder={this.state.exibirContador}
          onChangeText={this.pegaContador}
        />

        <Button title="+" onPress={this.entrar} />
        <Text>{'\n'}</Text>
        <Button title="-" onPress={this.entrar1} />
      </View>
    );
  }
}

export default App;
