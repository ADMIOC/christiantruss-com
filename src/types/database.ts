export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

type ProfileRow = {
  id: string;
  full_name: string | null;
  role: "client" | "admin";
  avatar_url: string | null;
  phone: string | null;
  stripe_customer_id: string | null;
  created_at: string;
};

type BookingRow = {
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

type PostRow = {
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

type CommentRow = {
  id: string;
  post_id: string | null;
  author_name: string;
  author_role: string;
  body: string;
  approved: boolean;
  created_at: string;
};

type MembershipRow = {
  id: string;
  profile_id: string | null;
  stripe_subscription_id: string | null;
  plan: string | null;
  status: string | null;
  current_period_end: string | null;
  created_at: string;
};

type SocialDraftRow = {
  id: string;
  profile_id: string | null;
  topic: string;
  vertical: string;
  tone: string;
  content: Json;
  created_at: string;
};

type Table<Row, Insert = Partial<Row>, Update = Partial<Row>> = {
  Row: Row;
  Insert: Insert;
  Update: Update;
  Relationships: [];
};

export type Database = {
  public: {
    Tables: {
      profiles: Table<ProfileRow, Partial<ProfileRow> & { id: string }>;
      bookings: Table<BookingRow>;
      posts: Table<PostRow, Partial<PostRow> & { slug: string; title: string }>;
      comments: Table<
        CommentRow,
        Partial<CommentRow> & { author_name: string; body: string }
      >;
      memberships: Table<MembershipRow>;
      social_drafts: Table<
        SocialDraftRow,
        Partial<SocialDraftRow> & {
          topic: string;
          vertical: string;
          tone: string;
          content: Json;
        }
      >;
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
