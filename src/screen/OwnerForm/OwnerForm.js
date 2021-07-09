import React from 'react';
import {View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView,Platform,SafeAreaView,TouchableWithoutFeedback,Keyboard,ScrollView} from 'react-native';
import styles from './styles';
import {Picker} from '@react-native-picker/picker';

const OwnerForm = () => {
  // const [Location_d,Location] = React.useState("ww");
  // const [State_d,State] = React.useState("ww");
  // const [Address_d,Address] = React.useState("ww");
  // const [Description_d,Description] = React.useState("ww");
  const [selectedLanguage, setSelectedLanguage] = React.useState();
  return (
    
    <View style={styles.root}>
      <KeyboardAvoidingView
                behavior="padding"
                 style={{ flex: 1 }}
            >
      <View style = {styles.top}></View>
     
      <View style = {styles.body}>
      
          <SafeAreaView>
          <ScrollView showsVerticalScrollIndicator={false}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>    
                    <View>
          <Text style = {{color: "white"}}>Location</Text>
          <TextInput
            style={styles.input}
            //  value={Location}
          />
          <Text style = {{color: "white"}}>State</Text>
          <TextInput
            style={styles.input}
            //  value={State}
          />
          <Text style = {{color: "white"}}>Address</Text>
          <TextInput multiline = {true} 
            textAlignVertical = 'top'
            numberOfLines={4}
            maxLength={40}
            style={styles.multilineinput}
            // value={Address}
          />
          <View style = {{flexDirection: "row"}} >
            <View style = {{flex:1}}>
              <Text style = {{color: "white",paddingTop:15}}>BHK</Text>
            </View>
            <View style = {{flex:5}}>
            <Picker
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }
              color = "blue"
              // style = {{color: "white"}}
              itemStyle={{ backgroundColor: "grey", color: "blue", fontFamily:"Ebrima", fontSize:17 }}
              >
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
            </Picker>
            </View>
            < View style = {{flex:5}}></View>
          </View>
          
          <Text style = {{color: "white"}}>Description</Text>
          
          <TextInput multiline = {true} 
            textAlignVertical = 'top'
            numberOfLines={4}
            maxLength={40}
            style={styles.multilineinput}
            // value={Description}
          />
           
          <Text style = {{color: "white"}}>Expected rent</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            //  value={State}
          />
          
          <TouchableOpacity style={styles.buttonLower}>
            <Text style={styles.buttonTextNormal}>Confirm</Text>
          </TouchableOpacity></View>
          </TouchableWithoutFeedback>
          </ScrollView>
          </SafeAreaView>
          
      </View>
     </KeyboardAvoidingView>
    </View> 
  )
}

export default OwnerForm
