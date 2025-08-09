#!/bin/bash

# Script para iniciar o backend Python da Hipertrofia.IA

echo "🚀 Iniciando Hipertrofia.IA Backend..."

# Verificar se Python está instalado
if ! command -v python &> /dev/null; then
    echo "❌ Python não encontrado. Por favor, instale Python 3.8+ primeiro."
    exit 1
fi

# Criar ambiente virtual se não existir
if [ ! -d "venv" ]; then
    echo "📦 Criando ambiente virtual..."
    python -m venv venv
fi

# Ativar ambiente virtual
echo "🔧 Ativando ambiente virtual..."
source venv/bin/activate

# Instalar dependências
echo "📥 Instalando dependências..."
pip install -r requirements.txt

# Iniciar servidor
echo "🚀 Iniciando servidor FastAPI..."
echo "📍 API estará disponível em: http://localhost:8000"
echo "📖 Documentação: http://localhost:8000/docs"
echo ""
echo "💪 Hipertrofia.IA Backend rodando!"
echo "🛑 Para parar: Ctrl+C"
echo ""

uvicorn main:app --host 0.0.0.0 --port 8000 --reload
