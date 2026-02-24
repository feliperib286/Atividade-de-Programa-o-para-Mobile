import { useState } from 'react';
import {
  View, Text, TextInput,
  TouchableOpacity, StyleSheet, SafeAreaView,
} from 'react-native';

// Picker é uma biblioteca externa — instale com:
// npx expo install @react-native-picker/picker
import { Picker } from '@react-native-picker/picker';

export default function Nove() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');

  // Estado do Picker — valor padrão é 'manager' (Gestor)
  const [perfil, setPerfil] = useState('manager');

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

        {/* Campo novo: Picker (select/dropdown) de perfil */}
        <Text style={styles.label}>Perfil</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={perfil}              // valor atual selecionado
            onValueChange={(value) => setPerfil(value)} // atualiza ao escolher
          >
            {/* Cada Picker.Item é uma opção do dropdown */}
            {/* label = texto exibido | value = valor salvo no estado */}
            <Picker.Item label="Administrador" value="admin" />
            <Picker.Item label="Gestor"        value="manager" />
            <Picker.Item label="Usuário"       value="user" />
          </Picker>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              setResultado(`${email} - ${senha} - ${confirmSenha} - ${perfil}`)
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
    borderWidth: 1,  // borda ao redor do Picker para combinar com os inputs
    borderColor: '#ccc',
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