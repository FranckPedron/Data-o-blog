-- Verify o-blog:1.StructureDeBase on pg

BEGIN;

SELECT id, category, slug, title,excerpt, content, created_at,updated_at FROM post;
SELECT id, route, label, created_at,updated_at FROM category;
SELECT id, post_id, catgeory_id FROM post_has_category;



ROLLBACK;
