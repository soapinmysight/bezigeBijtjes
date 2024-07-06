// import React from 'react';
// import { View, Text, Image, StyleSheet, Modal, Button } from 'react-native';
// //modal should be opened when pressing on a marker from mapScreen
// const ItemModal = ({ item, onClose }) => {
//     if (!item) {
//         return null;
//     }
//     return (
//
//         <Modal
//             animationType="slide"
//             visible={true} // This should be controlled by a state variable
//             onRequestClose={() => onClose()}
//         >
//             <View style={styles.card}>
//                 <Image source={require('../../../assets/img/logo/park.png')} style={styles.logo}/>
//                 <Text style={styles.title}>{item.Title}</Text>
//                 <Text style={styles.neighbourhood}>Neighbourhood: {item.neighbourhood}</Text>
//                 <Text style={styles.category}>Category: {item.category}</Text>
//                 <Text style={styles.description}>{item.description}</Text>
//                 <Text style={styles.location}>
//                     Location: ({item.latitude}, {item.longitude})
//                 </Text>
//                 {/* Button to close modal */}
//                 <Button title="Close" onPress={() => onClose()} />
//                 {/*modal should give a button with the option to redirect to list*/}
//             </View>
//         </Modal>
//     );
// };
//
// const styles = StyleSheet.create({
//     card: {
//         padding: 16,
//         margin: 16,
//         backgroundColor: '#fff',
//         borderRadius: 8,
//         shadowColor: '#000',
//         shadowOpacity: 0.1,
//         shadowRadius: 8,
//         shadowOffset: { width: 0, height: 2 },
//         elevation: 4,
//     },
//     logo: {
//         height: 100,
//         width: '100%',
//         marginBottom: 8,
//         resizeMode: 'cover',
//     },
//     title: {
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
//     description: {
//         fontSize: 14,
//         marginBottom: 8,
//     },
//     location: {
//         fontSize: 12,
//         color: '#666',
//     },
//     neighbourhood: {
//         fontSize: 12,
//         color: '#666',
//     },
//     category: {
//         fontSize: 12,
//         color: '#666',
//     },
// });
//
// export default ItemModal;
