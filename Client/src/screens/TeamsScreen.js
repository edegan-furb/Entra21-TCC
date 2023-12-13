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

import group from "../components/lixo/group";
import TextInformation from "../components/TeamsTextInformation";

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
        <AddButton 
          title={'Add Teams'} 
          onPress={modalPress} 
          button={group.length > 0 ? '' : styles.button }
        />
      </View>
      <View style={styles.groupsContainer}>
        <TextInformation onPressHandler={onPressHandler} onPress={modalPress} data={group}/> 
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
  groupsContainer: {
    width: '100%',
    height: '90%',
  },
  button: {
    display: "none",
  }
});
