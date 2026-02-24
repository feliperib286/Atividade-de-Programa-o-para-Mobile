import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="screens/Um" options={{ title: 'Exercício 1' }} />
      <Stack.Screen name="screens/Dois" options={{ title: 'Exercício 2' }} />
      <Stack.Screen name="screens/Tres" options={{ title: 'Exercício 3' }} />
      <Stack.Screen name="screens/Quatro" options={{ title: 'Exercício 4' }} />
      <Stack.Screen name="screens/Cinco" options={{ title: 'Exercício 5' }} />
      <Stack.Screen name="screens/Seis" options={{ title: 'Exercício 6' }} />
      <Stack.Screen name="screens/Sete" options={{ title: 'Exercício 7' }} />
      <Stack.Screen name="screens/Oito" options={{ title: 'Exercício 8' }} />
      <Stack.Screen name="screens/Nove" options={{ title: 'Exercício 9' }} />
      <Stack.Screen name="screens/Dez" options={{ title: 'Exercício 10' }} />
    </Stack>
  );
}