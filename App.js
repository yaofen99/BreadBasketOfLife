import React from 'react';
import { StyleSheet, View, Text, ScrollView, StatusBar, TextInput, Button, Dimensions } from 'react-native';

// Get the device's width and height
const { width, height } = Dimensions.get('window');

export default function App() {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <ScrollView style={styles.scrollView}>
                <View style={styles.searchBar}>
                    <TextInput placeholder="Search" style={styles.searchInput} />
                    <Button title="Search" onPress={() => {}} />
                </View>

                <View style={styles.banner}>
                    <Text style={styles.bannerText}>Banner Text</Text>
                </View>

                {/* ... rest of your layout */}
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'white',
    },
    searchBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    searchInput: {
        borderWidth: 1,
        borderColor: 'grey',
        flex: 1,
        marginRight: 10,
        paddingHorizontal: 10,
    },
    banner: {
        alignItems: 'center',
        justifyContent: 'center',
        height: height * 0.1, // 25% of the screen height
        backgroundColor: '#000', // Replace with your banner image
    },
    bannerText: {
        color: 'white',
        fontSize: width * 0.08, // Font size is 5% of the screen width
    },
    // ... rest of your styles
});
