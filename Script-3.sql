drop table if exists transactions;
drop table if exists accounts;
drop table if exists account_type;
drop table if exists users;

create table users (
id serial primary key not null,
first_name varchar (50) not null,
middle_initial varchar (2) not null,
last_name varchar (50) not null,
ssn integer not null unique,
email varchar(50) not null,
phone_number integer not null,
country varchar (50) not null,
state varchar (50) not null,
city varchar(50) not null,
zipcode integer not null,
username varchar (100) not null unique,
password varchar (100) not null
);


create table account_type(
id serial primary key,
type varchar (50)
);

create table accounts (
id serial primary key,
balance numeric,
nickname varchar(50),
fk_account_type integer not null,
fk_users_id integer not null,
foreign key (fk_account_type) references account_type(id),
foreign key (fk_users_id) references users(id)
);


insert into account_type (type) values ('Savings'), ('Checking'), ('Credit');

create table transactions(
id serial primary key,
date timestamp not null,
from_account_id integer not null,
to_account_id integer not null,
total_amount numeric not null,
note varchar (500),
foreign key (from_account_id) references accounts(id),
foreign key (to_account_id) references accounts(id)
);

select * from users;
select * from accounts;



------------------Functions, Queries, and Procedures-------------------

--To see all accounts, their type, and their balances for a customer
select accounts.balance, account_type.type from accounts join account_type on account_type.id = accounts.fk_account_type join users on users.id = accounts.fk_users_id where users.id = 1;

--To see all income
select transactions.date, total_amount as amount, from_account_id as from, note from transactions join accounts on transactions.from_account_id = accounts.id where to_account_id = 1;

--To see all expenses
select transactions.date, total_amount as amount, to_account_id as to, note from transactions join accounts on transactions.from_account_id = accounts.id where from_account_id = 1;

--To transfer money between accounts
create or replace procedure transfer(amount numeric, sending_acc integer, recieving_acc integer, message varchar(500))
language plpgsql
as $$
declare pre_transaction numeric;
declare recieving_person accounts%rowtype;
begin
	select balance from accounts into pre_transaction where id = sending_acc;
	select id from accounts into recieving_person where id = recieving_acc;
	if not found then 
		raise 'No such account exists';
	elseif pre_transaction - amount < 0 then raise 'Insufficient Funds';
		else 
			update accounts set balance = balance - amount where id = sending_acc;
			update accounts set balance = balance + amount where id = recieving_acc;
			insert into transactions (date, from_account_id, to_account_id, total_amount, note) values (current_timestamp, sending_acc, recieving_acc, amount, message);
	end if;
	
	commit;
end;
$$
