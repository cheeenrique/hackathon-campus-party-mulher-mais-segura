import type { EntryContext } from "react-router";
import { ServerRouter } from "react-router";
import { renderToString } from "react-dom/server";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  routerContext: EntryContext
) {
  try {
    const html = renderToString(
      <ServerRouter context={routerContext} url={request.url} />
    );

    return new Response(`<!DOCTYPE html>${html}`, {
      headers: { "Content-Type": "text/html" },
      status: responseStatusCode,
    });
  } catch (error) {
    console.error("Erro no server rendering:", error);
    
    // Fallback HTML em caso de erro
    const fallbackHtml = `
      <!DOCTYPE html>
      <html lang="pt-BR">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Acolher - Carregando...</title>
          <style>
            body { 
              margin: 0; 
              background: linear-gradient(to bottom right, #fdf2f8, #fce7f3); 
              min-height: 100vh; 
              display: flex; 
              align-items: center; 
              justify-content: center; 
              font-family: system-ui, -apple-system, sans-serif;
            }
            .loading { text-align: center; }
            .spinner { 
              width: 48px; 
              height: 48px; 
              border: 2px solid #e5e7eb; 
              border-top: 2px solid #9333ea; 
              border-radius: 50%; 
              animation: spin 1s linear infinite; 
              margin: 0 auto 16px;
            }
            @keyframes spin { to { transform: rotate(360deg); } }
          </style>
        </head>
        <body>
          <div class="loading">
            <div class="spinner"></div>
            <h2>Carregando Acolher...</h2>
            <p>Preparando seu espaço seguro</p>
          </div>
        </body>
      </html>
    `;
    
    return new Response(fallbackHtml, {
      headers: { "Content-Type": "text/html" },
      status: 200,
    });
  }
} 