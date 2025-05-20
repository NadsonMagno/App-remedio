import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import { TouchableOpacity, View, Text } from 'react-native';

import { styles } from './style';

export function HeaderForm() {
  const router = useRouter();

  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => router.back()}
        style={styles.button}
      >
        <MaterialIcons
          name="chevron-left"
          size={32}
          color="black"
        />
      </TouchableOpacity>

      <Text style={styles.title}>
        Adicionar Remédio
      </Text>
    </View>
  );
}