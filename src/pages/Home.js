import React, {useState, useEffect} from 'react';
import { View, Text, FlatList, Keyboard, Image } from 'react-native';
import MyStyle from '../styles/MyStyle';
import MyTheme from '../styles/MyTheme';
import { InputGit } from '../components/InputGit';
import { ItemGit } from '../components/ItemGit';
import api from '../services/api'
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Home( { navigation } ) {

    const keyAsyncStorage = "@gitnetwork:users";

    const [nickname, setNickname] = useState('');
    const [users, setUsers] = useState([]);

    function navigationDetails(login) {
        navigation.navigate('Details', {user: login});
    }

    async function handleSearchUser() {
        try {
            response = await api.get('/users/' + nickname);
            const {data} = response;

            const obj = {
                id: data.id,
                nome: data.name,
                login: data.login,
                avatar_url: data.avatar_url,
            }
            const datasUsers = [...users, obj];

            try {
                await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify(datasUsers));
            } catch(error) {
                console.error(error);
            }

            setNickname('');
            Keyboard.dismiss();
            loadData();

        } catch(error) {
            console.error(error);
        }
    } 

    async function loadData() {
        try {
            const retorno = await AsyncStorage.getItem(keyAsyncStorage);
            const parseJson = JSON.parse(retorno);
            setUsers(parseJson || []);
        } catch(error) {
            console.error(error);
        }
    }

    useEffect( () =>{
        navigation.addListener('focus', ()=> loadData());
    }, [navigation]);

    return(
        <View style={MyStyle.screenContainer}>
            <AntDesign name="github" size={100} color={MyTheme.colors.primary} />
            <Text style={MyStyle.title}>Git.Network</Text>
            <InputGit placeholder="Adicionar nickname do usuário" value={nickname}
                onChangeText={setNickname} onPress={handleSearchUser}
            />
            <View style={MyStyle.input}></View>
            <FlatList data={users}
                keyExtractor={item => item.id.toString()}
                renderItem={ ({item}) => (
                    <ItemGit name={item.login} avatar={item.avatar_url} onPress={ () => navigationDetails(item.login)} />
                )}
            />
        </View>
    )
}