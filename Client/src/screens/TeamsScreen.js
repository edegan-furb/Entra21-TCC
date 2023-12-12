import { StyleSheet, View, SafeAreaView, StatusBar, Modal, Text } from "react-native";
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
import Description from "../components/Description";

function TeamsScreen() {

  // Fazer a navegação para a page de tasks
  const navigation = useNavigation();
  function onPressHandler() {
    navigation.navigate("Tasks");
  }
  
  // cria o state do modal para criar os times
  const [modalVisible, setModalVisible] = useState(false);

  // Funções do modal
  function modalPress() {
    setModalVisible(true)
  }
  function handleClose() {
    setModalVisible(false)
  }
  function createTeam() {

    
    setModalVisible(false)
  }

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.headerContainer}>
        <UpperLogo children={"TaskSync"} />
        <AddButton title={'Add Teams'} onPress={modalPress}/>
      </View>
      <View style={styles.tasksInfContainer}>
       
        {/* Flatlist */}

        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Oops! It looks like you don't have any teams registered yet.
          </Text>
          <Text style={styles.text}>
            Press the button below to create your first team now!
          </Text>
          <View style={styles.headerContainer}>
            <AddButton title={'Add Teams'} onPress={modalPress}/>
          </View>
        </View>

      </View>
      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <TeamsModal onPress={() => modalVisible(false)} handleClose={handleClose} createTeam={createTeam}/>
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
  headerContainer: {
    width: '100%',
    height: '10%',
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
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
  

  textContainer: {
    width: '70%',
    height: '70%',
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  text: {
    width: '100%',
    fontWeight: "500",
    fontSize: 19,
    textAlign: "center",
    color: GlobalStyles.colors.primary900
  }
});
