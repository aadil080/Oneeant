import {StyleSheet, Text, View} from 'react-native';
import Expandable from './Expandable';

const DATA = [
  {
    id: 1,
    price: 100,
    offerPrice: 50,
    discount: 50,
  },
  {
    id: 2,
    price: 100,
    offerPrice: 40,
    discount: 60,
    piece: '2',
  },
  {
    id: 3,
    price: 100,
    offerPrice: 30,
    discount: 70,
    piece: '3',
  },
  {
    id: 4,
    price: 100,
    offerPrice: 20,
    discount: 80,
    piece: '3+',
  },
];

function Price({priceDetails = DATA}) {
  return (
    <View style={styles.container}>

      {/* Took first price as a default. */}
      <View style={styles.priceConatiner}>
        <Text style={styles.offerPrice}>${priceDetails[0].offerPrice} </Text>
        <Text style={styles.price}>${priceDetails[0].price}</Text>
        <Text style={styles.discount}> {priceDetails[0].discount}% off</Text>
        <View style={styles.pieceContainer}>
          <Expandable />
        </View>
      </View>
      <View>
        {/* Other prices */}
        {priceDetails.slice(1).map((item, index) => {
          return (
            <View key={index} >
              {index < priceDetails.length - 1 && (
                <View style={styles.separator} />
              )}
              <View style={styles.priceConatiner}>
                <Text style={styles.offerPrice}>${item.offerPrice} </Text>
                <Text style={styles.price}>${item.price}</Text>
                <Text style={styles.discount}> {item.discount}% off</Text>
                <View style={styles.pieceContainer}>
                  <Text style={styles.pieceText}>{item.piece} pc</Text>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#2A2A2A',
  },
  priceConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  offerPrice: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2A2A2A',
  },
  price: {
    fontSize: 12,
    fontWeight: '400',
    color: '#2A2A2A',
    textDecorationLine: 'line-through',
  },
  discount: {
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
    color: '#53B483',
  },
  pieceContainer: {
    position: 'absolute',
    right: 10,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: 64,
  },
  pieceText: {
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
    color: '#2A2A2A',
  },
});

export default Price;
