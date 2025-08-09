from typing import Dict, List, Optional, Any
from pydantic import BaseModel
from enum import Enum
import re
import random


class Gender(str, Enum):
    MALE = "male"
    FEMALE = "female"


class Goal(str, Enum):
    WEIGHT_LOSS = "weight_loss"
    MUSCLE_GAIN = "muscle_gain"
    TONING = "toning"
    MAINTENANCE = "maintenance"


class TrainingLevel(str, Enum):
    BEGINNER = "beginner"
    INTERMEDIATE = "intermediate"
    ADVANCED = "advanced"


class UserProfile(BaseModel):
    age: Optional[int] = None
    gender: Optional[Gender] = None
    height: Optional[float] = None  # in meters
    weight: Optional[float] = None  # in kg
    goal: Optional[Goal] = None
    training_level: Optional[TrainingLevel] = None
    training_days_per_week: Optional[int] = None


class IMCResult(BaseModel):
    value: float
    classification: str
    recommendations: List[str]


class TrainingPlan(BaseModel):
    goal: Goal
    level: TrainingLevel
    days_per_week: int
    exercises: List[Dict[str, Any]]
    nutrition_tips: List[str]
    supplements: List[str]


class HipertrofiaAI:
    """
    Hipertrofia.IA - Sistema inteligente para coaching fitness
    """

    def __init__(self):
        self.greetings = [
            "oi",
            "olá",
            "ola",
            "hey",
            "hello",
            "hi",
            "opa",
            "eai",
            "e ai",
            "bom dia",
            "boa tarde",
            "boa noite",
            "salve",
            "fala",
            "coé",
            "beleza",
        ]

        self.farewell_responses = [
            "Tchau, guerreiro(a)! 💪\n\nFoi um prazer te ajudar! Lembra: **CONSISTÊNCIA É TUDO!** 🔥\n\nVolta sempre que precisar! Sua transformação não para! 🚀✨",
            "Até mais, campeão(ã)! 💪\n\nContinue firme no treino! **FOCO, FORÇA E FÉ!** 🔥\n\nEstou sempre aqui quando precisar! 🚀",
        ]

        self.knowledge_base = self._build_knowledge_base()

    def extract_personal_data(self, text: str) -> UserProfile:
        """
        Extrai dados pessoais do texto do usuário
        """
        profile = UserProfile()
        text_lower = text.lower()

        # Extração de idade
        age_match = re.search(r"(\d{1,2})\s*anos?", text)
        if age_match:
            profile.age = int(age_match.group(1))

        # Extração de gênero
        if re.search(r"\b(homem|masculino|h|man|male)\b", text_lower):
            profile.gender = Gender.MALE
        elif re.search(r"\b(mulher|feminino|f|woman|female)\b", text_lower):
            profile.gender = Gender.FEMALE

        # Extração de altura (metros)
        height_match = re.search(r"(\d{1})[,.]?(\d{2})\s*m", text)
        if height_match:
            profile.height = float(f"{height_match.group(1)}.{height_match.group(2)}")

        # Extração de peso
        weight_match = re.search(r"(\d{2,3})\s*kg", text)
        if weight_match:
            profile.weight = float(weight_match.group(1))

        # Extração de objetivo
        if re.search(
            r"(perder peso|emagrecer|queimar gordura|cutting|definir)", text_lower
        ):
            profile.goal = Goal.WEIGHT_LOSS
        elif re.search(
            r"(ganhar massa|ganhar peso|hipertrofia|bulking|crescer)", text_lower
        ):
            profile.goal = Goal.MUSCLE_GAIN
        elif re.search(r"(tonificar|definir|manter|manutenção)", text_lower):
            profile.goal = Goal.TONING

        # Extração de nível
        if re.search(r"(iniciante|começando|primeira vez|nunca)", text_lower):
            profile.training_level = TrainingLevel.BEGINNER
        elif re.search(r"(intermediário|algum tempo|alguns meses)", text_lower):
            profile.training_level = TrainingLevel.INTERMEDIATE
        elif re.search(r"(avançado|experiente|anos)", text_lower):
            profile.training_level = TrainingLevel.ADVANCED

        return profile

    def calculate_imc(self, weight: float, height: float) -> IMCResult:
        """
        Calcula o IMC e retorna classificação com recomendações
        """
        imc_value = weight / (height**2)

        if imc_value < 18.5:
            classification = "Abaixo do peso"
            recommendations = [
                "🚀 Foco em ganhar peso saudável",
                "🏋️‍♂️ Treino de força 4x/semana",
                "🍽️ Superávit calórico controlado",
                "💊 Suplementos: Whey + Creatina + Hipercalórico",
            ]
        elif 18.5 <= imc_value < 25:
            classification = "Peso ideal"
            recommendations = [
                "✨ Foco em recomposição corporal",
                "💪 Treino de hipertrofia + cardio moderado",
                "🍽️ Alimentação equilibrada",
                "🎯 Meta: Ganhar músculo + definir",
            ]
        elif 25 <= imc_value < 30:
            classification = "Sobrepeso"
            recommendations = [
                "🔥 Foco em queimar gordura",
                "🏃‍♂️ HIIT 20min + LISS 30min",
                "🥗 Déficit calórico controlado",
                "💊 Suplementos: L-carnitina + Cafeína + Whey",
            ]
        else:
            classification = "Obesidade"
            recommendations = [
                "⚠️ Prioridade: Perda de peso gradual",
                "🚶‍♂️ Caminhada diária + treino leve",
                "🥗 Déficit calórico supervisionado",
                "👨‍⚕️ Acompanhamento médico recomendado",
            ]

        return IMCResult(
            value=round(imc_value, 1),
            classification=classification,
            recommendations=recommendations,
        )

    def generate_training_plan(self, profile: UserProfile) -> TrainingPlan:
        """
        Gera plano de treino personalizado baseado no perfil
        """
        if not profile.goal:
            profile.goal = Goal.MUSCLE_GAIN

        if not profile.training_level:
            profile.training_level = TrainingLevel.BEGINNER

        exercises = self._get_exercises_by_goal_and_level(
            profile.goal, profile.training_level
        )
        nutrition_tips = self._get_nutrition_tips(profile.goal)
        supplements = self._get_supplements(profile.goal)

        return TrainingPlan(
            goal=profile.goal,
            level=profile.training_level,
            days_per_week=profile.training_days_per_week or 3,
            exercises=exercises,
            nutrition_tips=nutrition_tips,
            supplements=supplements,
        )

    def _get_exercises_by_goal_and_level(
        self, goal: Goal, level: TrainingLevel
    ) -> List[Dict[str, Any]]:
        """
        Retorna exercícios baseados no objetivo e nível
        """
        base_exercises = {
            TrainingLevel.BEGINNER: [
                {
                    "name": "Agachamento livre",
                    "sets": 3,
                    "reps": "15",
                    "muscle": "Pernas",
                },
                {"name": "Flexão de braço", "sets": 3, "reps": "10", "muscle": "Peito"},
                {"name": "Prancha", "sets": 3, "reps": "30seg", "muscle": "Core"},
                {"name": "Remada curvada", "sets": 3, "reps": "12", "muscle": "Costas"},
            ],
            TrainingLevel.INTERMEDIATE: [
                {
                    "name": "Agachamento com barra",
                    "sets": 4,
                    "reps": "12",
                    "muscle": "Pernas",
                },
                {"name": "Supino reto", "sets": 4, "reps": "10", "muscle": "Peito"},
                {"name": "Leg press", "sets": 3, "reps": "15", "muscle": "Pernas"},
                {"name": "Puxada frontal", "sets": 4, "reps": "12", "muscle": "Costas"},
                {
                    "name": "Desenvolvimento",
                    "sets": 3,
                    "reps": "12",
                    "muscle": "Ombros",
                },
            ],
            TrainingLevel.ADVANCED: [
                {
                    "name": "Agachamento búlgaro",
                    "sets": 4,
                    "reps": "10",
                    "muscle": "Pernas",
                },
                {"name": "Supino inclinado", "sets": 4, "reps": "8", "muscle": "Peito"},
                {"name": "Stiff", "sets": 4, "reps": "12", "muscle": "Posteriores"},
                {"name": "Barra fixa", "sets": 4, "reps": "8", "muscle": "Costas"},
                {
                    "name": "Desenvolvimento Arnold",
                    "sets": 3,
                    "reps": "10",
                    "muscle": "Ombros",
                },
            ],
        }

        exercises = base_exercises.get(level, base_exercises[TrainingLevel.BEGINNER])

        # Ajustar exercícios baseado no objetivo
        if goal == Goal.WEIGHT_LOSS:
            # Adicionar mais cardio
            exercises.extend(
                [
                    {
                        "name": "HIIT na esteira",
                        "sets": 1,
                        "reps": "20min",
                        "muscle": "Cardio",
                    },
                    {"name": "Burpees", "sets": 3, "reps": "10", "muscle": "Full body"},
                ]
            )

        return exercises

    def _get_nutrition_tips(self, goal: Goal) -> List[str]:
        """
        Retorna dicas de nutrição baseadas no objetivo
        """
        tips = {
            Goal.WEIGHT_LOSS: [
                "🥗 Déficit calórico de 300-500 kcal",
                "🍗 Proteína: 2g por kg de peso corporal",
                "🥑 Gorduras boas: 25-30% das calorias",
                "🍎 Carboidratos: Preferencialmente antes/depois treino",
                "💧 3-4L de água por dia",
            ],
            Goal.MUSCLE_GAIN: [
                "🍽️ Superávit calórico de 300-500 kcal",
                "🥩 Proteína: 2.2g por kg de peso corporal",
                "🍠 Carboidratos: 4-6g por kg de peso",
                "🥜 Gorduras: 1g por kg de peso",
                "⏰ 6 refeições por dia",
            ],
            Goal.TONING: [
                "⚖️ Calorias de manutenção",
                "🍗 Proteína alta: 2g por kg",
                "🥦 Muitos vegetais e fibras",
                "🏃‍♂️ Cardio moderado 3x/semana",
                "💤 8h de sono por noite",
            ],
        }

        return tips.get(goal, tips[Goal.MUSCLE_GAIN])

    def _get_supplements(self, goal: Goal) -> List[str]:
        """
        Retorna suplementos recomendados por objetivo
        """
        supplements = {
            Goal.WEIGHT_LOSS: [
                "☕ Cafeína (200mg pré-treino)",
                "🔥 L-Carnitina (2g pós-treino)",
                "🥛 Whey Protein (25g pós-treino)",
                "🐟 Ômega 3 (1g por dia)",
            ],
            Goal.MUSCLE_GAIN: [
                "🥛 Whey Protein (25-30g pós-treino)",
                "💪 Creatina (5g por dia)",
                "🍌 Hipercalórico (se necessário)",
                "💊 Multivitamínico",
                "🐟 Ômega 3 (1g por dia)",
            ],
            Goal.TONING: [
                "🥛 Whey Protein (20g pós-treino)",
                "💪 Creatina (3g por dia)",
                "☕ Cafeína pré-treino (opcional)",
                "💊 Multivitamínico",
            ],
        }

        return supplements.get(goal, supplements[Goal.MUSCLE_GAIN])

    def is_greeting(self, text: str) -> bool:
        """
        Verifica se o texto é uma saudação
        """
        text_lower = text.lower().strip()
        return any(greeting in text_lower for greeting in self.greetings)

    def is_farewell(self, text: str) -> bool:
        """
        Verifica se o texto é uma despedida
        """
        farewell_words = [
            "tchau",
            "bye",
            "até",
            "obrigado",
            "obrigada",
            "valeu",
            "flw",
            "falou",
            "xau",
        ]
        text_lower = text.lower()
        return any(word in text_lower for word in farewell_words)

    def is_gratitude(self, text: str) -> bool:
        """
        Verifica se o texto expressa gratidão
        """
        gratitude_words = [
            "obrigad",
            "valeu",
            "thanks",
            "muito bom",
            "excelente",
            "perfeito",
            "ótim",
            "top",
            "massa",
            "show",
        ]
        text_lower = text.lower()
        return any(word in text_lower for word in gratitude_words)

    def _build_knowledge_base(self) -> Dict[str, Any]:
        """
        Constrói a base de conhecimento especializada
        """
        return {
            "arm_workout": {
                "patterns": [
                    r"treino.*bra[çc]o",
                    r"exerc[íi]cio.*bra[çc]o",
                    r"b[íi]ceps.*tr[íi]ceps",
                ],
                "response": """🔥 **TREINO DE BRAÇO HIPERTROFIA** 💪

**BÍCEPS:**
• Rosca direta: 4x8-10 (foco na contração)
• Rosca martelo: 3x10-12 
• Rosca concentrada: 3x12-15

**TRÍCEPS:**
• Supino fechado: 4x8-10
• Mergulho: 3x10-12
• Tríceps testa: 3x12-15

**DICAS TÉCNICAS:**
✅ Controle a fase excêntrica (descida lenta)
✅ Aperte bem no pico da contração
✅ Use drop-sets na última série

**Lembra:** O braço cresce no descanso! 48-72h entre treinos. Bora crescer, guerreiro(a)! 🚀""",
            },
            "chest_workout": {
                "patterns": [
                    r"treino.*peito",
                    r"exerc[íi]cio.*peito",
                    r"supino",
                    r"peitoral",
                ],
                "response": """🔥 **TREINO DE PEITO HIPERTROFIA** 💪

**EXERCÍCIOS BASE:**
• Supino reto: 4x6-8 (força + massa)
• Supino inclinado: 4x8-10
• Crucifixo: 3x12-15
• Paralelas: 3x10-12

**TÉCNICA PERFEITA:**
✅ Desça a barra até o peito
✅ Mantenha escápulas retraídas
✅ Explosão na subida, controle na descida

**PRO TIP:** Varie os ângulos! Inclinado trabalha porção superior, declinado a inferior. Foco na conexão mente-músculo! 🎯

Vai com tudo, atleta! O peito vai explodir! 🚀""",
            },
            "leg_workout": {
                "patterns": [
                    r"treino.*perna",
                    r"treino.*coxa",
                    r"agachamento",
                    r"gl[úu]teo",
                    r"leg day",
                ],
                "response": """🔥 **LEG DAY - TREINO DE PERNAS** 🦵

**QUADRÍCEPS:**
• Agachamento livre: 4x8-10
• Leg press: 4x12-15
• Cadeira extensora: 3x15-20

**POSTERIORES:**
• Stiff: 4x10-12
• Mesa flexora: 3x12-15
• Agachamento sumo: 3x12-15

**PANTURRILHAS:**
• Panturrilha em pé: 4x15-20
• Panturrilha sentado: 3x20-25

**DICA DE OURO:** Agachamento é o REI! Desce até quebrar o paralelo, sobe explosivo. Perna que não dói, não cresce! 💀

Prepara o Rivotril porque vai doer! 😂🔥""",
            },
            "home_workout": {
                "patterns": [r"treino.*casa", r"casa.*treino", r"sem.*equipamento"],
                "response": """🏠 **TREINO EM CASA - RESULTADO GARANTIDO!** 💪

**TREINO COMPLETO (30min):**
• **Agachamento:** 4x20 
• **Flexão:** 4x15 (joelhos se necessário)
• **Prancha:** 4x45seg
• **Burpee:** 3x10
• **Afundo:** 3x15 cada perna
• **Mountain climber:** 3x30seg

**EQUIPAMENTOS CASEIROS:**
🏠 Garrafas d'água = Halteres
🏠 Mochila + livros = Peso extra  
🏠 Escada = Step up
🏠 Cadeira = Tríceps

**CRONOGRAMA:**
📅 Segunda/Quarta/Sexta: Treino completo
📅 Terça/Quinta: Caminhada 30min
📅 Fim de semana: Descanso ativo

Disciplina é tudo! Treino em casa funciona SIM! 🚀💪""",
            },
        }

    def find_specialized_response(self, text: str) -> Optional[str]:
        """
        Busca resposta especializada na base de conhecimento
        """
        text_lower = text.lower()

        for topic, data in self.knowledge_base.items():
            for pattern in data["patterns"]:
                if re.search(pattern, text_lower):
                    return data["response"]

        return None

    def generate_response(
        self, user_input: str, conversation_history: List[str] = None
    ) -> str:
        """
        Gera resposta inteligente baseada na entrada do usuário
        """
        if conversation_history is None:
            conversation_history = []

        # Verificar saudações
        if self.is_greeting(user_input):
            return self._get_greeting_response()

        # Verificar despedidas
        if self.is_farewell(user_input):
            return random.choice(self.farewell_responses)

        # Verificar gratidão
        if self.is_gratitude(user_input):
            return """Fico feliz em ajudar! 😊💪 

É isso aí! Essa energia que eu quero ver! 🔥
Estou sempre aqui quando precisar! 

**VOCÊ TEM POTENCIAL INFINITO!** 
Bora ARRASAR! 🚀✨"""

        # Extrair dados pessoais e gerar plano se disponível
        profile = self.extract_personal_data(user_input)

        if profile.weight and profile.height:
            return self._generate_personalized_plan(profile)

        # Buscar resposta especializada
        specialized_response = self.find_specialized_response(user_input)
        if specialized_response:
            return specialized_response

        # Verificar se é iniciante
        if re.search(
            r"iniciante|começando|nunca.*trein|primeira.*vez", user_input.lower()
        ):
            return self._get_beginner_response()

        # Verificar se quer perder peso
        if re.search(
            r"perder.*peso|emagrecer|queima.*gordura|cutting|definir",
            user_input.lower(),
        ):
            return self._get_weight_loss_response()

        # Resposta padrão motivacional
        return self._get_default_response()

    def _get_greeting_response(self) -> str:
        """
        Retorna resposta de saudação personalizada
        """
        responses = [
            """Oi! 👋 Que bom te ver aqui! Sou a Hipertrofia.IA, sua personal trainer virtual! 💪

🎯 **ME CONTE RAPIDINHO:**
• Qual seu objetivo? (ganhar massa, perder peso, definir)
• Quantos dias pode treinar?
• Tem alguma dúvida específica?

**POSSO TE AJUDAR COM:**
🏋️‍♂️ Treinos personalizados
🥗 Nutrição estratégica  
📊 Cálculo de IMC
💊 Suplementação
🔥 Motivação diária

Bora começar! Me fala o que tá precisando! 🚀💪""",
            """Eaí! 🔥 Pronto(a) para ARRASAR no treino hoje? Bora conversar sobre fitness! 💪

🎯 **PARA COMEÇAR:**
Me conte sua idade, altura, peso e objetivo!

**Exemplo:** "Tenho 25 anos, 1,75m, 70kg, sou homem e quero ganhar massa"

Vou calcular seu IMC e criar um plano personalizado! 🚀""",
        ]

        return random.choice(responses)

    def _generate_personalized_plan(self, profile: UserProfile) -> str:
        """
        Gera plano personalizado com base no perfil
        """
        imc_result = self.calculate_imc(profile.weight, profile.height)
        training_plan = self.generate_training_plan(profile)

        response = f"""🎯 **SEUS DADOS ANALISADOS:**
📊 **IMC:** {imc_result.value}
⚖️ **Status:** {imc_result.classification}

💪 **PLANO PERSONALIZADO CRIADO!**

"""

        # Adicionar recomendações do IMC
        for rec in imc_result.recommendations:
            response += f"{rec}\n"

        response += f"""

🏋️‍♂️ **SEU TREINO ({training_plan.days_per_week}x/semana):**
"""

        # Adicionar exercícios
        for exercise in training_plan.exercises[:5]:  # Primeiros 5 exercícios
            response += f"• {exercise['name']}: {exercise['sets']}x{exercise['reps']}\n"

        response += """
🥗 **ALIMENTAÇÃO:**
"""

        # Adicionar dicas nutricionais
        for tip in training_plan.nutrition_tips[:3]:  # Primeiras 3 dicas
            response += f"{tip}\n"

        response += """
💊 **SUPLEMENTOS:**
"""

        # Adicionar suplementos
        for supplement in training_plan.supplements:
            response += f"{supplement}\n"

        response += """
Quer que eu detalhe seu plano? Me fala! 🚀💪"""

        return response

    def _get_beginner_response(self) -> str:
        """
        Resposta para iniciantes
        """
        return """👶 **GUIA INICIANTE - PASSO A PASSO!** 💪

**PRIMEIRAS 2 SEMANAS:**
🎯 Aprenda os movimentos básicos
• **Agachamento livre:** 3x15
• **Flexão (joelhos):** 3x10  
• **Prancha:** 3x30seg
• **Caminhada:** 20min após treino

**SEMANAS 3-4:**
🎯 Adicione resistência gradual
• Halteres 2kg nos agachamentos
• Flexão inclinada no banco
• Prancha 45-60seg

**ALIMENTAÇÃO SIMPLES:**
🍽️ Proteína em cada refeição
🍽️ Carboidrato antes/depois do treino
🍽️ 8-10 copos de água por dia

**ERROS A EVITAR:**
❌ Começar muito pesado
❌ Treinar todos os dias
❌ Comparar-se com outros
❌ Esperar resultados em 1 semana

**EM 30 DIAS** você já vai sentir a diferença! 
**EM 90 DIAS** todo mundo vai notar! 🚀

Me conta: quantos dias por semana consegue treinar? 💪"""

    def _get_weight_loss_response(self) -> str:
        """
        Resposta para perda de peso
        """
        return """🔥 **PROTOCOLO QUEIMA GORDURA** 💪

**TREINO (5x/semana):**
• **HIIT:** 20min (30seg alta + 90seg baixa)
• **Musculação:** 4x10-12 reps
• **Cardio LISS:** 30-45min (3x/semana)

**ALIMENTAÇÃO:**
🥗 **Déficit:** 300-500 kcal por dia
🍗 **Proteína:** 2g por kg de peso
🥑 **Gordura:** 25% das calorias
⏰ **Horários:** 6 refeições pequenas

**SUPLEMENTOS:**
☕ Cafeína pré-treino (200mg)
🔥 L-Carnitina pós-treino (2g)
🥛 Whey isolado (25g)

**CRONOGRAMA:**
📅 2ª/4ª/6ª: HIIT + Musculação
📅 3ª/5ª: LISS (caminhada/bike)
📅 Sáb: Treino leve/yoga
📅 Dom: Descanso total

**META:** 0,5-1kg por semana
**EM 12 SEMANAS:** Nova pessoa! 🚀

Qual sua maior dificuldade? Dieta ou treino? 💪"""

    def _get_default_response(self) -> str:
        """
        Resposta padrão motivacional
        """
        responses = [
            """💪 **HIPERTROFIA.IA SEMPRE AQUI!** 🔥

Não entendi exatamente sua dúvida, mas posso te ajudar com:

🏋️‍♂️ **Treinos específicos:** braço, peito, pernas, costas
🥗 **Nutrição:** ganho de massa, perda de peso, definição
📊 **Cálculos:** IMC, necessidades calóricas
💊 **Suplementação:** whey, creatina, multivitamínicos
🎯 **Objetivos:** iniciante, intermediário, avançado

Me conta melhor o que você quer? Sou especialista em transformação! 🚀""",
            """🤖 **HIPERTROFIA.IA À DISPOSIÇÃO!** 💪

Posso não ter entendido perfeitamente, mas estou aqui para:

🔥 **Motivar** sua jornada fitness
📈 **Planejar** seus treinos
🍽️ **Orientar** sua alimentação
💪 **Acelerar** seus resultados

**DICA DO DIA:** Constância vence talento! 
Todo dia é uma nova oportunidade de evoluir! 🚀

Reformule sua pergunta que te ajudo melhor! ✨""",
        ]

        return random.choice(responses)
