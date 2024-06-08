import { StyleSheet, View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Stack } from 'expo-router'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import { useHeaderHeight } from "@react-navigation/elements"
import CategoryButton from '@/components/CategoryButton'
import listingData from "@/data/destinations.json"
import Listings from '@/components/Listings'
import groupdata from "@/data/groups.json"
import GroupListings from '@/components/GroupListings'

const index = () => {
  const headerHeight = useHeaderHeight();
  const [category, setCategory] = useState('All');
  const onCatChanged = (category: string) => {
    setCategory(category);
  }
  return (
    <>
      <Stack.Screen options={{
        headerTransparent: true,
        headerTitle: "",
        headerLeft: () => (
          <TouchableOpacity onPress={() => { }} style={{ marginLeft: 20 }}>
            <Image source={{
              uri: "https://xsgames.co/randomusers/avatar.php?g=female"
            }}
              style={{ height: 40, width: 40, borderRadius: 10 }} />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => { }}
            style={{
              marginRight: 20,
              backgroundColor: Colors.white,
              padding: 10,
              borderRadius: 10,
              shadowColor: "#171717",
              shadowOffset: { width: 4, height: 4 },
              shadowRadius: 3,
              shadowOpacity: 0.2,
            }}>
            <Ionicons name='notifications' size={20} color="black" />
          </TouchableOpacity>
        )
      }} />

      <View style={[styles.container, { paddingTop: headerHeight }]}>
        <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
          <Text style={styles.headingText}>Explore The Beautiful World!</Text>
          <View style={styles.searchSectionWrapper}>
            <View style={styles.searchBar}>
              <Ionicons name='search' size={18} />
              <TextInput placeholder='Search...' />
            </View>
            <TouchableOpacity onPress={() => { }}>
              <Ionicons name='options' size={28} color={Colors.white} style={{ backgroundColor: Colors.primaryColor, padding: 12, borderRadius: 10, }} />
            </TouchableOpacity>
          </View>
          <CategoryButton onCategoryChanged={onCatChanged} />
          <Listings listings={listingData} category={category} />
          <GroupListings listings={groupdata} />
        </ScrollView >
      </View>
    </>
  )
}

export default index
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.bgColor,
  },
  headingText: {
    fontSize: 28,
    fontWeight: "800",
    color: Colors.black,
    marginTop: 10,
  },
  searchSectionWrapper: {
    flexDirection: "row",
    marginVertical: 20,
    gap: 20,
    alignItems: "center"
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Colors.white,
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    gap: 5
  }
})
