import { useState } from 'react';
import {
  View, Text, TextInput,
  TouchableOpacity, Switch, StyleSheet, SafeAreaView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Dez() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');
  const [perfil, setPerfil] = useState('manager');

  // Estado do Switch — false = desligado | true = ligado
  const [logado, setLogado] = useState(false);

  const [resultado, setResultado] = useState('');

  return (
    <SafeAreaView style={styles.container}>
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

        <Text style={styles.label}>Confirmação da senha</Text>
        <TextInput
          style={styles.input}
          value={confirmSenha}
          onChangeText={setConfirmSenha}
          secureTextEntry={true}
          maxLength={8}
          placeholder="Confirme a senha"
        />

        <Text style={styles.label}>Perfil</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={perfil}
            onValueChange={(value) => setPerfil(value)}
          >
            <Picker.Item label="Administrador" value="admin" />
            <Picker.Item label="Gestor"        value="manager" />
            <Picker.Item label="Usuário"       value="user" />
          </Picker>
        </View>

        {/* Campo novo: Switch (toggle) para manter conectado */}
        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>Manter-se conectado</Text>

          <Switch
            value={logado}                        // estado atual (true/false)
            onValueChange={(val) => setLogado(val)} // atualiza ao tocar

            // trackColor = cor da trilha do switch
            // false = cor quando desligado | true = cor quando ligado
            trackColor={{ false: '#e77878', true: '#94df83' }}

            // thumbColor = cor da bolinha do switch
            // muda de cor dependendo se está ligado ou não
            thumbColor={logado ? '#47eb22' : '#ed1111'}
          />
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              setResultado(
                `${email} - ${senha} - ${confirmSenha} - ${perfil} - ${logado ? 'sim' : 'não'}`
              )
            }
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 16,
    width: 270,
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
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop: 2,
  },
  switchRow: {
    flexDirection: 'row',          // label e switch lado a lado
    alignItems: 'center',          // alinha verticalmente ao centro
    justifyContent: 'space-between', // label na esquerda, switch na direita
    marginTop: 12,
  },
  switchLabel: {
    fontSize: 13,
    color: '#333',
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