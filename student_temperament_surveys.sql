-- АНГИ ДЭМ 97 — темпераментын өөрийгөө таних асуулгын тусдаа хадгалалт
-- Supabase SQL Editor дээр нэг удаа ажиллуулна.
-- Нэр авахгүй; сурагчийн кодыг л ашиглана. Энэ нь оношлох систем биш.

CREATE TABLE IF NOT EXISTS public.student_temperament_surveys (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  class_code text NOT NULL CHECK (char_length(class_code) BETWEEN 1 AND 20),
  student_code text NOT NULL DEFAULT 'АНОНИМ' CHECK (char_length(student_code) BETWEEN 1 AND 30),
  answers jsonb NOT NULL CHECK (jsonb_typeof(answers) = 'object'),
  scores jsonb NOT NULL CHECK (jsonb_typeof(scores) = 'object'),
  top_tendencies jsonb NOT NULL DEFAULT '[]'::jsonb CHECK (jsonb_typeof(top_tendencies) = 'array'),
  voluntary_consent boolean NOT NULL CHECK (voluntary_consent = true),
  form_version text NOT NULL DEFAULT 'temperament-v1'
);

ALTER TABLE public.student_temperament_surveys ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON TABLE public.student_temperament_surveys FROM anon, authenticated;
GRANT INSERT ON TABLE public.student_temperament_surveys TO anon, authenticated;
GRANT SELECT ON TABLE public.student_temperament_surveys TO authenticated;

DROP POLICY IF EXISTS student_temperament_anonymous_insert ON public.student_temperament_surveys;
CREATE POLICY student_temperament_anonymous_insert
ON public.student_temperament_surveys
FOR INSERT TO anon, authenticated
WITH CHECK (
  jsonb_typeof(answers) = 'object'
  AND jsonb_typeof(scores) = 'object'
  AND jsonb_typeof(top_tendencies) = 'array'
  AND voluntary_consent = true
  AND form_version = 'temperament-v1'
  AND char_length(class_code) BETWEEN 1 AND 20
  AND char_length(student_code) BETWEEN 1 AND 30
);

DROP POLICY IF EXISTS student_temperament_admin_read ON public.student_temperament_surveys;
CREATE POLICY student_temperament_admin_read
ON public.student_temperament_surveys
FOR SELECT TO authenticated
USING ((auth.jwt() ->> 'email') = 'jagaa.1325@gmail.com');
