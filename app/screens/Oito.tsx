import { useState } from 'react';
import {
  View, Text, TextInput,
  TouchableOpacity, StyleSheet, SafeAreaView,
} from 'react-native';

export default function Oito() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState(''); // campo novo: confirmação
  const [resultado, setResultado] = useState('');

  return (
    // SafeAreaView como base da tela, centraliza o card
    <SafeAreaView style={styles.container}>

      {/* Card com moldura ao redor dos campos — width: 270 conforme exercício */}
      <View style={styles.card}>

        <Text style={styles.title}>CADASTRO</Text>

        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="exemplo@email.com"
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect={false}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
          maxLength={8}
          placeholder="Senha"
        />

        {/* Campo novo em relação ao Ex 7 */}
        <Text style={styles.label}>Confirmação da senha</Text>
        <TextInput
          style={styles.input}
          value={confirmSenha}
          onChangeText={setConfirmSenha}
          secureTextEntry={true}
          maxLength={8}
          placeholder="Confirme a senha"
        />

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setResultado(`${email} - ${senha} - ${confirmSenha}`)}
          >
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Logar</Text>
          </TouchableOpacity>
        </View>

        {resultado !== '' && (
          <Text style={styles.resultado}>{resultado}</Text>
        )}

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',    // centraliza o card horizontalmente
    justifyContent: 'center', // centraliza o card verticalmente
  },
  card: {
    borderWidth: 1,        // cria a moldura ao redor
    borderColor: '#ccc',
    padding: 16,
    width: 270,            // largura máxima de 270 conforme o exercício
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 10,
  },
  label: {
    fontSize: 12,
    color: '#333',
    marginTop: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 6,
    fontSize: 14,
    marginTop: 2,
  },
  row: {
    flexDirection: 'row',
    marginTop: 12,
    gap: 8,
  },
  button: {
    backgroundColor: '#f5a623',
    padding: 10,
    alignItems: 'center',
    flex: 1,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
  },
  resultado: {
    marginTop: 10,
    fontSize: 12,
    color: '#333',
  },
});