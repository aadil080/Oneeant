import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useState} from 'react';

function Range({high, low}) {
  const [isSelected, setIsSelected] = useState(false);

  const handlePress = () => {
    setIsSelected(prev => !prev);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.container, isSelected && styles.selected]}>
        <Text style={[styles.title, isSelected && styles.selectedText]}>
          ${low}
        </Text>
        {high ? (
          <Text style={[styles.title, isSelected && styles.selectedText]}>
            {' '}-{' '}${high}
          </Text>
        ) : (
          <Text style={[styles.title, isSelected && styles.selectedText]}>
            +
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: '#E5E7EA',
    backgroundColor: 'white',
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selected: {
    backgroundColor: '#006FFD',
    borderColor: '#006FFD',
  },
  title: {
    fontSize: 16,
    alignSelf: 'center',
    color: 'black',
  },
  selectedText: {
    color: 'white',
  },
});

export default Range;
