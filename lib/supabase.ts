import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      content_blocks: {
        Row: {
          id: string;
          key: string;
          content: Record<string, unknown>;
          section: string;
          type: string;
          order: number;
          published: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['content_blocks']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['content_blocks']['Insert']>;
      };
      events: {
        Row: {
          id: string;
          title: string;
          description: string | null;
          event_date: string;
          end_date: string | null;
          location: string | null;
          location_details: Record<string, unknown>;
          format: string | null;
          buy_in: number | null;
          max_players: number | null;
          registered_players: number;
          status: string;
          image_url: string | null;
          published: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['events']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['events']['Insert']>;
      };
      players: {
        Row: {
          id: string;
          user_id: string | null;
          name: string;
          nickname: string | null;
          bio: string | null;
          avatar_url: string | null;
          city: string | null;
          country: string | null;
          experience_level: string;
          total_earnings: number;
          tournaments_played: number;
          tournaments_won: number;
          is_host: boolean;
          is_featured: boolean;
          social_links: Record<string, unknown>;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['players']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['players']['Insert']>;
      };
    };
  };
};
