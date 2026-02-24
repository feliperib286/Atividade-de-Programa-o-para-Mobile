import { View, Image, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const logo = require('../../assets/images/splash-icon.png');

export default function Quatro() {
  return (
    <View style={styles.container}>

      {/* Metade de CIMA */}
      <View style={styles.topRow}>

        {/* Coluna ESQUERDA — lime inteiro */}
        <View style={styles.lime}>
          <Image source={logo} style={styles.image} resizeMode="contain" />
        </View>

        {/* Coluna DIREITA — teal em cima, skyblue embaixo */}
        <View style={styles.direita}>

          <View style={styles.teal}>
            <Image source={logo} style={styles.image} resizeMode="contain" />
          </View>

          <View style={styles.skyblue}>
            <Image source={logo} style={styles.image} resizeMode="contain" />
          </View>

        </View>

      </View>

      {/* Metade de BAIXO — salmon */}
      <View style={styles.bottom}>
        <Image source={logo} style={styles.image} resizeMode="contain" />
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
    width: '100%',
    flex: 1,
    alignSelf: 'center',
  },
});