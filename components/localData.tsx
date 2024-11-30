import React, { useEffect } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useWindowDimensions } from "react-native";
import { addVideo } from "@/features/posts/initialVideos";
import { YouTubeVideoItem } from "@/app/types";
import { useAppDispatch, useAppSelector } from "@/app/hooks";

const LocalData = () => {
    const {width} = useWindowDimensions()
    const dispatch = useAppDispatch();
    const posts = useAppSelector((state) => state.firstVideo);
  
    useEffect(() => {
      fetch(
        'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=bgmi 55 kill&type=video& key=&publishedAfter=2024-01-01T00:00:00Z'
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
    <View className="flex-2 gap-3 px-5 h-[300]  rounded-lg bg-slate-600" >
      <View>
        <Text className="text-2xl font-extrabold">Last Watch</Text>
      </View>
      <ScrollView horizontal={true}>
        <View className="gap-5" style={{ flexWrap: "wrap" }}>
        {posts.map((post) => (
        <View key={post.id} style={{width}}>
          <Image style={styles.thumbnail} source={{ uri: post.thumbnail }} />
          <Text className="w-3/5 text-ellipsis text-md font-medium text-white">{post.title}</Text>
        </View>
      ))}
        </View>
        <View></View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    thumbnail:{
        width:"20%",
        height:50,
        borderRadius:10
    }
});

export default LocalData;
