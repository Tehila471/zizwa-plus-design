import { v4 as uuidv4 } from "uuid";

export const navLinks = [
  { id: uuidv4(), name: "Home", path: "/" },
  { id: uuidv4(), name: "Series", path: "/series" },
  { id: uuidv4(), name: "Movies", path: "/movies" },
  { id: uuidv4(), name: "Sports", path: "/sports" },
];
