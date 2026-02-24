import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function Dois() {
  return (
    <View style={styles.container}>

      {/* Metade de cima: dividida em 2 colunas (lime | aquamarine) */}
      <View style={styles.topRow}>
        <View style={styles.lime} />
        <View style={styles.aquamarine} />
      </View>

      {/* Metade de baixo: salmon */}
      <View style={styles.bottom} />

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
    flexDirection: 'row',   // ← coloca os filhos lado a lado
  },
  lime: {
    flex: 0.5,
    backgroundColor: 'lime',
  },
  aquamarine: {
    flex: 0.5,
    backgroundColor: 'aquamarine',
  },
  bottom: {
    flex: 0.5,
    backgroundColor: 'salmon',
  },
});