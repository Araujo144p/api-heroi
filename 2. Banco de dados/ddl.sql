create table tb_heroi(
id_heroi int primary key auto_increment,
nm_heroi varchar(200),
ds_feitos varchar(200),
ds_superpoder  varchar(200),
bt_antheroi   boolean
);

select id_heroi, nm_heroi, ds_feitos, ds_superpoder, bt_antheroi
from tb_heroi;