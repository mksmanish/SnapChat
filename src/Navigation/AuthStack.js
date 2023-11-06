import React from "react";
import navigationStrings from "../constants/navigationStrings";
import { DashBoard,SignUp,Login } from "../Screens";


export default function(Stack){
    return(
        <>
            <Stack.Screen name={navigationStrings.INITAIL_SCREEN} component={DashBoard} options={{headerShown:false}}/>
            <Stack.Screen name={navigationStrings.LOGIN} component={Login} options={{headerShown:false}}/>
            <Stack.Screen name={navigationStrings.SIGN_UP} component={SignUp} options={{headerShown:false}}/>
        </>
    )
}