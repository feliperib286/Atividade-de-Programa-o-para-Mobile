import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function Tres() {
  return (
    <View style={styles.container}>

      {/* Metade de cima: dividida em teal (esquerda) e skyblue (direita) */}
      <View style={styles.topRow}>
        <View style={styles.lime} />
        <View style={styles.direita} >
      <View style={styles.teal}/>
      <View style={styles.skyblue}/>
        </View>
        
      </View>

      {/* Metade de baixo: salmon (igual aos exercícios anteriores) */}
      <View style={styles.bottom} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection 'column' empilha os filhos um abaixo do outro (padrão)
    flexDirection: 'column',
    // paddingTop empurra o conteúdo para baixo da status bar do celular
    paddingTop: Constants.statusBarHeight,
  },
  topRow: {
    flex: 0.5, // ocupa 50% da tela
    // 'row' coloca os filhos LADO A LADO (esquerda → direita)
    flexDirection: 'row',
  },
  lime: {
    flex: 0.5, // ocupa 50% da largura do topRow (lado esquerdo)
    backgroundColor: 'lime',
  },
  direita: {
    flex: 0.5, flexDirection: "column" // ocupa 50% da largura do topRow (lado direito)
    
  },
  teal:{
    flex: 0.5, backgroundColor: 'teal'
  },
  skyblue:{
    flex:0.5, backgroundColor: 'skyblue'
  },
  bottom: {
    flex: 0.5, // ocupa os outros 50% da tela (metade de baixo)
    backgroundColor: 'salmon',
  },
});