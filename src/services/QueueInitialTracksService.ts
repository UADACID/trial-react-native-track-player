import TrackPlayer, {RepeatMode, TrackType} from 'react-native-track-player';

// import playlistData from '../assets/data/playlist.json';
// @ts-expect-error – sure we can import this
import localTrack from '../assets/resources/pure.m4a';
// @ts-expect-error – sure we can import this
// import localArtwork from '../assets/resources/artwork.jpg';
import localArtwork from '../assets/resources/artwork.jpeg';

export const QueueInitialTracksService = async (): Promise<void> => {
  await TrackPlayer.add([
    // ...playlistData,
    {
      url: 'https://react-native-track-player.js.org/example/Soul%20Searching.mp3',
      title: 'Soul Searching (Demo)',
      artist: 'David Chavez',
      artwork:
        'https://react-native-track-player.js.org/example/Soul%20Searching.jpeg',
      duration: 77,
    },
    {
      url: 'https://storage.googleapis.com/media-ssu/encoded/d1a5d48d57bf/master.m3u8',
      title: 'pusing mbah',
      artist: 'mbah haz',
      type: TrackType.HLS,
      artwork: 'https://react-native-track-player.js.org/example/Longing.jpeg',
      duration: 20,
    },
    {
      url: localTrack,
      title: 'Pure (Demo)',
      artist: 'David Chavez',
      artwork: localArtwork,
      duration: 28,
    },
  ]);
  await TrackPlayer.setRepeatMode(RepeatMode.Queue);
};
