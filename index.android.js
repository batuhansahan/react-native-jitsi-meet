/**
 * @providesModule JitsiMeet
 */

import { NativeModules, requireNativeComponent } from 'react-native';

export const JitsiMeetView = requireNativeComponent('RNJitsiMeetView');
export const JitsiMeetModule = NativeModules.RNJitsiMeetModule
const call = JitsiMeetModule.call;
const audioCall = JitsiMeetModule.audioCall;
const onlyAudioCall = JitsiMeetModule.onlyAudioCall;
JitsiMeetModule.call = (url, userInfo, config) => {
  userInfo = userInfo || {};
  config = config || {};
  call(url, userInfo, config);
}
JitsiMeetModule.audioCall = (url, userInfo, config) => {
  userInfo = userInfo || {};
  config = config || {};
  audioCall(url, userInfo, config);
}
JitsiMeetModule.onlyAudioCall = (url, userInfo, config) => {
  userInfo = userInfo || {};
  config = config || {};
  onlyAudioCall(url, userInfo, config);
}
export default JitsiMeetModule;


