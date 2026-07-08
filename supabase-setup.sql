-- Run this in Supabase SQL Editor
-- Go to: SQL Editor (left sidebar) → New Query → paste this → Run

create table products (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  price text,
  store text,
  affiliate_url text,
  image_url text,
  article text,
  category text,
  emoji text,
  created_at timestamptz default now()
);

-- Allow public read access
alter table products enable row level security;

create policy "Allow public read"
  on products for select
  using (true);

create policy "Allow all operations with secret key"
  on products for all
  using (true);

-- Insert existing products
insert into products (name, price, store, affiliate_url, image_url, article, category, emoji) values
('Sihoo M57 Ergonomic Chair', '9275', 'Lazada', 'https://s.lazada.com.ph/s.ZT31NP?c=d', 'https://thingsweuse.ph/cdn/shop/products/SIHOO_M57_CLASSIC_ERGONOMIC_OFFICE_CHAIR_BLACK-BLACK_1_535x.jpg?v=1762332917', 'best-ergonomic-chairs-under-10000-philippines', 'Chair Review', '🪑'),
('TTRacing Duo V4', '5760', 'Shopee', '', 'https://img.ph.my-best.com/product_images/79c3040b1c8890a128b8074e2f7c1f1f.jpeg?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=675cfd879fba16a209fbe186bcf2614d', 'best-ergonomic-chairs-under-10000-philippines', 'Chair Review', '🪑'),
('AIODIY Ergonomic Chair', '2338', 'Lazada', '', 'https://img.ph.my-best.com/product_images/2631eee50fd5616ec14fcbea757f0c5e.jpeg?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=85ea6b727ca6f9fc8e1ac98e0e864e37', 'best-ergonomic-chairs-under-10000-philippines', 'Chair Review', '🪑'),
('Deli E4929', '2461', 'Lazada', '', 'https://img.ph.my-best.com/product_images/c56a644c32df4a2e82624f6b663ca37b.png?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=637278ffcfb4a36c59c5eebb674c4223', 'best-ergonomic-chairs-under-10000-philippines', 'Chair Review', '🪑'),
('IKEA Millberget', '6999', 'IKEA Philippines', '', '', 'best-ergonomic-chairs-under-10000-philippines', 'Chair Review', '🪑');
