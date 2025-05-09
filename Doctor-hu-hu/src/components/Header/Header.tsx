import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { router, Router } from 'expo-router';

import { styles } from './style';

export   function Header() {
  const navigation = useNavigation();

  function handleAdd() {
    router.navigate('/');
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://github.com/rodrigorgtic.png' }}
        style={styles.avatar}
      />

      <View style={styles.user}>
        <Text style={styles.title}>
          Olá, Rodrigo
        </Text>
        <Text style={styles.subtitle}>
          Sinta-se seguro aqui.
        </Text>
      </View>


      <TouchableOpacity
        onPress={handleAdd}
        style={styles.button}
      >
        <MaterialIcons
          name="add"
          size={22}
          color="#FFF"
        />
      </TouchableOpacity>
    </View>
  );
}