import Colors from '@/constants/Colors';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { View } from 'react-native';


export default function Layout() {

  return (
    <Tabs screenOptions={{
      tabBarStyle:{
        backgroundColor: Colors.bgColor,
        borderTopWidth:0,
        padding:0,
        paddingBottom:10,
      },
      tabBarShowLabel:false,
      tabBarActiveTintColor: Colors.black,
      tabBarInactiveTintColor:"#999",
    }}>
      <Tabs.Screen name='index' options={{tabBarIcon:({color})=>(
        <Ionicons name='compass' size={28} color={color} />
      )}} />
      <Tabs.Screen name='category' options={{tabBarIcon:({color})=>(
        <MaterialIcons name='space-dashboard' size={28} color={color} />
      )}} />
      <Tabs.Screen name='search' options={{tabBarIcon:({color})=>(
        <View style={{backgroundColor:Colors.primaryColor, paddingHorizontal:16, paddingVertical:12, borderRadius:10, height:50}}>

        <Ionicons name='search-outline' size={24} color={Colors.white} />
        </View>
      )}} />
      <Tabs.Screen name='bookmarks' options={{tabBarIcon:({color})=>(
        <Ionicons name='bookmark' size={28} color={color} />
      )}} />
      <Tabs.Screen name='profile' options={{tabBarIcon:({color})=>(
        <FontAwesome name='user' size={28} color={color} />
      )}} />
    </Tabs>
  );
}
