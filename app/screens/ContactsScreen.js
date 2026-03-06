import { View, Text, StyleSheet, Button } from "react-native";

export const Contacts = ({navigation}) => { // esportamos el componente con export
    return (
        <View style={styles.container}>
            <Text>ESTOY EN CONTACTOS</Text>
            <Button
                title="IR A HOME"
                onPress={()=>{
                    navigation.navigate('homeNav')
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: "center"
    },
});