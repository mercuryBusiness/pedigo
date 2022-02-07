import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  FlatList,
  Modal,
} from 'react-native';
import Header from '../../components/BlobCreationHeader';
import CardView from '../../components/CardView';
import {launchImageLibrary} from 'react-native-image-picker';
import {TouchableOpacity} from 'react-native-gesture-handler';
import fonts from '../../assets/font/fonts';
import {ScrollView, Switch} from 'native-base';
import {Actionsheet} from 'native-base';
import index from '../../components/SearchHeader';
import {PESDK, PhotoEditorModal} from 'react-native-photoeditorsdk';
import {VESDK, VideoEditorModal} from 'react-native-videoeditorsdk';
import Video from 'react-native-video';
import {useSelector, useDispatch} from 'react-redux';
import {goToIndex} from '../../redux/homeScreen';

export default function BlobCreationScreen({mentionPress}) {
  const [num, setNum] = useState('2500');
  const [isShowing, setIsShowing] = useState(false);
  const [onBack, setOnBack] = useState(false);
  const [gallary, setGallary] = useState('');
  const [type, setType] = useState('image/png');
  const [modalVisible, setModalVisible] = useState(false);
  const [secondModal, setSecondModal] = useState(false);

  const dispatch = useDispatch();
  const chooseFile = () => {
    setIsShowing(false);
    let options = {
      title: 'Select Image',
      mediaType: 'all',
      customButtons: [
        {name: 'customOptionKey', title: 'Choose Photo from Custom Option'},
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        console.log('source====>', response);
        const {uri, type} = response.assets[0];
        setType(type);
        if (type == 'video/mp4') {
          VESDK.openEditor({uri: uri}).then(
            result => {
              console.log('result===>', result);
              setGallary(result.video);
            },
            error => {
              console.log(error);
            },
          );
        } else {
          PESDK.openEditor({uri: uri}).then(
            result => {
              console.log('result===>', result);
              setGallary(result.image);
            },
            error => {
              console.log(error);
            },
          );
        }
        // let imgArray = [];
        // imgArray[item] = {...imgArray[item], img1: source};
        // setGallary(imgArray);
      }
    });
  };

  const onImagePress = item => {
    if (item == '') {
      chooseFile(item);
    } else {
      setIsShowing(true);
    }
  };

  // const _renderItem = ({item}) => {
  //   console.log('itemssss--------->', item);
  //   return (
  //     <TouchableOpacity
  //       onPress={() => onImagePress(item.index)}
  //       style={{
  //         marginRight: 8,
  //         height: 268,
  //         width: 202,
  //       }}>
  //       <ImageBackground
  //         source={{uri: item}}
  //         style={{
  //           height: 268,
  //           width: 202,
  //           resizeMode: 'contain',
  //           alignItems: 'center',
  //           justifyContent: 'center',
  //           borderColor: '#F8F8F8',
  //           borderWidth: 1,
  //           borderRadius: 5,
  //         }}>
  //         <TouchableOpacity onPress={() => chooseFile(item.index)}>
  //           <Image
  //             style={{
  //               height: 26,
  //               width: 26,
  //               resizeMode: 'contain',
  //               alignSelf: 'center',
  //             }}
  //             source={require('../../assets/img/BlogCreation/addGrey.png')}></Image>
  //         </TouchableOpacity>
  //       </ImageBackground>
  //     </TouchableOpacity>
  //   );
  // };

  const getText = value => {
    const initialValue = 2500 - value.length;
    setNum(initialValue);
  };

  const onDelete = () => {
    setModalVisible(true);
    setIsShowing(false);
  };

  const confirmPress = () => {
    setGallary('');
    setModalVisible(false);
    setSecondModal(true);
  };

  return (
    <View style={{flex: 1}}>
      <Header onBack={() => setOnBack(true)} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={secondModal}
        onRequestClose={() => {
          setSecondModal(!secondModal);
        }}>
        <View style={{flex: 1, backgroundColor: 'rgba(52, 52, 52, 0.6)'}}>
          <View
            style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <View
              style={{
                alignItems: 'center',
                backgroundColor: '#fff',
                width: '90%',
                paddingVertical: 20,
                borderRadius: 5,
              }}>
              <View>
                <Text
                  style={{
                    fontFamily: fonts.fontRegular,
                    fontSize: 14,
                    lineHeight: 20,
                  }}>
                  Please add at least one photo
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => setSecondModal(false)}
                style={{
                  backgroundColor: '#A8D8FF',
                  marginLeft: 5,
                  borderRadius: 5,
                  marginTop: 15,
                }}>
                <Text
                  style={{
                    padding: 8,
                    paddingHorizontal: 50,
                    fontFamily: fonts.fontRegular,
                    fontSize: 10,
                    lineHeight: 20,
                    color: '#fff',
                  }}>
                  OK
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={{flex: 1, backgroundColor: 'rgba(52, 52, 52, 0.6)'}}>
          <View
            style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <View
              style={{
                alignItems: 'center',
                backgroundColor: '#fff',
                width: '90%',
                paddingVertical: 25,
                borderRadius: 5,
              }}>
              <View>
                <Text
                  style={{
                    fontFamily: fonts.fontRegular,
                    fontSize: 14,
                    lineHeight: 20,
                  }}>
                  Are you sure you want {'\n'} to delete this photo?
                </Text>
              </View>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <TouchableOpacity
                  onPress={() => setModalVisible(false)}
                  style={{
                    backgroundColor: '#F8F8F8',
                    marginRight: 5,
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      padding: 8,
                      paddingHorizontal: 50,
                      fontFamily: fonts.fontRegular,
                      fontSize: 10,
                      lineHeight: 20,
                    }}>
                    No
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => confirmPress()}
                  style={{
                    backgroundColor: '#A8D8FF',
                    marginLeft: 5,
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      padding: 8,
                      paddingHorizontal: 50,
                      fontFamily: fonts.fontRegular,
                      fontSize: 10,
                      lineHeight: 20,
                      color: '#fff',
                    }}>
                    Yes
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      {isShowing && (
        <Actionsheet
          isOpen={isShowing}
          onClose={() => setIsShowing(false)}
          hideDragIndicator>
          <Actionsheet.Content style={{backgroundColor: '#FFF'}}>
            <View style={{padding: 15, width: '100%'}}>
              <TouchableOpacity
                onPress={() => chooseFile()}
                style={{
                  flexDirection: 'row',
                  borderBottomWidth: 1,
                  borderColor: '#F8F8F8',
                  paddingBottom: 20,
                  alignItems: 'center',
                }}>
                <Image
                  style={{height: 20, width: 20, resizeMode: 'contain'}}
                  source={require('../../assets/img/BlogCreation/pencil.png')}></Image>
                <Text
                  style={{
                    marginLeft: 15,
                    fontFamily: fonts.fontRegular,
                    fontSize: 12,
                  }}>
                  Edit
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onDelete()}
                style={{
                  flexDirection: 'row',
                  marginTop: 20,
                  alignItems: 'center',
                }}>
                <Image
                  style={{height: 20, width: 20, resizeMode: 'contain'}}
                  source={require('../../assets/img/BlogCreation/redDelete.png')}></Image>
                <Text
                  style={{
                    color: 'red',
                    marginLeft: 15,
                    fontFamily: fonts.fontRegular,
                    fontSize: 12,
                  }}>
                  Delete
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setIsShowing(false)}
                style={{
                  height: 32,
                  width: '98%',
                  alignSelf: 'center',
                  backgroundColor: '#A8D8FF',
                  marginTop: 35,
                  borderRadius: 5,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontFamily: fonts.fontRegular,
                    fontSize: 12,
                    color: '#fff',
                  }}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </Actionsheet.Content>
        </Actionsheet>
      )}
      {onBack && (
        <Actionsheet
          isOpen={onBack}
          onClose={() => setOnBack(false)}
          hideDragIndicator>
          <Actionsheet.Content style={{backgroundColor: '#FFF'}}>
            <View style={{padding: 15, width: '100%'}}>
              <TouchableOpacity
                onPress={() => setOnBack(false)}
                style={{
                  flexDirection: 'row',
                  borderBottomWidth: 1,
                  borderColor: '#F8F8F8',
                  paddingBottom: 20,
                  alignItems: 'center',
                }}>
                <Image
                  style={{height: 20, width: 20, resizeMode: 'contain'}}
                  source={require('../../assets/img/BlogCreation/pencil.png')}></Image>
                <Text
                  style={{
                    marginLeft: 15,
                    fontFamily: fonts.fontRegular,
                    fontSize: 12,
                  }}>
                  Back to edit
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => dispatch(goToIndex(0))}
                style={{
                  flexDirection: 'row',
                  borderBottomWidth: 1,
                  borderColor: '#F8F8F8',
                  paddingVertical: 20,
                  alignItems: 'center',
                }}>
                <Image
                  style={{height: 20, width: 20, resizeMode: 'contain'}}
                  source={require('../../assets/img/BlogCreation/blackSave.png')}></Image>
                <Text
                  style={{
                    marginLeft: 15,
                    fontFamily: fonts.fontRegular,
                    fontSize: 12,
                  }}>
                  Save and exit
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => dispatch(goToIndex(0))}
                style={{
                  flexDirection: 'row',
                  marginTop: 20,
                  alignItems: 'center',
                }}>
                <Image
                  style={{height: 20, width: 20, resizeMode: 'contain'}}
                  source={require('../../assets/img/BlogCreation/redDelete.png')}></Image>
                <Text
                  style={{
                    color: 'red',
                    marginLeft: 15,
                    fontFamily: fonts.fontRegular,
                    fontSize: 12,
                  }}>
                  Delete and exit
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setOnBack(false)}
                style={{
                  height: 32,
                  width: '98%',
                  alignSelf: 'center',
                  backgroundColor: '#A8D8FF',
                  marginTop: 35,
                  borderRadius: 5,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontFamily: fonts.fontRegular,
                    fontSize: 12,
                    color: '#fff',
                  }}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </Actionsheet.Content>
        </Actionsheet>
      )}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginBottom: '18%'}}>
        <View
          style={{
            borderTopWidth: 1,
            borderColor: '#F8F8F8',
            marginTop: 15,
          }}
        />
        {/* <CardView gallary={gallary} _renderItem={_renderItem} /> */}
        <TouchableOpacity
          onPress={() => (gallary == '' ? null : onImagePress())}
          style={{
            marginRight: 8,
            height: 268,
            width: 202,
            alignSelf: 'center',
            marginTop: 10,
          }}>
          {type === 'image/png' ? (
            <ImageBackground
              source={{uri: gallary}}
              style={{
                height: 268,
                width: 202,
                resizeMode: 'cover',
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: '#F8F8F8',
                borderWidth: 1,
                borderRadius: 5,
              }}>
              {gallary == '' && (
                <TouchableOpacity onPress={() => chooseFile()}>
                  <Image
                    style={{
                      height: 26,
                      width: 26,
                      resizeMode: 'contain',
                      alignSelf: 'center',
                    }}
                    source={require('../../assets/img/BlogCreation/addGrey.png')}></Image>
                </TouchableOpacity>
              )}
            </ImageBackground>
          ) : (
            <Video
              source={{uri: gallary}}
              ref={ref => {
                this.player = ref;
              }}
              onBuffer={this.onBuffer}
              onError={this.videoError}
              style={{
                height: 268,
                width: 202,
                resizeMode: 'cover',
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: '#F8F8F8',
                borderWidth: 1,
                borderRadius: 5,
              }}
            />
          )}
        </TouchableOpacity>
        <View style={{padding: 15}}>
          <View
            style={{
              height: 52,
              borderRadius: 10,
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: '#F8F8F8',
            }}>
            <TextInput
              placeholder="Choose a clear and short title"
              style={{padding: 15, fontSize: 12, fontFamily: fonts.fontRegular}}
            />
          </View>
          <View
            style={{
              height: 173,
              borderWidth: 1,
              borderColor: '#F8F8F8',
              borderRadius: 10,
              marginTop: 15,
            }}>
            <TextInput
              placeholder="Choose a clear and short title"
              multiline={true}
              maxLength={2500}
              style={{
                padding: 15,
                height: 100,
                marginVertical: 10,
                fontSize: 12,
                fontFamily: fonts.fontRegular,
              }}
              onChangeText={value => getText(value)}
            />
            <View
              style={{
                paddingLeft: 15,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  style={{backgroundColor: '#F8F8F8', borderRadius: 5}}>
                  <Text
                    style={{
                      padding: 10,
                      fontFamily: fonts.fontRegular,
                      fontSize: 10,
                    }}>
                    #Hashtag
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={mentionPress}
                  style={{
                    backgroundColor: '#F8F8F8',
                    borderRadius: 5,
                    marginLeft: 10,
                  }}>
                  <Text
                    style={{
                      padding: 10,
                      fontFamily: fonts.fontRegular,
                      fontSize: 10,
                    }}>
                    @Mention
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  padding: 15,
                }}>
                <Text style={{fontSize: 10, color: '#C8C8C8'}}>{num}</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              height: 52,
              borderRadius: 10,
              justifyContent: 'space-between',
              borderWidth: 1,
              marginTop: 15,
              borderColor: '#F8F8F8',
              flexDirection: 'row',
              paddingRight: 15,
            }}>
            <View>
              <Text
                style={{
                  padding: 15,
                  fontSize: 12,
                  fontFamily: fonts.fontRegular,
                  color: '#C8C8C8',
                }}>
                Add Product
              </Text>
            </View>
            <Image
              source={require('../../assets/img/rightArrow.png')}
              style={{
                height: 15,
                width: 15,
                resizeMode: 'contain',
                alignSelf: 'center',
              }}></Image>
          </View>
          <View
            style={{
              borderTopWidth: 1,
              borderColor: '#F8F8F8',
              marginTop: 15,
            }}
          />
          <View
            style={{
              height: 52,
              borderRadius: 10,
              justifyContent: 'space-between',
              borderWidth: 1,
              marginTop: 15,
              borderColor: '#F8F8F8',
              flexDirection: 'row',
              padding: 15,
            }}>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 12,
                fontFamily: fonts.fontRegular,
              }}>
              Allow other people to see
            </Text>
            <Switch
              trackColor={{true: '#A8D8FF', false: 'grey'}}
              style={{
                transform: [{scaleX: 0.5}, {scaleY: 0.5}],
                alignSelf: 'center',
              }}
            />
          </View>
        </View>
        <View
          style={{
            borderTopWidth: 1,
            borderColor: '#F8F8F8',
          }}
        />
        <View style={{padding: 15, flexDirection: 'row'}}>
          <View
            style={{
              backgroundColor: '#F8F8F8',
              height: 32,
              width: 32,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
            }}>
            <Image
              style={{
                height: 15,
                width: 15,
                resizeMode: 'contain',
              }}
              source={require('../../assets/img/BlogCreation/save.png')}></Image>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#A8D8FF',
              height: 32,
              width: 288,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
              marginLeft: 15,
            }}>
            <Text
              style={{
                color: '#fff',
                alignSelf: 'center',
                fontSize: 12,
                fontFamily: fonts.fontRegular,
              }}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
