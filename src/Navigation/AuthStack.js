import React from "react";
import { Intail,Login,SignUp } from "../Screens";
import navigationStrings from "../constants/navigationStrings";


export default function(Stack){
    return(
        <>
            <Stack.Screen name={navigationStrings.INITAIL_SCREEN} component={Intail} options={{headerShown:false}}/>
            <Stack.Screen name={navigationStrings.LOGIN} component={Login} options={{headerShown:false}}/>
            <Stack.Screen name={navigationStrings.SIGN_UP} component={SignUp} options={{headerShown:false}}/>
        </>
    )
}