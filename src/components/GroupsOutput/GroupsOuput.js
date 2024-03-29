import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import GroupsList from "./GroupsList";
import AddButton from './AddButton';
import UpperLogo from '../../components/Start/UpperLogo';
import { useTheme } from '../../Context/theme-context';

function GroupsOutput({ groups, firstText, secondText, title }) {

  const { colors } = useTheme();

  // Create the navigation component
  const navigation = useNavigation();
  
  // Function to open the team creation modal
  function modalPress() {
    navigation.navigate("ManageGroupScreen");
  }

  let content = 
    <View style={styles.textContainer}>
      <Text style={[styles.text, {color: colors.text900}]}>
        {firstText}
      </Text>
      <Text style={[styles.text, {color: colors.text900}]}>
        {secondText}
      </Text>
      <View style={styles.addButtonContainer}>
        <AddButton 
          title={title} 
          onPress={modalPress} 
          button={groups.length > 0 ? styles.btnNone : styles.button} 
        />
      </View>
    </View> 
  ;

  if (groups.length > 0) {
    content = <GroupsList groups={groups} />;
  }

  return (
    <SafeAreaView style={[styles.rootContainer, {backgroundColor: colors.background50}]}>
      <View View style={styles.headerContainer}>
        <UpperLogo children={'TaskSync'}/>
        <AddButton 
          title={title} 
          onPress={modalPress} 
          button={groups.length > 0 ? styles.button : {display: 'none'}}
        />
      </View>
      {content}
    </SafeAreaView>
  )
}

export default GroupsOutput;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  headerContainer: {
    width: '100%',
    height: '10%',
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textContainer: {
    width: '100%',
    height: '70%',
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  text: {
    width: '80%',
    fontWeight: "500",
    fontSize: 19,
    textAlign: "center",
  },
  addButtonContainer: {
    width: '100%',
    height: '15%',
    alignItems: "center",
    justifyContent: "center",
    marginLeft: '8%'
  },
  button: {
    width: '80%'
  },
});
