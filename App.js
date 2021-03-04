import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [contato, setContato] = useState([]);
  const [contador, setContador] = useState(0);

  const adicionarContato = () => {
    setContato(contato => {
      setContador(contador + 1);
      return [{key: contador.toString(), value: `${nome} - ${telefone}`}, ...contato];
    })
    console.log(contato);
  }

  return (
    <View style={estilo.container}>
      <Text style={estilo.title}>Cadastro de Contatos</Text>
      <View style={estilo.dados}>
        <TextInput 
          style={estilo.input}
          placeholder="Digite seu nome"
          onChangeText={texto => {setNome(texto)}}
        />
        <TextInput
          style={estilo.input} 
          placeholder="Digite seu telefone"
          onChangeText={texto => {setTelefone(texto)}}
        />
      </View>
      <View>
        <Button
          title="Adicionar contato"
          onPress={adicionarContato}
        />
      </View>

      <View style={estilo.lista}>
        <FlatList
          data={contato}
          renderItem = { cont => (
            <View style={estilo.itemNaLista}>
              <Text>{cont.item.value}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title:{
    fontSize:30,
    fontWeight:'bold'
  },
  dados:{
    flexDirection:'row'
  },
  input:{
    marginBottom: 10, 
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    borderWidth:1,
    marginLeft: 20,
    borderRadius: 10,
    width:300
  },
  inserir:{
    
  },
  lista: {
    marginTop: 20
  },
  itemNaLista: {
    padding: 20,    
    backgroundColor: '#CCC',    
    borderColor: 'black',    
    borderWidth: 1,    
    marginBottom: 20,    
    borderRadius: 8,    
    alignItems: 'center',
    width: 610
  }
});
