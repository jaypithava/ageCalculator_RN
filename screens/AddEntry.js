import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import PushNotification from 'react-native-push-notification';

const AddEntry = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);

  const scheduleNotification = () => {
    PushNotification.localNotificationSchedule({
      message: 'Scheduled Notification',
      date: selectedTime, // Use the selected time
      allowWhileIdle: true, // Allow notification to be triggered while the app is in the background
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Entry</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={text => setDescription(text)}
      />
      <TouchableOpacity onPress={() => setTimePickerVisible(true)}>
        <Text style={styles.dateLabel}>Time:</Text>
        <Text style={styles.selectedDate}>
          {selectedTime.toLocaleTimeString()}
        </Text>
        <Icon name="access-time" size={24} color="black" />
      </TouchableOpacity>
      <Button title="Schedule Notification" onPress={scheduleNotification} />
      {isTimePickerVisible && (
        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={selectedTime => {
            setSelectedTime(selectedTime);
            setTimePickerVisible(false);
            scheduleNotification(); // Schedule notification immediately after selecting time
          }}
          onCancel={() => setTimePickerVisible(false)}
        />
      )}
    </View>
  );
};

export default AddEntry;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'blue',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  dateLabel: {
    marginRight: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  selectedDate: {
    flex: 1,
    color: 'white',
  },
});
