#

```sql
-- where -->order -->Limit
select * FROM book order by id DESC LIMIT 0,10; --LIMIT 시작레코드, 개수
select * FROM book order by id DESC LIMIT 10,10;
select * from 