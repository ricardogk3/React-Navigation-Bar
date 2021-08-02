import React from 'react';
import { Text, View, Button } from 'react-native';

export default function HomeScreen({navigation}) {
    return (
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text>Home Screen</Text>
            <Button
                title="Ir para Produto"
                onPress={()=> navigation.navigate('Produtos')}/>
        </View>
    );
}