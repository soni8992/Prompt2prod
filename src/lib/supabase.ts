import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Project {
  id: string;
  name: string;
  prompt: string;
  description?: string;
  generated_code: CodeFile[];
  framework: string;
  status: 'draft' | 'generating' | 'completed';
  created_at: string;
  updated_at: string;
  user_id?: string;
}

export interface CodeFile {
  path: string;
  content: string;
  language: string;
}
