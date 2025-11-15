/*
  # Create Prompt2Prod Projects Schema

  1. New Tables
    - `projects`
      - `id` (uuid, primary key) - Unique identifier for each project
      - `name` (text) - Project name
      - `prompt` (text) - The original prompt used to generate the project
      - `description` (text, nullable) - Optional project description
      - `generated_code` (jsonb) - Stores the generated code files as JSON
      - `framework` (text) - Framework used (e.g., React, Vue, Next.js)
      - `status` (text) - Project status (draft, generating, completed)
      - `created_at` (timestamptz) - When the project was created
      - `updated_at` (timestamptz) - When the project was last updated
      - `user_id` (uuid, nullable) - For future auth integration

  2. Security
    - Enable RLS on `projects` table
    - Add policy for public read access (for demo purposes)
    - Add policy for public insert/update access (for demo purposes)
    
  3. Important Notes
    - This is a demo setup with public access
    - In production, user_id should be required and policies should be more restrictive
    - The generated_code field stores file structure as JSON for easy retrieval
*/

CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  prompt text NOT NULL,
  description text,
  generated_code jsonb DEFAULT '[]'::jsonb,
  framework text DEFAULT 'react',
  status text DEFAULT 'draft',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  user_id uuid
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view projects"
  ON projects FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Anyone can insert projects"
  ON projects FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can update projects"
  ON projects FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Anyone can delete projects"
  ON projects FOR DELETE
  TO anon
  USING (true);

CREATE INDEX IF NOT EXISTS idx_projects_created_at ON projects(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_projects_status ON projects(status);