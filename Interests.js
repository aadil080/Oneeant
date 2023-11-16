import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function Interests({ text, image }) {
  const [isSelected, setIsSelected] = useState(false);

  const handlePress = () => {
    setIsSelected((prev) => !prev);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.container, isSelected && styles.selected]}>
        {image && (
          <View style={styles.titleImageContainer}>
            <Image source={image} resizeMode="cover" style={styles.image} />
          </View>
        )}
        <Text style={[styles.title, isSelected && styles.selectedText]}>{text}</Text>
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
    paddingLeft: 3,
    paddingVertical: 4,
    paddingRight: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selected: {
    backgroundColor: '#006FFD',
    borderColor: '#006FFD'
  },
  titleImageContainer: {
    width: 32,
    height: 32,
    borderRadius: 40,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    marginLeft: 8,
    // marginRight: 16,
    fontSize: 16,
    alignSelf: 'center',
    color: 'black',
  },
  selectedText: {
    color: 'white'
  }
});

export default Interests;
