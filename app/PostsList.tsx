import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { addVideo } from '@/features/posts/initialVideos';
import { YouTubeVideoItem } from './types';

const PostsList = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.firstVideo);

  useEffect(() => {
    fetch(
     
    )
      .then(async (res) => {
        const resData = await res.json();
        if (resData && Array.isArray(resData.items)) {
          const filteredData = resData.items.map((item: YouTubeVideoItem) => ({
            id: item.id.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.high.url,
          }));
          dispatch(addVideo(filteredData));
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [dispatch]);

  return (
    <View style={styles.container}>
      {posts.map((post) => (
        <View key={post.id} style={styles.postContainer}>
          <Image style={styles.thumbnail} source={{ uri: post.thumbnail }} />
          <Text style={styles.title}>{post.title}</Text>
        </View>
      ))}
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    gap: 10,
  },
  postContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 10,
  },
  thumbnail: {
    width: width / 3,
    height: width / 5,
    borderRadius: 8,
  },
  title: {
    flex: 1,
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    flexWrap: 'wrap',
  },
});

export default PostsList;
