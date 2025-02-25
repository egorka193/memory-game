export const getAnimeCollection = () => [
  {
    id: 1,
    url: '/src/img/anime/anime_blonde.jpg',
    name: 'Blonde',
  },
  {
    id: 2,
    url: '/src/img/anime/anime_blonde_blad.jpg',
    name: 'Blonde too',
  },
  {
    id: 3,
    url: '/src/img/anime/anime_finger_on_face.jpg',
    name: 'Fingers',
  },
  {
    id: 4,
    url: '/src/img/anime/anime_blonde_cry.jpg',
    name: 'Crying Baby',
  },
  {
    id: 5,
    url: '/src/img/anime/anime_gitrl.png',
    name: 'Girl',
  },
  {
    id: 6,
    url: '/src/img/anime/anime_man_cry.jpg',
    name: 'Man Crying',
  },
  {
    id: 7,
    url: '/src/img/anime/anime_man.jpg',
    name: 'Man',
  },
  {
    id: 8,
    url: '/src/img/anime/anime_telka.jpg',
    name: 'Blue Hairs',
  },
  {
    id: 9,
    url: '/src/img/anime/anime_warrior.jpg',
    name: 'White Hairs',
  },
  {
    id: 10,
    url: '/src/img/anime/steam_anime_girl.gif',
    name: 'Steam Girl',
  },
  {
    id: 11,
    url: '/src/img/anime/tipo_krutoi_anime_2_0.jpg',
    name: 'Сollar',
  },
  {
    id: 12,
    url: '/src/img/anime/tipo_krutoi_anime.jpg',
    name: 'Сollar 2',
  },
];

export const getDotaCollection = () => [
  {
    id: 1,
    url: 'src/img/dota/Abaddon.webp',
    name: 'Abaddon',
  },
  {
    id: 2,
    url: 'src/img/dota/brood_mother.webp',
    name: 'brood_mother',
  },
  {
    id: 3,
    url: 'src/img/dota/crystal_maiden.webp',
    name: 'crystal_maiden',
  },
  {
    id: 4,
    url: 'src/img/dota/invoker.jpg',
    name: 'invoker',
  },
  {
    id: 5,
    url: 'src/img/dota/juggernaut.webp',
    name: 'juggernaut',
  },
  {
    id: 6,
    url: 'src/img/dota/phantom_assasin.jpg',
    name: 'phantom_assasin',
  },
  {
    id: 7,
    url: 'src/img/dota/pudge.jpg',
    name: 'pudge',
  },
  {
    id: 8,
    url: 'src/img/dota/shacker.webp',
    name: 'shacker',
  },
  {
    id: 9,
    url: 'src/img/dota/Shadow_Fiend.webp',
    name: 'Shadow_Fiend',
  },
  {
    id: 10,
    url: 'src/img/dota/stalker.webp',
    name: 'stalker',
  },
  {
    id: 11,
    url: 'src/img/dota/undyind.webp',
    name: 'undyind',
  },
  {
    id: 12,
    url: 'src/img/dota/ursa_warrior.gif',
    name: 'ursa_warrior',
  },
];

export const getSerialsCollection = () => [
  {
    id: 1,
    url: 'src/img/serials/arcane.jpg',
    name: 'arcane',
  },
  {
    id: 2,
    url: 'src/img/serials/death_note.webp',
    name: 'death note',
  },
  {
    id: 3,
    url: 'src/img/serials/flash.jpg',
    name: 'flash',
  },
  {
    id: 4,
    url: 'src/img/serials/game_of_trones.webp',
    name: 'game of trones',
  },
  {
    id: 5,
    url: 'src/img/serials/happy.webp',
    name: 'happy together',
  },
  {
    id: 6,
    url: 'src/img/serials/lucifer.jpg',
    name: 'lucifer',
  },
  {
    id: 7,
    url: 'src/img/serials/walking_dead.avif',
    name: 'walking dead',
  },
  {
    id: 8,
    url: 'src/img/serials/naruto.jpg',
    name: 'naruto',
  },
  {
    id: 9,
    url: 'src/img/serials/penguin.png',
    name: 'penguin',
  },
  {
    id: 10,
    url: 'src/img/serials/pokemon.webp',
    name: 'pokemon',
  },
  {
    id: 11,
    url: 'src/img/serials/rick-morty.jpg',
    name: 'rick and morty',
  },
  {
    id: 12,
    url: 'src/img/serials/supernatural.jpeg',
    name: 'supernatural',
  },
];

export const ANIME = 'anime';
export const DOTA = 'dota';
export const SERIES = 'series';

export const collectionLabel = {
  [ANIME]: 'Anime',
  [DOTA]: 'Dota',
  [SERIES]: 'Series',
};

export const getAllCollection = () => ({
  [ANIME]: getAnimeCollection(),
  [DOTA]: getDotaCollection(),
  [SERIES]: getSerialsCollection(),
});
