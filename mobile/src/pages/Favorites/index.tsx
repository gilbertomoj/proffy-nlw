import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import styles from './styles';
import PageHeader from '../../Components/PageHeader';
import TeacherItem, { Teacher } from '../../Components/TeacherItem';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import {useFocusEffect } from '@react-navigation/native';

function Favorites(){
    const [favorites, setFavorites] = useState([]);


    function loadFavorites(){
        AsyncStorage.getItem('favorites').then(response =>{
            if(response){   
                const favoritedTeachers = JSON.parse(response);
                setFavorites(favoritedTeachers);
            }
        });
    }
    useFocusEffect(() =>{
        loadFavorites();
    });

    return (<View style={styles.container}>
    <PageHeader title="Meus Proffys favoritos"/>
    <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
            paddingHorizontal:16,
            paddingBottom:16,
        }}
        >
           {favorites.map((teacher: Teacher)=>{
               return(
                   <TeacherItem 
                    key={teacher.id}
                    teacher={teacher}
                    favorited
                   />
               )
           })}
        </ScrollView>

</View>)
}

export default Favorites;