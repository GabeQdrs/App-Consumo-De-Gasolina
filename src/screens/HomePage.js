import { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';


export default function HomeScreen({ navigation }) {
  const [km, setKm] = useState('');
  const [litros, setLitros] = useState('');

  const calcularMedia = () => {
    const kmNumber = parseFloat(km);
    const litrosNumber = parseFloat(litros);
    const media = kmNumber / litrosNumber;

    navigation.navigate('Resultado', { media });
  };

  return (
    <View style={styles.container}>
      <Image source={ponteiro} style={styles.image} /> 
      <Text style={styles.label}>Quilometragem Percorrida (Km):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={km}
        onChangeText={setKm}
      />

      <Text style={styles.label}>Litros de Gasolina Consumidos:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={litros}
        onChangeText={setLitros}
      />

      <Button title="Calcular" onPress={calcularMedia} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
});