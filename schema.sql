-- 239Wine App – PostgreSQL schema

-- Core wine catalog
CREATE TABLE IF NOT EXISTS wine (
  id               SERIAL PRIMARY KEY,
  name             TEXT NOT NULL,
  region           TEXT,
  country          TEXT,
  vintage          SMALLINT,
  grapes           TEXT[],
  price_category   TEXT CHECK (price_category IN ('Luxe','Essential','Heritage')),
  moes_note        TEXT,
  wine_searcher_url TEXT,
  cellartracker_url TEXT,
  food_tags        TEXT[],
  club_level       TEXT DEFAULT 'public' CHECK (club_level IN ('public','plus')),
  image_url        TEXT,
  score_avg        NUMERIC(4,1)
);

-- Application users (external auth)
CREATE TABLE IF NOT EXISTS app_user (
  id          UUID PRIMARY KEY,
  email       TEXT UNIQUE,
  plus_member BOOLEAN DEFAULT FALSE,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Wishlist
CREATE TABLE IF NOT EXISTS wishlist (
  user_id UUID REFERENCES app_user(id) ON DELETE CASCADE,
  wine_id INT  REFERENCES wine(id)     ON DELETE CASCADE,
  added_at TIMESTAMPTZ DEFAULT NOW(),
  PRIMARY KEY (user_id, wine_id)
);

-- Personal inventory
CREATE TABLE IF NOT EXISTS inventory (
  user_id UUID REFERENCES app_user(id) ON DELETE CASCADE,
  wine_id INT  REFERENCES wine(id)     ON DELETE CASCADE,
  qty      SMALLINT NOT NULL CHECK (qty >= 0),
  last_updated TIMESTAMPTZ DEFAULT NOW(),
  PRIMARY KEY (user_id, wine_id)
);