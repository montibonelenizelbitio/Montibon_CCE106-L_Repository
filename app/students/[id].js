import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { students } from '../../data/studentsData'; 

export default function StudentDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const student = students.find((s) => s.id === id);

  if (!student) {
    return (
      <SafeAreaView style={styles.centeredContext}>
        <Text style={styles.errorText}>Student Record Not Found</Text>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>Go Back</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FDFBF7" />
      <View style={styles.container}>
        
        {/* Custom Back Button UI (Subtle/Clean design) */}
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>⬅ Back to List</Text>
        </TouchableOpacity>

        {/* Profile Card Container */}
        <View style={styles.profileCard}>
          {/* Detail 1: Image Avatar (Dili masakit sa mata, naay humok nga border) */}
          <Image source={{ uri: student.image }} style={styles.largeAvatar} />

          {/* Detail 2: Full Name */}
          <Text style={styles.name}>{student.name}</Text>

          {/* Detail 3: Course/Major */}
          <Text style={styles.course}>{student.course}</Text>

          {/* Detail 4: Student ID Badge Requirement */}
          <View style={styles.idBadge}>
            <Text style={styles.idText}>Student ID: {student.id}</Text>
          </View>
        </View>

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
    padding: 24,
  },
  centeredContext: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDFBF7',
  },
  backButton: {
    alignSelf: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#F4EFE6', 
    borderRadius: 10,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#E6DEC9',
  },
  backButtonText: {
    color: '#7A7265', 
    fontWeight: '600',
    fontSize: 14,
  },
  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EAE5D9',
    shadowColor: '#8C826E',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },
  largeAvatar: {
    width: 130,
    height: 130,
    borderRadius: 65,
    marginBottom: 20,
    backgroundColor: '#EFECE6',
  },
  name: {
    fontSize: 24,
    fontWeight: '800',
    color: '#2C2A29', 
    textAlign: 'center',
  },
  course: {
    fontSize: 16,
    color: '#7A7265',
    textAlign: 'center',
    marginTop: 8,
    fontWeight: '500',
    lineHeight: 22,
  },
  idBadge: {
    backgroundColor: '#F4EFE6',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginTop: 24,
    borderWidth: 1,
    borderColor: '#E6DEC9',
  },
  idText: {
    fontSize: 13,
    color: '#7A7265',
    fontWeight: '600',
  },
  errorText: {
    fontSize: 18,
    color: '#D9534F',
    marginBottom: 16,
    fontWeight: '600',
  },
});
