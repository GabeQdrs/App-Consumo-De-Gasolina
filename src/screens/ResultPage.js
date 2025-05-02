import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ResultPage({ route, navigation }) {
  const { resultado } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultado</Text>
      <Text style={styles.text}>Média: {resultado.media} Km/L</Text>
      <Text style={styles.text}>Classificação: {resultado.classificacao}</Text>
      <Button title="Calcular Novamente" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  text: { fontSize: 18, marginBottom: 10 },
});