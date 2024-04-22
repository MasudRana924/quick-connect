import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
const Settings = () => {
    return (
        <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate('Home')} style={styles.container}>
        <Text style={styles.title}>Settings</Text>
      </Pressable>
    </View>
    );
};

export default Settings;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: '5%',
    },
    img: {
      width: '100%',
      height: 200,
      resizeMode: 'cover',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 10,
    },
    price: {
      fontSize: 18,
      marginTop: 10,
    },
    cardBox: {
      marginBottom: 30,
      paddingBottom: 20,
      borderRadius: 20,
      backgroundColor: 'white',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  
      elevation: 5,
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
    },
  });