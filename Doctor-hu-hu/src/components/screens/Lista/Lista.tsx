import { useCallback, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

import { Card, CardProps } from '@/components/Card/Card';
import  Header  from '@/components/Header/Header';
import { useFocusEffect } from '@react-navigation/native';

import { styles } from './style';
import { Button } from '@/components/Button/Button';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
export  default function Lista() {
  const [data, setData] = useState<CardProps[]>([]);

  const { getItem, setItem } = useAsyncStorage("@doctorhoho:medicines");

  async function handleFetchData() {
    const response = await getItem();
    const data = response ? JSON.parse(response) : [];
    setData(data);
  }

  async function handleRemove(id: string) {
    const response = await getItem();
    const previousData = response ? JSON.parse(response) : [];

    const data = previousData.filter((item: CardProps) => item.id !== id);
    setItem(JSON.stringify(data));
    setData(data);
  }

  useFocusEffect(useCallback(() => {
    handleFetchData();
  }, []));
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.listHeader}>
        <Text style={styles.title}>
          Suas Medicações
        </Text>

        <Text style={styles.listCount}>
          {`${data.length} ao total`}
        </Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) =>
          <Card
            data={item}
            onPress={() => handleRemove(item.id)}
          />
        }
      />

      <View style={styles.footer}>
        <Button
          title="Limpar lista"
        />
      </View>
    </View>
  );
}