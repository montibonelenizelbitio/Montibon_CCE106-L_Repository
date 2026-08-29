App.js

import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import StatCard from './components/StatCard';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>⚡ Executive Insights</Text>
        
        <StatCard 
          title="Total Users" 
          value="1,240" 
          bgColor="#3b82f6" //Blue
          emoji="👥"
        />
        
        <StatCard 
          title="Revenue" 
          value="$12,450" 
          bgColor="#10b981" //Green
          emoji="💰"
        />
        
        <StatCard 
          title="Pending Issues" 
          value="3" 
          bgColor="#ef4444" //Red
          emoji="⚠️"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0f172a', //dark background
  },
  container: {
    padding: 24,
  },
  header: {
    fontSize: 26,
    fontWeight: '800',
    marginBottom: 16,
    color: '#f8fafc',
    textAlign: 'left',
  },
});
