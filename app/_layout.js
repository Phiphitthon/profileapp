import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#667eea" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#667eea",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 18,
          },
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen 
          name="index" 
          options={{ 
            title: "โปรไฟล์ของฉัน",
            headerShown: false, // ซ่อน header เพราะเราใช้ gradient header ใน component แล้ว
          }} 
        />
      </Stack>
    </>
  );
}
