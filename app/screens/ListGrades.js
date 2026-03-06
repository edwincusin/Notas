
import { View, Text, StyleSheet, FlatList, TouchableHighlight } from "react-native";
import { useState } from "react";
import { getGrades } from '../services/GradeServices';
import { FAB, ListItem, Avatar } from '@rneui/base';


export const ListGrade = ({ navigation }) => {

    const [time, setTime] = useState(); // para obligar que el arreglo se pinte

    const refreshList = () => {
        setTime(new Date().getTime());
    };


    const ItemGrade = ({ nota }) => {
        return (
            <TouchableHighlight
                onPress={() => {
                    navigation.navigate("GradeFormNav", { notita: nota, fnRefreh: refreshList });
                }}
            >
                <ListItem bottomDivider>
                    <Avatar
                        title={nota.subject.substring(0, 1)}
                        containerStyle={{ backgroundColor: '#516ada' }}
                        rounded
                    />
                    <ListItem.Content>
                        <ListItem.Title>{nota.subject}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Content>
                        <ListItem.Subtitle>{nota.grade}</ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
            </TouchableHighlight>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={getGrades()}
                renderItem={({ item }) => {
                    return (<ItemGrade
                        nota={item}
                    />
                    )
                }}
                keyExtractor={(item) => {
                    return item.subject;
                }}
                extraData={time}
            />
            <FAB
                title='+'
                placement="right"
                onPress={() => {
                    navigation.navigate("GradeFormNav", { notita: null, fnRefreh: refreshList });

                }}
            />
        </View>
    );
};

//ESTILOS
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
