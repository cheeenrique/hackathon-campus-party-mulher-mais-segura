import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("src/pages/Login.tsx"),
  route("/avaliacao-seguranca", "src/pages/AvaliacaoSeguranca.tsx"),
  route("/avaliacao-rapida", "src/pages/AvaliacaoRapida.tsx"),
  route("/rede-apoio", "src/pages/RedeApoio.tsx"),
  route("/contatos-emergencia", "src/pages/ContatosEmergencia.tsx"),
  route("/recursos-educativos", "src/pages/RecursosEducativos.tsx"),
  route("/emergencia", "src/pages/Emergencia.tsx"),
] satisfies RouteConfig;
