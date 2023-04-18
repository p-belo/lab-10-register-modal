/* eslint-disable react-native/no-inline-styles */
// eslint-disable-next-line prettier/prettier
import React, { useState, createRef } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Modal,
} from 'react-native';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleSuccess, setModalVisibleSuccess] = useState(false);
  const emailInputRef = createRef();
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <KeyboardAvoidingView enabled>
          <View style={{paddingTop: '40%'}}>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={UserName => setUserName(UserName)}
                underlineColorAndroid="#f000"
                placeholder="Enter Name"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="sentences"
                returnKeyType="next"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={UserEmail => setUserEmail(UserEmail)}
                underlineColorAndroid="#f000"
                placeholder="Enter Email"
                placeholderTextColor="#8b9cb5"
                ref={emailInputRef}
                returnKeyType="next"
                blurOnSubmit={false}
              />
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: '#7DE24E',
                borderWidth: 0,
                color: '#FFFFFF',
                borderColor: '#7DE24E',
                height: 40,
                alignItems: 'center',
                borderRadius: 30,
                marginLeft: 35,
                marginRight: 35,
                marginTop: 20,
                marginBottom: 20,
              }}
              activeOpacity={0.5}
              onPress={() => {
                setModalVisible(true);
              }}>
              <Text style={styles.buttonTextStyle}>REGISTER</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={{margin: 5}}>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Image
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 10,
                    }}
                    source={require('./close-icon.png')}
                  />
                </TouchableOpacity>
              </View>
              {/* ====================================================================================== */}
              <View style={styles.modalContainer}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{color: 'black'}}>Are you sure?</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}
                    onPress={() => {
                      setModalVisible(false);
                      setModalVisibleSuccess(true);
                    }}>
                    <Text style={styles.buttonTextStyle}>Yes</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.redbuttonStyle}
                    activeOpacity={0.5}
                    onPress={() => {
                      setModalVisible(false);
                    }}>
                    <Text style={styles.buttonTextStyle}>No</Text>
                  </TouchableOpacity>
                </View>
              </View>
              {/* ====================================================================================== */}
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisibleSuccess}
          onRequestClose={() => {
            setModalVisibleSuccess(!modalVisibleSuccess);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={{margin: 5}}>
                <TouchableOpacity onPress={() => setModalVisibleSuccess(false)}>
                  <Image
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 10,
                    }}
                    source={require('./close-icon.png')}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.modalContainer}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{color: 'black'}}>Successful Registration</Text>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};
export default App;
const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
    width: 100,
  },
  redbuttonStyle: {
    backgroundColor: 'red',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
    width: 100,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'blue',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 12,
  },
  modalView: {
    width: '100%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    // alignItems: "center",
    // shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalContainer: {
    margin: 10,
  },
});
