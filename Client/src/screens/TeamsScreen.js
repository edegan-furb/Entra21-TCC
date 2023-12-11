import { StyleSheet, View, SafeAreaView, StatusBar, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import AddButton from "../components/AddButton";
import UpperLogo from '../components/UpperLogo';
import { TeamsModal } from "../components/TeamsCreateModal";
import { GlobalStyles } from "../constants/Colors";

function TeamsScreen() {

  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();

  function onPressHandler() {
    navigation.navigate("Tasks");
  }

  function modalPress() {
    setModalVisible(true)
  }

  function handleClose() {
    setModalVisible(false)
  }

  return (
    <SafeAreaView style={styles.rootContainer}>
      
      <View style={styles.upperLogoContainer}>
        <UpperLogo children={"TaskSync"} />
      </View>
      <AddButton title={'Add Teams'} onPress={modalPress}/>
      <View style={styles.tasksInfContainer}>
        

      </View>

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <TeamsModal onPress={() => modalVisible(false)} handleClose={handleClose} />
      </Modal>

    </SafeAreaView>
  );
}

export default TeamsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.neutral100,
    paddingTop: StatusBar.currentHeight,
    width: wp('100%'),
    height: hp('100%')
  },
  upperLogoContainer: {
    height: "5%",
    justifyContent: "center",
  },
  tasksInfContainer: {
    width: '100%',
    height: '100%',
    alignItems: "center",
  },
  tasksContent: {
    backgroundColor: '#555',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: "center",
    paddingVertical: '15%',
    paddingHorizontal: '40%',
    marginTop: 10
  },
  tasksInfButton: {
    width: '90%',
    height: '20%',
    backgroundColor: '#555',
    borderRadius: 12
  },



  // modalContainer: {
  //   width: '100%',
  //   height: 100,
  //   backgroundColor: '#999',
  //   flex: 1
  // }
});
