

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation} from "@react-navigation/native";
import ToastContainer, { Toast } from "toastify-react-native";

const PaymentScreen = ({ route }) => {
  const { selectedSeats, totalAmount } = route.params;
  const navigation = useNavigation();

  const handlePayment = () => {
    Toast.success("Ödemeniz başarıyla gerçekleşti!");
    setTimeout(() => {     
      navigation.navigate("Main");
    }, 5000);
   
  };

  return (
    <View style={styles.container}>
     <ToastContainer
          position="top"
          autoClose={5000}
          style={{ backgroundColor: "orange" }}
        />
      <Text style={styles.paymentInfoText}>Seçilen Koltuklar:</Text>
      <View style={styles.selectedSeatsContainer}>
        {selectedSeats.map((seat, index) => (
          <Text key={index} style={styles.selectedSeatText}>
            {seat}
          </Text>
        ))}
      </View>
      <Text style={styles.paymentInfoText}>Toplam Ödeme Miktarı: {totalAmount} TL</Text>
      <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>
        <Text style={styles.paymentButtonText}>Öde</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  paymentInfoText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  selectedSeatsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  selectedSeatText: {
    fontSize: 16,
    marginRight: 10,
  },
  paymentButton: {
    backgroundColor: "#FFA500",
    borderRadius: 5,
    padding: 10,
  },
  paymentButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default PaymentScreen;
