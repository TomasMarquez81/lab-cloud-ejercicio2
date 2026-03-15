export interface Character {
  id: string;
  name: string;
  koreanName: string;
  rank: string;
  hunterClass: string;
  description: string;
  imageUrl: string;
  accentColor: string;
}

export const characters: Character[] = [
  {
    id: "sung-jin-woo",
    name: "Sung Jin-woo",
    koreanName: "성진우",
    rank: "Rango S (Monarca de las Sombras)",
    hunterClass: "Asesino / Nigromante",
    description: "Inicialmente conocido como el 'Cazador más débil de la humanidad', Jin-woo despierta como un 'Jugador' de un sistema místico, lo que le permite subir de nivel sin fin. Comanda un ejército inmortal de soldados de sombra.",
    imageUrl: "/sung_jin_woo_portrait_portrait.png",
    accentColor: "#8b5cf6" // vibrant purple
  },
  {
    id: "cha-hae-in",
    name: "Cha Hae-in",
    koreanName: "차해인",
    rank: "Rango S",
    hunterClass: "Luchadora (Espadachín)",
    description: "La submaestra del Gremio de Cazadores. Es especialmente sensible al olor del maná y encuentra que la mayoría de cazadores huelen mal, a excepción de Sung Jin-woo, que huele a bosque fresco.",
    imageUrl: "/cha_hae_in_portrait_portrait.png",
    accentColor: "#facc15" // yellow/gold
  },
  {
    id: "choi-jong-in",
    name: "Choi Jong-in",
    koreanName: "최종인",
    rank: "Rango S",
    hunterClass: "Mago",
    description: "El Maestro del Gremio de Cazadores, apodado 'El Arma Definitiva'. Es un maestro de la magia de fuego, capaz de incinerar hordas enteras de monstruos con hechizos masivos.",
    imageUrl: "/choi_jong_in_portrait_portrait.png",
    accentColor: "#ef4444" // red
  },
  {
    id: "baek-yoon-ho",
    name: "Baek Yoon-ho",
    koreanName: "백윤호",
    rank: "Rango S",
    hunterClass: "Luchador",
    description: "Maestro del Gremio Tigre Blanco. Posee magia de transformación, lo que le permite adoptar los rasgos de un monstruoso tigre blanco y potenciar inmensamente sus capacidades físicas.",
    imageUrl: "/baek_yoon_ho_portrait_portrait.png",
    accentColor: "#f97316" // orange
  }
];
