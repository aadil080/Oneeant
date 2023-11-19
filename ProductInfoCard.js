import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const DATA = [
  {
    id: 1,
    title: 'Product details',
    icon: require('./assets/images/menu.png'),
    desc: 'A dynamic and high-performance fabric that takes centre stage in our products.',
  },
  {
    id: 2,
    title: 'Shipping & returns',
    icon: require('./assets/images/truck.png'),
    desc: 'We offer free shipping on all orders over $100 and provide a full refund if returned within 30 days.',
  },
  {
    id: 3,
    title: 'Warranty',
    icon: require('./assets/images/shield.png'),
    desc: 'Your product is covered by a 12 month Warranty or more if you opted for the extended warranty.',
  },
];

function InfoOption({title, icon, desc}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setExpanded(!expanded)}
        style={styles.header}>
        <View style={styles.iconContainer}>
          <Image source={icon} style={styles.icon} />
        </View>
        <Text style={styles.title}>{title}</Text>

        {/* Image to show expand and collapse of element  */}

        <View style={styles.minusContainer}>
          {expanded ? (
            <Image
              source={require('./assets/images/minus.png')}
              style={styles.icon}
            />
          ) : (
            <Image
              source={require('./assets/images/plus.png')}
              style={styles.icon}
            />
          )}
        </View>
      </TouchableOpacity>
      {expanded && <Text style={styles.desc}>{desc}</Text>}
    </View>
  );
}

function InformationCard() {
  return (
    <View style={styles.container}>
      {DATA.map((item, index) => {
        return (
          <View key={index} style={styles.optionContainer}>
            <InfoOption title={item.title} icon={item.icon} desc={item.desc} />
            {/* Separator between distances */}
            {index < DATA.length - 1 && <View style={styles.separator} />}
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 16,
    width: '100%',
    paddingHorizontal: 20,
  },
  optionContainer: {
    width: '100%',
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#2A2A2A',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 16,
    color: '#2A2A2A',
    fontWeight: '500',
  },
  desc: {
    fontSize: 14,
    fontWeight: '400',
    color: '#2A2A2A',
    marginBottom: 20,
  },
  iconContainer: {
    height: 24,
    width: 24,
    marginRight: 12,
  },
  icon: {
    height: '100%',
    width: '100%',
  },
  minusContainer: {
    height: 24,
    width: 24,
    position: 'absolute',
    right: 0,
  },

  descContainer: {
    overflow: 'hidden',
  },
});

export default InformationCard;
