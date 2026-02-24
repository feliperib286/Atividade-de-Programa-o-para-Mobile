import { useState } from 'react';
import {
  View, Text, TextInput,
  TouchableOpacity, StyleSheet, SafeAreaView,
} from 'react-native';

export default function Seis() {
  // useState guarda o valor do campo e atualiza a tela quando muda
  // nome → valor atual | setNome → função para atualizar
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');

  // Estado que guarda o texto exibido depois de clicar em Salvar
  const [resultado, setResultado] = useState('');

  return (
    // SafeAreaView garante que o conteúdo não fique atrás da status bar ou notch
    <SafeAreaView style={styles.container}>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={nome}               // valor controlado pelo estado
        onChangeText={setNome}     // atualiza o estado a cada letra digitada
        placeholder="Digite seu nome"
      />

      <Text style={styles.label}>Idade</Text>
      <TextInput
        style={styles.input}
        value={idade}
        onChangeText={setIdade}
        keyboardType="numeric"     // abre o teclado numérico no celular
        placeholder="Digite sua idade"
      />

      {/* Ao clicar, monta o texto com nome e idade e salva no estado resultado */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => setResultado(`${nome} - ${idade}`)}
      >
        <Text style={styles.buttonText}>SALVAR</Text>
      </TouchableOpacity>

      {/* Só exibe o resultado se não estiver vazio */}
      {resultado !== '' && (
        <Text style={styles.resultado}>{resultado}</Text>
      )}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center', // centraliza tudo verticalmente
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,       // borda fina ao redor do campo
    borderColor: '#ccc',
    padding: 8,
    fontSize: 16,
    marginTop: 4,
  },
  button: {
    backgroundColor: '#3a9bd5',
    padding: 12,
    alignItems: 'center', // centraliza o texto do botão
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  resultado: {
    marginTop: 15,
    fontSize: 16,
    color: '#333',
  },
});