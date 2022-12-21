import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  StatusBar,
  Dimensions,
} from "react-native";
import RoundIconBtn from "../components/RoundIconBtn";
import colors from "../misc/colors";

const Intro = ({ navigation }) => {
  const [name, setName] = useState("");
  const handleOnChangeText = (text) => setName(text);
  const [password, setPassword] = useState("");
  const handleOnChangePassword = (text) => setPassword(text);

  // const handleSubmit = async () => {
  //   const user = { name: name };
  //   await AsyncStorage.setItem("user", JSON.stringify(user));
  //   if (onFinish) onFinish();
  // };

  return (
    <>
      <StatusBar hidden />
      <View style={styles.container}>
      {/* <Text style={styles.subTitle}>Selamat Datang</Text> */}
        <Text style={styles.mainTitle}>LOGIN</Text>
        <Text style={styles.subTitle}>Death Note</Text>
        <TextInput
          value={name}
          onChangeText={handleOnChangeText}
          placeholder="Username"
          style={styles.textInput}
        />
        <TextInput
          secureTextEntry={true}
          value={password}
          onChangeText={handleOnChangePassword}
          placeholder="Password"
          style={styles.textInput}
        />
        {name.trim().length >= 6 ? (
          <RoundIconBtn antIconName="arrowright" onPress={() => 
            navigation.navigate("NoteScreen")
          } />
        ) : null}
      </View>
    </>
  );
};

const width = Dimensions.get("window").width - 50;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  textInput: {
    // borderWidth: 2,
    borderColor: colors.PRIMARY,
    color: colors.PRIMARY,
    backgroundColor: colors.SECONDARY,
    width,
    height: 40,
    borderRadius: 30,
    paddingLeft: 15,
    fontSize: 20,
    marginBottom: 15,
  },
  mainTitle: {
    opacity: 0.5,
    fontSize: 20,
    color: 'black',
    fontWeight: '700'
  },
  subTitle: {
    marginBottom: 10,
    fontSize: 35,
    fontWeight: 'bold',
    color: colors.PRIMARY,
  },   
});

export default Intro;
