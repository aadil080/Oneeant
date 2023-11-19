import React, {useState, useRef, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  LayoutAnimation,
  UIManager,
  ScrollView,
} from 'react-native';

// Enable LayoutAnimation for Android
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const DATA = [
  {id: 1, piece: '1'},
  {id: 2, piece: '2'},
  {id: 3, piece: '3'},
  {id: 4, piece: '4'},
  {id: 5, piece: '5'},
  {id: 6, piece: '6'},
  {id: 7, piece: '7'},
];

function Expandable() {
  const [expanded, setExpanded] = useState(false);
  const heightValue = useRef(new Animated.Value(0)).current;
  const [selectedPiece, setSelectedPiece] = useState(1);

  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }, [expanded]);

  const toggleExpand = () => {
    setExpanded(!expanded);
    Animated.timing(heightValue, {
      toValue: expanded ? 0 : 100,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handleSelectPiece = piece => {
    setSelectedPiece(piece);
    toggleExpand();
  };

  const containerStyle = {height: heightValue};

  return (
    <View>
      <TouchableOpacity
        style={styles.selectedPieceContainer}
        activeOpacity={0.8}
        onPress={toggleExpand}>
        <Text style={styles.title}>{selectedPiece} PC</Text>
        <View style={styles.iconContainer}>
          <Image
            source={require('./assets/images/chevron-down.png')}
            style={styles.icon}
          />
        </View>
      </TouchableOpacity>

      {/* Expandable View */}
      <Animated.View style={[styles.expandedContainer, containerStyle]}>
        {expanded && (
          <ScrollView showsVerticalScrollIndicator={false}>
            {DATA.map(item => (
              <TouchableOpacity
                key={item.id}
                style={styles.expandedItem}
                activeOpacity={0.8}
                onPress={() => handleSelectPiece(item.piece)}>
                <Text style={styles.title}>{item.piece} PC</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  
  selectedPieceContainer: {
    borderWidth: 2,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6F7F9',
  },
  title: {
    fontSize: 12,
    fontWeight: '600',
    color: '#2A2A2A',
  },
  iconContainer: {
    height: 16,
    width: 16,
    marginLeft: 2,
  },
  icon: {
    height: '100%',
    width: '100%',
  },
  expandedContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    height: 100,
    backgroundColor: 'white',
  },
  expandedItem: {
    padding: 8,
    borderBottomWidth: 1,
  },
});

export default Expandable;
