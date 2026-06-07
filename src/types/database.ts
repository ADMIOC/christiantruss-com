export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          full_name: string | null;
          role: "client" | "admin";
          avatar_url: string | null;
          phone: string | null;
          stripe_customer_id: string | null;
          created_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["profiles"]["Row"]> & { id: string };
        Update: Partial<Database["public"]["Tables"]["profiles"]["Row"]>;
      };
      bookings: {
        Row: {
          id: string;
          client_id: string | null;
          service: string;
          date: string;
          time_slot: string;
          status: "pending" | "confirmed" | "cancelled";
          notes: string | null;
          price_cents: number | null;
          created_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["bookings"]["Row"]>;
        Update: Partial<Database["public"]["Tables"]["bookings"]["Row"]>;
      };
      posts: {
        Row: {
          id: string;
          slug: string;
          title: string;
          excerpt: string | null;
          body: string | null;
          type: "blog" | "vlog";
          video_url: string | null;
          thumbnail_url: string | null;
          published: boolean;
          published_at: string | null;
          tags: string[] | null;
          created_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["posts"]["Row"]> & {
          slug: string;
          title: string;
        };
        Update: Partial<Database["public"]["Tables"]["posts"]["Row"]>;
      };
      comments: {
        Row: {
          id: string;
          post_id: string | null;
          author_name: string;
          author_role: string;
          body: string;
          approved: boolean;
          created_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["comments"]["Row"]> & {
          author_name: string;
          body: string;
        };
        Update: Partial<Database["public"]["Tables"]["comments"]["Row"]>;
      };
      memberships: {
        Row: {
          id: string;
          profile_id: string | null;
          stripe_subscription_id: string | null;
          plan: string | null;
          status: string | null;
          current_period_end: string | null;
          created_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["memberships"]["Row"]>;
        Update: Partial<Database["public"]["Tables"]["memberships"]["Row"]>;
      };
      social_drafts: {
        Row: {
          id: string;
          profile_id: string | null;
          topic: string;
          vertical: string;
          tone: string;
          content: Json;
          created_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["social_drafts"]["Row"]> & {
          topic: string;
          vertical: string;
          tone: string;
          content: Json;
        };
        Update: Partial<Database["public"]["Tables"]["social_drafts"]["Row"]>;
      };
    };
  };
};
