import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import images from '../../utils/constants/Images';
import colors from '../../utils/constants/colors';
import Fonts from '../../utils/constants/Fonts';
type DropdownOption = {
  label: string;
  value: string;
};

type CustomDropdownProps = {
  options: DropdownOption[];
  onSelect: (value: string) => void;
};

const CustomDropdown: React.FC<CustomDropdownProps> = ({ options, onSelect }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsVisible(false);
    onSelect(value);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsVisible(!isVisible)} style={styles.dropDownField}>
        <Text style={styles.placeholder}>{selectedValue || 'Select an option'}</Text>
        <Image source={images.ARROW_ICON} style={styles.dropDownIcon} />
      </TouchableOpacity>
      {isVisible && (
        <View style={styles.dropdownList}>
          {options.map((option) => (
            <TouchableOpacity
              key={option.value}
              onPress={() => handleSelect(option.value)}
              style={styles.dropdownItem}>
                <Image source={ selectedValue === option.value ?  images.CHECKED_ICON : images.UNCHECKED_ICON} />
              <Text style={[styles.placeholder,{color: selectedValue === option.value ? colors.DARK_BLUE : colors.DARK_GREY} ]} >{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
     dropDownField:{
        flexDirection:'row',
        height:50,
        borderRadius:4,
        borderColor:colors.BLUR_GREY,
        borderWidth:1,
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:8,
    },
  container: {},
 
  dropdownList: {
    position: 'absolute',
    top: 60,
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: colors.BLUR_GREY,
    borderRadius: 5,
    zIndex: 1,
    
  },
  dropdownItem: {
    padding: 10,
    flexDirection:'row',
    alignItems:"center",
    gap:10
  },
   dropDownIcon:{
        height:7,
        width:14,
    },
     placeholder:{
        fontSize:14,
        fontFamily:Fonts.MULISH_MEDIUM,
        color:colors.BLUR_GREY,
        fontWeight:'500',
    },
});

export default CustomDropdown;
