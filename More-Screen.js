import {View, Text, FlatList, StyleSheet, Image, TouchableOpacity} from 'react-native';

const DATA = [
  {
    id: 1,
    feature: 'Notifications',
    image: require('./assets/images/bell.png'),
    headTo: '', // Screen name to navigate
  },
  {
    id: 2,
    feature: 'Groups',
    image: require('./assets/images/users.png'),
    headTo: '',
  },
  {
    id: 3,
    feature: 'Settings & Privacy',
    image: require('./assets/images/settings.png'),
    headTo: '',
  },
  {
    id: 4,
    feature: 'Become a Supplier',
    image: require('./assets/images/briefcase.png'),
    headTo: '',
  },
  {
    id: 5,
    feature: 'Terms & Conditions',
    image: require('./assets/images/list.png'),
    headTo: '',
  },
  {
    id: 6,
    feature: 'Logout',
    image: require('./assets/images/log-out.png'),
    headTo: '',
  },
];

function Header({handleEdit}) {
  return (
    <View style={styles.headerContainer}>
      {/* Profile Picture */}
      <View style={styles.profileImageContainer}>
        <Image
          source={require('./assets/images/Girl.png')}
          style={styles.profileImage}
        />
      </View>
      {/* Details */}
      <View style={styles.profileDetailContainer}>
        <Text style={styles.profileName}>Srinija K</Text>
        <Text style={styles.mobileNo}>91 74156 74620</Text>
      </View>
      {/* Icon */}
      <TouchableOpacity style={styles.profileIconContainer} activeOpacity={0.8} onPress={handleEdit} >
        <Image
          source={require('./assets/images/edit.png')}
          style={styles.profileIcon}
        />
      </TouchableOpacity>
    </View>
  );
}

function Separator() {
  return <View style={styles.separator} />;
}

function Feature({item, onPress}) {
  // console.log(item.feature);
  return (
    <TouchableOpacity style={styles.featureContainer} activeOpacity={0.8} onPress={onPress} >
      <View style={styles.profileRightContainer} >
        <Image source={item.image} style={styles.featureIcons} />
        <Text style={styles.featureText} >{item.feature}</Text>
      </View>
      <View>
        <Image
          source={require('./assets/images/chevron-right.png')}
          style={styles.featureIcons}
        />
      </View>
    </TouchableOpacity>
  );
}

function MoreScreen({onEdit}) {
  return (
    <View>
      <FlatList
        ListHeaderComponent={<Header handleEdit={onEdit} />}
        data={DATA}
        keyExtractor={item => item.id.toString()}
        renderItem={Feature}
        ItemSeparatorComponent={<Separator />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    minWidth: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    backgroundColor: '#ecb8b8',
    padding: 16,
    borderRadius: 12,
    alignSelf: 'stretch',
    marginBottom: 32,
  },
  profileImageContainer: {
    height: 60,
    width: 60,
    borderRadius: 30,
    overflow: 'hidden',
  },
  profileImage: {
    height: '100%',
    width: '100%',
  },
  profileDetailContainer: {
    flex: 1,
  },
  profileName: {
    fontSize: 16,
    color: '#2A2A2A',
    fontWeight: '600',
  },
  mobileNo: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    color: '#2A2A2A',
  },
  profileIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileIcon: {
    height: 24,
    width: 24,
  },
  featureContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  featureText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2A2A2A'
  },
  featureIcons: {
    height: 24,
    width: 24,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: 'black',
    marginVertical: 20,
  },
  profileRightContainer: {
    flexDirection: 'row',
    gap: 12
  }
});

export default MoreScreen;
