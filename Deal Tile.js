import {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

function DealTile({initialTime}) { // The provided time for timer should be in converted from hours & minutes into seconds
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      // Calculate new time
      const newTime = time - 1;
  
      // Update time state if the new time is greater than or equal to 0
      if (newTime >= 0) {
        setTime(newTime);
      } else {
        // If the new time is less than 0, clear the interval
        clearInterval(timerInterval);
      }
    }, 1000);
  
    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(timerInterval);
  }, [time]);

  // Format the time into hours, minutes, and seconds
  const formatTime = () => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours > 9 && hours  ? hours : '0' + hours}:${minutes > 9 ? minutes : '0' + minutes}:${seconds > 9 ? seconds : '0' + seconds}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.giftContainer}>
        <Image
          source={require('./assets/images/gift.png')}
          style={styles.image}
        />
      </View>
      <Text style={styles.text}>Tap to view secret deal </Text>
      <View style={styles.timeContainer}>
        <View style={styles.giftContainer}>
          <Image
            source={require('./assets/images/clock.png')}
            style={styles.image}
          />
        </View>
        <Text style={styles.text}>{formatTime()}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: '#FEFAF5',
  },
  text: {
    color: '#C8811A',
    fontSize: 12,
    flex: 1,
  },
  giftContainer: {
    width: 16,
    height: 16,
    marginHorizontal: 8,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  timeContainer: {
    position: 'absolute',
    right: 4,
    marginLeft: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default DealTile;
