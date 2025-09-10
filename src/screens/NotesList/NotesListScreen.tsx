
import { Animated, Dimensions, Image, PanResponder, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styles from './NotesListScreenStyle';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import images from '../../utils/constants/Images';
import { useRef, useState } from 'react';
import GlobalStyles from '../../utils/constants/styles/GlobalStyles';
import CustomerItemComponent from '../../components/CustomerItem/CustomerItemCompnent';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const COLLAPSED_HEIGHT = SCREEN_HEIGHT * 0.4;
const EXPANDED_HEIGHT = SCREEN_HEIGHT * 0.7;
const HEADER_HEIGHT = 60;

const NotesListScreen = () => {
  const insets = useSafeAreaInsets();
  const [mapType, setMapType] = useState<'standard' | 'satellite'>('standard');
  const [isVisible, setIsVisible] = useState(true)
  const animatedHeight = useRef(new Animated.Value(COLLAPSED_HEIGHT)).current;
  const locations = [
    {
      id: 1,
      name: 'Golden Gate Bridge',
      coordinate: {
        latitude: 37.8199,
        longitude: -122.4783,
      },
      description: 'Famous suspension bridge in San Francisco',
    },
  ];

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => Math.abs(gestureState.dy) > 10,
      onPanResponderMove: (_, gestureState) => {
        const newHeight = Math.max(
          COLLAPSED_HEIGHT,
          Math.min(EXPANDED_HEIGHT, animatedHeight._value - gestureState.dy)
        );
        animatedHeight.setValue(newHeight);
      },
      onPanResponderRelease: (_, gestureState) => {
        const shouldExpand = gestureState.dy < 0;
        Animated.spring(animatedHeight, {
          toValue: shouldExpand ? EXPANDED_HEIGHT : COLLAPSED_HEIGHT,
          useNativeDriver: false,
        }).start();
        setIsVisible(true)
      },
    })

  ).current;
  return (
    <SafeAreaView style={GlobalStyles.container} >
      <MapView style={styles.mapStyle} mapType={mapType}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {locations.map((location) => (
          <Marker
            key={location.id}
            coordinate={location.coordinate}
            title={location.name}
            description={location.description}
          >
            <Image
              source={images.PIN_ICON}
              style={{ width: 26, height: 40 }}
              resizeMode="contain"
            />
          </Marker>
        ))}
      </MapView>
      <View style={[styles.header, { marginTop: insets.top }]}>
        <View style={styles.headerLeftSub}>
          <Image source={images.DOROASLOGO} style={styles.logo} />
          <Text style={styles.btnTitle}>Sunday,{'\n'}September 2024</Text>
        </View>
        <View style={styles.headerRightSub}>
          <TouchableOpacity>
            <Image source={images.RELOAD_ICON} style={styles.btnLogo} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerBtn}>
            <View style={styles.roundedCircle} />
            <Text style={styles.btnTitle}>Synced</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.headerOverlay, { top: insets.top + HEADER_HEIGHT + 8 }]}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => setMapType('standard')}>
            <Text>Map</Text>
          </TouchableOpacity>
          <View style={styles.horizontalLine} />
          <TouchableOpacity onPress={() => setMapType('satellite')}>
            <Text>Satellite</Text>
          </TouchableOpacity>
        </View>
        <View style={GlobalStyles.spacer} />
        <TouchableOpacity style={styles.expandBtn} onPress={() => { setIsVisible(!isVisible) }}>
          <Image source={images.BOX_ICON} style={styles.btnLogo} />
        </TouchableOpacity>
      </View>
      {isVisible ?
        <Animated.View
          style={[
            styles.bottomContainer, {
              height: animatedHeight,
              bottom: insets.bottom,
            },
          ]}
          {...panResponder.panHandlers}>
          <View style={styles.dragIconContainer}>
            <TouchableOpacity style={styles.roundedBtn}>
              <Image source={images.DOWNARROW_ICON} style={styles.dragIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.listHeader}>
            <Text style={styles.listHeaderTitle}>Customer List</Text>
            <View style={GlobalStyles.spacer} />
            <TouchableOpacity style={styles.dropdownBtn}>
              <Text style={styles.dropdownTitle} >Filter By Date</Text>
              <Image source={images.CHEVRONDOWN_ICON} style={styles.icon} />
            </TouchableOpacity>
          </View>
          <CustomerItemComponent />
        </Animated.View>
        : null}
    </SafeAreaView>
  );
};
export default NotesListScreen;

