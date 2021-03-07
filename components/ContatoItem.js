import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ContatoItem = (props) => {
    return (
        <TouchableOpacity onLongPress={() => props.onDelete(props.chave)}>
            <View style={estilo.itemNaLista}>
                <Text>{props.contato}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default ContatoItem;


const estilo = StyleSheet.create({
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