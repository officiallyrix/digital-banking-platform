import React from 'react';
import { View, Text, Button } from 'react-native';
import { useFaceId } from 'react-native-biometrics';

const BiometricAuthScreen = () => {
  const handleFaceId = async () => {
    const result = await useFaceId();
    if (result) {
      // Navigate to the next screen or perform an action
      console.log('Face ID authentication successful!');
    } else {
      console.log('Face ID authentication failed.');
    }
  };

  const handleFingerprint = async () => {
    // Similar functionality for fingerprint authentication
    console.log('Fingerprint authentication functionality goes here.');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Biometric Authentication</Text>
      <Button title="Login with Face ID" onPress={handleFaceId} />
      <Button title="Login with Fingerprint" onPress={handleFingerprint} />
    </View>
  );
};

export default BiometricAuthScreen;