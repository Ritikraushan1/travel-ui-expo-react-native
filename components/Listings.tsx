import { View, StyleSheet, Text, FlatList, Image, ListRenderItem, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ListingType } from '@/type/ListingType'
import Colors from '@/constants/Colors'
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'

type Props = {
    listings: any[];
    category: string
}

const Listings = ({ listings, category }: Props) => {
    const [loading, setLoading] = useState(false);

    useEffect(()=>{},[category])

    const renderItems: ListRenderItem<ListingType> = ({ item }) => {
        return (
            <Link href={`/listing/${item.id}`} asChild>
                <TouchableOpacity>
                    <View style={styles.item}>
                        <Image source={{
                            uri: item.image,
                        }}
                            style={styles.image} />
                        <View style={styles.bookmark}>
                            <Ionicons name='bookmark-outline' size={20} color={Colors.white} />
                        </View>
                        <Text style={styles.itemTxt} numberOfLines={1} ellipsizeMode='tail'>{item.name}</Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
                                <FontAwesome5 name='map-marker-alt' size={18} color={Colors.primaryColor} />
                                <Text style={{ fontSize: 15 }}>{item.location}</Text>
                            </View>
                            <Text style={styles.itemPriceText}>${item.price}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </Link >
        )
    }

    return (
        <View>
            <FlatList data={listings} renderItem={renderItems} horizontal showsHorizontalScrollIndicator={false} />
        </View>
    )
}

export default Listings

const styles = StyleSheet.create({
    item: {
        backgroundColor: Colors.white,
        padding: 10,
        borderRadius: 10,
        marginRight: 20,
        width: 220,
    },
    image: {
        height: 200,
        width: 200,
        borderRadius: 10,
        marginBottom: 30,
    },
    bookmark: {
        position: "absolute",
        top: 185,
        right: 30,
        backgroundColor: Colors.primaryColor,
        padding: 8,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: Colors.white,
    },
    itemTxt: {
        fontSize: 16,
        fontWeight: "600",
        color: Colors.black,
        marginBottom: 10,
    },
    itemPriceText: {
        fontSize: 15,
        color: Colors.primaryColor,
        fontWeight: "600"
    }
})

