-- Fix security vulnerability in subscribers table
-- Remove overly permissive insert policy that allows anyone to insert records
DROP POLICY IF EXISTS "insert_subscription" ON public.subscribers;

-- Create secure insert policy that only allows authenticated users to insert their own records
CREATE POLICY "authenticated_users_can_insert_own_subscription" ON public.subscribers
FOR INSERT
WITH CHECK (auth.uid() = user_id AND auth.email() = email);

-- Also ensure user_id cannot be null for security (this prevents anonymous inserts)
-- Note: Edge functions using service role key will bypass this restriction
ALTER TABLE public.subscribers 
ALTER COLUMN user_id SET NOT NULL;