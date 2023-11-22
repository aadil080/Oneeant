import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  requireNativeComponent,
} from 'react-native';

const DATA = [
  {
    id: 1,
    name: 'Srinija K',
    image: '',
  },
  {
    id: 2,
    name: 'Janaki R',
    image: '',
  },
  {
    id: 3,
    name: 'Ritesh M',
    image: '',
  },
  {
    id: 4,
    name: 'Mahesh H',
    image: '',
  },
  {
    id: 5,
    name: 'Srinija K',
    image: '',
  },
];

colors = [
  {
    backgroundColor: '#9238ff65',
    color: '#9038FF',
  },
];

function Members({id, name, image, onSelect, isSelected}) {
  function handlePress() {
    onSelect(id);
  }

  return (
    <TouchableOpacity
      style={styles.infoContainer}
      activeOpacity={0.8}
      onPress={handlePress}>
      <View style={styles.textAndIcon}>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>
            {name[0]}
            {name.split(' ')[1]}
          </Text>
        </View>
        <Text style={styles.text}>{name}</Text>
      </View>
      <View
        style={[
          styles.checkboxContainer,
          isSelected && {backgroundColor: 'black'},
        ]}>
        {isSelected && <Image source={require('./assets/images/check.png')} />}
      </View>
    </TouchableOpacity>
  );
}

function MembersList({onPress}) {
  const [selectedItemIds, setSelectedItemIds] = useState([-1]);
  // console.log(selectedItemIds)

  const onSelect = itemId => {
    setSelectedItemIds(
      prevSelected =>
        prevSelected.includes(itemId)
          ? prevSelected.filter(id => id !== itemId) // Deselect item if already selected
          : [...prevSelected, itemId], // Select item if not selected
    );
  };

  const renderItem = ({item}) => (
    <Members
      id={item.id}
      name={item.name}
      image={item.image}
      onSelect={onSelect}
      isSelected={selectedItemIds.includes(item.id)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={item => item.id.toString()}
        // renderItem={item => renderItem(item)}
        renderItem={renderItem}
      />
      <TouchableOpacity
        onPress={onPress}
        style={styles.btn}
        activeOpacity={0.75}>
        {/* <Text style={styles.textDesign}>Add {'['}{`${selectedItemIds.length()}`}{']'} Members</Text> */}
        <Text style={styles.btnText}>
          {`Add [${selectedItemIds.length-1}] Members`}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: '100%'
  },
  infoContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  textAndIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  iconContainer: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#9238ff65',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#9038FF',
    fontSize: 14,
    fontWeight: '700',
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    color: '#2A2A2A',
  },
  checkboxContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 4,
    // padding: 3,
    height: 20,
    width: 20,
    elevation: 4,
    // Shadow for Iphone
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  checkbox: {
    height: '100%',
    width: '100%',
  },
  btn: {
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#006FFD',
    paddingVertical: 12
  },
  btnText: {
    color: '#006FFD',
    fontSize: 16,
    fontWeight: '600',
    // fontFamily: 'Poppins-Medium',
    alignSelf: 'center',
  },
});

export default MembersList;
