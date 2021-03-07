import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ContatoInput from './components/ContatoInput';
import ContatoItem from './components/ContatoItem';

export default function App() {
  const [contatos, setContatos] = useState([]);
  const [contador, setContador] = useState(0);

  const adicionarContato = (nome, telefone) => {
    setContatos(contatos => {
      setContador(contador + 1);
      return [{key: contador.toString(), value: `${nome} - ${telefone}`}, ...contatos];
    })
    console.log(contatos);
  }

  const removerContato = (keyASerRemovida) => {
    setContatos(contatos => {
      return contatos.filter((contato) => {
        return contato.key !== keyASerRemovida;
      });
    });
  }

  return (
    <View style={estilo.container}>
      <ContatoInput onAddContato={adicionarContato}/>

      <View style={estilo.lista}>
        <FlatList
          data={contatos}
          renderItem = { contato => (
            <ContatoItem 
              contato={contato.item.value}
              chave={contato.item.key}
              onDelete={removerContato}
            />
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
  }
});
