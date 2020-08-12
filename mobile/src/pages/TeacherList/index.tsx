import React from 'react';
import { View, Text , TextInput} from 'react-native';
import styles from './styles';
import PageHeader from '../../Components/PageHeader';
import TeacherItem from '../../Components/TeacherItem';
import { ScrollView } from 'react-native-gesture-handler';

function TeacherList(){
    return (
    <View style={styles.container}>
        <PageHeader title="Proffys disponiveis">
            <View style={styles.searchForm}>
                <Text style={styles.label}>Matérias</Text>
                <TextInput style={styles.input} placeholder='Qual a matéria' placeholderTextColor="#c1bcc"/>

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