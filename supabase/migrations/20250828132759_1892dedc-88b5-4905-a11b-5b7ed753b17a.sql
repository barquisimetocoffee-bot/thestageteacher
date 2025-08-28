-- Create waitlist table for storing user signups
CREATE TABLE public.waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  organization TEXT,
  role TEXT,
  message TEXT,
  product_name TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert waitlist entries (public signup)
CREATE POLICY "allow_public_waitlist_signup" ON public.waitlist
FOR INSERT
WITH CHECK (true);

-- Create policy for viewing waitlist entries (admin only for now)
CREATE POLICY "admin_view_waitlist" ON public.waitlist
FOR SELECT
USING (false); -- Only admin can view through direct DB access

-- Create contact_submissions table for contact form data
CREATE TABLE public.contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  institute TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to submit contact forms
CREATE POLICY "allow_public_contact_submission" ON public.contact_submissions
FOR INSERT
WITH CHECK (true);

-- Create policy for viewing contact submissions (admin only)
CREATE POLICY "admin_view_contact_submissions" ON public.contact_submissions
FOR SELECT
USING (false); -- Only admin can view through direct DB access