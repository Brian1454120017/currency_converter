// ConverterScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ConverterScreen = ({ currency, currencySymbol}) => {
  const [kwachaAmount, setKwachaAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');

  const convertCurrency = () => {
    // Implement the currency conversion logic here
    // You can fetch the exchange rate for the specific currency from an API
    // For demonstration purposes, let's assume a fixed exchange rate
    const exchangeRate = 0.049; // Replace this with the actual exchange rate

    const kwachaValue = parseFloat(kwachaAmount);

    if (!isNaN(kwachaValue)) {
      const convertedValue = kwachaValue * exchangeRate;
      setConvertedAmount(convertedValue.toFixed(2).toString());
    } else {
      setConvertedAmount('Invalid Input');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`ZMW to ${currency} Converter`}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Zambian Kwacha"
        keyboardType="numeric"
        value={kwachaAmount}
        onChangeText={(text) => setKwachaAmount(text)}
      />
      <Button title="Convert" onPress={convertCurrency} />
      <Text style={styles.result}>{`Results: ${currencySymbol}`} {convertedAmount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    textAlign: 'center',
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ConverterScreen;
