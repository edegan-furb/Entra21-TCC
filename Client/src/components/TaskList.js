import React from 'react';
import { FlatList, Text, StyleSheet, View } from 'react-native';
import CustomButton from './CustomButton';
import tasks from './lixo/tasks'

export default ({ action}) => {
   
    const listRender = ({ item : t }) => { // captura os elementos de um array de objects
        return(                            // para renderizar transformando-os em botão
            <View style={styles.button}>
                <CustomButton
                    title={ 
                        <View style={styles.a}>
                            <Text style={styles.title}>{t.task_name}</Text>
                            <Text style={styles.description}>
                                Progress: {Math.ceil(100 * t.concluded_goal / t.total_goal)}%
                            </Text>
                        </View>
                        }
                    onPress={action}
                />
            </View>
             
        )
    }

    return( // Retorna a lista de grupos
            <FlatList
                data={tasks}
                keyExtractor={i => `${i.id}`}
                renderItem={listRender}
            />
    )
}


//estilos
const styles = StyleSheet.create({
    a:{
        width: '100%',
        height: '100%'
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
