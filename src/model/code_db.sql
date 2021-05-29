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

create table answer(
	id int primary key auto_increment,
    nick varchar(30),
    title_quiz varchar(30),
    score int(3),
    foreign key(nick) references user(nick),
    foreign key(title_quiz) references quiz(title)
);

ALTER TABLE question ADD COLUMN right_letter CHAR NOT NULL;
ALTER TABLE quiz ADD COLUMN description VARCHAR(200);
ALTER TABLE quiz ADD COLUMN img_url VARCHAR(300) DEFAULT "https://cdn.wizard.com.br/wp-content/uploads/2017/07/02165739/quiz-palavras-em-ingles-plural-1.jpg";