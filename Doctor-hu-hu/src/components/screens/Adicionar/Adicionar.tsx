import React, {useState} from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';

import { styles } from './style';
import Toast from 'react-native-toast-message';
import { v4 as uuidv4 } from 'uuid';
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { Input } from '@/components/Input/Input';
import  { Button}  from '@/components/Button/Button';
import { HeaderForm } from '@/components/HeaderForm/HeaderForm';


export default function Adicionar() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [password, setPassword] = useState('');

  const { getItem, setItem } = useAsyncStorage("@savepass:passwords");
  
  async function handleNew(){

    const id = uuidv4();
    const newData = {
      id,
      name,
      description,
      password

    }
    const response = await getItem();
    const previousData = response ? JSON.parse(response) : [];

    const data = [...previousData, newData];

    await setItem(JSON.stringify(data));
    Toast.show({
      type: "success",
      text1: "Cadastrado com sucesso!"
    })
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.content}>
        <ScrollView>

          <HeaderForm />

          <View style={styles.form}>
            <Input
              label="Nome do remédio"
              onChangeText={setName}
              value={name}
              autoCapitalize="none"
            />
            <Input
              label="Descrição do remédio"
              onChangeText={setDescription}
              value={description}
              autoCapitalize="none"
            />
            <Input
              label="Senha"
              secureTextEntry
              onChangeText={setPassword}
            />
          </View>

          <View style={styles.footer}>
            <Button
              title="Salvar"
              onPress={handleNew}
            />
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView >
  );
}