-- Fix security issues identified in the database audit

-- 1. Fix waitlist admin view policy (currently returns false, should allow admin access)
DROP POLICY IF EXISTS "admin_view_waitlist" ON public.waitlist;
CREATE POLICY "admin_view_waitlist" 
ON public.waitlist 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = auth.uid() 
    AND role = 'admin'
  )
);

-- 2. Add admin-only policy for viewing anonymous feedback
CREATE POLICY "admins_can_view_anonymous_feedback" 
ON public.user_feedback 
FOR SELECT 
USING (
  user_id IS NULL 
  AND EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = auth.uid() 
    AND role = 'admin'
  )
);

-- 3. Fix subscribers update policy - restrict to own data only
DROP POLICY IF EXISTS "update_own_subscription" ON public.subscribers;
CREATE POLICY "update_own_subscription" 
ON public.subscribers 
FOR UPDATE 
USING (
  (user_id = auth.uid()) 
  OR 
  (email = auth.email())
);

-- 4. Add data retention policy for contact submissions (optional - delete old submissions)
-- This is commented out for now, but can be enabled if needed
-- DELETE FROM public.contact_submissions 
-- WHERE created_at < NOW() - INTERVAL '2 years';

-- 5. Create a more restrictive admin policy for contact submissions with audit logging
-- First, let's create an audit log table for admin access to sensitive data
CREATE TABLE IF NOT EXISTS public.admin_audit_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  admin_user_id UUID NOT NULL,
  action TEXT NOT NULL,
  table_name TEXT NOT NULL,
  record_id UUID,
  accessed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  details JSONB
);

-- Enable RLS on audit log
ALTER TABLE public.admin_audit_log ENABLE ROW LEVEL SECURITY;

-- Only admins can view audit logs
CREATE POLICY "admins_can_view_audit_log" 
ON public.admin_audit_log 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = auth.uid() 
    AND role = 'admin'
  )
);

-- Allow system to insert audit logs
CREATE POLICY "system_can_insert_audit_log" 
ON public.admin_audit_log 
FOR INSERT 
WITH CHECK (true);

-- 6. Create a function to log admin access to sensitive data
CREATE OR REPLACE FUNCTION public.log_admin_access(
  p_action TEXT,
  p_table_name TEXT,
  p_record_id UUID DEFAULT NULL,
  p_details JSONB DEFAULT NULL
)
RETURNS VOID AS $$
BEGIN
  INSERT INTO public.admin_audit_log (admin_user_id, action, table_name, record_id, details)
  VALUES (auth.uid(), p_action, p_table_name, p_record_id, p_details);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 7. Add a more secure admin viewing policy for contact submissions with logging
-- Note: This doesn't automatically log, but provides the framework
DROP POLICY IF EXISTS "admins_can_view_contact_submissions" ON public.contact_submissions;
CREATE POLICY "admins_can_view_contact_submissions" 
ON public.contact_submissions 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = auth.uid() 
    AND role = 'admin'
  )
);

-- 8. Add a policy to prevent admins from modifying contact submissions (read-only)
CREATE POLICY "prevent_contact_modification" 
ON public.contact_submissions 
FOR UPDATE 
USING (false);

CREATE POLICY "prevent_contact_deletion" 
ON public.contact_submissions 
FOR DELETE 
USING (false);

-- 9. Add encryption recommendation comment and secure the waitlist table similarly
CREATE POLICY "prevent_waitlist_modification" 
ON public.waitlist 
FOR UPDATE 
USING (false);

CREATE POLICY "prevent_waitlist_deletion" 
ON public.waitlist 
FOR DELETE 
USING (false);