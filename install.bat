@echo off
echo 🚀 Instalação Automática - Hipertrofia.IA
echo =========================================

REM Verificar se Node.js está instalado
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js não encontrado. Instale Node.js 18+ primeiro.
    echo 🔗 https://nodejs.org/
    pause
    exit /b 1
)

REM Verificar se Python está instalado
python --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Python não encontrado. Instale Python 3.8+ primeiro.
    echo 🔗 https://python.org/
    pause
    exit /b 1
)

REM Instalar dependências do frontend
echo 📦 Instalando dependências do frontend...
npm install

if errorlevel 1 (
    echo ❌ Erro ao instalar dependências do frontend
    pause
    exit /b 1
)

echo ✅ Frontend configurado com sucesso!

REM Configurar backend Python
echo 🐍 Configurando backend Python...
cd backend

REM Criar ambiente virtual
if not exist "venv" (
    python -m venv venv
)

REM Ativar ambiente virtual
call venv\Scripts\activate.bat

REM Instalar dependências Python
pip install -r requirements.txt

if errorlevel 1 (
    echo ❌ Erro ao instalar dependências do Python
    pause
    exit /b 1
)

echo ✅ Backend Python configurado com sucesso!

cd ..

REM Criar arquivo .env se não existir
if not exist ".env.local" (
    copy .env.example .env.local
    echo 📝 Arquivo .env.local criado
)

echo.
echo 🎉 INSTALAÇÃO CONCLUÍDA COM SUCESSO!
echo ====================================
echo.
echo 🚀 Para iniciar o projeto:
echo.
echo 1️⃣  Frontend (Terminal 1):
echo    npm run dev
echo.
echo 2️⃣  Backend (Terminal 2):
echo    cd backend ^&^& start.bat
echo.
echo 🌐 Acesse: http://localhost:3000
echo 📖 API Docs: http://localhost:8000/docs
echo.
echo 💪 Bom treino com a Hipertrofia.IA!

pause
