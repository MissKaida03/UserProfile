// src/components/NameTitle/index.js
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const NameTitle = ({ isDarkMode }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, isDarkMode ? styles.darkTitle : styles.lightTitle]}>User Profile</Text>
      <Text style={[styles.name, isDarkMode ? styles.darkText : styles.lightText]}>Kristal Angeline Sarsoza</Text>
      <Text style={[styles.username, isDarkMode ? styles.darkText : styles.lightText]}>@krisarsoza03</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute', 
    bottom: 30,
    left: 20,           
    alignItems: 'flex-start', 
  },

  title: {
    width: 90,               
    height: 30,            
    paddingVertical: 5,     
    paddingHorizontal: 5,   
    fontSize: 13,
    fontStyle: 'italic',
    borderRadius: 10,       
    borderWidth: 2,          
    backgroundColor: '#fae2e3', 
    textAlign: 'center',      
    marginBottom: 25,
  },

  name: {
    fontSize: 27,
    fontWeight: 'bold',
    marginTop: 10, 
  },

  username: {
    fontSize: 16,
    marginTop: -2,  
  },

// Light mode 
lightTitle: {
  color: 'black', 
  borderColor: '#bf53ff',
  backgroundColor: '#fae2e3', 
},

lightText: {
  color: '#ffff', 
    textShadowColor: '#000', 
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2, 
},

// Dark mode 
  darkTitle: {
    color: '#fff', 
    borderColor: '#bf53ff',
    backgroundColor: '#340143', 
  },

  darkText: {
    color: '#000', 
    textShadowColor: '#ffe5ff', 
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 2, 
  },
});

export default NameTitle;