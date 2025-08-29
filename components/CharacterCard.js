import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';

const CharacterCard = ({ character }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={tw`bg-white rounded-lg shadow p-4 mb-4 flex-row items-center`}
      onPress={() => navigation.navigate('CharacterDetail', { id: character.id })}
    >
      <Image
        source={{ uri: character.image }}
        style={tw`w-16 h-16 rounded-full mr-4`}
      />
      <View>
        <Text style={tw`text-lg font-bold`}>{character.name}</Text>
        <Text style={tw`text-gray-500`}>{character.race}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CharacterCard;
