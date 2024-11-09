import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  const [liked, setLiked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <LinearGradient
      colors={['rgba(255,255,255,1)', 'rgba(157,110,196,1)']}
      style={styles.container}
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 0 }}
    >
      <Image
        source={{ uri: 'https://i.scdn.co/image/ab67616d0000b273f342e70aacda9d78cfb6ce7a' }}
        style={styles.albumImage}
      />
      <Text style={styles.songTitle}>Las de la intuición</Text>
      <Text style={styles.artist}>Shakira</Text>

      
      <TouchableOpacity onPress={toggleLike} style={styles.likeButton}>
        <FontAwesome name="heart" size={30} color={liked ? 'red' : 'gray'} />
      </TouchableOpacity>

      
      <View style={styles.spacing}></View>

      
      <View style={styles.controls}>
        <TouchableOpacity onPress={() => console.log('Retroceder')}>
          <FontAwesome name="backward" size={30} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={togglePlay} style={styles.playButton}>
          <FontAwesome name={isPlaying ? 'pause' : 'play'} size={30} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log('Avanzar')}>
          <FontAwesome name="forward" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  albumImage: {
    width: 300,  
    height: 300, 
    marginBottom: 20,
    borderRadius: 10, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  songTitle: {
    color: '#333',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  artist: {
    color: '#888',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  likeButton: {
    marginTop: 15,
  },
  spacing: {
    height: 20, 
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20,
  },
  playButton: {
    marginHorizontal: 20,
  },
});
