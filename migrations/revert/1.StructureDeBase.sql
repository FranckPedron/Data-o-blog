-- Revert o-blog:1.StructureDeBase from pg

BEGIN;

DROP TABLE IF EXISTS post, category CASCADE;

COMMIT;
