import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MyStyle from '../styles/MyStyle';
import api from '../services/api';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Details( { navigation, route } ) {

    const keyAsyncStorage = "@gitnetwork:users";

    const [user, setUser] = useState({});

    async function handleUser(nickname) {
        try {
            response = await api.get('/users/' + nickname);
            const {data} = response;

            const obj = {
                id: data.id,
                name: data.name,
                login: data.login,
                company: data.company,
                bio: data.bio,
                avatar_url: data.avatar_url,
                url: data.url,
                public_repos: data.public_repos,
                followers: data.followers,
            }

            setUser(obj);

        } catch(error) {
            console.error(error);
        }
    }

    async function deleteUser(id) {
        try {
            const retorno = await AsyncStorage.getItem(keyAsyncStorage);
            const parseJson = JSON.parse(retorno);

            const newData = parseJson.filter(item => item.id != id);
            await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify(newData));

            navigation.navigate('Home');

        } catch(error) {
            console.error(error);
        }
    }

    useEffect(() => {
        const {user} = route.params;
        handleUser(user);
    }, []);

    return (
        <View style={MyStyle.screenContainer}>
            <View style={MyStyle.perfil}>
                <Image style={MyStyle.logoDetails} source={{uri: user.avatar_url}} />
                <Text style={MyStyle.title}>{user.name}</Text>
                <Text style={MyStyle.textSmall}>{user.url}</Text>
                {user.company && <Text style={MyStyle.textRegular}>Empresa: {user.company}</Text>}
                <Text style={MyStyle.textRegular}>{user.bio}</Text>
            </View>

            <View style={MyStyle.info}>
                <View>
                    <Text style={MyStyle.titleInfo}>Repositórios</Text>
                    <View style={MyStyle.infoCount}>
                        <MaterialCommunityIcons name="source-repository" size={50} color="black" />
                        <Text style={MyStyle.textCount}>{user.public_repos}</Text>
                    </View>
                </View>

                <View>
                    <Text style={MyStyle.titleInfo}>Seguidores</Text>
                    <View style={MyStyle.infoCount}>
                        <FontAwesome5 name="users" size={45} color="black" />
                        <Text style={MyStyle.textCount}>{user.followers}</Text>
                    </View>
                </View>
            </View>

            <View style={MyStyle.viewDelete}>
                <TouchableOpacity style={MyStyle.btnDelete} onPress={() => deleteUser(user.id)}>
                    <Text style={MyStyle.txtDelete}>Remover</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}