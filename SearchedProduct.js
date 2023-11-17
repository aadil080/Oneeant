import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const DATA = [
  {
    id: 1,
    title: 'Y-Pack Unisex Bag',
    desc: 'By forever 21',
    image: require('./assets/images/4.jpeg'),
  },
  {
    id: 2,
    title: 'Y-Pack Unisex Bag',
    desc: 'By forever 21',
    image: require('./assets/images/4.jpeg'),
  },
  {
    id: 3,
    title: 'Y-Pack Unisex Bag',
    desc: 'By forever 21',
    image: require('./assets/images/4.jpeg'),
  },
  {
    id: 4,
    title: 'Y-Pack Unisex Bag',
    desc: 'By forever 21',
    image: require('./assets/images/4.jpeg'),
  },
  {
    id: 5,
    title: 'Y-Pack Unisex Bag',
    desc: 'By forever 21',
    image: require('./assets/images/4.jpeg'),
  },
  {
    id: 6,
    title: 'Y-Pack Unisex Bag',
    desc: 'By forever 21',
    image: require('./assets/images/4.jpeg'),
  },
  {
    id: 7,
    title: 'Y-Pack Unisex Bag',
    desc: 'By forever 21',
    image: require('./assets/images/4.jpeg'),
  },
  {
    id: 8,
    title: 'Y-Pack Unisex Bag',
    desc: 'By forever 21',
    image: require('./assets/images/4.jpeg'),
  },
  {
    id: 9,
    title: 'Y-Pack Unisex Bag',
    desc: 'By forever 21',
    image: require('./assets/images/4.jpeg'),
  },
  {
    id: 10,
    title: 'Y-Pack Unisex Bag',
    desc: 'By forever 21',
    image: require('./assets/images/4.jpeg'),
  },
  {
    id: 11,
    title: 'Y-Pack Unisex Bag',
    desc: 'By forever 21',
    image: require('./assets/images/4.jpeg'),
  },
];

function Products({title, desc, image}) {
  return (
    <TouchableOpacity style={styles.productTiles} activeOpacity={0.8}>
      <View style={styles.imageContainer}>
        <Image
          source={image}
          style={styles.image}
        />
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{desc}</Text>
      </View>
    </TouchableOpacity>
  );
}

function SearchProduct() {
  const renderItem = ({item}) => {
    return <Products title={item.title} desc={item.desc} image={item.image} />;
  };

  return (
    <View style={styles.container} >
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  productTiles: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  imageContainer: {
    height: 60,
    width: 60,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 16,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  title: {
    color: 'black',
    fontSize: 16,
  },
  description: {
    color: '#2A2A2A',
    fontSize: 12,
  },
});

export default SearchProduct;
