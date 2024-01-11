// ConverterScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

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

      <TouchableOpacity onPress={convertCurrency} >
        <Text style={styles.button}>CONVERT</Text>
      </TouchableOpacity>
    
    <View style={styles.resultsContainer}>
      <Text style={styles.result}>{`Value =`}</Text>
      <Text style={styles.convertedAmount}>  {currencySymbol} {convertedAmount}</Text>
    </View>
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
    marginBottom: 50,
    color: '#ff3300',
  },
  input: {
    width: 200,
    height: 40,
    borderColor: '#ff3300',
    borderWidth: 1,
    borderRadius: 50,
    marginBottom: 10,
    textAlign: 'center',
  },

  button: {
    backgroundColor: '#ff3300',
    color: '#ffffff',
    padding: 10,
    width: 100,
    textAlign: 'center',
    borderRadius: 50,
    fontWeight: 'bold'
  },

  resultsContainer: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'center',
    verticalAlign: 'middle',
  },

  result: {

    fontSize: 22,
    fontWeight: 'bold',
    color: '#fdb915',
  },

  convertedAmount: {
  
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ff3300',
  },
});

export default ConverterScreen;
