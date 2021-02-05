DROP TABLE IF EXISTS items;

CREATE TABLE items (
  product_id int GENERATED ALWAYS AS IDENTITY,
  brand varchar(100) not null,
  type varchar(100) not null,
  retailPrice int not null,
  currentPrice int,
  title varchar(50),
  smallImageUrl varchar(1000)
);

COPY items(brand, type, retailPrice, currentPrice,title,smallImageUrl)
FROM '/Users/gregorie6112/Desktop/SchoolWork/SDC/relatedProducts/database/data.csv'
DELIMITER ','
CSV HEADER;