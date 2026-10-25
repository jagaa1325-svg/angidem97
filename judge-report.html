-- АНГИ ДЭМ 97 — Шүүгч, багш нарын тандалтын тайланг зөвхөн администратор унших бодлого
-- Supabase Dashboard > SQL Editor дээр нэг удаа ажиллуулна.
-- Энэ SQL нь тандалтын хариуг устгахгүй, өөрчлөхгүй. Зөвхөн SELECT эрхийг хязгаарлана.

ALTER TABLE public.judge_teacher_fatigue_surveys ENABLE ROW LEVEL SECURITY;
REVOKE SELECT ON TABLE public.judge_teacher_fatigue_surveys FROM anon;
GRANT SELECT ON TABLE public.judge_teacher_fatigue_surveys TO authenticated;

DROP POLICY IF EXISTS judge_teacher_fatigue_admin_read
ON public.judge_teacher_fatigue_surveys;

CREATE POLICY judge_teacher_fatigue_admin_read
ON public.judge_teacher_fatigue_surveys
FOR SELECT
TO authenticated
USING (lower(coalesce(auth.jwt() ->> 'email', '')) = 'jagaa.1325@gmail.com');
