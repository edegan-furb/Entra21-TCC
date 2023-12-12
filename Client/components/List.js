import React from 'react';
import { FlatList, Text, StyleSheet, View } from 'react-native';

import CustomButton from './CustomButton';

export default ({ action, data }) => {
    
    const listRender = ({ item : g }) => { // captura os elementos de um array de objects 
        return(                            // para renderizar transformando-os em botão
            <View style={styles.button}>
                <CustomButton 
                
                title={ <View>
                            <Text style={styles.title}>{g.group_name}</Text>
                            <Text style={styles.description}>Progress: {Math.ceil(100 * g.concluded_tasks / g.num_tasks)}%</Text>
                        </View>}
                onPress={action}
                />
            </View>
              
        )
    }

    return(
        <>
            <Text>Lista:</Text>
            <FlatList
                data={data}
                keyExtractor={i => `${i.id}`}
                renderItem={listRender}
            />
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingBottom: 10,
        paddingTop: 10
    },
    title: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    },
    description: {
        color: '#fff',
        fontSize: 12
    }
})