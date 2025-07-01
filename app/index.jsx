import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={['#667eea', '#764ba2']}
        style={styles.headerGradient}
      >
        <View style={styles.profileSection}>
          <Image 
            source={require("../assets/images/pipi.jpg")} 
            style={styles.profileImage} 
          />
          <Text style={styles.name}>Pipithatana Pipithatkul</Text>
          <Text style={styles.studentId}>รหัสนักศึกษา: 653450097-2</Text>
        </View>
      </LinearGradient>

      <View style={styles.contentContainer}>
        <View style={styles.infoCard}>
          <Text style={styles.sectionTitle}>My Education 🎓</Text>
          <View style={styles.infoRow}>
            <Text style={styles.label}>สาขา:</Text>
            <Text style={styles.value}>วิทยาการคอมพิวเตอร์และสารสนเทศ</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>หลักสูตร:</Text>
            <Text style={styles.value}>วิทยาศาสตรบัณฑิต</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>มหาวิทยาลัย:</Text>
            <Text style={styles.value}>มหาวิทยาลัยขอนแก่น</Text>
          </View>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.sectionTitle}>My Skill 🎯</Text>
          <View style={styles.skillsContainer}>
            <View style={styles.skillChip}>
              <Text style={styles.skillText}>React Native</Text>
            </View>
            <View style={styles.skillChip}>
              <Text style={styles.skillText}>JavaScript</Text>
            </View>
            <View style={styles.skillChip}>
              <Text style={styles.skillText}>Play Basketball</Text>
            </View>
            <View style={styles.skillChip}>
              <Text style={styles.skillText}>Mobile Development</Text>
            </View>
            <View style={styles.skillChip}>
              <Text style={styles.skillText}>UI/UX Design</Text>
            </View>
          </View>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.sectionTitle}>information 💬</Text>
          <Text style={styles.aboutText}>
            นักศึกษาสาขาวิทยาการคอมพิวเตอร์และสารสนเทศ ที่มีความสนใจในการพัฒนาแอปพลิเคชันมือถือ 
            และการออกแบบประสบการณ์ผู้ใช้ มีความตั้งใจที่จะพัฒนาทักษะด้านเทคโนโลยีอย่างต่อเนื่อง
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  headerGradient: {
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  profileSection: {
    alignItems: "center",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: "#fff",
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
    textAlign: "center",
  },
  studentId: {
    fontSize: 16,
    color: "#fff",
    opacity: 0.9,
  },
  contentContainer: {
    padding: 20,
    paddingTop: 10,
  },
  infoCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: "#667eea",
    paddingBottom: 5,
  },
  infoRow: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#555",
    width: 80,
  },
  value: {
    fontSize: 16,
    color: "#333",
    flex: 1,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  skillChip: {
    backgroundColor: "#667eea",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  skillText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
  aboutText: {
    fontSize: 16,
    color: "#555",
    lineHeight: 24,
    textAlign: "left",
  },
});

export default Home;
