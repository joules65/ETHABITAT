import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TRANSACTIONS = [
  {
    id: '1',
    type: 'purchase',
    property: 'Luxury Villa',
    amount: '250 ETH',
    date: '2024-01-15',
    status: 'completed',
  },
  // Add more transactions
];

export default function HistoryScreen() {
  const renderTransaction = ({ item }) => (
    <View style={styles.transactionCard}>
      <View style={styles.iconContainer}>
        <Ionicons
          name={item.type === 'purchase' ? 'arrow-down' : 'arrow-up'}
          size={24}
          color={item.type === 'purchase' ? '#2ecc71' : '#FFD700'}
        />
      </View>
      
      <View style={styles.transactionInfo}>
        <Text style={styles.propertyName}>{item.property}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>

      <View style={styles.amountContainer}>
        <Text style={styles.amount}>{item.amount}</Text>
        <Text style={[styles.status, 
          item.status === 'completed' ? styles.statusCompleted : styles.statusPending]}>
          {item.status}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={TRANSACTIONS}
        renderItem={renderTransaction}
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
  transactionCard: {
    flexDirection: 'row',
    backgroundColor: '#1A1A1A',
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#2a2a2a',
    borderRadius: 25,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  transactionInfo: {
    flex: 1,
  },
  propertyName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  date: {
    color: '#666666',
    fontSize: 12,
  },
  amountContainer: {
    alignItems: 'flex-end',
  },
  amount: {
    color: '#FFD700',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  status: {
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },
  statusCompleted: {
    backgroundColor: '#1a472a',
    color: '#2ecc71',
  },
  statusPending: {
    backgroundColor: '#4a3506',
    color: '#FFD700',
  },
});