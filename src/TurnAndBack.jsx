import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";

const TurnAndBack = () => {
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [travelDate, setTravelDate] = useState(new Date()); 
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedFromLocation, setSelectedFromLocation] = useState("");
  const [selectedToLocation, setSelectedToLocation] = useState("");

  const navigation = useNavigation();

  const handleSearch = () => {
    navigation.navigate("SelectSeat", {
      fromLocation: selectedFromLocation, 
      toLocation: selectedToLocation, 
      travelDate: travelDate,
    });
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const hideDatepicker = () => {
    setShowDatePicker(false);
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || travelDate;
    setTravelDate(currentDate);
    hideDatepicker();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>NEREDEN:</Text>
      <TextInput
        style={styles.input}
        placeholder="Nereden"
        value={fromLocation}
        onChangeText={(text) => setFromLocation(text)}
      />

      <Text style={styles.label}>NEREYE:</Text>
      <TextInput
        style={styles.input}
        placeholder="Nereye"
        value={toLocation}
        onChangeText={(text) => setToLocation(text)}
      />

      <Text style={styles.label}>TARİH:</Text>
      <View style={styles.dateInputContainer}>
        <TextInput
          style={styles.dateInput}
          placeholder="Tarih"
          value={travelDate.toDateString()} 
          onFocus={showDatepicker}
        />
        <Button title="Tarih Seç" onPress={showDatepicker} />
      </View>

      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={travelDate} 
          mode="date"
          is24Hour={true}
          display="default"
          onChange={handleDateChange}
        />
      )}

      <Button title="Rezervasyonu Ara" onPress={handleSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 16,
    fontSize: 16,
  },
  dateInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  dateInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
});

export default TurnAndBack;
