-- Fix the contact_submissions SELECT policy to allow proper admin access
-- First, drop the existing policy that blocks all access
DROP POLICY IF EXISTS "admin_view_contact_submissions" ON public.contact_submissions;

-- Create a new policy that allows only users with admin role to view contact submissions
CREATE POLICY "admins_can_view_contact_submissions"
ON public.contact_submissions
FOR SELECT
TO authenticated
USING (
  EXISTS (
    SELECT 1 
    FROM public.user_roles 
    WHERE user_id = auth.uid() 
    AND role = 'admin'
  )
);

-- Ensure the table has RLS enabled (should already be enabled)
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;