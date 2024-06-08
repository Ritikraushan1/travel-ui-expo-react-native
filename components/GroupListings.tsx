import { StyleSheet, View, Text, FlatList, ListRenderItem, Image } from 'react-native'
import React from 'react'
import { GroupType } from '@/type/GroupType'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'

const GroupListings = ({ listings }: { listings: GroupType[] }) => {
    const renderItems: ListRenderItem<GroupType> = ({ item }) => {
        return (
            <View style={styles.item}>
                <Image source={{ uri: item.image }} style={styles.images} />
                <View>
                    <Text style={[styles.itemTxt, { marginBottom: 5 }]}>{item.name}</Text>
                    <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
                        <Ionicons name='star' size={20} color={Colors.primaryColor} />
                        <Text style={styles.itemTxt}>{item.rating}</Text>
                        <Text style={styles.itemReviewsTxt}>({item.reviews})</Text>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View>
            <Text style={styles.title}>Top Travel Groups</Text>
            <FlatList data={listings} renderItem={renderItems} horizontal showsHorizontalScrollIndicator={false} />
        </View>
    )
}

export default GroupListings

const styles = StyleSheet.create({
    item: {
        backgroundColor: Colors.white,
        padding: 10,
        borderRadius: 10,
        marginRight: 20,
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
    },
    title: {
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 22,
        fontWeight: "600",
        color: Colors.black,
    },
    images: {
        height: 100,
        width: 80,
        borderRadius: 10,
    },
    itemTxt: {
        fontSize: 14,
        fontWeight: "600",
        color: Colors.black,
    },
    itemReviewsTxt: {
        fontSize: 14,
        fontWeight: "600",
        color: "#999",
    }
})