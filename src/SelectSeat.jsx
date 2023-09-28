import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import ToastContainer, { Toast } from "toastify-react-native";
import { logOut } from "../auth/Firebase";
import { useNavigation } from "@react-navigation/native";



const SelectSeat = ({ route }) => {
  const { fromLocation, toLocation, travelDate } = route.params;
  const [items, setItems] = useState([700]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [genders, setGenders] = useState({
    button1: "",
    button2: "",
    button3: "",
    button4: "",
    button5: "",
    button6: "",
    button7: "",
    button8: "",
    button9: "",
    button10: "",
    button11: "",
    button12: "",
    button13: "",
    button14: "",
    button15: "",
    button16: "",
    button17: "",
    button18: "",
    button19: "",
    button20: "",
    button21: "",
    button22: "",
    button23: "",
    button24: "",
    button25: "",
    button26: "",
    button27: "",
    button28: "",
    button29: "",
    button30: "",
  });
  const [totalAmount, setTotalAmount] = useState(0);
  const [disabledSeats, setDisabledSeats] = useState([]);
  const navigation = useNavigation();

  const toggleGender = (buttonName) => {
    setGenders((prevGenders) => ({
      ...prevGenders,
      [buttonName]: prevGenders[buttonName] === "Erkek" ? "Kadın" : "Erkek",
    }));

    if (!disabledSeats.includes(buttonName)) {
      setDisabledSeats([...disabledSeats, buttonName]);
    }
  };

  const addItemToList = () => {
    let acc = 0;
    let count = 0;
    let canProceedToPayment = true; 
    for (let i = 1; i <= 30; i++) {
      if (genders[`button${i}`] !== "Seçiniz") {
        count += 1;
        if (count <= 5) {
          const seatPrice = 400;
          acc += seatPrice;
          setTotalAmount(acc);
        } else {
          setTotalAmount(0);
          canProceedToPayment = false;
          Toast.error("Beş koltuktan fazla seçemezsiniz!!!");
        }
      }
    }

    if (
      (genders.button1 === "Kadın" && genders.button2 === "Erkek") ||
      (genders.button2 === "Kadın" && genders.button1 === "Erkek") ||
      (genders.button4 === "Kadın" && genders.button5 === "Erkek") ||
      (genders.button5 === "Kadın" && genders.button4 === "Erkek") ||
      (genders.button7 === "Kadın" && genders.button8 === "Erkek") ||
      (genders.button8 === "Kadın" && genders.button7 === "Erkek") ||
      (genders.button10 === "Kadın" && genders.button11 === "Erkek") ||
      (genders.button11 === "Kadın" && genders.button10 === "Erkek") ||
      (genders.button13 === "Kadın" && genders.button14 === "Erkek") ||
      (genders.button14 === "Kadın" && genders.button13 === "Erkek") ||
      (genders.button16 === "Kadın" && genders.button17 === "Erkek") ||
      (genders.button17 === "Kadın" && genders.button16 === "Erkek") ||
      (genders.button19 === "Kadın" && genders.button20 === "Erkek") ||
      (genders.button20 === "Kadın" && genders.button19 === "Erkek") ||
      (genders.button22 === "Kadın" && genders.button23 === "Erkek") ||
      (genders.button23 === "Kadın" && genders.button22 === "Erkek") ||
      (genders.button25 === "Kadın" && genders.button26 === "Erkek") ||
      (genders.button26 === "Kadın" && genders.button25 === "Erkek") ||
      (genders.button28 === "Kadın" && genders.button29 === "Erkek") ||
      (genders.button29 === "Kadın" && genders.button28 === "Erkek")
    ) {
      setTotalAmount(0);
      canProceedToPayment = false; 
      Toast.error("Kadın ve erkek yanyana koltuklarda oturamaz!");
    }
  
    if (canProceedToPayment) {
      navigation.navigate("PaymentScreen", {
        selectedSeats: Object.entries(genders)
          .filter(([_, gender]) => gender !== "Seçiniz")
          .map(([seat]) => seat),
        totalAmount: acc,
      });
    } else {
      setGenders(() => {
        const newGenders = {};
        for (let i = 1; i <= 30; i++) {
          newGenders[`button${i}`] = "Seçiniz";
        }
        return newGenders;
      });
    }
  };

  const cancelSelection = () => {
    setTotalAmount(0);
    setDisabledSeats([]);
    setItems([]);
    setIsButtonDisabled(false);
    setGenders(() => {
      const newGenders = {};
      for (let i = 1; i <= 30; i++) {
        newGenders[`button${i}`] = "Seçiniz";
      }
      return newGenders;
    });
  };

  const handleLogout = () => {
    logOut(navigation);
  };

  return (
    <View style={styles.container}>
      
      <View>
        <ToastContainer
          position="top"
          autoClose={5000}
          style={{ backgroundColor: "yellow" }}
        />
      </View>

      
      


      <View style={styles.busDesign}>





      <View style={styles.routeInfo}>
  <Text style={styles.routeInfoText}>
    {fromLocation} ilinden {toLocation} iline
  </Text>
  <Text style={styles.routeInfoText}>
    {travelDate.toLocaleDateString()} tarihli otobüs seferleri gösterilmektedir.
  </Text>
</View>

        
        
        
        
        
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonRow}>
            <SeatButton
              buttonName="button1"
              gender={genders.button1}
              onPress={() => toggleGender("button1")}
              isDisabled={isButtonDisabled}
              isSeatDisabled={disabledSeats.includes("button1")}
            />
            <SeatButton
              buttonName="button2"
              gender={genders.button2}
              onPress={() => toggleGender("button2")}
              isDisabled={isButtonDisabled}
              isSeatDisabled={disabledSeats.includes("button2")}
            />
          </View>
          <View style={styles.buttonRow}>
            <View>
              <SeatButton
                buttonName="button3"
                gender={genders.button3}
                onPress={() => toggleGender("button3")}
                isDisabled={isButtonDisabled}
                isSeatDisabled={disabledSeats.includes("button3")}
              />
            </View>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonRow}>
            <SeatButton
              buttonName="button4"
              gender={genders.button4}
              onPress={() => toggleGender("button4")}
              isDisabled={isButtonDisabled}
              isSeatDisabled={disabledSeats.includes("button4")}
            />
            <SeatButton
              buttonName="button5"
              gender={genders.button5}
              onPress={() => toggleGender("button5")}
              isDisabled={isButtonDisabled}
              isSeatDisabled={disabledSeats.includes("button5")}
            />
          </View>
          <View style={styles.buttonRow}>
            <View>
              <SeatButton
                buttonName="button6"
                gender={genders.button6}
                onPress={() => toggleGender("button6")}
                isDisabled={isButtonDisabled}
                isSeatDisabled={disabledSeats.includes("button6")}
              />
            </View>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonRow}>
            <SeatButton
              buttonName="button7"
              gender={genders.button7}
              onPress={() => toggleGender("button7")}
              isDisabled={isButtonDisabled}
              isSeatDisabled={disabledSeats.includes("button7")}
            />
            <SeatButton
              buttonName="button8"
              gender={genders.button8}
              onPress={() => toggleGender("button8")}
              isDisabled={isButtonDisabled}
              isSeatDisabled={disabledSeats.includes("button8")}
            />
          </View>

          <View style={styles.buttonRow}>
            <SeatButton
              buttonName="button9"
              gender={genders.button9}
              onPress={() => toggleGender("button9")}
              isDisabled={isButtonDisabled}
              isSeatDisabled={disabledSeats.includes("button9")}
            />
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonRow}>
            <SeatButton
              buttonName="button10"
              gender={genders.button10}
              onPress={() => toggleGender("button10")}
              isDisabled={isButtonDisabled}
              isSeatDisabled={disabledSeats.includes("button10")}
            />
            <SeatButton
              buttonName="button11"
              gender={genders.button11}
              onPress={() => toggleGender("button11")}
              isDisabled={isButtonDisabled}
              isSeatDisabled={disabledSeats.includes("button11")}
            />
          </View>
          <View style={styles.buttonRow}>
            <View>
              <SeatButton
                buttonName="button12"
                gender={genders.button12}
                onPress={() => toggleGender("button12")}
                isDisabled={isButtonDisabled}
                isSeatDisabled={disabledSeats.includes("button12")}
              />
            </View>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonRow}>
            <SeatButton
              buttonName="button13"
              gender={genders.button13}
              onPress={() => toggleGender("button13")}
              isDisabled={isButtonDisabled}
              isSeatDisabled={disabledSeats.includes("button13")}
            />
            <SeatButton
              buttonName="button14"
              gender={genders.button14}
              onPress={() => toggleGender("button14")}
              isDisabled={isButtonDisabled}
              isSeatDisabled={disabledSeats.includes("button14")}
            />
          </View>
          <View style={styles.buttonRow}>
            <View>
              <SeatButton
                buttonName="button15"
                gender={genders.button15}
                onPress={() => toggleGender("button15")}
                isDisabled={isButtonDisabled}
                isSeatDisabled={disabledSeats.includes("button15")}
              />
            </View>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonRow}>
            <SeatButton
              buttonName="button16"
              gender={genders.button16}
              onPress={() => toggleGender("button16")}
              isDisabled={isButtonDisabled}
              isSeatDisabled={disabledSeats.includes("button16")}
            />
            <SeatButton
              buttonName="button17"
              gender={genders.button17}
              onPress={() => toggleGender("button17")}
              isDisabled={isButtonDisabled}
              isSeatDisabled={disabledSeats.includes("button17")}
            />
          </View>
          <View style={styles.buttonRow}>
            <View>
              <SeatButton
                buttonName="button18"
                gender={genders.button18}
                onPress={() => toggleGender("button18")}
                isDisabled={isButtonDisabled}
                isSeatDisabled={disabledSeats.includes("button18")}
              />
            </View>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonRow}>
            <SeatButton
              buttonName="button19"
              gender={genders.button19}
              onPress={() => toggleGender("button19")}
              isDisabled={isButtonDisabled}
              isSeatDisabled={disabledSeats.includes("button19")}
            />
            <SeatButton
              buttonName="button20"
              gender={genders.button20}
              onPress={() => toggleGender("button20")}
              isDisabled={isButtonDisabled}
              isSeatDisabled={disabledSeats.includes("button20")}
            />
          </View>
          <View style={styles.buttonRow}>
            <View>
              <SeatButton
                buttonName="button21"
                gender={genders.button21}
                onPress={() => toggleGender("button21")}
                isDisabled={isButtonDisabled}
                isSeatDisabled={disabledSeats.includes("button21")}
              />
            </View>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonRow}>
            <SeatButton
              buttonName="button22"
              gender={genders.button22}
              onPress={() => toggleGender("button22")}
              isDisabled={isButtonDisabled}
              isSeatDisabled={disabledSeats.includes("button22")}
            />
            <SeatButton
              buttonName="button23"
              gender={genders.button23}
              onPress={() => toggleGender("button23")}
              isDisabled={isButtonDisabled}
              isSeatDisabled={disabledSeats.includes("button23")}
            />
          </View>
          <View style={styles.buttonRow}>
            <View>
              <SeatButton
                buttonName="button24"
                gender={genders.button24}
                onPress={() => toggleGender("button24")}
                isDisabled={isButtonDisabled}
                isSeatDisabled={disabledSeats.includes("button24")}
              />
            </View>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonRow}>
            <SeatButton
              buttonName="button25"
              gender={genders.button25}
              onPress={() => toggleGender("button25")}
              isDisabled={isButtonDisabled}
              isSeatDisabled={disabledSeats.includes("button25")}
            />
            <SeatButton
              buttonName="button26"
              gender={genders.button26}
              onPress={() => toggleGender("button26")}
              isDisabled={isButtonDisabled}
              isSeatDisabled={disabledSeats.includes("button26")}
            />
          </View>
          <View style={styles.buttonRow}>
            <View>
              <SeatButton
                buttonName="button27"
                gender={genders.button27}
                onPress={() => toggleGender("button27")}
                isDisabled={isButtonDisabled}
                isSeatDisabled={disabledSeats.includes("button27")}
              />
            </View>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonRow}>
            <SeatButton
              buttonName="button28"
              gender={genders.button28}
              onPress={() => toggleGender("button28")}
              isDisabled={isButtonDisabled}
              isSeatDisabled={disabledSeats.includes("button28")}
            />
            <SeatButton
              buttonName="button29"
              gender={genders.button29}
              onPress={() => toggleGender("button29")}
              isDisabled={isButtonDisabled}
              isSeatDisabled={disabledSeats.includes("button29")}
            />
          </View>
          <View style={styles.buttonRow}>
            <View>
              <SeatButton
                buttonName="button30"
                gender={genders.button30}
                onPress={() => toggleGender("button30")}
                isDisabled={isButtonDisabled}
                isSeatDisabled={disabledSeats.includes("button30")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.calculateContainer}>
        <View style={styles.display}>
         
          <TouchableOpacity
            style={styles.calculateButton}
            onPress={addItemToList}
          >
            <Text style={styles.calculateButtonText}>Hesapla</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.calculateButton}
            onPress={cancelSelection}
          >
            <Text style={styles.calculateButtonText}>İptal Et</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.calculateButton}
            onPress={handleLogout}
          >
            <Text style={styles.calculateButtonText}>Çıkış Yap</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const SeatButton = ({ gender, onPress, isDisabled, isSeatDisabled }) => (
  <TouchableOpacity
    style={[
      styles.button,
      {
        backgroundColor:
          isSeatDisabled && gender === "Kadın"
            ? "red"
            : isSeatDisabled && gender === "Erkek"
            ? "blue"
            : "gray",
      },
    ]}
    onPress={onPress}
    disabled={isDisabled}
  >
    <Text>{gender === "" ? "Seçiniz" : gender}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
  },
  busDesign: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 80,
    marginLeft: 30,
    marginRight: 30,
    paddingBottom: 30,
    paddingTop: 30,
    backgroundColor:"#f0f0f0",
  },
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom:10,
    marginRight:40,
  },
  buttonRow: {
    flexDirection: "row",
    marginLeft:50,
  },
  button: {
    width: 60,
    height: 40,
    backgroundColor: "red",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    margin: 1,
    borderWidth: 2,
    borderColor: "black",
  },
  calculateContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  display: {
    flexDirection: "row",
    alignItems: "center",
  },
  totalAmountText: {
    fontSize: 35,
    fontWeight: "bold",
    marginRight: 10,
  },
  
  calculateButton: {
    backgroundColor: "green",
    borderRadius: 5,
    marginLeft: 10,
    padding: 8,
  },
  calculateButtonText: {
    color: "black",
    fontWeight: "bold",
  },
  routeInfo: {
    alignItems: "center", 
    marginBottom:10,
    
        
  },
  routeInfoText: {
    fontSize: 18, 
    fontWeight: "bold", 
    textAlign: "center",
    color: "black", 
  },
});

export default SelectSeat;
