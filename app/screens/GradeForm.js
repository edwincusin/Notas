import { View, Text, StyleSheet } from "react-native";
import { Input, Button } from '@rneui/base';
import { useState } from "react";
import { saveGrade, updateGrade } from '../services/GradeServices'

export const GradeForm = ({ navigation, route }) => { // parametro para navegar
    //parte para capturar informacion de la otra pantall para modificar
    let esNuevo = true;
    console.log("notita: ", route.params.notita)
    if (route.params.notita != null) {
        esNuevo = false
    };
    let subjectR = "";
    let gradeR = "";
    if (!esNuevo) {
        subjectR = route.params.notita.subject;
        gradeR = route.params.notita.grade;
    };


    const [subject, setSubject] = useState(subjectR);
    const [grade, setGrade] = useState(gradeR != null ? gradeR.toString() : ""); //validacion y conversion
    const [errorSubject, setErrorSubject] = useState("");
    const [errorGrade, setErrorGrade] = useState("");

    const save = () => {

        if (validate()) {
            
            let notaFloat=(parseFloat(grade)).toFixed(2)
            if (esNuevo == true) {
                 saveGrade({ subject: subject, grade: notaFloat });
                    
            } else { //llamar al update
                 updateGrade({ subject: subject, grade: notaFloat });
            }
            //navigation.navigate("ListGrades"); funciona sin el fnRefreh

            route.params.fnRefreh(); //metodo del time con el extradata
            navigation.goBack(); // para regrsar al fom antrior // obliga a repintar

        }

    };

    const validate = () => {
        if (!subject) {
            setErrorSubject("Campo obligatorio");
            return false;
        } else {
            setErrorSubject("");
        }
        let gradeFloat = parseFloat(grade);
        if ((!grade || isNaN(gradeFloat)) || (gradeFloat < 0 || gradeFloat > 10)) {
            setErrorGrade("Debe ingresar nota entre 0 - 10");
            return false;
        } else {
            setErrorGrade("");
        }
        return true;
    }

    return (
        <View style={styles.container}>
            <Input
                value={subject}
                onChangeText={setSubject}
                label='Materia'
                placeholder="Ejemplo: Matematias"
                errorMessage={errorSubject}
                editable={esNuevo}
            />
            <Input
                value={grade}
                onChangeText={setGrade}
                label='Nota'
                placeholder="Ejemplo: 0 - 10"
                keyboardType="decimal-pad"
                errorMessage={errorGrade}
            />
            <Button
                buttonStyle={styles.saveButton}
                title='GUARDAR'
                icon={{
                    name: 'save',
                    type: 'entypo',
                    color: 'white'
                }}
                onPress={save}
            />
        </View>
    );
};

//ESTILOS
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    saveButton: {
        backgroundColor: 'green'
    },
});
