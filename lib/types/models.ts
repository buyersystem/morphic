export interface Model {
  id: string
  name: string
  provider: string
  providerId: string
}

export const models: Model[] = [
  {
    id: 'gpt-4o',
    name: 'GPT-4o',
    provider: 'OpenAI',
    providerId: 'openai'
  },
  {
    id: 'gpt-4o-mini',
    name: 'GPT-4o mini',
    provider: 'OpenAI',
    providerId: 'openai'
  },
  {
    id: 'claude-3-5-sonnet-latest',
    name: 'Claude 3.5 Sonnet',
    provider: 'Anthropic',
    providerId: 'anthropic'
  },
  {
    id: 'claude-3-5-haiku-20241022',
    name: 'Claude 3.5 Haiku',
    provider: 'Anthropic',
    providerId: 'anthropic'
  },
  {
    id: 'gemini-1.5-pro-002',
    name: 'Gemini 1.5 Pro',
    provider: 'Google Generative AI',
    providerId: 'google'
  },
  {
    id: 'gemini-2.0-flash-exp',
    name: 'Gemini 2.0 Flash (Experimental)',
    provider: 'Google Generative AI',
    providerId: 'google'
  },
  {
    id: 'llama3-groq-8b-8192-tool-use-preview',
    name: 'LLama 3 Groq 8B Tool Use',
    provider: 'Groq',
    providerId: 'groq'
  },
  {
    id: 'qwen2.5',
    name: 'Qwen 2.5',
    provider: 'Ollama',
    providerId: 'ollama'
  },
  {
    id: process.env.NEXT_PUBLIC_AZURE_DEPLOYMENT_NAME || 'undefined',
    name: process.env.NEXT_PUBLIC_AZURE_DEPLOYMENT_NAME || 'Undefined',
    provider: 'Azure',
    providerId: 'azure'
  },
  // Deepseek function calling is currently unstable: https://github.com/vercel/ai/issues/4313#issuecomment-2587891644
  // If you want to use Deepseek, remove the comment and add it to the models array
  // {
  //   id: 'deepseek-chat',
  //   name: 'DeepSeek v3',
  //   provider: 'DeepSeek',
  //   providerId: 'deepseek'
  // },
  {
    id: process.env.NEXT_PUBLIC_OPENAI_COMPATIBLE_MODEL || 'undefined',
    name: process.env.NEXT_PUBLIC_OPENAI_COMPATIBLE_MODEL || 'Undefined',
    provider: 'OpenAI Compatible',
    providerId: 'openai-compatible'
  }
]
