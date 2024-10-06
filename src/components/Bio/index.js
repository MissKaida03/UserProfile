// src/components/Bio/index.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const Bio = ({ isDarkMode }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [bioText, setBioText] = useState(
    'I am a third-year IT student who enjoys collaborating with my peers. I love creating and working on projects that challenge my creativity. I value teamwork and always strive to contribute positively to my group. I believe in balancing hard work with fun and friendship.'
  );

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
   
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.title, isDarkMode ? styles.darkTitle : styles.lightTitle]}>
        Bio
      </Text>
      {isEditing ? (
        <TextInput
          style={[styles.bioInput, isDarkMode && styles.darkInput]}
          value={bioText}
          onChangeText={setBioText}
          multiline
        />
      ) : (
        <Text style={[styles.bioText, isDarkMode ? styles.darkBioText : styles.lightBioText]}>
          {bioText}
        </Text>
      )}
      <TouchableOpacity
        style={[styles.button, isDarkMode ? styles.darkButton : styles.lightButton]}
        onPress={isEditing ? handleSave : handleEdit}
      >
        <Text style={styles.buttonText}>{isEditing ? 'Save' : 'Edit'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
      },

    bioText: {
        fontSize: 16,
        marginBottom: 10,
        },

    button: {
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        },
    
    buttonText: {
        color: '#000',
        fontWeight: 'bold',
    },

    //Light Mode
  container: {
    padding: 20,
    borderRadius: 10,
    marginVertical: 20,
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: '#bf53ff',
  },

  lightTitle: {
    color: '#000', 
  },

  lightBioText: {
    color: '#000',
  },

  bioInput: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#bf53ff',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#f5f5f5',
    marginBottom: 10,
  },

  lightButton: {
    backgroundColor: '#ffe5ff',
  },

  // Dark Mode
  darkContainer: {
    backgroundColor: '#3e3e3e',
  },
  
  darkTitle: {
    color: '#fff', 
  },
  
  darkBioText: {
    color: '#fff',
  },
  
  darkInput: {
    backgroundColor: '#2c2c2c',
    color: '#fff',
  },
 
  darkButton: {
    backgroundColor: '#a5678e',
  },
 
});

export default Bio;