import {Image, StyleSheet, Text, View} from 'react-native';
// import CircularProgress from 'react-native-circular-progress-indicator';

function Timer({onPress, message = 'Message', headTo = 'Link'}) {
  return (
    <View style={styles.container}>
      <View style={styles.contentSeparating}>
        {/* Cart Icon */}
        <View style={styles.imageContainer}>
          <Image
            source={require('./assets/images/shopping-cart.png')}
            style={styles.image}
          />
        </View>
        <View>
          {/* Message */}
          <Text style={styles.message}>{message}</Text>
          {/* Link */}
          <Text style={styles.link} onPress={onPress}>
            {headTo}
          </Text>
        </View>
      </View>
      {/* Timer Icon */}
      <View style={styles.timerContainer} >
        {/* <CircularProgress value={5} /> */}
        <Image source={require('./assets/images/x.png')} style={styles.timerIcon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#000000f0',
    flexDirection: 'row',
    padding: 12,
    gap: 8,
    borderRadius: 12,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  imageContainer: {
    padding: 14,
    backgroundColor: '#2A2A2A',
    borderRadius: 8,
  },
  image: {
    height: 20,
    width: 20,
  },
  message: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
  },
  link: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
  contentSeparating: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center'
  },
  timerContainer: {
    height: 32,
    width: 32,
    padding: 8,
    borderRadius: 16,
    borderColor: '#fff',
    borderWidth: 1.5,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  timerIcon: {
    height: 16,
    width: 16,
    // alignSelf: 'center',
    zIndex: 1
  }
});

export default Timer;
