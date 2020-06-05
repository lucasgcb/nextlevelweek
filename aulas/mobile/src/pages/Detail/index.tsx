import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, Linking } from 'react-native';
import { Feather as Icon, FontAwesome } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native';
import Constants from 'expo-constants'
import * as MailComposer from 'expo-mail-composer'
import { RectButton } from 'react-native-gesture-handler'
import api from '../../services/api';
const Detail = () => {
    interface Params {
        point_id: number;
    }
    interface Data {
        serializedPoint: {
            image: string;
            image_url: string;
            name: string;
            email: string;
            whatsapp: string;
            city: string;
            UF: string;
        }
        items: {
            title: string;
        }[]
    }
    const [data, setData] = useState<Data>({} as Data);
    const navigation = useNavigation();
    const route = useRoute();
    const routeParams = route.params as Params;

    useEffect(() => {

        console.log(routeParams.point_id)
        api.get(`points/${routeParams.point_id}`).then(response => {
            console.log(response.data)
            setData(response.data)

            console.log(data)
        })

    }, [])

    function handleComposeMail() { // Não funciona com protonmail
        MailComposer.composeAsync({
            subject: 'Interesse na coleta de residuos',
            recipients: [data.serializedPoint.email],
        })
    }

    function handleWhatsapp() {
        console.log("kk eae men")
        Linking.openURL(`whatsapp://send?text=Hello World!&phone=${data.serializedPoint.whatsapp}`)
    }

    function handleNavigateBack() {
        navigation.goBack();
    }

    if (!data.serializedPoint) {
        return null;
    }

    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity onPress={handleNavigateBack}>
                    <Icon name="arrow-left" size={20} color="#34cb79" />
                </TouchableOpacity>
                <Image style={styles.pointImage} source={{
                    uri: data.serializedPoint.image_url
                }} />
                <Text style={styles.pointName}>{data.serializedPoint.name}</Text>
                <Text style={styles.pointItems}>{data.items.map(item => item.title).join(', ')} </Text>
                <View style={styles.address}>
                    <Text style={styles.addressTitle}>Endereço</Text>

                    <Text style={styles.pointItems}>{data.serializedPoint.city}, {data.serializedPoint.UF}</Text>
                </View>
            </View>

            <View style={styles.footer}>
                <RectButton style={styles.button} onPress={handleWhatsapp}>
                    <FontAwesome name="whatsapp" size={20} color="#FFF" />
                    <Text style={styles.buttonText}>Whatsapp</Text>
                </RectButton>
                <RectButton style={styles.button} onPress={handleComposeMail}>
                    <Icon name="mail" size={20} color="#FFF" />
                    <Text style={styles.buttonText}>E-mail</Text>
                </RectButton>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        paddingTop: 20 + Constants.statusBarHeight,
    },

    pointImage: {
        width: '100%',
        height: 120,
        resizeMode: 'cover',
        borderRadius: 10,
        marginTop: 32,
    },

    pointName: {
        color: '#322153',
        fontSize: 28,
        fontFamily: 'Ubuntu_700Bold',
        marginTop: 24,
    },

    pointItems: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 16,
        lineHeight: 24,
        marginTop: 8,
        color: '#6C6C80'
    },

    address: {
        marginTop: 32,
    },

    addressTitle: {
        color: '#322153',
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
    },

    addressContent: {
        fontFamily: 'Roboto_400Regular',
        lineHeight: 24,
        marginTop: 8,
        color: '#6C6C80'
    },

    footer: {
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: '#999',
        paddingVertical: 20,
        paddingHorizontal: 32,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    button: {
        width: '48%',
        backgroundColor: '#34CB79',
        borderRadius: 10,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        marginLeft: 8,
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Roboto_500Medium',
    },
});

export default Detail