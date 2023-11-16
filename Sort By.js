import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

const OptionComponent = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    {id: 1, icon: require('./assets/images/star.png'), title: 'Popular first'},
    {
      id: 2,
      icon: require('./assets/images/calendar.png'),
      title: 'Date posted',
    },
    {id: 3, icon: require('./assets/images/dollar-sign.png'), title: 'Price'},
  ];

  const handleSelectOption = optionId => {
    // Toggle the selection state
    setSelectedOption(prevSelected =>
      prevSelected === optionId ? null : optionId,
    );
  };

  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <View key={option.id} >
          <TouchableOpacity
            onPress={() => handleSelectOption(option.id)}
            style={styles.optionContainer}
            activeOpacity={0.8}>
            <Image source={option.icon} style={styles.icon} />
            <Text style={styles.title}>{option.title}</Text>
            <View
              style={[
                styles.radioButton,
                selectedOption === option.id && {backgroundColor: '#2A2A2A'},
              ]}>
              {selectedOption === option.id && (
                <View style={styles.radioButtonInner} />
              )}
            </View>
          </TouchableOpacity>
          {index !== options.length - 1 && <View style={styles.separator} />}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    height: 'auto',
    width: '90%',
    borderWidth: 1,
    borderRadius: 16,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // paddingVertical: 10,
    width: '100%',
    marginVertical: 20
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  title: {
    flex: 1,
    fontSize: 16,
    color: '#2A2A2A'
  },
  radioButton: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonInner: {
    width: 10,
    height: 10,
    borderRadius: 6,
    backgroundColor: '#ffffff',
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
});

export default OptionComponent;
