import { View, Image, TouchableOpacity, Alert, StyleSheet } from 'react-native';
  import Constants from 'expo-constants';

const logo = require('../../assets/images/splash-icon.png');

export default function Cinco() {

  const handlePress = () => {
    // Alert do RN não funciona na web
    // alert() nativo funciona em qualquer lugar
    if (typeof window !== 'undefined') {
      window.alert('Boa noite!');      // web
    } else {
      Alert.alert('Teste', 'Boa noite!'); // celular
    }
  };
  return (
    <View style={styles.container}>

      {/* Metade de CIMA */}
      <View style={styles.topRow}>

        {/* Coluna ESQUERDA — lime */}
        <View style={styles.lime}>
          <TouchableOpacity onPress={handlePress}>
            <Image source={logo} style={styles.image} resizeMode="contain" />
          </TouchableOpacity>
        </View>

        {/* Coluna DIREITA — teal em cima, skyblue embaixo */}
        <View style={styles.direita}>

          <View style={styles.teal}>
            <TouchableOpacity onPress={handlePress}>
              <Image source={logo} style={styles.image} resizeMode="contain" />
            </TouchableOpacity>
          </View>

          <View style={styles.skyblue}>
            <TouchableOpacity onPress={handlePress}>
              <Image source={logo} style={styles.image} resizeMode="contain" />
            </TouchableOpacity>
          </View>

        </View>

      </View>

      {/* Metade de BAIXO — salmon */}
      <View style={styles.bottom}>
        <TouchableOpacity onPress={handlePress}>
          <Image source={logo} style={styles.image} resizeMode="contain" />
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: Constants.statusBarHeight,
  },
  topRow: {
    flex: 0.5,
    flexDirection: 'row',
  },
  lime: {
    flex: 0.5,
    backgroundColor: 'lime',
    alignItems: 'center',
    justifyContent: 'center',
  },
  direita: {
    flex: 0.5,
    flexDirection: 'column',
  },
  teal: {
    flex: 0.5,
    backgroundColor: 'teal',
    alignItems: 'center',
    justifyContent: 'center',
  },
  skyblue: {
    flex: 0.5,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    flex: 0.5,
    backgroundColor: 'salmon',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 64,
    height: 64,
  },
});