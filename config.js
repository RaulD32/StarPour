

import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
const Separator = () => <View style={styles.separator} />;
import React, { useState } from 'react';
import { DateTimePicker } from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';




export default function Config() {
    const navigation = useNavigation();
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  return (
    <View style={styles.container}>
      <View style={styles.butons}>
        <TouchableOpacity style={styles.backbutton1} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.textoboton1}>Cancelar </Text> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.backbutton2} onPress={() => navigation.navigate('alarma')}>
         <Text style={styles.textoboton1}>Siguiente </Text> 
        </TouchableOpacity>
      </View>
      <View style={styles.contenedor} >
        <Text style={styles.texto}>Cuándo</Text>
        <View style={styles.contenido}>
          <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('alarma')}>
            <Text style={styles.textoboton}>Amanecer</Text>
          </TouchableOpacity>
          <Separator />
          <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('alarma')}>
            <Text style={styles.textoboton}>
              Atardecer
            </Text>
          </TouchableOpacity>
          <Separator />
          <TouchableOpacity style={styles.boton} onPress={() => setOpen(true) } >
            <Text style={styles.textoboton}>
              Hora del día
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contenedor2}>
          <Text>Repetir</Text>
          <View style={styles.contenido}>
            <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('alarma')}>
              <Text style={styles.textoboton}>Diariamente</Text>
            </TouchableOpacity>
            <Separator />
            <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('alarma')}>
              <Text style={styles.textoboton}>
                Semanalmente
              </Text>
            </TouchableOpacity>
            <Separator />
            <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('alarma')} >
              <Text style={styles.textoboton}>
                Mensualmente
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.contenedor3} >
            <View style={styles.contenido2}>
              <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('alarma')}>
                <Text style={styles.textoboton}>
                  Ejecutar después de confirmar
                </Text>
              </TouchableOpacity>
              <Separator></Separator>
              <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('alarma')}>
                <Text style={styles.textoboton}>
                  Ejecutar de inmediato
                </Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  butons:{
    flexDirection: 'row',
    marginTop:75
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  contenedor: {
    marginLeft: 25,
    top: 30,
    fontSize: 14,

  },
  texto: {
    fontSize: 25,
    fontWeight: 'bold',

  },
  contenido: {
    backgroundColor: '#06a7cc',
    borderRadius: 6,
    height: 150,
    width: 370,
    top: 30
  },
  textoboton: {
    fontSize: 20,
    color: 'white',
    marginLeft: 5
  },
  boton: {
    marginTop: 15,
    paddingBottom: 10,
    width: 370,

  },
  separator: {
    borderBottomColor: '#111f32',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  contenedor2: {
    marginTop: 100

  },
  contenedor3: {
    marginTop: 30
  },
  contenido2: {
    backgroundColor: '#06a7cc',
    borderRadius: 6,
    height: 100,
    width: 370,
    top: 30
  },
  backbutton1:{
    marginLeft:25
  },
  backbutton2:{
    marginLeft:230
  },
  textoboton1: {
    fontSize: 15,
    fontWeight:'bold',
    color:'blue'
  },

});

