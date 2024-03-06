import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Switch } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";

const FormularioInformacion = () => {
    const navigation = useNavigation();
  const [tipoAlarma, setTipoAlarma] = useState(false);
  const [tipoPastillas, setTipoPastillas] = useState('');
  const [CantidadPastillas, setCantidadPastillas] = useState('');
  const [otroTipoPastilla, setOtroTipoPastilla] = useState('');

  const handleEnviar = () => {
    console.log('Tipo de alarma seleccionada:', tipoAlarma ? 'Prendido' : 'Apagado');
    console.log('Tipo de pastillas ingresado:', tipoPastillas === 'otro' ? otroTipoPastilla : tipoPastillas);
    console.log('Cantidad de Pastillas:', CantidadPastillas);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Edición de Alarma</Text>
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>{tipoAlarma ? 'Prendido' : 'Apagado'}</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={tipoAlarma ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(value) => setTipoAlarma(value)}
          value={tipoAlarma}
        />
      </View>
      <Text>Tipo de Pastilla:</Text>
      <Picker
        selectedValue={tipoPastillas}
        onValueChange={(itemValue) => setTipoPastillas(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Paracetamol" value="paracetamol" />
        <Picker.Item label="Ibuprofeno" value="ibuprofeno" />
      </Picker>
      {tipoPastillas === 'otro' && (
            <View style={styles.otroTipoPastillaContainer}>
            <Text>Ingrese el otro tipo de pastilla:</Text>
            <TextInput
              style={styles.input}
              value={otroTipoPastilla}
              onChangeText={(text) => setOtroTipoPastilla(text)}
            />
          </View>
        )}
      <Text>Cantidad de pastillas:</Text>
      <Picker
        selectedValue={CantidadPastillas}
        onValueChange={(itemValue) => setCantidadPastillas(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
        <Picker.Item label="6" value="6" />
      </Picker>

      


      
      <Button title="Hecho"  onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0e425d',
    textAlign: 'center',
    marginTop:30,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  switchLabel: {
    fontSize: 20,
    color: '#0e425d',
  },
  picker: {
    marginBottom: 20,
    backgroundColor: '#07ebff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#0a6e90',
  },
  otroTipoPastillaContainer: {
    marginBottom: 20,
  },
  input: {
    padding: 15,
    backgroundColor: '#07ebff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#0a6e90',
    color: '#000000',
    marginBottom: 20,
  },
  button: {
    padding: 15,
    backgroundColor: '#0a6e90',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});


export default FormularioInformacion;