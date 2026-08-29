StatCard.js

import { StyleSheet, Text, View } from 'react-native';

export default function StatCard(props) {
  return (
    <View style={[styles.card, { backgroundColor: props.bgColor }]}>
      {/* Fixed: Changed <div> to <View> so it works natively */}
      <View style={styles.headerRow}>
        <Text style={styles.title}>{props.title}</Text>
        {props.emoji && <Text style={styles.icon}>{props.emoji}</Text>}
      </View>
      <Text style={styles.value}>{props.value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 22, 
    borderRadius: 16, 
    marginVertical: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    color: '#ffffff',
    fontWeight: '700', 
    textTransform: 'uppercase', 
    letterSpacing: 0.5,
  },
  icon: {
    fontSize: 20,
  },
  value: {
    fontSize: 32, 
    color: '#ffffff',
    fontWeight: '800',
    marginTop: 8,
    textAlign: 'left',
  },
});
