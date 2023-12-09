import { StyleSheet, View, SafeAreaView, VirtualizedList, StatusBar, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import UpperLogo from '../components/UpperLogo';
import { GlobalStyles } from "../constants/Colors";
import AddButton from "../components/AddButton";

function TeamsScreen() {
  const navigation = useNavigation();

  function onPressHandler() {
    navigation.navigate("Tasks");
  }

  const getItem = (item, index) => ({
    name: '',
    title: `Item ${index + 1}`,
  });
  
  const getItemCount = item => 5;
  
  const Item = ({title}) => (
    <View style={styles.tasksContent}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.rootContainer}>
      
      <View style={styles.upperLogoContainer}>
        <UpperLogo children={"TaskSync"} />
      </View>
      <AddButton title={'Add Teams'}/>
      <View style={styles.tasksInfContainer}>
        <VirtualizedList
          initialNumToRender={4}
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.name}
          getItemCount={getItemCount}
          getItem={getItem}
        />

      </View>

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
});
