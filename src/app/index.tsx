import { ScrollView, StyleSheet, View } from "react-native";
import StudentRoster from "./Components/StudentRoster";

export default function Index() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <StudentRoster />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
