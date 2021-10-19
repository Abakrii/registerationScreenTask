import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {registrationFields} from '../../utils/lists';
import {TextInput, Button} from 'react-native-paper';

import axios from 'axios';
const image = {uri: '../../assets/bg.jpg'};
const ENDPOINT = 'https://reqres.in/api/register';

const TestIcon = require('../../assets/user.jpg');
const Registration = () => {
  const [result, setResult] = useState('');
  console.log('image', image);
  console.log('result', result);
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'onBlur'});

  const onSubmit = data => {
    const {
      UserName = 'test username',
      EmailAddress = 'george.bluth@reqres.in',
      Password = '123345',
    } = data;
    axios({
      method: 'post',
      url: ENDPOINT,
      data: {
        //    username: UserName,
        email: EmailAddress,
        password: Password,
      },
    })
      .then(function(response) {
        console.log('reeposne', response);
      })
      .catch(error => console.log('error', error));
  };

  return (
    <View style={{flex: 1}}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        {registrationFields.map(item => {
          const {id, placeholder, name}: any = item;
          return (
            <React.Fragment key={id}>
              <Controller
                control={control}
                name={name}
                render={({field: {onChange, value, onBlur}}) => (
                  <TextInput
                    style={styles.textInputStyle}
                    placeholder={placeholder}
                    value={value}
                    onBlur={onBlur}
                    onChangeText={value => onChange(value)}
                    right={
                      <TextInput.Icon
                        name={() => (
                          <Image
                            source={{uri: '../../assets/user.jpg'}}
                            width={20}
                            height={20}
                          />
                        )}
                      />
                    }
                  />
                )}
              />
            </React.Fragment>
          );
        })}
        <Button
          style={styles.registerButtonStyle}
          icon="camera"
          mode="contained"
          onPress={handleSubmit(onSubmit)}>
          Register
        </Button>
      </ImageBackground>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  registerButtonStyle: {
    // width: '34',
    // height: '64px',
    // left: '0px',
    // top: '338px',
    backgroundColor: '#3AB091',
    height: 64,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    //  borderRadius: '6px',
  },

  textInputStyle: {
    height: 74,
    marginTop: 10,
    display: 'flex',
    // left: 0px;
    // top: 0px;
    backgroundColor: '#E8E8E8',
    borderRradius: 10,
  },
});

export default Registration;
