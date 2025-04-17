import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";


interface SearchBarProps {
  onPress? : () => void;
  placeholder : string;
  value : string,
  onChangeText : (newValue : string) => void;
}

const SearchBar = ({onPress , placeholder ,onChangeText ,value} : SearchBarProps) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor={"#ab8bff"}
      />
      <TextInput
        onPress={() => {}}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={"#ab8bff"}
        className="flex-1 ml-4 text-white"
      />
    </View>
  );
};



export default SearchBar;
