import { View, Text, StyleSheet, Button } from "react-native" // componentes base

export const Home = ({ navigation }) => { // este componente va ser exportado
    return (
        <View style={styles.container}>
            <Text>HOME</Text>
            <View style={styles.areaBotones}>
                <Button
                    title="CONTACTOS"
                    onPress={() => {
                        navigation.navigate('contactsNav');
                    }}
                />
                <Button
                    title="PRODUCTOS"
                    onPress={() => {
                        navigation.navigate('productsNav');
                    }}
                />
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: "center"
    },
    areaBotones: {
        backgroundColor: '#d48888',
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center"

    },
});