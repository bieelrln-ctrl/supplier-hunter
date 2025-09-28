from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

app = FastAPI()

@app.get("/api/hello")
def hello():
    return {"msg": "API funcionando no Railway!"}

app.mount("/static", StaticFiles(directory="backend/static"), name="static")

@app.get("/")
def serve_react():
    return FileResponse("backend/static/index.html")
