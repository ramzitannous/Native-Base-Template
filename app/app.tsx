/**
 * Welcome to the main entry point of the app. In this file, we'll
 * be kicking off our app.
 *
 * Most of this file is boilerplate and you shouldn't need to modify
 * it very often. But take some time to look through and understand
 * what is going on here.
 *
 * The app navigation resides in ./app/navigation, so head over there
 * if you're interested in adding screens and navigators.
 */
import "./i18n"
import "./utils/ignore-warnings"
import React, { useRef } from "react"
import { NavigationContainerRef } from "@react-navigation/native"
import { SafeAreaProvider, initialWindowMetrics } from "react-native-safe-area-context"
import { useBackButtonHandler, RootNavigator, canExit, setRootNavigation } from "./navigation"
import { NativeBaseProvider } from "native-base"

// This puts screens in a native ViewController or Activity. If you want fully native
// stack navigation, use `createNativeStackNavigator` in place of `createStackNavigator`:
// https://github.com/kmagiera/react-native-screens#using-native-stack-navigator
import { enableScreens } from "react-native-screens"

enableScreens()

/**
 * This is the root component of our app.
 */
const App = () => {
  const navigationRef = useRef<NavigationContainerRef>()

  setRootNavigation(navigationRef)
  useBackButtonHandler(navigationRef, canExit)

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <NativeBaseProvider>
        <RootNavigator ref={navigationRef} />
      </NativeBaseProvider>
    </SafeAreaProvider>
  )
}

export default App
