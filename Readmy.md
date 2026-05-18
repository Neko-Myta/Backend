# 1. Остановить и удалить все контейнеры
docker stop $(docker ps -aq)
docker rm $(docker ps -aq)

# 2. (Опционально) Удалить все volumes, чтобы полностью очистить БД
# ВНИМАНИЕ: это удалит все данные PostgreSQL
docker volume prune -f

# 3. Запустить контейнеры заново
docker compose up -d

# 4. Проверить, что контейнеры запущены
docker ps

# 5. Запустить сервер разработки
npm run dev

# 6. Подключиться к PostgreSQL
    docker exec -it postgres-db psql -U postgres


Пример: 

    CREATE DATABASE lesson09;
\c lesson09

CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    completed BOOLEAN DEFAULT false
);

INSERT INTO todos (title, completed)
VALUES
  ('Изучить TypeScript', false),
  ('Настроить Docker', true),
  ('Сделать домашнее задание', false);

# 7. проверка
SELECT * FROM todos;

# 8. закрыть
\q