import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, paddingTop: 50, paddingHorizontal: 20 }}>
      {/* Primer contenedor (barra de navegación) */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#111f32', height: 60, paddingHorizontal: 30 }}>
        {/* Botón de menú */}
        <TouchableOpacity onPress={() => navigation.navigate('config')}>
          <Text style={{ color: 'white', fontSize: 20 }}>☰</Text>
        </TouchableOpacity>

        {/* Texto genérico en el centro */}
        <Text style={{ color: 'white', fontSize: 18 }}>StarPour</Text>

        {/* Espacio en blanco del lado derecho, puedes poner un botón aquí si es necesario */}
        <View style={{ width: 50 }}></View>
      </View>

      {/* Texto de bienvenida */}
      <View style={{ marginTop: 20, alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>¡Bienvenido!</Text>
      </View>

      {/* Texto normal */}
      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <Text>El control de tus necesidades, al alcance de tu mano</Text>
      </View>

      {/* Card centrada horizontal y verticalmente */}
      <View style={{ alignSelf: 'center', backgroundColor: '#111f32', borderRadius: 10, padding: 20, marginTop: 20, alignItems: 'center', justifyContent: 'center', width: '80%', height: 200 }}>
        {/* Apartado de texto */}
        <Text style={{ color: 'white', fontSize: 16, marginBottom: 10 }}>Estado del contenedor #1</Text>
        
        {/* Apartado de número */}
        <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>12/34</Text>
      </View>

      {/* Segundo contenedor */}
      <View style={{ alignSelf: 'center', backgroundColor: '#111f32', borderRadius: 10, padding: 20, marginTop: 20, alignItems: 'center', justifyContent: 'center', width: '80%', height: 200 }}>
        {/* Apartado de texto */}
        <Text style={{ color: 'white', fontSize: 16, marginBottom: 10 }}>Estado del contenedor #2</Text>
        
        {/* Apartado de número */}
        <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>5/14</Text>
      </View>

      {/* Texto normal debajo del último contenedor */}
      <View style={{ alignItems: 'center', marginTop: 100, marginBottom: 40 }}>
        <Text>Historial de dispensación</Text>
      </View>

      {/* Tabla de una columna y dos filas */}
      <View style={{ alignItems: 'center' }}>
        <View style={{ borderWidth: 1, borderRadius: 10, padding: 10, marginTop: 10 }}>
          {/* Fila 1 */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, paddingVertical: 5 }}>
            <Text>Clonazepam, hace 3 horas</Text>
          </View>

          {/* Fila 2 */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 5 }}>
            <Text>TeEntraMiTrozón, hace 20 minutos</Text>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={{ backgroundColor: '#111f32', height: 60, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
        <Text style={{ color: 'white', fontSize: 18 }}>Desarrollos Mojoncio @2024</Text>
      </View>

      {/* Contenido de la pantalla de inicio */}
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Contenido de la pantalla de inicio</Text>
      </View>
    </View>
  );
};

export default HomeScreen;