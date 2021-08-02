import React from 'react';
import { Text, View, Button } from 'react-native';

export default function Detalhes({route, navigation}) {

    const dados = route.params;

    return (
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text>Sla</Text>
            {/* <Text>{`\nCódigo: ${dados.id}\nProdutos:${dados.nome}\nR$ ${dados.preco}`}</Text> */}
            <Button
                title="Ir para Detalhes"
                onPress={()=> navigation.push('Detalhes', dados)}/>
            <Button
                title="Tela anterior"
                onPress={()=> navigation.goBack()}/>
            <Button
                title="Home"
                onPress={()=> navigation.popToTop()}/>
        </View>
    );
}