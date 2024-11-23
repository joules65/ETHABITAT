import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CONTRACTS = [
  {
    id: '1',
    title: 'Purchase Agreement',
    property: 'Luxury Villa',
    status: 'Pending',
    expiryDate: '2024-12-31',
  },
  // Add more contracts
];

export default function ContractsScreen() {
  const renderContract = ({ item }) => (
    <TouchableOpacity style={styles.contractCard}>
      <View style={styles.contractHeader}>
        <Text style={styles.contractTitle}>{item.title}</Text>
        <Text style={[styles.contractStatus, 
          item.status === 'Active' ? styles.statusActive : styles.statusPending]}>
          {item.status}
        </Text>
      </View>
      <Text style={styles.propertyName}>{item.property}</Text>
      <Text style={styles.expiryDate}>Expires: {item.expiryDate}</Text>
      
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="create-outline" size={20} color="#FFD700" />
          <Text style={styles.actionText}>Sign</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="refresh-outline" size={20} color="#FFD700" />
          <Text style={styles.actionText}>Renew</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={CONTRACTS}
        renderItem={renderContract}
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
  contractCard: {
    backgroundColor: '#1A1A1A',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },
  contractHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  contractTitle: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  contractStatus: {
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  statusActive: {
    backgroundColor: '#1a472a',
    color: '#2ecc71',
  },
  statusPending: {
    backgroundColor: '#4a3506',
    color: '#FFD700',
  },
  propertyName: {
    color: '#888888',
    marginBottom: 5,
  },
  expiryDate: {
    color: '#666666',
    fontSize: 12,
    marginBottom: 15,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 20,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  actionText: {
    color: '#FFD700',
    fontSize: 14,
  },
});