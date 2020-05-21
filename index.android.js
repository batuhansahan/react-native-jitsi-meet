/**
 * @providesModule JitsiMeet
 */

import { NativeModules, requireNativeComponent } from 'react-native';

export const JitsiMeetView = requireNativeComponent('RNJitsiMeetView');
export const JitsiMeetModule = NativeModules.RNJitsiMeetModule
const call = JitsiMeetModule.call;
const audioCall = JitsiMeetModule.audioCall;
const onlyAudioCall = JitsiMeetModule.onlyAudioCall;
JitsiMeetModule.call = (url, userInfo) => {
  userInfo = userInfo || {};
  call(url, userInfo);
}
JitsiMeetModule.audioCall = (url, userInfo) => {
  userInfo = userInfo || {};
  audioCall(url, userInfo);
}
JitsiMeetModule.onlyAudioCall = (url, userInfo) => {
  userInfo = userInfo || {};
  onlyAudioCall(url, userInfo);
}
export default JitsiMeetModule;


