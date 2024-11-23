import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AssetsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Digital Assets</Text>
        <TouchableOpacity style={styles.tradeButton}>
          <Text style={styles.tradeButtonText}>Trade</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.assetCard}>
        <View style={styles.assetHeader}>
          <Ionicons name="home" size={24} color="#FFD700" />
          <Text style={styles.assetTitle}>Property Tokens</Text>
        </View>
        <Text style={styles.assetValue}>2.5 REALT</Text>
        <Text style={styles.assetPrice}>≈ $5,000 USD</Text>
      </View>

      <View style={styles.assetCard}>
        <View style={styles.assetHeader}>
          <Ionicons name="business" size={24} color="#FFD700" />
          <Text style={styles.assetTitle}>Real Estate NFTs</Text>
        </View>
        <Text style={styles.assetValue}>3 NFTs</Text>
        <Text style={styles.assetPrice}>≈ $12,000 USD</Text>
      </View>

      <View style={styles.conversionSection}>
        <Text style={styles.sectionTitle}>Quick Convert</Text>
        <View style={styles.conversionCard}>
          <View style={styles.currencyInput}>
            <Text style={styles.currencyLabel}>From</Text>
            <TextInput
              style={styles.input}
              placeholder="0.00"
              placeholderTextColor="#666666"
              keyboardType="numeric"
            />
            <TouchableOpacity style={styles.currencySelector}>
              <Text style={styles.currencyText}>ETH</Text>
              <Ionicons name="chevron-down" size={20} color="#FFD700" />
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity style={styles.swapButton}>
            <Ionicons name="swap-vertical" size={24} color="#FFD700" />
          </TouchableOpacity>

          <View style={styles.currencyInput}>
            <Text style={styles.currencyLabel}>To</Text>
            <TextInput
              style={styles.input}
              placeholder="0.00"
              placeholderTextColor="#666666"
              keyboardType="numeric"
            />
            <TouchableOpacity style={styles.currencySelector}>
              <Text style={styles.currencyText}>USD</Text>
              <Ionicons name="chevron-down" size={20} color="#FFD700" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}