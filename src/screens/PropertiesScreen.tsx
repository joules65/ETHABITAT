import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const PROPERTIES = [
  {
    id: '1',
    title: 'Luxury Villa',
    location: 'Lagos, Nigeria',
    price: '250 ETH',
    image: 'https://example.com/property1.jpg',
  },
  // Add more properties
];

export default function PropertiesScreen() {
  const renderProperty = ({ item }) => (
    <TouchableOpacity style={styles.propertyCard}>
      <Image
        source={{ uri: item.image }}
        style={styles.propertyImage}
      />
      <View style={styles.propertyInfo}>
        <Text style={styles.propertyTitle}>{item.title}</Text>
        <Text style={styles.propertyLocation}>{item.location}</Text>
        <Text style={styles.propertyPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={PROPERTIES}
        renderItem={renderProperty}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  listContainer: {
    padding: 16,
  },
  propertyCard: {
    backgroundColor: '#1A1A1A',
    borderRadius: 15,
    marginBottom: 20,
    overflow: 'hidden',
  },
  propertyImage: {
    width: '100%',
    height: 200,
  },
  propertyInfo: {
    padding: 15,
  },
  propertyTitle: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  propertyLocation: {
    fontSize: 16,
    color: '#888888',
    marginTop: 5,
  },
  propertyPrice: {
    fontSize: 18,
    color: '#FFD700',
    marginTop: 10,
    fontWeight: 'bold',
  },
});