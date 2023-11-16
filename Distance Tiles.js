import {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const DistanceOption = ({option, onSelect, isSelected}) => {
  const backgroundColor = isSelected ? '#2A2A2A' : '#ffffff';
  const textColor = isSelected ? '#ffffff' : '#2A2A2A';

  return (
    <TouchableOpacity
      onPress={() => onSelect(option)}
      style={[styles.option, {backgroundColor}]}>
      <Text style={[styles.optionText, {color: textColor}]}>
        {option} Miles
      </Text>
    </TouchableOpacity>
  );
};

const DistanceOptions = () => {
  const [selectedDistance, setSelectedDistance] = useState(null);

  const options = [10, 20, 30, 40]; // Distances

  const onSelect = option => {
    // Toggle the selection state
    setSelectedDistance(prevSelected =>
      prevSelected === option ? null : option,
    );
  };

  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <View key={index} style={styles.optionContainer}>
          <DistanceOption
            option={option}
            onSelect={onSelect}
            isSelected={option === selectedDistance}
          />
          {/* Separator between distances */}
          {index < options.length - 1 && <View style={styles.separator} />}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    alignSelf: 'center',
    paddingVertical: 6,
    borderRadius: 10,
    marginVertical: 20,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '2.5%',
    width: '22.5%',
  },
  option: {
    paddingHorizontal: 11,
    paddingVertical: 10,
    borderRadius: 12,
    width: '97%'
  },
  optionText: {
    fontSize: 14,
    textAlign: 'center',
  },
  separator: {
    height: '80%',
    width: 1,
    backgroundColor: '#2A2A2A',
    marginLeft: '7%',
  },
});

export default DistanceOptions;
