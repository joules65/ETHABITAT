import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ListPropertyScreen() {
  const [propertyData, setPropertyData] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
    images: [],
  });

  const handleSubmit = () => {
    // Implement property listing submission
    console.log('Property listing submitted:', propertyData);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>List Your Property</Text>
      
      <TouchableOpacity style={styles.imageUpload}>
        <Ionicons name="camera" size={32} color="#FFD700" />
        <Text style={styles.imageUploadText}>Add Property Images</Text>
      </TouchableOpacity>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Property Title"
          placeholderTextColor="#666666"
          value={propertyData.title}
          onChangeText={(text) => setPropertyData({...propertyData, title: text})}
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Description"
          placeholderTextColor="#666666"
          multiline
          numberOfLines={4}
          value={propertyData.description}
          onChangeText={(text) => setPropertyData({...propertyData, description: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="Price in ETH"
          placeholderTextColor="#666666"
          keyboardType="numeric"
          value={propertyData.price}
          onChangeText={(text) => setPropertyData({...propertyData, price: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="Location"
          placeholderTextColor="#666666"
          value={propertyData.location}
          onChangeText={(text) => setPropertyData({...propertyData, location: text})}
        />

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>List Property</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#FFD700',
    marginBottom: 20,
    textAlign: 'center',
  },
  imageUpload: {
    backgroundColor: '#1A1A1A',
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  imageUploadText: {
    color: '#FFD700',
    marginTop: 10,
  },
  form: {
    gap: 15,
  },
  input: {
    backgroundColor: '#1A1A1A',
    borderRadius: 10,
    padding: 15,
    color: '#FFFFFF',
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#FFD700',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});