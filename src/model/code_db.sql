create table user (
	nick varchar(30) primary key
);

create table quiz (
	author varchar(30),
	title varchar(30) primary key,
    foreign key(author) references user(nick)
);

create table question(
	id int primary key auto_increment,
    title_quiz varchar(30),
	ask varchar(100),
    a varchar(30),
    b varchar(30),
    c varchar(30),
    foreign key(title_quiz) references quiz(title)
);

alter table question add column right_letter char not null;




