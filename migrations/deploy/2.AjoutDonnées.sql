-- Deploy o-blog:2.AjoutDonnées to pg

BEGIN;

INSERT INTO "category" ("route","label") VALUES
('/test','MAZET');

COMMIT;
