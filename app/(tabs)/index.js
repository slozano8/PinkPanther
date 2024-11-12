import { Image, StyleSheet, } from 'react-native';



import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/pinkPanther.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome! Pink Panther Team.</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}




const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 5,
    marginBottom: 5,
  },
  reactLogo: {
    width: '100%',
    height: 100, 
    resizeMode: 'contain', 
  },
});
