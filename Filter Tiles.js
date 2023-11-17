import React, {useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const DATA = [
  {
    id: 1,
    path: './assets/images/1.jpeg',
    title: 'Home Decor',
  },
  {
    id: 2,
    path: './assets/images/2.jpeg',
    title: 'Electronics',
  },
  {
    id: 3,
    path: './assets/images/3.jpeg',
    title: 'Wellness',
  },
  {
    id: 4,
    path: './assets/images/4.jpeg',
    title: 'Kitchen',
  },
  {
    id: 5,
    path: './assets/images/5.jpeg',
    title: 'Fashion',
  },
  {
    id: 6,
    path: './assets/images/6.jpeg',
    title: 'Travel',
  },
];

function Filters({id, path, title, onSelect, isSelected}) {
  const handlePress = () => {
    onSelect(id);
  };
  //   Oneeant/assets/images/1.jpeg
  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.7}>
      <View style={[styles.tileContainer, isSelected && styles.selected]}>
        <View style={styles.imagesContainer}>
          <View style={styles.titleImageContainer}>
            <Image source={{path}} resizeMode="cover" style={styles.image} />
          </View>
          {isSelected && (
            <View style={styles.checkContainer}>
              <Image
                source={require('./assets/images/check.png')}
                resizeMode="cover"
                style={{width: 15, height: 15}}
              />
            </View>
          )}
        </View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

function Main() {
  const [selectedItemIds, setSelectedItemIds] = useState([]);

  const onSelect = itemId => {
    setSelectedItemIds(
      prevSelected =>
        prevSelected.includes(itemId)
          ? prevSelected.filter(id => id !== itemId) // Deselect item if already selected
          : [...prevSelected, itemId], // Select item if not selected
    );
  };

  const renderItem = ({item}) => (
    <Filters
      id={item.id}
      path={item.path}
      title={item.title}
      onSelect={onSelect}
      isSelected={selectedItemIds.includes(item.id)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item.title}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    alignSelf: 'center',
  },
  tileContainer: {
    minWidth: '45%',
    minHeight: '25%',
    borderWidth: 2,
    borderRadius: 12,
    borderColor: '#E5E7EA',
    paddingVertical: 24,
    margin: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  selected: {
    borderColor: '#006FFD',
  },
  imagesContainer: {
    width: 80,
    height: 80,
    // marginVertical: 8,
  },
  titleImageContainer: {
    width: 80,
    height: 80,
    // borderWidth: 1,
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
    marginTop: 10,
    fontSize: 18,
    color: 'black'
  },
  checkContainer: {
    backgroundColor: '#006FFD',
    width: 25,
    height: 25,
    borderRadius: 13,
    zIndex: 1,
    position: 'absolute',
    right: 0,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Main;
