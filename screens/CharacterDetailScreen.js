import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, ScrollView } from 'react-native';
import axios from 'axios';
import tw from 'twrnc';

const CharacterDetailScreen = ({ route }) => {
  const { id } = route.params;
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://dragonball-api.com/api/characters/${id}`)
      .then(res => {
        setCharacter(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load character details');
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <ActivityIndicator style={tw`mt-10`} size="large" color="#f59e42" />;
  }

  if (error) {
    return <Text style={tw`text-red-500 mt-10 text-center`}>{error}</Text>;
  }

  if (!character) {
    return null;
  }

  return (
    <ScrollView style={tw`flex-1 bg-white p-4`}>
      <View style={tw`items-center mb-4`}>
        <Image source={{ uri: character.image }} style={tw`w-32 h-32 rounded-full`} />
        <Text style={tw`text-2xl font-bold mt-2`}>{character.name}</Text>
        <Text style={tw`text-gray-500`}>{character.race}</Text>
      </View>
      <Text style={tw`text-base`}>{character.description || 'No description available.'}</Text>
    </ScrollView>
  );
};

export default CharacterDetailScreen;
