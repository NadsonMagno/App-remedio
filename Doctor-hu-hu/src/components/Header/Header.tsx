import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
export default function Header() {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={{ uri: "https://github.com/NadsonMagno.png"}}/> 

        <View style={styles.user}>
        <Text style={styles.name}>Nadson Magno</Text>
        <Text style={styles.email}>nadson.magn.cunha@gmail.cm</Text>

        </View>

        <TouchableOpacity>
            <Feather name="more-horizontal" size={20} color={colors.gray[100]} />
        </TouchableOpacity>
    </View>
  );
}