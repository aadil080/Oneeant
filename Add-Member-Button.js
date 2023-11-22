import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function AddMember({onPress}) {
  return (
    <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.8} onPress={onPress} >
      <Text style={styles.text} >Add Members</Text>
      <View style={styles.imageContainer} >
        <Image source={require('./assets/images/user-plus.png')} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    borderColor: '#CED2D6',
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 1,
    shadowRadius: 5
  },
  imageContainer: {
    height: 24,
    width: 24
  },
  image: {
    height: '100%',
    width: '100%'
  },
  text: {
    fontSize: 16,
    // fontFamily: 'Inter',
    color: '#2A2A2A',
    fontWeight: '500'
  }
});

export default AddMember;
