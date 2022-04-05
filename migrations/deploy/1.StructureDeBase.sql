-- Deploy o-blog:1.StructureDeBase to pg

BEGIN;

    
    CREATE TABLE IF NOT EXISTS post (
      id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      category TEXT NOT NULL,
      slug TEXT NOT NULL,
      title TEXT,
      excerpt TEXT,
      content TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      updated_at TIMESTAMPTZ
    ) ;
    
    
    CREATE TABLE IF NOT EXISTS category (
      id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      route TEXT NOT NULL,
      label TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      updated_at TIMESTAMPTZ
    );

    
    CREATE TABLE IF NOT EXISTS post_has_category (
      id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      post_id INT REFERENCES post(id),
      category_id INT REFERENCES category(id)
    );
    
    

COMMIT;
