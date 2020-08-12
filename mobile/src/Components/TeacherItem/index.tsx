import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';


function TeacherItem(){
    return (
    <View style={styles.container}>
        <View style={styles.profile}>
            <Image
                style={styles.avatar}
                source={{uri:'https://avatars2.githubusercontent.com/u/38990510?s=460&u=9a67ab85804229db6ec973f2a0c56b698d259eee&v=4'}}
            
            />
            <View style={styles.profileInfo}>    
            <Text style={styles.name}>Jeremias Oliveira </Text>
            <Text style={styles.subject}>Matemática</Text>
            </View>
        </View>
        <Text style={styles.bio}>
            Apaixonado em Informatico gosta de muitas coisas e blablabla
            {'\n'}
            Gosta de mexer em bla bla bla
        </Text>
        <View style={styles.footer}>
            <Text style={styles.price}>
                Preço/hora {'  '}
                <Text style={styles.priceValue}>R$ 302,00</Text>
            </Text> 
            <View style={styles.buttonsContainer}>
                <RectButton style={styles.favoriteButton}>
                    <Image source={heartOutlineIcon}/>
                </RectButton>
                <RectButton style={styles.contactButton}>
                    <Image source={whatsappIcon}/>
                    <Text style={styles.contactButtonText}>Entrar em contato</Text>
                </RectButton>   
                

            </View>

        </View>

    </View>
    )
}

export default TeacherItem;