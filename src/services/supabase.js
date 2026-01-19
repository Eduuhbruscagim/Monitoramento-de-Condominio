import { createClient } from "@supabase/supabase-js";

// ✅ Credenciais agora vem de variáveis de ambiente (.env)
// Isso evita expor credenciais no código fonte
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;

// Validação: garante que as credenciais existem
if (!SUPABASE_URL || !SUPABASE_KEY) {
  throw new Error(
    '\u274c Credenciais do Supabase não encontradas!\n\n' +
    'Certifique-se de que o arquivo .env existe na raiz do projeto com:\n' +
    'VITE_SUPABASE_URL=sua-url\n' +
    'VITE_SUPABASE_KEY=sua-chave\n\n' +
    'Veja o arquivo .env.example para referência.'
  );
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
