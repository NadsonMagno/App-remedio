import { useCallback, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

import { Card, CardProps } from '@/components/Card/Card';
import { Header } from '@/components/Header/Header';
import { useFocusEffect } from '@react-navigation/native';

import { styles } from './style';
import { Button } from '@/components/Button/Button';
export function Home() {
  const [data, setData] = useState<CardProps[]>([]);

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.listHeader}>
        <Text style={styles.title}>
          Suas senhas
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
                data={item} onPress={function (): void {
                    throw new Error('Function not implemented.');
                } }           /* onPress={() => handleRemove(item.id)} */
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