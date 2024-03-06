import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegistroProfesional = () => {
    const navigation = useNavigation('')
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');

  const handleNombreChange = (text) => {
    setNombre(text);
  };

  const handleApellidoChange = (text) => {
    setApellido(text);
  };

  const handleCorreoChange = (text) => {
    setCorreo(text);
  };

  const handleFechaNacimientoChange = (text) => {
    setFechaNacimiento(text);
  };

  const handleSubmit = () => {
    console.log('Nombre:', nombre);
    console.log('Apellido:', apellido);
    console.log('Correo:', correo);
    console.log('Fecha de Nacimiento:', fechaNacimiento);
  };

  return (
    <View style={styless.container}>
      <Text style={styless.title}>Registro StarPour</Text>
      <View style={styless.form}>
        <TextInput
          style={styless.input}
          placeholder="Nombre"
          value={nombre}
          onChangeText={handleNombreChange}
        />
        <TextInput
          style={styless.input}
          placeholder="Apellido"
          value={apellido}
          onChangeText={handleApellidoChange}
        />
        <TextInput
          style={styless.input}
          placeholder="Correo"
          value={correo}
          onChangeText={handleCorreoChange}
        />
        <TextInput
          style={styless.input}
          placeholder="Fecha de Nacimiento"
          value={fechaNacimiento}
          onChangeText={handleFechaNacimientoChange}
        />
        <View style={styless.buttonContainer}>
          <Button title="Enviar" color="#6b5b95" onPress={() => navigation.navigate('Home')} />
        </View>
      </View>
    </View>
  );
};

const styless = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    width: '100%',
  },
  input: {
    height: 40,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#6b5b95',
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
});

export default RegistroProfesional;