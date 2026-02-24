import { useState } from 'react';
import {
  View, Text, TextInput,
  TouchableOpacity, StyleSheet, SafeAreaView,
} from 'react-native';

export default function Sete() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [resultado, setResultado] = useState('');

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="exemplo@email.com"
        autoCapitalize="none"          // não coloca letra maiúscula automática
        autoComplete="email"           // sugere e-mails salvos no celular
        autoCorrect={false}            // desliga correção automática
        keyboardType="email-address"   // abre teclado com @ e .com
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true} // oculta os caracteres digitados (••••••)
        maxLength={8}          // limita a 8 caracteres
        placeholder="Senha"
      />

      {/* Dois botões lado a lado usando flexDirection row */}
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setResultado(`${email} - ${senha}`)}
        >
          <Text style={styles.buttonText}>Logar</Text>
        </TouchableOpacity>

        {/* Botão Cadastrar-se (sem ação por enquanto) */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar-se</Text>
        </TouchableOpacity>
      </View>

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
    justifyContent: 'center',
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    fontSize: 16,
    marginTop: 4,
  },
  row: {
    flexDirection: 'row', // coloca os botões lado a lado
    marginTop: 15,
    gap: 10,              // espaço entre os botões
  },
  button: {
    backgroundColor: '#f5a623',
    padding: 12,
    alignItems: 'center',
    flex: 1, // cada botão ocupa metade do espaço disponível
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