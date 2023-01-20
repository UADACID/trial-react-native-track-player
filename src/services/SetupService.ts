import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
} from 'react-native-track-player';

export const setupService = async (): Promise<boolean> => {
  let isSetup = false;
  try {
    console.log('masuk try setup');
    // this method will only reject if player has not been setup yet
    await TrackPlayer.getCurrentTrack();
    isSetup = true;
  } catch (e) {
    console.log('masuk catch');
    console.log({e});
    try {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.updateOptions({
        android: {
          appKilledPlaybackBehavior:
            AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
        },
        // This flag is now deprecated. Please use the above to define playback mode.
        // stoppingAppPausesPlayback: true,
        capabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
          Capability.SeekTo,
        ],
        compactCapabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SkipToNext,
        ],
        progressUpdateEventInterval: 2,
      });

      isSetup = true;
      return isSetup;
    } catch (error) {
      console.log({error});
      console.log(error);
      isSetup = false;
      return isSetup;
    }
  } finally {
    // eslint-disable-next-line no-unsafe-finally
    return isSetup;
  }
};
