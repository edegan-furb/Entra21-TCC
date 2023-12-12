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

import groups from "../components/lixo/groups";
import List from "../components/List";

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

    // daq ele vai criar o time e ir para a tela de criação de task, para criar a task
    setModalVisible(false)
  }

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.container}>
        <UpperLogo children={"TaskSync"} />
        <AddButton title={'Add Teams'} onPress={modalPress}/>
      </View>
      <View style={styles.groupsContainer}> 
        <List action={onPressHandler} data={groups}/> 
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
  container: {
    width: '100%',
    height: '10%',
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  groupsContainer: {
    width: '100%',
    height: '90%',
    
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
  
});
