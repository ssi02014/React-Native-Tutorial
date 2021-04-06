// import React from 'react';
// import { View, Text, Pressable } from 'react-native';

// const pressableButton = () => {
//     const _onPressIn = () => {
//         console.log('press In');
//     }
//     const _onPressOut = () => {
//         console.log('press Out');
//     }
//     const _onPress = () => {
//         console.log('press');
//     }
//     const _onLongPress = () => {
//         console.log('Long Press');
//     }

//     return (
//         <Pressable
//             style={{padding: 10, backgroundColor: '#1abc9c'}}
//             onPressIn={_onPressIn}
//             onLongPress={_onLongPress}
//             onPressOut={_onPressOut}
//             onPress={_onPress}
//             delayLongPress={3000}
//             pressRetentionOffset={{bottom:50, left: 50, right: 50, top: 50,}}
//             hitSlop={50}
//         >
//             <Text style={{padding:10, fontSize:30}}>{props.title}</Text>
//         </Pressable>
//     );
// };

// export default pressableButton;