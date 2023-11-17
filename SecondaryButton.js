import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';

function SecondaryButton({title, onPress, image}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn} activeOpacity={0.7}>
      <View style={styles.container} >
        {image && (
          <View style={styles.imageContainer}>
            <Image source={image} style={styles.image} />
          </View>
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default SecondaryButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#CCE2FF',
    // elevation: 4,
    paddingVertical: 12,
    width: '100%',
    // alignItems: 'center'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '30%',
    alignSelf: 'center'
  },
  title: {
    color: '#006FFD',
    fontSize: 18,
    // alignSelf: 'center',
  },
  imageContainer: {
    width: 24,
    height: 24,
    // position: 'absolute',
    position: 'absolute',
    left: 0,
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
