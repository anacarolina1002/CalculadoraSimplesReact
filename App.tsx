import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
import { Button, Text, TextInput, Provider as PaperProvider } from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function App() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleButtonPress = (value: string) => {
    if (value === 'AC') {
      setResult('');
      setExpression('');
    } else if (value === '+' || value === '-' || value === '*' || value === '/') {
      if (/[+\-*\/]$/.test(expression)) {
        setExpression(prevExpression => prevExpression.slice(0, -1) + value);
      } else {
        setExpression(prevExpression => prevExpression + value);
      }
    } else if (value === '=') {
      handleCalculate();
    } else {
      setExpression(prevExpression => prevExpression + value);
    }
  };

  const handleCalculate = () => {
    try {
      const calculatedResult = eval(expression);
      setResult(calculatedResult.toString());
    } catch (error) {
      setResult('Erro ao calcular');
    }
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <View style={styles.expressionContainer}>
          <Text style={[styles.expression, styles.whiteText]}>{expression}</Text>
        </View>
        <View style={styles.resultContainer}>
          <Text style={[styles.result, styles.whiteText]}>{result}</Text>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity onPress={() => handleButtonPress('AC')} style={styles.button}>
            <Text style={[styles.buttonText, styles.whiteText]}>AC</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity onPress={() => handleButtonPress('7')} style={styles.button}>
            <Text style={[styles.buttonText, styles.whiteText]}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('8')} style={styles.button}>
            <Text style={[styles.buttonText, styles.whiteText]}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('9')} style={styles.button}>
            <Text style={[styles.buttonText, styles.whiteText]}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('/')} style={styles.button}>
            <Text style={[styles.buttonText, styles.whiteText]}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity onPress={() => handleButtonPress('4')} style={styles.button}>
            <Text style={[styles.buttonText, styles.whiteText]}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('5')} style={styles.button}>
            <Text style={[styles.buttonText, styles.whiteText]}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('6')} style={styles.button}>
            <Text style={[styles.buttonText, styles.whiteText]}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('*')} style={styles.button}>
            <Text style={[styles.buttonText, styles.whiteText]}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity onPress={() => handleButtonPress('1')} style={styles.button}>
            <Text style={[styles.buttonText, styles.whiteText]}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('2')} style={styles.button}>
            <Text style={[styles.buttonText, styles.whiteText]}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('3')} style={styles.button}>
            <Text style={[styles.buttonText, styles.whiteText]}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('-')} style={styles.button}>
            <Text style={[styles.buttonText, styles.whiteText]}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity onPress={() => handleButtonPress('0')} style={styles.button}>
            <Text style={[styles.buttonText, styles.whiteText]}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('.')} style={styles.button}>
            <Text style={[styles.buttonText, styles.whiteText]}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('+')} style={styles.button}>
            <Text style={[styles.buttonText, styles.whiteText]}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('=')} style={[styles.button, styles.calculateButton]}>
            <Text style={[styles.buttonText, styles.whiteText]}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 16,
    backgroundColor: '#212121',
  },
  expressionContainer: {
    marginBottom: 16,
  },
  expression: {
    fontSize: 28,
    color: '#ffffff',
  },
  resultContainer: {
    marginBottom: 16,
  },
  result: {
    fontSize: 28,
    color: '#ffffff',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  button: {
    width: windowWidth * 0.22,
    height: windowHeight * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#424242',
  },
  buttonText: {
    fontSize: 24,
  },
  calculateButton: {
    backgroundColor: '#9c27b0',
  },
  whiteText: {
    color: '#ffffff',
  },
});
