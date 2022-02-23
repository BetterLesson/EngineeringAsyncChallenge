| Users   |              |
|---------|--------------|
| id (PK) | varchar(36)  |
| name    | varchar(112) |
| email   | varchar(255) |
| phone   | varchar(32)  |
| address | varchar(255) |

| Orders       |               |
|--------------|---------------|
| id(PK)       | varchar(36)   |
| total        | float(2)      |
| date         | timestamp     |
| customer(FK) | ref: Users.id |
| discount     | varchar(16)   |

| Products |              |
|----------|--------------|
| id (PK)  | varchar(36)  |
| title    | varchar(255) |
