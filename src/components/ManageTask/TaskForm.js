import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import Input from "./Input";
import Button from "../ui/Button";
import { Colors } from "../../constants/styles";
import IconButton from "../ui/IconButton";
import { getFormattedDate } from "../../util/date";
import { generateUniqueId } from "../../util/generateUniqueId";
import {
  getEmailByUsername,
  fetchUsernameAndEmail,
} from "../../util/firebase/firestore/user";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import TranslatedText from "../../Context/language-context";

function TaskForm({
  submitButtonLabel,
  onCancel,
  onSubmit,
  defaultValues,
  pageTitle,
  isEditing,
  onPressDelete,
}) {
  const [inputs, setInputs] = useState({
    title: {
      value: defaultValues ? defaultValues.title : "",
      isValid: true,
    },
    date: {
      value: defaultValues ? getFormattedDate(defaultValues.date) : "",
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : "",
      isValid: true,
    },
    designatedUser: {
      value:
        defaultValues && defaultValues.designatedUser ? "Loading email..." : "",
      isValid: true,
    },
    objectives:
      defaultValues && defaultValues.objectives
        ? defaultValues.objectives.map((obj) => ({
            id: obj.id,
            value: obj.value,
            completed: obj.completed,
            isValid: true,
          }))
        : [
            {
              id: generateUniqueId(),
              value: "",
              completed: false,
              isValid: true,
            },
          ],
  });
  const [currentUserEmail, setCurrentUserEmail] = useState("");

  useEffect(() => {
    // Assuming fetchUsernameAndEmail is an async function that returns { email: userEmail }
    fetchUsernameAndEmail()
      .then((userDetails) => {
        setCurrentUserEmail(userDetails.email);
        console.log(currentUserEmail);
      })
      .catch((error) => {
        console.error("Error fetching user email:", error);
      });
  }, []);

  useEffect(() => {
    if (defaultValues && defaultValues.designatedUser) {
      getEmailByUsername(defaultValues.designatedUser)
        .then((email) => {
          if (email) {
            setInputs((currentInputs) => ({
              ...currentInputs,
              designatedUser: { value: email, isValid: true },
            }));
          }
        })
        .catch((error) => {
          console.error("Failed to fetch email", error);
          // Handle error, possibly by setting state
        });
    }
  }, [defaultValues, getEmailByUsername]);

  useEffect(() => {
    if (defaultValues) {
      const initialDateValue = getFormattedDate(defaultValues.date, true);
      setformDate(initialDateValue);
      setInputs((currentInputs) => ({
        ...currentInputs,
        date: { value: initialDateValue, isValid: true },
      }));
    }
  }, [defaultValues]);

  function inputChangeHandler(inputIdentifier, enteredValue, index = null) {
    if (inputIdentifier === "objectives") {
      setInputs((currentInputs) => {
        const updatedObjectives = [...currentInputs.objectives];
        updatedObjectives[index] = {
          ...updatedObjectives[index],
          value: enteredValue,
          completed: false,
          isValid: true,
        };
        return { ...currentInputs, objectives: updatedObjectives };
      });
    } else {
      setInputs((currentInputs) => {
        return {
          ...currentInputs,
          [inputIdentifier]: { value: enteredValue, isValid: true },
        };
      });
    }
  }

  function addObjective() {
    setInputs((currentInputs) => {
      return {
        ...currentInputs,
        objectives: [
          ...currentInputs.objectives,
          {
            id: generateUniqueId(),
            value: "",
            completed: false,
            isValid: true,
          },
        ],
      };
    });
  }

  function removeObjective(index) {
    setInputs((currentInputs) => {
      const updatedObjectives = currentInputs.objectives.filter(
        (_, i) => i !== index
      );
      return { ...currentInputs, objectives: updatedObjectives };
    });
  }

  function submitHandler() {
    const objectivesData = inputs.objectives.map((objective) => ({
      id: objective.id,
      value: objective.value,
      completed: objective.completed,
    }));
    const taskData = {
      title: inputs.title.value,
      date: new Date(formDate),
      description: inputs.description.value,
      designatedUser: inputs.designatedUser.value,
      objectives: objectivesData,
    };

    const titleIsValid = taskData.title.trim().length > 0;
    const dateIsValid = taskData.date.toString() !== "Invalid Date";
    const descriptionIsValid = taskData.description.trim().length > 0;
    const designatedUserIsValid =
      taskData.designatedUser.includes("@") &&
      taskData.designatedUser.toLowerCase() !== currentUserEmail;
    const objectivesAreValid = inputs.objectives.every(
      (objective) => objective.value.trim().length > 0
    );

    if (
      !titleIsValid ||
      !dateIsValid ||
      !descriptionIsValid ||
      !designatedUserIsValid ||
      !objectivesAreValid
    ) {
      setInputs((currentInputs) => {
        return {
          title: {
            value: currentInputs.title.value,
            isValid: titleIsValid,
          },
          date: {
            value: currentInputs.date.value,
            isValid: dateIsValid,
          },
          description: {
            value: currentInputs.description.value,
            isValid: descriptionIsValid,
          },
          designatedUser: {
            value: currentInputs.designatedUser.value,
            isValid: designatedUserIsValid,
          },
          objectives: currentInputs.objectives.map((objective) => ({
            id: objective.id,
            value: objective.value,
            completed: objective.completed,
            isValid: objective.value.trim().length > 0,
          })),
        };
      });
      return;
    }

    //console.log(taskData);
    onSubmit(taskData);
  }

  const formIsInvalid =
    !inputs.title.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid ||
    !inputs.designatedUser.isValid ||
    inputs.objectives.some((objective) => !objective.isValid);
  const [formDate, setformDate] = useState("");

  const formatDate = (input) => {
    if (!input) return input;

    // Formatar a data com traços
    let formattedDate = "";
    for (let i = 0; i < input.length; i++) {
      if ((i === 7 || i === 4) && input[i] !== "-") {
        formattedDate += "-";
      }
      formattedDate += input[i];
    }

    return formattedDate;
  };

  const handleTextChange = (text) => {
    const formattedText = formatDate(text);
    setformDate(formattedText);
    setInputs((currentInputs) => ({
      ...currentInputs,
      date: { value: formattedText, isValid: true },
    }));
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.titleContent}>
          <Text style={styles.title}>{pageTitle}</Text>
        </View>
      </View>
      <View style={styles.form}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.contentInput}>
            <Input
              style={styles.rowTitle}
              label={<TranslatedText enText={"Title"} ptText={"Título"} />}
              invalid={!inputs.title.isValid}
              textInputConfig={{
                multiline: false,
                onChangeText: inputChangeHandler.bind(this, "title"),
                value: inputs.title.value,
                maxLength: 25,
              }}
            />
            <Input
              style={styles.rowInput}
              label={<TranslatedText enText={"Date"} ptText={"Data"} />}
              invalid={!inputs.date.isValid}
              textInputConfig={{
                placeholder: "YYYY-MM-DD",
                onChangeText: handleTextChange,
                value: formDate,
                maxLength: 10,
                keyboardType: "number-pad",
              }}
            />
          </View>
          <View style={styles.inputRow}>
            <Input
              label={
                <TranslatedText enText={"Description"} ptText={"Descrição"} />
              }
              invalid={!inputs.description.isValid}
              textInputConfig={{
                multiline: true,
                onChangeText: inputChangeHandler.bind(this, "description"),
                value: inputs.description.value,
              }}
            />
          </View>

          <View style={styles.inputRow}>
            <Input
              label={
                <TranslatedText
                  enText={"Designed User by e-mail"}
                  ptText={"Designação do usuário por e-mail"}
                />
              }
              invalid={!inputs.designatedUser.isValid}
              textInputConfig={{
                multiline: false,
                autoCapitalize: "none",
                keyboardType: "email-address",
                onChangeText: inputChangeHandler.bind(this, "designatedUser"),
                value: inputs.designatedUser.value,
              }}
            />
          </View>
          {inputs.objectives.map((objective, index) => (
            <View key={index} style={styles.inputObjectivesRow}>
              <Input
                style={styles.objectivesInput}
                label={
                  <TranslatedText
                    enText={`Objective ${index + 1}`}
                    ptText={`Objetivo ${index + 1}`}
                  />
                }
                invalid={!objective.isValid}
                textInputConfig={{
                  multiline: false,
                  maxLength: 30,
                  onChangeText: (text) =>
                    inputChangeHandler("objectives", text, index),
                  value: objective.value,
                }}
              />
              {inputs.objectives.length > 0 && (
                <View style={styles.removeButton}>
                  <IconButton
                    icon={"close-circle-outline"}
                    color={Colors.primary900}
                    size={32}
                    onPress={() => removeObjective(index)}
                  />
                </View>
              )}
            </View>
          ))}
          <View style={styles.buttonAddObjective}>
            <Button mode="flat" onPress={addObjective}>
              <TranslatedText
                enText={"Add Objective"}
                ptText={"Add Objetivo"}
              />
            </Button>
          </View>
        </ScrollView>
        {formIsInvalid && (
          <TranslatedText
            enText={"Invalid input values - please check your entered data."}
            ptText={
              "Valores de entrada inválidos - verifique os dados inseridos."
            }
            style={styles.errorText}
          />
        )}
        {!inputs.designatedUser.isValid && (
          <TranslatedText
            enText={"You cannot assign a task to yourself."}
            ptText={"Você não pode atribuir uma tarefa a si mesmo."}
            style={styles.errorText}
          />
        )}
        <View
          style={
            isEditing ? styles.buttonsContainerEdit : styles.buttonsContainer
          }
        >
          <View
            style={isEditing ? styles.buttonContentEdit : styles.buttonContent}
          >
            <Button mode="flat" onPress={onCancel}>
              <TranslatedText enText={"Cancel"} ptText={"Cancelar"} />
            </Button>
            <Button onPress={submitHandler}>{submitButtonLabel}</Button>
          </View>
          {isEditing && (
            <Pressable style={styles.deleteContainer} onPress={onPressDelete}>
              <TranslatedText
                enText={"Delete task"}
                ptText={"Deletar tarefa"}
                style={styles.textButton}
              />
              <IconButton
                icon="trash"
                color={Colors.error500}
                size={20}
                onPress={onPressDelete}
              />
            </Pressable>
          )}
        </View>
      </View>
    </View>
  );
}

export default TaskForm;

const styles = StyleSheet.create({
  container: {
    width: wp('90%'),
    height: hp('75%'),
    backgroundColor: Colors.primary900,
    borderRadius: 20,
    marginTop: "15%",
  },
  titleContainer: {
    height: "15%",
    width: "100%",
    backgroundColor: Colors.primary100,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  titleContent: {
    backgroundColor: Colors.primary900,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    borderBottomLeftRadius: 30,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.primary100,
    textAlign: "center",
  },
  form: {
    width: "100%",
    paddingHorizontal: 10,
    flex: 1,
    borderTopEndRadius: 30,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    backgroundColor: Colors.primary100,
  },
  contentInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 5,
  },
  rowTitle: {
    flex: 2,
  },
  rowInput: {
    flex: 1,
  },
  scrollView: {
    paddingBottom: 20,
  },
  inputObjectivesRow: {
    flexDirection: "row",
    flex: 1,
    alignItems: "flex-end",
  },
  objectivesInput: {
    width: "80%",
  },
  removeButton: {
    height: "65%",
  },
  buttonAddObjective: {
    padding: 10,
    height: 65,
    alignItems: "center",
    justifyContent: "center",
  },
  errorText: {
    textAlign: "center",
    color: Colors.error500,
    margin: 8,
  },
  buttonsContainer: {
    width: "100%",
    height: "20%",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderTopWidth: 2,
    borderColor: Colors.primary900,
  },
  buttonsContainerEdit: {
    width: "100%",
    height: "25%",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderTopWidth: 2,
    borderColor: Colors.primary900,
  },
  buttonContent: {
    height: "50%",
    width: "85%",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  buttonContentEdit: {
    height: "35%",
    width: "85%",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  deleteContainer: {
    height: "35%",
    width: "50%",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary900,
  },
  textButton: {
    color: Colors.primary100,
    fontWeight: "bold",
    paddingLeft: 15,
  },
});
