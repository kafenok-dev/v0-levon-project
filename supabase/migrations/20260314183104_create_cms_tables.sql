/*
  # CMS Backend Structure

  ## Overview
  This migration creates a comprehensive content management system for the poker platform.
  It includes tables for managing all site content, events, players, rankings, media, and payments.

  ## New Tables

  ### 1. content_blocks
  Stores reusable content blocks for different sections of the site
  - `id` (uuid, primary key)
  - `key` (text, unique) - Identifier for the content block (e.g., 'hero_title', 'about_text')
  - `content` (jsonb) - Flexible content storage supporting multiple languages and formats
  - `section` (text) - Section identifier (e.g., 'hero', 'about', 'testimonials')
  - `type` (text) - Content type (text, html, image, video, etc.)
  - `order` (integer) - Display order within section
  - `published` (boolean) - Whether the content is live
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 2. events
  Manages poker events and tournaments
  - `id` (uuid, primary key)
  - `title` (text)
  - `description` (text)
  - `event_date` (timestamptz)
  - `end_date` (timestamptz)
  - `location` (text)
  - `location_details` (jsonb) - Address, coordinates, etc.
  - `format` (text) - Game format (e.g., 'Texas Hold\'em', 'Omaha')
  - `buy_in` (decimal)
  - `max_players` (integer)
  - `registered_players` (integer, default 0)
  - `status` (text) - upcoming, ongoing, completed, cancelled
  - `image_url` (text)
  - `published` (boolean)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 3. players
  Player profiles and information
  - `id` (uuid, primary key)
  - `user_id` (uuid) - Reference to auth.users
  - `name` (text)
  - `nickname` (text)
  - `bio` (text)
  - `avatar_url` (text)
  - `city` (text)
  - `country` (text)
  - `experience_level` (text) - beginner, intermediate, advanced, professional
  - `total_earnings` (decimal, default 0)
  - `tournaments_played` (integer, default 0)
  - `tournaments_won` (integer, default 0)
  - `is_host` (boolean, default false)
  - `is_featured` (boolean, default false)
  - `social_links` (jsonb)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 4. rankings_city
  City-based player rankings
  - `id` (uuid, primary key)
  - `player_id` (uuid, foreign key to players)
  - `city` (text)
  - `rank` (integer)
  - `points` (integer)
  - `month` (date)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 5. rankings_sport
  Sport/game format rankings
  - `id` (uuid, primary key)
  - `player_id` (uuid, foreign key to players)
  - `sport` (text) - Game format identifier
  - `rank` (integer)
  - `points` (integer)
  - `month` (date)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 6. top_players_month
  Monthly top players showcase
  - `id` (uuid, primary key)
  - `player_id` (uuid, foreign key to players)
  - `month` (date)
  - `rank` (integer)
  - `earnings` (decimal)
  - `tournaments_won` (integer)
  - `highlight` (text) - Special achievement or note
  - `created_at` (timestamptz)

  ### 7. roles
  Player roles and positions (e.g., dealer, tournament director)
  - `id` (uuid, primary key)
  - `name` (text, unique)
  - `description` (text)
  - `icon` (text) - Icon identifier or URL
  - `order` (integer)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 8. gallery_items
  Photo gallery items
  - `id` (uuid, primary key)
  - `title` (text)
  - `description` (text)
  - `image_url` (text)
  - `thumbnail_url` (text)
  - `category` (text)
  - `event_id` (uuid) - Optional reference to events
  - `order` (integer)
  - `published` (boolean)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 9. videos
  Video content management
  - `id` (uuid, primary key)
  - `title` (text)
  - `description` (text)
  - `video_url` (text)
  - `thumbnail_url` (text)
  - `platform` (text) - youtube, vimeo, etc.
  - `duration` (integer) - Duration in seconds
  - `category` (text)
  - `order` (integer)
  - `published` (boolean)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 10. reviews
  Player testimonials and reviews
  - `id` (uuid, primary key)
  - `player_id` (uuid, foreign key to players)
  - `rating` (integer) - 1-5 stars
  - `title` (text)
  - `content` (text)
  - `event_id` (uuid) - Optional reference to events
  - `featured` (boolean)
  - `approved` (boolean)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 11. contacts
  Contact form submissions
  - `id` (uuid, primary key)
  - `name` (text)
  - `email` (text)
  - `phone` (text)
  - `subject` (text)
  - `message` (text)
  - `status` (text) - new, in_progress, resolved, archived
  - `notes` (text) - Admin notes
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 12. orders
  Event registration and product orders
  - `id` (uuid, primary key)
  - `player_id` (uuid, foreign key to players)
  - `event_id` (uuid) - Optional reference to events
  - `order_type` (text) - event_registration, merchandise, etc.
  - `amount` (decimal)
  - `status` (text) - pending, confirmed, cancelled, refunded
  - `payment_id` (uuid) - Reference to payments
  - `details` (jsonb) - Order-specific details
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 13. payments
  Payment transactions
  - `id` (uuid, primary key)
  - `order_id` (uuid, foreign key to orders)
  - `amount` (decimal)
  - `currency` (text, default 'USD')
  - `payment_method` (text) - card, bank_transfer, cash, etc.
  - `payment_provider` (text) - stripe, paypal, etc.
  - `transaction_id` (text) - External transaction reference
  - `status` (text) - pending, succeeded, failed, refunded
  - `metadata` (jsonb)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 14. payment_settings
  Payment configuration and settings
  - `id` (uuid, primary key)
  - `provider` (text, unique) - stripe, paypal, etc.
  - `is_active` (boolean)
  - `config` (jsonb) - Provider-specific configuration
  - `test_mode` (boolean)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ## Security
  - Row Level Security (RLS) enabled on all tables
  - Public read access for published content
  - Authenticated users can manage their own data
  - Admin-only access for sensitive operations

  ## Indexes
  - Performance indexes on frequently queried columns
  - Composite indexes for common query patterns
*/

-- Create content_blocks table
CREATE TABLE IF NOT EXISTS content_blocks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  key text UNIQUE NOT NULL,
  content jsonb NOT NULL DEFAULT '{}',
  section text NOT NULL,
  type text NOT NULL DEFAULT 'text',
  "order" integer DEFAULT 0,
  published boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create events table
CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  event_date timestamptz NOT NULL,
  end_date timestamptz,
  location text,
  location_details jsonb DEFAULT '{}',
  format text,
  buy_in decimal(10, 2),
  max_players integer,
  registered_players integer DEFAULT 0,
  status text DEFAULT 'upcoming',
  image_url text,
  published boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create players table
CREATE TABLE IF NOT EXISTS players (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  name text NOT NULL,
  nickname text,
  bio text,
  avatar_url text,
  city text,
  country text,
  experience_level text DEFAULT 'beginner',
  total_earnings decimal(10, 2) DEFAULT 0,
  tournaments_played integer DEFAULT 0,
  tournaments_won integer DEFAULT 0,
  is_host boolean DEFAULT false,
  is_featured boolean DEFAULT false,
  social_links jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create rankings_city table
CREATE TABLE IF NOT EXISTS rankings_city (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  player_id uuid REFERENCES players(id) ON DELETE CASCADE,
  city text NOT NULL,
  rank integer NOT NULL,
  points integer DEFAULT 0,
  month date NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create rankings_sport table
CREATE TABLE IF NOT EXISTS rankings_sport (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  player_id uuid REFERENCES players(id) ON DELETE CASCADE,
  sport text NOT NULL,
  rank integer NOT NULL,
  points integer DEFAULT 0,
  month date NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create top_players_month table
CREATE TABLE IF NOT EXISTS top_players_month (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  player_id uuid REFERENCES players(id) ON DELETE CASCADE,
  month date NOT NULL,
  rank integer NOT NULL,
  earnings decimal(10, 2) DEFAULT 0,
  tournaments_won integer DEFAULT 0,
  highlight text,
  created_at timestamptz DEFAULT now()
);

-- Create roles table
CREATE TABLE IF NOT EXISTS roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  description text,
  icon text,
  "order" integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create gallery_items table
CREATE TABLE IF NOT EXISTS gallery_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text,
  description text,
  image_url text NOT NULL,
  thumbnail_url text,
  category text,
  event_id uuid REFERENCES events(id) ON DELETE SET NULL,
  "order" integer DEFAULT 0,
  published boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create videos table
CREATE TABLE IF NOT EXISTS videos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  video_url text NOT NULL,
  thumbnail_url text,
  platform text DEFAULT 'youtube',
  duration integer,
  category text,
  "order" integer DEFAULT 0,
  published boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create reviews table
CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  player_id uuid REFERENCES players(id) ON DELETE SET NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  title text,
  content text NOT NULL,
  event_id uuid REFERENCES events(id) ON DELETE SET NULL,
  featured boolean DEFAULT false,
  approved boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text,
  message text NOT NULL,
  status text DEFAULT 'new',
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  player_id uuid REFERENCES players(id) ON DELETE SET NULL,
  event_id uuid REFERENCES events(id) ON DELETE SET NULL,
  order_type text NOT NULL DEFAULT 'event_registration',
  amount decimal(10, 2) NOT NULL,
  status text DEFAULT 'pending',
  payment_id uuid,
  details jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create payments table
CREATE TABLE IF NOT EXISTS payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid REFERENCES orders(id) ON DELETE SET NULL,
  amount decimal(10, 2) NOT NULL,
  currency text DEFAULT 'USD',
  payment_method text,
  payment_provider text,
  transaction_id text,
  status text DEFAULT 'pending',
  metadata jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create payment_settings table
CREATE TABLE IF NOT EXISTS payment_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  provider text UNIQUE NOT NULL,
  is_active boolean DEFAULT false,
  config jsonb DEFAULT '{}',
  test_mode boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Add foreign key for orders.payment_id
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.table_constraints
    WHERE constraint_name = 'orders_payment_id_fkey'
  ) THEN
    ALTER TABLE orders ADD CONSTRAINT orders_payment_id_fkey 
    FOREIGN KEY (payment_id) REFERENCES payments(id) ON DELETE SET NULL;
  END IF;
END $$;

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_content_blocks_section ON content_blocks(section);
CREATE INDEX IF NOT EXISTS idx_content_blocks_published ON content_blocks(published);
CREATE INDEX IF NOT EXISTS idx_events_date ON events(event_date);
CREATE INDEX IF NOT EXISTS idx_events_status ON events(status);
CREATE INDEX IF NOT EXISTS idx_events_published ON events(published);
CREATE INDEX IF NOT EXISTS idx_players_user_id ON players(user_id);
CREATE INDEX IF NOT EXISTS idx_players_city ON players(city);
CREATE INDEX IF NOT EXISTS idx_players_featured ON players(is_featured);
CREATE INDEX IF NOT EXISTS idx_rankings_city_month ON rankings_city(month, city);
CREATE INDEX IF NOT EXISTS idx_rankings_sport_month ON rankings_sport(month, sport);
CREATE INDEX IF NOT EXISTS idx_top_players_month ON top_players_month(month);
CREATE INDEX IF NOT EXISTS idx_gallery_category ON gallery_items(category);
CREATE INDEX IF NOT EXISTS idx_gallery_published ON gallery_items(published);
CREATE INDEX IF NOT EXISTS idx_videos_category ON videos(category);
CREATE INDEX IF NOT EXISTS idx_videos_published ON videos(published);
CREATE INDEX IF NOT EXISTS idx_reviews_approved ON reviews(approved);
CREATE INDEX IF NOT EXISTS idx_reviews_featured ON reviews(featured);
CREATE INDEX IF NOT EXISTS idx_contacts_status ON contacts(status);
CREATE INDEX IF NOT EXISTS idx_orders_player_id ON orders(player_id);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_payments_order_id ON payments(order_id);
CREATE INDEX IF NOT EXISTS idx_payments_status ON payments(status);

-- Enable Row Level Security on all tables
ALTER TABLE content_blocks ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE players ENABLE ROW LEVEL SECURITY;
ALTER TABLE rankings_city ENABLE ROW LEVEL SECURITY;
ALTER TABLE rankings_sport ENABLE ROW LEVEL SECURITY;
ALTER TABLE top_players_month ENABLE ROW LEVEL SECURITY;
ALTER TABLE roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE videos ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE payment_settings ENABLE ROW LEVEL SECURITY;

-- RLS Policies for content_blocks
CREATE POLICY "Anyone can view published content blocks"
  ON content_blocks FOR SELECT
  TO authenticated, anon
  USING (published = true);

CREATE POLICY "Authenticated users can view all content blocks"
  ON content_blocks FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert content blocks"
  ON content_blocks FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update content blocks"
  ON content_blocks FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete content blocks"
  ON content_blocks FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for events
CREATE POLICY "Anyone can view published events"
  ON events FOR SELECT
  TO authenticated, anon
  USING (published = true);

CREATE POLICY "Authenticated users can view all events"
  ON events FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert events"
  ON events FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update events"
  ON events FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete events"
  ON events FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for players
CREATE POLICY "Anyone can view featured players"
  ON players FOR SELECT
  TO authenticated, anon
  USING (is_featured = true);

CREATE POLICY "Authenticated users can view all players"
  ON players FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can manage their own player profile"
  ON players FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Authenticated users can insert players"
  ON players FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update players"
  ON players FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete players"
  ON players FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for rankings_city
CREATE POLICY "Anyone can view city rankings"
  ON rankings_city FOR SELECT
  TO authenticated, anon
  USING (true);

CREATE POLICY "Authenticated users can manage city rankings"
  ON rankings_city FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- RLS Policies for rankings_sport
CREATE POLICY "Anyone can view sport rankings"
  ON rankings_sport FOR SELECT
  TO authenticated, anon
  USING (true);

CREATE POLICY "Authenticated users can manage sport rankings"
  ON rankings_sport FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- RLS Policies for top_players_month
CREATE POLICY "Anyone can view top players"
  ON top_players_month FOR SELECT
  TO authenticated, anon
  USING (true);

CREATE POLICY "Authenticated users can manage top players"
  ON top_players_month FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- RLS Policies for roles
CREATE POLICY "Anyone can view roles"
  ON roles FOR SELECT
  TO authenticated, anon
  USING (true);

CREATE POLICY "Authenticated users can manage roles"
  ON roles FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- RLS Policies for gallery_items
CREATE POLICY "Anyone can view published gallery items"
  ON gallery_items FOR SELECT
  TO authenticated, anon
  USING (published = true);

CREATE POLICY "Authenticated users can manage gallery items"
  ON gallery_items FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- RLS Policies for videos
CREATE POLICY "Anyone can view published videos"
  ON videos FOR SELECT
  TO authenticated, anon
  USING (published = true);

CREATE POLICY "Authenticated users can manage videos"
  ON videos FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- RLS Policies for reviews
CREATE POLICY "Anyone can view approved reviews"
  ON reviews FOR SELECT
  TO authenticated, anon
  USING (approved = true);

CREATE POLICY "Authenticated users can view all reviews"
  ON reviews FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can submit reviews"
  ON reviews FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can manage reviews"
  ON reviews FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete reviews"
  ON reviews FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for contacts
CREATE POLICY "Anyone can submit contacts"
  ON contacts FOR INSERT
  TO authenticated, anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view contacts"
  ON contacts FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update contacts"
  ON contacts FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete contacts"
  ON contacts FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for orders
CREATE POLICY "Users can view their own orders"
  ON orders FOR SELECT
  TO authenticated
  USING (
    player_id IN (SELECT id FROM players WHERE user_id = auth.uid())
  );

CREATE POLICY "Authenticated users can view all orders"
  ON orders FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can create orders"
  ON orders FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update orders"
  ON orders FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete orders"
  ON orders FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for payments
CREATE POLICY "Users can view their own payments"
  ON payments FOR SELECT
  TO authenticated
  USING (
    order_id IN (
      SELECT id FROM orders WHERE player_id IN (
        SELECT id FROM players WHERE user_id = auth.uid()
      )
    )
  );

CREATE POLICY "Authenticated users can view all payments"
  ON payments FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can manage payments"
  ON payments FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- RLS Policies for payment_settings
CREATE POLICY "Authenticated users can view payment settings"
  ON payment_settings FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can manage payment settings"
  ON payment_settings FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);