const SUPABASE_URL = 'https://pwsxvrnlhooihwcxftvf.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3c3h2cm5saG9vaWh3Y3hmdHZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDg2MzQsImV4cCI6MTk4MzY4NDYzNH0.ITSI6KK7aGizRAaYZ1zCgnyVWSXCZKMfeSCKISd7IXg';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function fetchMovies() {
    const response = await client.from('movies').select('*').order('id');

    return response.data;
}

export async function fetchCities() {
    const response = await client.from('cities').select('*').order('id');

    return response.data;
}
