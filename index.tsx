import { Ionicons } from '@expo/vector-icons';
import react from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default class App extends react.Component {

  render() {
    return (  
<View style={{ flex: 1 }}>

    <ScrollView style={{ flex: 1 }}>
            
{/* TOP CONTAINER */}
        <View style={styles.containerTop}>
            <Text style={styles.hamburger}>☰</Text>
            <Text style={styles.searchBar}>Search in Drive</Text>
            <Text style={styles.starIcon}>✦</Text>
            <Text style={styles.circleIcon}>◯</Text>
        </View>
{/* SUBCONTAINER TOP */}
        <View style={styles.subcontainerTop}>
          <Text style={styles.tabtext}>My Drive</Text>
          <Text style={styles.tabtext}>Computers</Text>
        </View>
{/* SUBSUBCONTAINERTOP  */} 
        {/* Sort header */}
        <View style={styles.sortRow}>
            <View style={styles.sortLeft}>
                <Text style={styles.sortText}>Date modified</Text>
                
                <View style={styles.sortArrow}>
                    <Ionicons name="arrow-down" size={24} color="#1f1f1f" />
                </View>
            </View>

            <View style={styles.viewToggle}>
                <View style={[styles.toggleBtn, styles.toggleBtnActive]}>
                    <Ionicons name="list" size={20} color="#ffffff" />
                </View>
                
                <View style={styles.toggleBtn}>
                    <Ionicons name="grid-outline" size={20} color="#1f1f1f" />
                </View>
            </View>
        </View>
{/* MIDDLE CONTAINER */}
        <View style={styles.containerMid}>

                <View style={styles.file}>
                    <View style={styles.fileIcon}>
                        <Ionicons name="folder" size={50} color="#444746" />
                    </View>

                    <View style={styles.fileTextContainer}>
                        <Text style={styles.fileName}>My Folder</Text>
                        <Text style={styles.fileSubname}>Modified Jan 9</Text>
                    </View>

                    <View style={styles.fileActions}>
                        <Ionicons name="ellipsis-vertical" size={24} color="#444746" />
                    </View>
                </View>

                <View style={styles.file}>
                    <View style={styles.fileIcon}>
                        <Ionicons name="document" size={50} color="#444746" />
                    </View>

                    <View style={styles.fileTextContainer}>
                        <Text style={styles.fileName}>My File</Text>
                        <Text style={styles.fileSubname}>Modified Sept 10</Text>
                    </View>

                    <View style={styles.fileActions}>
                        <Ionicons name="ellipsis-vertical" size={24} color="#444746" />
                    </View>
                </View>

                <View style={styles.file}>
                    <View style={styles.fileIcon}>
                        <Ionicons name="film" size={50} color="#444746" />
                    </View>

                    <View style={styles.fileTextContainer}>
                        <Text style={styles.fileName}>My File</Text>
                        <Text style={styles.fileSubname}>Modified Sept 10</Text>
                    </View>

                    <View style={styles.fileActions}>
                        <Ionicons name="ellipsis-vertical" size={24} color="#444746" />
                    </View>
                </View>
                
                
        </View>

    </ScrollView>

{/* BOTTOM CONTAINER */}
        <View style={styles.containerBot}>
            
            <View style={styles.tab}>
                <View style={styles.iconPill}>
                    <Ionicons name="home-outline" size={24} color="#444746" />
                </View>
                <Text style={styles.label}>Home</Text>
            </View>

            <View style={styles.tab}>
                <View style={styles.iconPill}>
                    <Ionicons name="star-outline" size={24} color="#444746" />
                </View>
                <Text style={styles.label}>Starred</Text>
            </View>

            <View style={styles.tab}>
                <View style={styles.iconPill}>
                    <Ionicons name="people-outline" size={24} color="#444746" />
                </View>
                <Text style={styles.label}>Shared</Text>
            </View>

            <View style={styles.tab}>
                <View style={[styles.iconPill, styles.iconPillActive]}>
                    <Ionicons name="folder" size={24} color="#0b1b3a" />
                </View>
                <Text style={[styles.label, styles.labelActive]}>Files</Text>
            </View>
            </View>
        </View>
    );
  } 
}

const styles = StyleSheet.create({
// ------TOP------Top------Top------Top------Top------Top--------
    containerTop: {
        height: 120,
        // borderBottomWidth: 1,
        // borderBottomColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fafc',
    },

    hamburger: {
        fontSize: 25,
        position: 'absolute',
        left: 15,
        top: 50,
    },

    searchBar: {
        borderWidth: 0,
        borderRadius: 30,
        backgroundColor: '#dfdede',
        padding: 23,
        width: 230,
        fontSize: 16,
        textAlign: 'center',
        position: 'absolute',
        // left: 100,
        right: 120,
        top: 40,
        color: '#555555',
    },

    starIcon: {
        fontSize: 30,
        position: 'absolute',
        right: 80,
        top: 50,
    },

    circleIcon: {
        fontSize: 50,
        position: 'absolute',
        right: 25,
        top: 35,
    },

// ------SUBTOP------SUBTop------SUBTop------SUBTop------SUBTop------SUBTop--------
    subcontainerTop: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        // borderBottomWidth: StyleSheet.hairlineWidth,
        height: 50,
        backgroundColor: '#f5fafc',
    },

    tabtext: {
        flex: 1,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#444746',
    },

// ------SORT------SORT------SORT------SORT------SORT------SORT--------
   sortRow: {
        // borderWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 10,
        height: 80,
    },

    sortLeft: {
        // borderWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center',
    },

    sortText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#1f1f1f',
    },

    sortArrow: {
        width: 32,
        height: 32,
        borderRadius: 16,
        // fontWeight: 'bold',
        backgroundColor: '#dde3ea',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 8,
    },

    viewToggle: {
        flexDirection: 'row',
        backgroundColor: '#e1e7f5',
        borderRadius: 20,
        overflow: 'hidden',
    },

    toggleBtn: {
        
        width: 48,
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
    },

    toggleBtnActive: {
        backgroundColor: '#444a5a',
        borderRadius: 20,
    },

// ------FILEAREA------FILEAREA------FILEAREA------FILEAREA------FILEAREA------FILEAREA--------
    containerMid: {
        borderRadius: 20,
        // flex: 1, 
        height: 1000,
        // justifyContent: 'center',
        // alignItems: 'center', 
        backgroundColor: '#f6f9fa',
    },

    file: {
        // position: 'absolute',
        flexDirection: 'row',
        backgroundColor: '#ffffffff',
        // paddingVertical: 20,
        // paddingHorizontal: 20,
        borderRadius: 10,
        height: 80,
        margin: 5,
        // justifyContent: 'center',
        // alignItems: 'center',
    },

    fileIcon: {
        // flex: 2,
        alignItems: 'flex-start',
        justifyContent: 'center',
        // borderWidth: StyleSheet.hairlineWidth,
        paddingLeft: 20,
        paddingRight: 20,
    },
    fileActions: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        // borderWidth: StyleSheet.hairlineWidth,
        paddingRight: 20,
    },
    
    fileTextContainer: {
        // flex: 1,
        // paddingRight: 70,
        // alignItems: 'flex-start',
        // borderWidth: StyleSheet.hairlineWidth,
        alignSelf: 'center',
    },

    fileName: {
        fontSize: 18,
        // fontWeight: 'bold',
        color: '#444746',
    },
    fileSubname: {
        fontSize: 14,
        color: '#444746',
    },  
    
// ------BOTTOM------BOTTOM------BOTTOM------BOTTOM------BOTTOM------BOTTOM--------
containerBot: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#ffffff',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#d0d0d0',
    paddingBottom: 6,
    },

    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    iconPill: {
        width: 64,
        height: 32,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },

    iconPillActive: {
        backgroundColor: '#d3e3fd',
    },

    label: {
        fontSize: 12,
        marginTop: 4,
        color: '#444746',
    },

    labelActive: {
        color: '#0b1b3a',
        fontWeight: '600',
    },

// ------------------------------------------
    text: {
        fontSize: 20,
        textAlign: 'center',
    },
});  