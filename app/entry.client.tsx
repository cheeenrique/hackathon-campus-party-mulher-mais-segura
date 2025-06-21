import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { HydratedRouter } from "react-router/dom";

// Função para hidratação robusta
function hydrate() {
  try {
    hydrateRoot(
      document,
      <StrictMode>
        <HydratedRouter />
      </StrictMode>
    );
  } catch (error) {
    console.error("Erro na hidratação:", error);
    // Fallback: tentar novamente após um pequeno delay
    setTimeout(() => {
      try {
        hydrateRoot(
          document,
          <StrictMode>
            <HydratedRouter />
          </StrictMode>
        );
      } catch (retryError) {
        console.error("Erro na segunda tentativa de hidratação:", retryError);
      }
    }, 100);
  }
}

// Aguardar o DOM estar pronto
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", hydrate);
} else {
  hydrate();
} 