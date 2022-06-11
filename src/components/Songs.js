const Songs = [
    {
      id: 1,
      favourite: false,
      songName: "Essence ft tems",
      artist: "wizkid",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ff0b5.appspot.com/o/songs%2FEssence.mp3?alt=media&token=49e0ca2a-9410-45de-b2d4-8299ba7f6a95",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ff0b5.appspot.com/o/images%2FCover.jpg?alt=media&token=480a373f-b44f-4093-8e54-649fd1616eb8",
    },
    {
      id: 2,
      favourite: false,
      songName: "Ginger ft Burnaboy",
      artist: "wizkid",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ff0b5.appspot.com/o/songs%2FGinger%20(feat.%20Burna%20Boy).mp3?alt=media&token=2ec4ec3f-7c1e-4eca-bad4-fcfc83af9ad9",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ff0b5.appspot.com/o/images%2FCover.jpg?alt=media&token=480a373f-b44f-4093-8e54-649fd1616eb8",
    },
    {
      id: 3,
      favourite: false,
      songName: "Grace",
      artist: "wizkid",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ff0b5.appspot.com/o/songs%2FGrace.mp3?alt=media&token=7ea11eb3-b9fd-4508-a1c9-9957f8ab9d81",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ff0b5.appspot.com/o/images%2FCover.jpg?alt=media&token=480a373f-b44f-4093-8e54-649fd1616eb8",
    },
    {
      id: 4,
      favourite: false,
      songName: "Longtime (feat. Skepta)",
      artist: "wizkid",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ff0b5.appspot.com/o/songs%2FLongtime%20(feat.%20Skepta).mp3?alt=media&token=4e476c1e-3802-4b73-b8bb-e9b44922c518",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ff0b5.appspot.com/o/images%2FCover.jpg?alt=media&token=480a373f-b44f-4093-8e54-649fd1616eb8",
    },
    {
      id: 5,
      favourite: false,
      songName: "No Stress",
      artist: "wizkid",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ff0b5.appspot.com/o/songs%2FNo%20Stress.mp3?alt=media&token=844d331d-2b94-46c9-a9e8-9a2610513722",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ff0b5.appspot.com/o/images%2FCover.jpg?alt=media&token=480a373f-b44f-4093-8e54-649fd1616eb8",
    },
    {
      id: 6,
      songName: "Piece of Me (feat. Ella Mai)",
      artist: "wizkid",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ff0b5.appspot.com/o/songs%2FPiece%20of%20Me%20(feat.%20Ella%20Mai).mp3?alt=media&token=b8c1981b-9b0a-411e-b86d-5b590c5c397f",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ff0b5.appspot.com/o/images%2FCover.jpg?alt=media&token=480a373f-b44f-4093-8e54-649fd1616eb8",
    },
    {
      id: 7,
      favourite: false,
      songName: "Reckless",
      artist: "wizkid",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ff0b5.appspot.com/o/songs%2FReckless.mp3?alt=media&token=86ecb3b6-6f78-4a21-8171-015fb0e03dfb",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ff0b5.appspot.com/o/images%2FCover.jpg?alt=media&token=480a373f-b44f-4093-8e54-649fd1616eb8",
    },
    {
      id: 8,
      favourite: false,
      songName: "Sweet One",
      artist: "wizkid",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ff0b5.appspot.com/o/songs%2FSweet%20One.mp3?alt=media&token=b1dd7c5f-5737-4798-8412-5b25364f20da",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ff0b5.appspot.com/o/images%2FCover.jpg?alt=media&token=480a373f-b44f-4093-8e54-649fd1616eb8",
    },
    {
      id: 9,
      favourite: false,
      songName: "True Love",
      artist: "wizkid",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ff0b5.appspot.com/o/songs%2FTrue%20Love.mp3?alt=media&token=9ec0c905-bab6-40ea-b536-502e8ddc2e39",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ff0b5.appspot.com/o/images%2FCover.jpg?alt=media&token=480a373f-b44f-4093-8e54-649fd1616eb8",
    },
    {
      id: 10,
      favourite: false,
      songName: "Blessed",
      artist: "wizkid",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ff0b5.appspot.com/o/songs%2FBlessed%20(feat.%20Damian%20_Jr.%20Gong.mp3?alt=media&token=dbb223a9-34fa-420f-b6b9-2736bfac2cdc",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ff0b5.appspot.com/o/images%2FCover.jpg?alt=media&token=480a373f-b44f-4093-8e54-649fd1616eb8",
    },
  ];
  
  export { Songs };
  