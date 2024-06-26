import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import MyButton from '../components/MyButton';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/reducers/auth/authSlice';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/Ionicons';
const Login = () => {
  const navigation = useNavigation();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(state => state.auth);
  const handlingLogin = () => {
    const params = {
      phone: phone,
      password: password,
    };
    dispatch(login(params));
  };
  useEffect(() => {
    if (error) {
      Toast.show({
        type: 'error',
        text1: error,
        position: 'top',
        duration: 2000,
        animationDuration: 250,
      });
    }
  }, [error]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>QuickConnect</Text>
      <View style={styles.loginContainer}>
        <Text style={styles.loginTitle}>Login to your account</Text>
        <Icon style={{ color: '#20bf55', fontSize: 30 }} name="scan" size={24} color="white" />
      </View>

      <TextInput
        value={phone}
        placeholder="Account Number"
        onChangeText={setPhone}
        style={styles.input}
        placeholderTextColor="grey"
        autoCapitalize="none"
        keyboardType="numeric"
      />
      <TextInput
        value={password}
        placeholder="Pin"
        onChangeText={setPassword}
        style={styles.input}
        placeholderTextColor="grey"
        keyboardType="numeric"
      />
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.forgotText}>Forgot Password ?</Text>
      </TouchableOpacity>
      <MyButton isLoading={isLoading} title="Login" onPress={handlingLogin} />
      <View style={styles.createContainer}>
        <Text>
          Don't have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.createText}> Create new </Text>
        </TouchableOpacity>
      </View>
      <Toast />
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    paddingTop: 200,
    paddingHorizontal: '5%',
  },
  title: {
    fontSize: 36,
    color: '#20bf55',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  loginTitle: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
  },
  qrText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#20bf55',
  },

  input: {
    height: 45,
    // borderWidth: 2,
    borderBottomWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
    paddingHorizontal: 20,
  },
  forgotText: {
    textAlign: 'left',
    fontSize: 14
  },
  createContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  createText: {
    marginLeft: 4,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black'
  }
});