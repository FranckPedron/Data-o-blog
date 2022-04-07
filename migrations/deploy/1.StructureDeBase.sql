-- Deploy o-blog:1.StructureDeBase to pg

BEGIN;

    CREATE TABLE category (
      id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      "route" TEXT NOT NULL UNIQUE,
      label TEXT NOT NULL UNIQUE,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      updated_at TIMESTAMPTZ
    );
    
    CREATE TABLE post (
      id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      slug TEXT NOT NULL,
      title TEXT NOT NULL,
      excerpt TEXT NOT NULL,
      content TEXT NOT NULL,
      category_id INT REFERENCES category(id),
      created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      updated_at TIMESTAMPTZ
    ) ;
    
    

COMMIT;
