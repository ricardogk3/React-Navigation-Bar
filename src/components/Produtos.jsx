import React from 'react';
import { Text, View, Button } from 'react-native';


export default function Produtos({navigation}) {
    const dados = {
        id:1,
        nome:"Tablet xingilingue",
        preco: 1000
    }
    return (
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text>Aqui tem coisa da boa</Text>
            <Text>{`produto:${dados.nome}`}</Text>
            <Text>{`Id:${dados.id}`}</Text>
            <Text>{`Preco:${dados.preco}`}</Text>
            <Button
                title="Ir para Detalhes"
                onPress={()=> navigation.navigate('Detalhes', dados)}/>
        </View>
    );
}