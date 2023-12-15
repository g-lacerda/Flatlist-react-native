import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity, Dimensions, Image, ScrollView, FlatList, } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Pessoa from './Pessoa';

const screenWidth = Dimensions.get('window').width;
const buttonWidth = screenWidth * 0.25;


export default class hubcenter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      feed: [
        { id: 1, nome: 'Guilherme', idade: 20, email: 'guilacerda.28z@gmail.com' },
        { id: 2, nome: 'Luíza', idade: 25, email: 'luiza@gmail.com' },
        { id: 3, nome: 'Helen', idade: 20, email: 'helen@gmail.com' },
        { id: 4, nome: 'Wanderson', idade: 22, email: 'wanderson@gmail.com' },
        { id: 5, nome: 'Ivan', idade: 56, email: 'ivan@gmail.com' },
        { "id": 6, "nome": "Ana", "idade": 28, "email": "ana@gmail.com" },
        { "id": 7, "nome": "Lucas", "idade": 35, "email": "lucas@gmail.com" },
        { "id": 8, "nome": "Maria", "idade": 22, "email": "maria@gmail.com" },
        { "id": 9, "nome": "Pedro", "idade": 29, "email": "pedro@gmail.com" },
        { "id": 10, "nome": "Julia", "idade": 33, "email": "julia@gmail.com" },
        { "id": 11, "nome": "Gabriel", "idade": 40, "email": "gabriel@gmail.com" },
        { "id": 12, "nome": "Fernanda", "idade": 26, "email": "fernanda@gmail.com" },
        { "id": 13, "nome": "Rafael", "idade": 38, "email": "rafael@gmail.com" },
        { "id": 14, "nome": "Patricia", "idade": 21, "email": "patricia@gmail.com" },
        { "id": 15, "nome": "Mateus", "idade": 45, "email": "mateus@gmail.com" },
        { "id": 16, "nome": "Amanda", "idade": 30, "email": "amanda@gmail.com" },
        { "id": 17, "nome": "Bruno", "idade": 37, "email": "bruno@gmail.com" },
        { "id": 18, "nome": "Carolina", "idade": 24, "email": "carolina@gmail.com" },
        { "id": 19, "nome": "Leonardo", "idade": 42, "email": "leonardo@gmail.com" },
        { "id": 20, "nome": "Sofia", "idade": 31, "email": "sofia@gmail.com" },
        { "id": 21, "nome": "Eduardo", "idade": 36, "email": "eduardo@gmail.com" },
        { "id": 22, "nome": "Camila", "idade": 27, "email": "camila@gmail.com" },
        { "id": 23, "nome": "Gustavo", "idade": 39, "email": "gustavo@gmail.com" },
        { "id": 24, "nome": "Mariana", "idade": 23, "email": "mariana@gmail.com" },
        { "id": 25, "nome": "Rodrigo", "idade": 34, "email": "rodrigo@gmail.com" },
        { "id": 26, "nome": "Fernanda", "idade": 41, "email": "fernanda@gmail.com" },
        { "id": 27, "nome": "Marcelo", "idade": 32, "email": "marcelo@gmail.com" },
        { "id": 28, "nome": "Leticia", "idade": 25, "email": "leticia@gmail.com" },
        { "id": 29, "nome": "Felipe", "idade": 43, "email": "felipe@gmail.com" },
        { "id": 30, "nome": "Renata", "idade": 20, "email": "renata@gmail.com" },
        { "id": 31, "nome": "Vitor", "idade": 44, "email": "vitor@gmail.com" },
        { "id": 32, "nome": "Isabela", "idade": 29, "email": "isabela@gmail.com" },
        { "id": 33, "nome": "Henrique", "idade": 21, "email": "henrique@gmail.com" },
        { "id": 34, "nome": "Vanessa", "idade": 46, "email": "vanessa@gmail.com" },
        { "id": 35, "nome": "Thiago", "idade": 24, "email": "thiago@gmail.com" },
        { "id": 36, "nome": "Aline", "idade": 35, "email": "aline@gmail.com" },
        { "id": 37, "nome": "Caio", "idade": 19, "email": "caio@gmail.com" },
        { "id": 38, "nome": "Larissa", "idade": 40, "email": "larissa@gmail.com" },
        { "id": 39, "nome": "Diego", "idade": 22, "email": "diego@gmail.com" },
        { "id": 40, "nome": "Beatriz", "idade": 47, "email": "beatriz@gmail.com" },
        { "id": 41, "nome": "Ricardo", "idade": 23, "email": "ricardo@gmail.com" },
        { "id": 42, "nome": "Tatiana", "idade": 36, "email": "tatiana@gmail.com" },
        { "id": 43, "nome": "Alexandre", "idade": 18, "email": "alexandre@gmail.com" },
        { "id": 44, "nome": "Juliana", "idade": 48, "email": "juliana@gmail.com" },
        { "id": 45, "nome": "Marcos", "idade": 26, "email": "marcos@gmail.com" },
        { "id": 46, "nome": "Bianca", "idade": 37, "email": "bianca@gmail.com" },
        { "id": 47, "nome": "Andre", "idade": 49, "email": "andre@gmail.com" },
        { "id": 48, "nome": "Debora", "idade": 50, "email": "debora@gmail.com" },
        { "id": 49, "nome": "João Victor", "idade": 27, "email": "joaovictor@gmail.com" },
        { "id": 50, "nome": "Daniela", "idade": 38, "email": "daniela@gmail.com" },
        { "id": 51, "nome": "Hugo", "idade": 51, "email": "hugo@gmail.com" },
        { "id": 52, "nome": "Alessandra", "idade": 52, "email": "alessandra@gmail.com" },
        { "id": 53, "nome": "Cesar", "idade": 53, "email": "cesar@gmail.com" },
        { "id": 54, "nome": "Fernanda", "idade": 54, "email": "fernanda@gmail.com" },
        { "id": 55, "nome": "Marcelo", "idade": 55, "email": "marcelo@gmail.com" }
      ]
    };

  }

  render() {
    return (

      <View style={styles.container}>

        <FlatList
          data={this.state.feed}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Pessoa data={item} />}
        />

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 100,
    height: 100,
    margin: 10,
  },
  input: {
    marginTop: 50,
    height: 45,
    borderWidth: 1,
    borderColor: '#eee',
    marginHorizontal: 10,
    fontSize: 20,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    color: '#eee', width: screenWidth * 0.8,
    alignSelf: 'center',
    textAlign: 'center',
  },

  texto: {
    textAlign: 'center',
    fontSize: 18,
    paddingBottom: 20,
    paddingTop: 50,
    color: '#eee',
    fontWeight: 'bold'
  },
  textoUltimoTempo: {
    textAlign: 'center',
    fontSize: 18,
    paddingTop: 2,
    color: '#eee',
    fontWeight: 'bold'
  },
  botao: {
    margin: 30,
    width: buttonWidth,
    height: buttonWidth,
    backgroundColor: 'transparent',
    borderColor: '#eee',
    borderWidth: 1,
    color: '#eee',
    padding: 10,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#eee',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  box1: {
    backgroundColor: 'red',
    height: 250,
    width: 150
  },
  box2: {
    backgroundColor: 'yellow',
    height: 250,
    width: 150
  },
  box3: {
    backgroundColor: 'green',
    height: 250,
    width: 150
  },
  box4: {
    backgroundColor: 'blue',
    height: 250,
    width: 150
  }
});


/*
flexDirection: 'column',
justifyContent:'center'
*/
