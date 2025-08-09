from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import uvicorn
from hipertrofia_ai import HipertrofiaAI

app = FastAPI(
    title="Hipertrofia.IA API",
    description="API para o sistema inteligente de coaching fitness",
    version="1.0.0",
)

# Configurar CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://*.netlify.app",
        "https://*.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Instância da IA
ai = HipertrofiaAI()


class ChatMessage(BaseModel):
    role: str
    content: str


class ChatRequest(BaseModel):
    messages: List[ChatMessage]


class ChatResponse(BaseModel):
    message: str
    role: str = "assistant"


@app.post("/api/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    """
    Endpoint principal para chat com a Hipertrofia.IA
    """
    try:
        if not request.messages:
            raise HTTPException(status_code=400, detail="Nenhuma mensagem fornecida")

        # Pegar a última mensagem do usuário
        user_message = request.messages[-1].content

        # Extrair histórico de conversação
        conversation_history = [msg.content for msg in request.messages[:-1]]

        # Gerar resposta
        response = ai.generate_response(user_message, conversation_history)

        return ChatResponse(message=response)

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erro interno: {str(e)}")


@app.get("/api/health")
async def health_check():
    """
    Endpoint para verificar saúde da API
    """
    return {"status": "ok", "message": "Hipertrofia.IA API funcionando! 💪"}


@app.get("/")
async def root():
    """
    Endpoint raiz com informações da API
    """
    return {
        "message": "Bem-vindo à Hipertrofia.IA API! 💪",
        "version": "1.0.0",
        "docs": "/docs",
        "health": "/api/health",
        "chat": "/api/chat",
    }


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True, log_level="info")
