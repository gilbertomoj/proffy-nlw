import React from 'react';
import { View , Text , ImageBackground} from 'react-native';
import styles from './styles'
import giveClassesBGI from '../../assets/images/give-classes-background.png';


function GiveClasses(){
    return(
        <View style={styles.container}>
            <ImageBackground resizeMode="contain" source={giveClassesBGI} style={styles.content}>
                <Text style={styles.title}>Quer ser um Proffy ? </Text>
                <Text style={styles.description}>Para começar, você precisa se cadastrar como professor na nossa plataforma web</Text>
                

            </ImageBackground>
        </View>
    )

}

//OBS: Bottão com link para o site

export default GiveClasses;