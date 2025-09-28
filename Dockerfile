# Etapa 1: Build do frontend
FROM node:18 AS frontend-build
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .
RUN npm run build

# Etapa 2: Backend
FROM python:3.11-slim AS backend
WORKDIR /app

RUN apt-get update && apt-get install -y build-essential

COPY backend/ /app/backend/
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Copiar build do frontend para o backend
COPY --from=frontend-build /app/frontend/dist /app/backend/static

ENV PORT=8000
ENV HOST=0.0.0.0

CMD ["gunicorn", "-k", "uvicorn.workers.UvicornWorker", "backend.main:app", "-b", "0.0.0.0:8000", "--workers=2"]
