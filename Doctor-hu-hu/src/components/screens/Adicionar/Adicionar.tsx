import Header from "@/components/Header/Header";
import { View,Text, KeyboardAvoidingView } from "react-native";
import { styles } from "./style";
export default function Adicionar() {
  return (
    <>
    <Header />
    <KeyboardAvoidingView style={styles.fundo}>
     
      <View style={styles.container}>

      </View>
      
    </KeyboardAvoidingView>
    </>
  );
}