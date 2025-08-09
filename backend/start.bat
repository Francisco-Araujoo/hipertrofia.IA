@echo off
REM Script para iniciar o backend Python da Hipertrofia.IA no Windows

echo 🚀 Iniciando Hipertrofia.IA Backend...

REM Verificar se Python está instalado
python --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Python não encontrado. Por favor, instale Python 3.8+ primeiro.
    pause
    exit /b 1
)

REM Criar ambiente virtual se não existir
if not exist "venv" (
    echo 📦 Criando ambiente virtual...
    python -m venv venv
)

REM Ativar ambiente virtual
echo 🔧 Ativando ambiente virtual...
call venv\Scripts\activate.bat

REM Instalar dependências
echo 📥 Instalando dependências...
pip install -r requirements.txt

REM Iniciar servidor
echo 🚀 Iniciando servidor FastAPI...
echo 📍 API estará disponível em: http://localhost:8000
echo 📖 Documentação: http://localhost:8000/docs
echo.
echo 💪 Hipertrofia.IA Backend rodando!
echo 🛑 Para parar: Ctrl+C
echo.

uvicorn main:app --host 0.0.0.0 --port 8000 --reload

pause
