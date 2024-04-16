import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';

const HomeScreen = ({navigation}) => {
  const [reminders, setReminders] = useState([]);

  const renderReminder = ({item}) => (
    <View style={styles.container}>
      <Text style={styles.reminderText}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.reminderHeaderText}>Reminder</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AddEntry');
          }}>
          <Text style={styles.plusIcon}>+</Text>
        </TouchableOpacity>
      </View>
      {reminders.length > 0 ? (
        <FlatList
          data={reminders}
          renderItem={renderReminder}
          keyExtractor={item => item.id.toString()}
        />
      ) : (
        <View style={styles.noReminderContainer}>
          <Text style={styles.noReminderText}>No Reminder</Text>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'blue',
    height: 50,
    borderRadius: 10,
    marginTop: 2,
    paddingHorizontal: 10,
  },
  reminderHeaderText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  reminderText: {
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'blue',
  },
  noReminderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noReminderText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'blue',
  },
  plusIcon: {
    fontWeight: 'bold',
    fontSize: 28,
    color: 'white',
  },
});
