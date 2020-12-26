import React from 'react';
import { Block } from "galio-framework";
import { Easing, Animated, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// subpage
import Home from '../screens/Home';
import Pro from '../screens/Pro';
import Profile from '../screens/Profile';
import Components from '../screens/Components';
import Articles from '../screens/Articles';
import Onboarding from '../screens/Onboarding';

// import Chatroom from '../screens/Chatroom';
import Request from '../screens/Request';
import SettingsScreen from '../screens/Settings';
import request_single from '../screens/request_single';
import location_single from '../screens/location_single';
import location from '../screens/location';
// form
import requestForm from '../screens/form/requestForm'; 
import profileForm from '../screens/form/profileForm';
// // auth
import Register from '../screens/Register';
import Forgot from '../screens/Forgot';
import Login from '../screens/Login';
// drawer
import CustomDrawerContent from "./Menu";
// header for screens
import { Header, Icon} from '../components';
import { nowTheme, tabs } from "../constants";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function ComponentsStack(props) {
  return (
    <Stack.Navigator initialRouteName="Components" mode="card" headerMode="screen">
      <Stack.Screen name="Components" component={Components} options={{
        header:({ navigation, scene }) => (<Header title="Components" navigation={navigation} scene={scene} />),
        backgroundColor: "#FFFFFF"
      }}/>
    </Stack.Navigator>
  );
}

function ArticlesStack(props) {
  return (
    <Stack.Navigator initialRouteName="Articles" mode="card" headerMode="screen">
      <Stack.Screen name="Articles" component={Articles} options={{
        header: ({ navigation, scene }) => (<Header title="Articles" navigation={navigation} scene={scene} />),
        backgroundColor: '#FFFFFF'
      }} />
    </Stack.Navigator>
  );
}

// function AccountStack(props) {
//   return (
//     <Stack.Navigator initialRouteName="Account" mode="card" headerMode="screen">
//       <Stack.Screen
//         name="Account"
//         component={Register}
//         options={{
//           header: ({ navigation, scene }) => (
//             <Header 
//               transparent
//               title="Create Account"
//               navigation={navigation}
//               scene={scene}
//             />
//           ),
//           headerTransparent: true
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

function ProfileStack(props) {
  return (
    <Stack.Navigator initialRouteName="Profile" mode="card" headerMode="screen">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title="Profile"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

function HomeStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Home"
              search
              // options
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" }
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}
function RegisterStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Register"
              search
              options
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" }
        }}
      />
      
    </Stack.Navigator>
  );
}

function ProStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Promotion"
              // search
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" }
        }}
      />
      
    </Stack.Navigator>
  );
}
function ChatroomStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Chatroom"
        component={Chatroom}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Chatroom"
              search
              options
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" }
        }}
      />
      
    </Stack.Navigator>
  );
}

function requestSingleStack(props) {
  return (
    <Stack.Navigator initialRouteName="requestSingle" mode="card" headerMode="screen">
      <Stack.Screen name="requestSingle" component={request_single} options={{
        header:({ navigation, scene }) => (<Header title="request details" navigation={navigation} scene={scene} />),
        backgroundColor: "#FFFFFF"
      }}/>
    </Stack.Navigator>
  );
}
function locationSingleStack(props) {
  return (
    <Stack.Navigator initialRouteName="locationSingle" mode="card" headerMode="screen">
      <Stack.Screen name="locationSingle" component={location_single} options={{
        header:({ navigation, scene }) => (<Header title="Location details" navigation={navigation} scene={scene} />),
        backgroundColor: "#FFFFFF"
      }}/>
    </Stack.Navigator>
  );
}
//form:
function requestFormStack(props) {
  return (
    <Stack.Navigator initialRouteName="form" mode="card" headerMode="screen">
      <Stack.Screen name="form" component={requestForm} options={{
        header:({ navigation, scene }) => (<Header title="New Request" navigation={navigation} scene={scene} />),
        backgroundColor: "#FFFFFF"
      }}/>
    </Stack.Navigator>
  );
}
function profileFormStack(props) {
  return (
    <Stack.Navigator initialRouteName="profileForm" mode="card" headerMode="screen">
      <Stack.Screen name="profileForm" component={profileForm} options={{
        header:({ navigation, scene }) => (<Header title="New User set profile" navigation={navigation} scene={scene} />),
        backgroundColor: "#FFFFFF"
      }}/>
    </Stack.Navigator>
  );
}
function RequestStack(props) {
  return (
    <Stack.Navigator initialRouteName="Request" mode="card" headerMode="screen">
      <Stack.Screen name="Request" component={Request} options={{
        header: ({ navigation, scene }) => (<Header tabs={tabs.request} title="Request" scene={scene} navigation={navigation} />),
        backgroundColor: '#FFFFFF'
      }} />
      <Stack.Screen name="requestSingle" component={request_single} options={{
        header:({ navigation, scene }) => (<Header title="request details" navigation={navigation} scene={scene} />),
        backgroundColor: "#FFFFFF"
      }}/>
      <Stack.Screen name="form" component={requestForm} options={{
        header:({ navigation, scene }) => (<Header title="New Request" navigation={navigation} scene={scene} />),
        backgroundColor: "#FFFFFF"
      }}/>
    </Stack.Navigator>
  );
}
function locationStack(props) {
  return (
    <Stack.Navigator initialRouteName="location" mode="card" headerMode="screen">
      <Stack.Screen name="Locations" component={location} data={"dataaaaa"} options={{
        header:({ navigation, scene }) => (<Header title="All location Sorted by:" tabs={tabs.location} navigation={navigation} scene={scene} />),
        backgroundColor: "#FFFFFF"
      }}/>
      <Stack.Screen name="locationSingle" component={location_single} options={{
        header:({ navigation, scene }) => (<Header title="Location details" navigation={navigation} scene={scene} />),
        backgroundColor: "#FFFFFF"
      }}/>
    </Stack.Navigator>
  );
}


function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: nowTheme.COLORS.PRIMARY,
        width: width * 0.8
      }}
      drawerContentOptions={{
        activeTintcolor: nowTheme.COLORS.WHITE,
        inactiveTintColor: nowTheme.COLORS.WHITE,
        activeBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.75,
          backgroundColor: "transparent",
          paddingVertical: 16,
          paddingHorizonal: 12,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          overflow: "hidden"
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: "normal"
        }
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={HomeStack} />
      {/* <Drawer.Screen name="Test" component={TestStack} /> */}
      <Drawer.Screen name="Components" component={ComponentsStack} />
      <Drawer.Screen name="Articles" component={ArticlesStack} />
      <Drawer.Screen name="Profile" component={ProfileStack} />
      {/* <Drawer.Screen name="Account" component={AccountStack} /> */}
      <Drawer.Screen name="Chatroom" component={ChatroomStack} />
      <Drawer.Screen name="Request" component={RequestStack} />
      {/* <Drawer.Screen name="Form" component={requestFormStack} /> */}
      <Drawer.Screen name="profileForm" component={profileFormStack} /> 
      <Drawer.Screen name="pro" component={ProStack} /> 
      
      {/* <Drawer.Screen name="requestSingle" component={requestSingleStack} /> */}
      <Drawer.Screen name="Locations" component={locationStack} />
     {/* <Drawer.Screen name="locationSingle" component={locationSingleStack} /> */}
    </Drawer.Navigator>
  );
}
export default function OnboardingStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        option={{
          headerTransparent: true
        }}
      />
      <Stack.Screen name="App" component={AppStack} />
      {/* <Stack.Screen name="profileForm" component={profileForm} /> */}
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      {/* // <Stack.Screen name="Forgot" component={Register} /> */} 
    </Stack.Navigator>
  );
}

