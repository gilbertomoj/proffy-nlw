import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import PageHeader from '../../Components/PageHeader';
import TeacherItem from '../../Components/TeacherItem';
import { ScrollView } from 'react-native-gesture-handler';

function TeacherList(){
    return (
    <View style={styles.container}>
        <PageHeader title="Proffys disponiveis"/>

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