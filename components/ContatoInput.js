import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

const ContatoInput = (props) => {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    
    return (
        <View>
            <View style={estilo.dados}>
                <TextInput 
                    style={estilo.input}
                    placeholder="Digite seu nome"
                    onChangeText={texto => {setNome(texto)}}
                    value={nome}
                />
                <TextInput
                    style={estilo.input} 
                    placeholder="Digite seu telefone"
                    onChangeText={texto => {setTelefone(texto)}}
                    value={telefone}
                />
            </View>
            <View>
                <Button
                title="Adicionar contato"
                onPress={() => {
                    props.onAddContato(nome, telefone);
                    setNome('');
                    setTelefone('');
                }}
                />
            </View>
        </View>
    );
}

export default ContatoInput;

const estilo = StyleSheet.create({
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
    }
  });
  