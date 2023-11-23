import {View, Text, Image, StyleSheet, FlatList} from 'react-native';

const DATA = [
  {
    id: 1,
    name: 'Srinija K',
    amount: 30,
    status: 'PAID',
    image: require('./assets/images/1a.png'),
  },
  {
    id: 2,
    name: 'Janaki R',
    amount: 30,
    status: 'DUE',
    image: require('./assets/images/2a.png'),
  },
  {
    id: 3,
    name: 'Ritesh M',
    amount: 30,
    status: 'DUE',
    image: require('./assets/images/3a.png'),
  },
  {
    id: 4,
    name: 'Ritesh M',
    amount: 30,
    status: 'Paid',
    image: require('./assets/images/1a.png'),
  },
];

function Members({item}) {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.leftContainer}>
        <View>
          <Image source={item.image} style={styles.profileImage} />
        </View>
        <Text style={styles.profileName}>{item.name}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.amount}>${item.amount}</Text>
        <Text style={[styles.status, item.status === 'DUE' && {color: '#9038FF'}]}>{item.status}</Text>
      </View>
    </View>
  );
}
function Separator() {
  return <View style={styles.separator} />;
}

function YourGroup({members = DATA}) {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.leftContainer}>
          <View>
            <Image source={members[0].image} style={styles.profileImage} />
          </View>
          <Text style={styles.profileName}>{members[0].name} (YOU)</Text>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.amount}>${members[0].amount}</Text>
          <Text style={styles.status}>{members[0].status}</Text>
        </View>
      </View>
      <Separator />
      <FlatList
        data={members.slice(1)}
        renderItem={Members}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    width: '100%',
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#E5E7EA'
    // gap: 20
  },
  profileContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
    // borderWidth: 1,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // gap: 8,
    justifyContent: 'space-between',
    width: 70

  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  profileName: {
    fontSize: 14,
    fontWeight: '400',
    color: '#2A2A2A',
    lineHeight: 20,
  },
  amount: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2A2A2A',
    lineHeight: 28,
  },
  status: {
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
    color: '#53B483',
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: 'black',
    marginBottom: 20,
  },
});

export default YourGroup;
