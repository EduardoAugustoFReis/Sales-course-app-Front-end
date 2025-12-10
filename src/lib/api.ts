// Função para fazer requisições à API do backend
export async function api(endpoint: string, options: RequestInit = {}) {
  const baseUrl = process.env.API_URL;

  const response = await fetch(`${baseUrl}${endpoint}`, {
    // Espalha todas as opções passadas na chamada (método, headers, body, etc)
    ...options,

    // Define os headers padrão
    headers: {
      "Content-Type": "application/json",

      // Mantém headers enviados pelo usuário (ex: Authorization)
      ...(options.headers || {}),
    },
  });

  if (!response.ok) {
    throw new Error(`API error, ${response.status}`);
  }

  // Se tudo deu certo → retorna o JSON já convertido
  return response.json();
}
