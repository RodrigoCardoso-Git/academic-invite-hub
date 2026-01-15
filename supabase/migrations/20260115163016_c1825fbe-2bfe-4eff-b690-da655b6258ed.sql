-- Create table for event RSVPs
CREATE TABLE public.rsvps (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    confirmed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE (email)
);

-- Enable Row Level Security
ALTER TABLE public.rsvps ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (confirm presence)
CREATE POLICY "Anyone can confirm presence" 
ON public.rsvps 
FOR INSERT 
WITH CHECK (true);

-- Allow anyone to view confirmations (for admin viewing)
CREATE POLICY "Anyone can view confirmations" 
ON public.rsvps 
FOR SELECT 
USING (true);