import type { Route } from "./+types/home"
import { Welcome } from "../welcome/welcome"


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Manoj's Portfolio" },
    { name: "description", content: "Welcome to my portfolio built with React Router + Tailwind!" },
  ]
}

export default function Home() {
  return <Welcome />
}
