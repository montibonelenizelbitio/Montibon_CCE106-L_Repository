import React, { useState } from 'react';
import { StyleSheet, View, TextInput, FlatList, Text, SafeAreaView, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { students } from '../data/studentsData';
import { StudentCard } from '../components/StudentCard';

export default function DirectoryScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  // Case-insensitive filtering gamit ang 'students' variable name
  const filteredStudents = (students || []).filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FDFBF7" />
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Student Directory</Text>
        
        {/* Search Bar Layout */}
        <TextInput
          style={styles.searchBar}
          placeholder="Search..."
          placeholderTextColor="#A0988E"
          value={searchQuery}
          onChangeText={setSearchQuery}
          clearButtonMode="while-editing"
        />

        {/* FlatList Section para sa Cpmponent Verification */}
        <FlatList
          data={filteredStudents}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <StudentCard
              student={item}
              onPress={() => router.push(`/students/${item.id}`)}
            />
          )}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}> Student Not Found. </Text>
            </View>
          }
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FDFBF7', 
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#2C2A29',
    marginBottom: 16,
    letterSpacing: -0.5,
  },
  searchBar: {
    height: 52,
    backgroundColor: '#F4EFE6', 
    borderRadius: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#2C2A29',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E6DEC9',
  },
  listContent: {
    paddingBottom: 30,
  },
  emptyContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  emptyText: {
    fontSize: 16,
    color: '#A0988E',
    fontWeight: '500',
  },
});
