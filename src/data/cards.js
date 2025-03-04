export const getAnimeCollection = () => [
  {
    id: 1,
    url: '/src/img/anime/anime_blonde.jpg',
    name: 'Angry Girl',
  },
  {
    id: 2,
    url: '/src/img/anime/anime_blonde_blad.jpg',
    name: 'Happy Girl',
  },
  {
    id: 3,
    url: '/src/img/anime/anime_finger_on_face.jpg',
    name: 'Naruto',
  },
  {
    id: 4,
    url: '/src/img/anime/anime_blonde_cry.jpg',
    name: 'Crying Girl',
  },
  {
    id: 5,
    url: '/src/img/anime/anime_gitrl.png',
    name: 'Girl',
  },
  {
    id: 6,
    url: '/src/img/anime/anime_man_cry.jpg',
    name: 'Crying Man',
  },
  {
    id: 7,
    url: '/src/img/anime/anime_man.jpg',
    name: 'Happy Man',
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
    name: 'Astonishment Girl',
  },
  {
    id: 11,
    url: '/src/img/anime/tipo_krutoi_anime_2_0.jpg',
    name: 'Feitan',
  },
  {
    id: 12,
    url: '/src/img/anime/tipo_krutoi_anime.jpg',
    name: 'Portor',
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
    name: 'Brood Mother',
  },
  {
    id: 3,
    url: 'src/img/dota/crystal_maiden.webp',
    name: 'Crystal Maiden',
  },
  {
    id: 4,
    url: 'src/img/dota/invoker.jpg',
    name: 'Invoker',
  },
  {
    id: 5,
    url: 'src/img/dota/juggernaut.webp',
    name: 'Juggernaut',
  },
  {
    id: 6,
    url: 'src/img/dota/phantom_assasin.jpg',
    name: 'Phantom Assasin',
  },
  {
    id: 7,
    url: 'src/img/dota/pudge.jpg',
    name: 'Pudge',
  },
  {
    id: 8,
    url: 'src/img/dota/shacker.webp',
    name: 'Earthshaker',
  },
  {
    id: 9,
    url: 'src/img/dota/Shadow_Fiend.webp',
    name: 'Shadow Fiend',
  },
  {
    id: 10,
    url: 'src/img/dota/stalker.webp',
    name: 'Night Stalker',
  },
  {
    id: 11,
    url: 'src/img/dota/undyind.webp',
    name: 'Undying',
  },
  {
    id: 12,
    url: 'src/img/dota/ursa_warrior.gif',
    name: 'Ursa',
  },
];

export const getSerialsCollection = () => [
  {
    id: 1,
    url: 'src/img/serials/arcane.jpg',
    name: 'Arcane',
  },
  {
    id: 2,
    url: 'src/img/serials/death_note.webp',
    name: 'Death note',
  },
  {
    id: 3,
    url: 'src/img/serials/flash.jpg',
    name: 'Flash',
  },
  {
    id: 4,
    url: 'src/img/serials/game_of_trones.webp',
    name: 'Game of Trones',
  },
  {
    id: 5,
    url: 'src/img/serials/happy.webp',
    name: 'Happy Together',
  },
  {
    id: 6,
    url: 'src/img/serials/lucifer.jpg',
    name: 'Lucifer',
  },
  {
    id: 7,
    url: 'src/img/serials/walking_dead.avif',
    name: 'Walking Dead',
  },
  {
    id: 8,
    url: 'src/img/serials/naruto.jpg',
    name: 'Naruto',
  },
  {
    id: 9,
    url: 'src/img/serials/penguin.png',
    name: 'Penguin',
  },
  {
    id: 10,
    url: 'src/img/serials/pokemon.webp',
    name: 'Pokemon',
  },
  {
    id: 11,
    url: 'src/img/serials/rick-morty.jpg',
    name: 'Rick and Morty',
  },
  {
    id: 12,
    url: 'src/img/serials/supernatural.jpeg',
    name: 'Supernatural',
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
