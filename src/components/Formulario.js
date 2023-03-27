import { Modal, SafeAreaView, StyleSheet, Text } from 'react-native';

const Formulario = ({ modalVisible }) => {
  return (
    <Modal animationType="slide" visible={modalVisible}>
      <SafeAreaView style={styles.contenido}>
        <Text style={styles.titulo}>
          Nueva <Text style={styles.tituloBold}>Cita</Text>
        </Text>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  contenido: {
    backgroundColor: '#6D28D9',
    flex: 1,
  },
  titulo: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
    color: '#FFF',
  },
  tituloBold: {
    fontWeight: '900',
  },
});

export default Formulario;
