import React from 'react';
import { TouchableOpacity, Share, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ShareButtonProps {
  title: string;
  message: string;
  url?: string;
}

export default function ShareButton({ title, message, url }: ShareButtonProps) {
  const handleShare = async () => {
    try {
      await Share.share({
        title,
        message: url ? `${message}\n${url}` : message,
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
      <Ionicons name="share-social" size={24} color="#FFD700" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  shareButton: {
    padding: 10,
  },
});