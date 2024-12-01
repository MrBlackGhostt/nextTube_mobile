import React from 'react';
import { StyleSheet, View, Text, Pressable, SafeAreaView, useWindowDimensions } from 'react-native';
import Constants from 'expo-constants';

import YouTube from 'react-native-youtube-iframe';

import { useAppSelector } from '../hooks';
import { useNavigation } from '@react-navigation/native';

const CurrentVideo = () => {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  const videoDetail = useAppSelector((state) => state.videoClick);
console.log(`fkdhfkdf ${videoDetail.title}`)
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Current Video</Text>
      {videoDetail ? (
        <View className='h-[500] bg-blue-400'>
          <YouTube
            webViewStyle={styles.video}
            width={width}
            height={(width * 9) / 16}
            videoId={videoDetail.id} // YouTube video ID
            play={true}
            onChangeState={(state) => console.log(state)}
          />
          <View className=''>
            <Text style={styles.videoTitle}>{videoDetail.title}</Text>
          </View>
        </View>
      ) : (
        <Text style={styles.error}>No video selected.</Text>
      )}
      <Pressable style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Go Back</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  video: {
    backgroundColor: 'red',
  },
  controlsContainer: {
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  videoTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000', // Black for light theme
    textAlign: 'center',
    marginVertical: 10,
  },
  webview: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  error: {
    textAlign: 'center',
    color: 'red',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#ff4d4d',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CurrentVideo;
