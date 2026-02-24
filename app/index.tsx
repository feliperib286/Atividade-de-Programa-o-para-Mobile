import { useRouter } from 'expo-router';
import {
  View, Text, Image,
  TouchableOpacity, StyleSheet,
  SafeAreaView, ScrollView,
} from 'react-native';

const screens = [
  { label: 'Um',     route: '/screens/Um' },
  { label: 'Dois',   route: '/screens/Dois' },
  { label: 'Três',   route: '/screens/Tres' },
  { label: 'Quatro', route: '/screens/Quatro' },
  { label: 'Cinco',  route: '/screens/Cinco' },
  { label: 'Seis',   route: '/screens/Seis' },
  { label: 'Sete',   route: '/screens/Sete' },
  { label: 'Oito',   route: '/screens/Oito' },
  { label: 'Nove',   route: '/screens/Nove' },
  { label: 'Dez',    route: '/screens/Dez' },
];

export default function Home() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Image
          source={require('../assets/images/logofatec.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>HOME</Text>
        <View style={styles.grid}>
          {screens.map((item) => (
            <TouchableOpacity
              key={item.label}
              style={styles.button}
              onPress={() => router.push(item.route as any)}
            >
              <Text style={styles.buttonText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#00FF00' },
  scroll: { alignItems: 'center', paddingVertical: 20 },
  logo: { width: 140, height: 140 },
  title: { fontSize: 22, fontWeight: 'bold', marginVertical: 12 },
  grid: {
    flexDirection: 'row', flexWrap: 'wrap',
    justifyContent: 'center', width: '80%',
  },
  button: {
    backgroundColor: '#f5a623', width: '45%',
    margin: 5, paddingVertical: 14,
    alignItems: 'center', borderRadius: 4,
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 15 },
});