create table if not exists motions(
id int not null,
axis_num int not null
);

create table if not exists poses(
motionid int not null,
poseid int not null,
pose text
);

INSERT INTO motions VALUES(0,19);
INSERT INTO poses VALUES(0,0,'1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19');
