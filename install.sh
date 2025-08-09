#!/bin/bash

echo "🚀 Instalação Automática - Hipertrofia.IA"
echo "========================================="

# Verificar se Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não encontrado. Instale Node.js 18+ primeiro."
    echo "🔗 https://nodejs.org/"
    exit 1
fi

# Verificar se Python está instalado
if ! command -v python &> /dev/null && ! command -v python3 &> /dev/null; then
    echo "❌ Python não encontrado. Instale Python 3.8+ primeiro."
    echo "🔗 https://python.org/"
    exit 1
fi

# Instalar dependências do frontend
echo "📦 Instalando dependências do frontend..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Frontend configurado com sucesso!"
else
    echo "❌ Erro ao instalar dependências do frontend"
    exit 1
fi

# Configurar backend Python
echo "🐍 Configurando backend Python..."
cd backend

# Criar ambiente virtual
if [ ! -d "venv" ]; then
    python -m venv venv || python3 -m venv venv
fi

# Ativar ambiente virtual
source venv/bin/activate

# Instalar dependências Python
pip install -r requirements.txt

if [ $? -eq 0 ]; then
    echo "✅ Backend Python configurado com sucesso!"
else
    echo "❌ Erro ao instalar dependências do Python"
    exit 1
fi

cd ..

# Criar arquivo .env se não existir
if [ ! -f ".env.local" ]; then
    cp .env.example .env.local
    echo "📝 Arquivo .env.local criado"
fi

echo ""
echo "🎉 INSTALAÇÃO CONCLUÍDA COM SUCESSO!"
echo "===================================="
echo ""
echo "🚀 Para iniciar o projeto:"
echo ""
echo "1️⃣  Frontend (Terminal 1):"
echo "   npm run dev"
echo ""
echo "2️⃣  Backend (Terminal 2):"
echo "   cd backend && ./start.sh"
echo ""
echo "🌐 Acesse: http://localhost:3000"
echo "📖 API Docs: http://localhost:8000/docs"
echo ""
echo "💪 Bom treino com a Hipertrofia.IA!"
