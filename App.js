import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Formulario from './src/components/Formulario';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const nuevaCitaHandler = () => {
    setModalVisible((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Administrador de citas{' '}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>
      <Pressable style={styles.btnNuevaCita} onPress={nuevaCitaHandler}>
        <Text style={styles.btnTextoNuevaCita}>Nueva cita</Text>
      </Pressable>
      <Formulario modalVisible={modalVisible} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    flex: 1,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
  },
  tituloBold: {
    fontWeight: '900',
    color: '#6D28D9',
  },
  btnNuevaCita: {
    backgroundColor: '#6D28D9',
    padding: 20,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  btnTextoNuevaCita: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
});

export default App;
