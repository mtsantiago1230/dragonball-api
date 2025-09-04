import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';
import CharacterCard from '../components/CharacterCard';
import tw from 'twrnc';

const CharacterListScreen = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://dragonball-api.com/api/characters')
      .then((res) => {
        setCharacters(res.data.items || res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load characters');
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ActivityIndicator style={tw`mt-10`} size="large" color="#f59e42" />;
  }

  if (error) {
    return <Text style={tw`text-red-500 mt-10 text-center`}>{error}</Text>;
  }

  return (
    <View style={tw`flex-1 bg-gray-100 p-4`}>
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CharacterCard character={item} />}
      />
    </View>
  );
};

export default CharacterListScreen;
