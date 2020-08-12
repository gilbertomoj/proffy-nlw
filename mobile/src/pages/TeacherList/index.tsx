import React, { useState } from 'react';
import { View, Text , TextInput} from 'react-native';
import styles from './styles';
import PageHeader from '../../Components/PageHeader';
import TeacherItem from '../../Components/TeacherItem';
import { ScrollView, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons'

function TeacherList(){
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);

    function handleToggleFiltersVisible(){
        setIsFiltersVisible(!isFiltersVisible);
    }

    return (
    <View style={styles.container}>
        <PageHeader title="Proffys disponiveis" headerRight={(
            <BorderlessButton onPress={handleToggleFiltersVisible}>
                <Feather name='filter' size={20} color='#fff'/>
            </BorderlessButton>
        )}>
            {isFiltersVisible && (
            <>
                <View style={styles.searchForm}>
                    <Text style={styles.label}>Matérias</Text>
                    <TextInput style={styles.input} placeholder='Qual a matérias' placeholderTextColor="#c1bcc"/>
                </View>
                <View style={styles.inputGroup}>
                    <View style={styles.inputBlock  }>
                        <Text style={styles.label}>Dia da semana</Text>
                        <TextInput style={styles.input} placeholder='Qual o dia'/>
                    </View>
                    <View style={styles.inputBlock  }>
                        <Text style={styles.label}>Horário</Text>
                        <TextInput style={styles.input} placeholder='Qual o horário'/>
                    </View>
                   

                </View>
                <RectButton style={styles.submitButton}>
                        <Text style={styles.submitButtonText}>Filtrar</Text>
                </RectButton>
            </>
            )}
        </PageHeader>

        <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
            paddingHorizontal:16,
            paddingBottom:16,
        }}
        
        >
            <TeacherItem/>
            <TeacherItem/>
            <TeacherItem/>
            <TeacherItem/>
            <TeacherItem/>
        </ScrollView>

       

    </View>)
}

export default TeacherList;