import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { GoogleSignInButton } from "./GoogleSignInButton";

const StyledText = ({ text, style }) => {
  return <Text style={[styles.text, style]}>{text}</Text>;
};

const FinanceFeatureCard = ({ color, title, imageSource, description }) => {
  return (
    <View style={[styles.card, { backgroundColor: color }]}>
      <Image source={imageSource} style={styles.featureImage} />
      <StyledText text={title} style={styles.featureTitle} />
      <StyledText text={description} style={styles.featureDescription} />
    </View>
  );
};

export default WelcomeScreen = ({ isDisabled, onPress }) => {
  const financeFeatures = [
    {
      id: "1",
      color: "#3498db",
      title: "Track Expenses",
      imageSource: require("../assets/feature1.png"),
      description: "Effortlessly manage and monitor your daily expenses with our intuitive tracking system. Gain insights into spending patterns and make informed financial decisions.",
    },
    {
      id: "2",
      color: "#2ecc71",
      title: "View Transactions",
      imageSource: require("../assets/feature2.png"),
      description: "Explore and review your financial transactions history with ease, gaining valuable insights into your spending habits. Stay organized and in control of your financial journey.",
    },
    {
      id: "3",
      color: "#e74c3c",
      title: "Budget Planning",
      imageSource: require("../assets/feature3.png"),
      description: "Effectively plan and control your budget by setting realistic financial goals and tracking your progress. Our budget planning feature helps you achieve financial stability.",
    },
  ];

  return (
    <View style={styles.container}>
      <Image source={require("../assets/mobx.jpeg")} style={styles.logoImage} />
      <StyledText text="Welcome," />

      {/* Finance Features */}
      <FlatList
        data={financeFeatures}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <FinanceFeatureCard
            color={item.color}
            title={item.title}
            imageSource={item.imageSource}
            description={item.description}
          />
        )}
      />

      <StyledText text="Ready to embark on your financial journey?" 

        style={styles.lowerText}
      />
      <GoogleSignInButton
        style={styles.button}
        onPress={onPress}
        isDisabled={isDisabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  text: {
    fontSize: 28,
    fontWeight: "bold",
    fontFamily: "Montserrat",
    textAlign: "center",
    marginTop: 20,
    color: "#333", // Dark gray color
  },
  lowerText: {
    fontSize: 18,
    color: "#666", // Light gray color
  },
  logoImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 20,
  },
  card: {
    borderWidth: 1,
    borderRadius: 15,
    padding: 15,
    margin: 10,
    marginHorizontal: 10,
    alignItems: "center",
    height: 400,
    width: 250, // Adjust as needed
  },
  featureImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
  },
  featureDescription: {
    fontSize: 14,
    textAlign: "center",
    color: "white",
    opacity: 0.8, // Lighter opacity
    marginTop: 10,
  },
  button: {
    marginTop: 20,
  },
  lowerText: {
    fontSize: 18,
    color: "#666", // Light gray color
    fontWeight: "400",
  },

});
