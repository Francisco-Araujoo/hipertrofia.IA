// Base de conhecimento da Hipertrofia.IA
export const hipertrofiaKnowledgeBase = {
  // Saudações
  greetings: {
    patterns: [
      /^(oi|olá|ola|hey|e ai|eai|salve)/i,
      /^(bom dia|boa tarde|boa noite)/i,
      /^(como vai|tudo bem|beleza)/i,
      /^(quero começar|preciso de ajuda|me ajuda)/i
    ],
    responses: [
      "Olá, guerreiro(a)! 💪 Sou a Hipertrofia.IA, sua personal trainer virtual! Para criar o plano perfeito para você, preciso saber:\n\n🎯 Qual sua idade?\n⚡ Você é homem ou mulher?\n📏 Qual sua altura?\n⚖️ Qual seu peso atual?\n🔥 Qual seu objetivo principal? (perder peso, ganhar massa, definir, etc.)\n\nCom essas informações, vou calcular seu IMC e montar um treino personalizado! Bora começar essa transformação? �",
      "E aí, atleta! 🔥 Hipertrofia.IA aqui! Pronto(a) para transformar seu corpo? Primeiro, me conta:\n\n📊 Idade:\n👤 Sexo:\n📏 Altura:\n⚖️ Peso:\n🎯 Objetivo:\n\nVou calcular seu IMC e criar um plano sob medida para você arrasar! Vamos nessa? 💪",
      "Salve, campeão(ã)! ⚡ Sou sua personal trainer IA! Para montar o treino dos sonhos, preciso conhecer você melhor:\n\n🔢 Quantos anos você tem?\n🚻 Homem ou mulher?\n📐 Qual sua altura?\n🏋️‍♂️ Peso atual?\n🎯 Quer perder peso, ganhar massa ou definir?\n\nCom esses dados, calculo seu IMC e monto um plano que vai te deixar em forma! Bora? �",
    ],
  },

  // Treinos específicos
  workouts: {
    // Treino de Braço
    arm: {
      patterns: [
        /treino.*bra[çc]o/i,
        /exerc[íi]cio.*bra[çc]o/i,
        /como.*crescer.*bra[çc]o/i,
        /b[íi]ceps.*tr[íi]ceps/i,
        /treino.*arm/i,
      ],
      response: `🔥 **TREINO DE BRAÇO HIPERTROFIA** 💪

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

![Rosca Direta](/placeholder.svg?height=200&width=300&query=homem fazendo rosca direta com barra)

**Lembra:** O braço cresce no descanso! 48-72h entre treinos. Bora crescer, guerreiro(a)! 🚀`,
    },

    // Treino de Peito
    chest: {
      patterns: [/treino.*peito/i, /exerc[íi]cio.*peito/i, /como.*crescer.*peito/i, /supino/i, /peitoral/i],
      response: `🔥 **TREINO DE PEITO HIPERTROFIA** 💪

**EXERCÍCIOS BASE:**
• Supino reto: 4x6-8 (força + massa)
• Supino inclinado: 4x8-10
• Crucifixo: 3x12-15
• Paralelas: 3x10-12

**TÉCNICA PERFEITA:**
✅ Desça a barra até o peito
✅ Mantenha escápulas retraídas
✅ Explosão na subida, controle na descida

![Supino Reto](/placeholder.svg?height=200&width=300&query=homem fazendo supino reto na academia)

**PRO TIP:** Varie os ângulos! Inclinado trabalha porção superior, declinado a inferior. Foco na conexão mente-músculo! 🎯

Vai com tudo, atleta! O peito vai explodir! 🚀`,
    },

    // Treino de Pernas
    legs: {
      patterns: [/treino.*perna/i, /treino.*coxa/i, /agachamento/i, /quadr[íi]ceps/i, /gl[úu]teo/i, /leg day/i],
      response: `🔥 **LEG DAY - TREINO DE PERNAS** 🦵

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

![Agachamento](/placeholder.svg?height=200&width=300&query=homem fazendo agachamento livre com barra)

**DICA DE OURO:** Agachamento é o REI! Desce até quebrar o paralelo, sobe explosivo. Perna que não dói, não cresce! 💀

Prepara o Rivotril porque vai doer! 😂🔥`,
    },

    // Treino de Costas
    back: {
      patterns: [/treino.*costa/i, /exerc[íi]cio.*costa/i, /barra fixa/i, /remada/i, /lat[íi]ssimo/i, /dorsal/i],
      response: `🔥 **TREINO DE COSTAS HIPERTROFIA** 💪

**LARGURA:**
• Barra fixa: 4x8-12
• Puxada frente: 4x10-12
• Puxada triângulo: 3x12-15

**ESPESSURA:**
• Remada curvada: 4x8-10
• Remada cavalinho: 3x10-12
• Remada unilateral: 3x12-15

**TÉCNICA CRUCIAL:**
✅ Inicie o movimento puxando com os cotovelos
✅ Aperte as escápulas no final
✅ Sinta o latíssimo trabalhando

![Barra Fixa](/placeholder.svg?height=200&width=300&query=homem fazendo barra fixa na academia)

**LEMA:** "Costas largas, cintura fina!" Foco na conexão mente-músculo. Cada rep conta! 🎯

Vai construir um dorsal de tubarão! 🦈💪`,
    },

    // Treino de Ombros
    shoulders: {
      patterns: [/treino.*ombro/i, /exerc[íi]cio.*ombro/i, /desenvolvimento/i, /elevação lateral/i, /deltoide/i],
      response: `🔥 **TREINO DE OMBROS HIPERTROFIA** 💪

**ANTERIOR:**
• Desenvolvimento militar: 4x8-10
• Elevação frontal: 3x12-15

**MEDIAL:**
• Elevação lateral: 4x12-15
• Elevação lateral cabo: 3x15-20

**POSTERIOR:**
• Crucifixo inverso: 4x12-15
• Face pull: 3x15-20

**TÉCNICA PERFEITA:**
✅ Controle total do movimento
✅ Não use impulso
✅ Foque na contração do deltoide

![Desenvolvimento Militar](/placeholder.svg?height=200&width=300&query=homem fazendo desenvolvimento militar com barra)

**ATENÇÃO:** Ombro é articulação complexa! Aquecimento é OBRIGATÓRIO. Vai devagar para ir longe! ⚠️

Ombros 3D chegando! 🔥🎯`,
    },
  },

  // Dados pessoais e objetivos
  personalData: {
    patterns: [
      /tenho.*anos?/i,
      /idade.*(\d+)/i,
      /peso.*(\d+).*kg/i,
      /(\d+).*kg/i,
      /altura.*(\d+)/i,
      /sou.*homem|sou.*mulher/i,
      /masculino|feminino/i,
      /quero.*perder.*peso/i,
      /quero.*ganhar.*massa/i,
      /quero.*emagrecer/i,
      /quero.*definir/i,
      /objetivo.*perder/i,
      /objetivo.*ganhar/i,
      /gaha peso/i, // correção automática
      /pessa/i, // correção automática
    ],
    response: `Ótimo, guerreiro(a)! 📝 Estou anotando suas informações!

Para montar o plano perfeito, ainda preciso de alguns dados. Me confirma:

🔢 **IDADE:** __ anos
🚻 **SEXO:** Masculino/Feminino  
📏 **ALTURA:** __m (ex: 1,75m)
⚖️ **PESO:** __kg
🎯 **OBJETIVO:** 
   • Perder peso/emagrecer
   • Ganhar massa muscular
   • Definir/tonificar
   • Manter peso atual
   • Melhorar parte específica (glúteos, abdômen, braços, pernas)

📊 **FREQUÊNCIA DE TREINO:** Quantos dias por semana pode treinar?
⏰ **TEMPO DISPONÍVEL:** Quantos minutos por treino?
🍽️ **RESTRIÇÕES ALIMENTARES:** Alguma alergia ou restrição?

Com essas informações, vou calcular seu IMC e criar um plano personalizado que vai te levar ao seu objetivo! 💪🔥`,
  },

  // Nutrição
  nutrition: {
    patterns: [
      /nutri[çc][ãa]o/i,
      /dieta.*hipertrofia/i,
      /o que comer/i,
      /prote[íi]na/i,
      /carboidrato/i,
      /como ganhar peso/i,
    ],
    response: `🍖 **NUTRIÇÃO PARA HIPERTROFIA** 💪

**MACROS ESSENCIAIS:**
• Proteína: 2-2.5g/kg peso corporal
• Carboidrato: 4-6g/kg peso corporal  
• Gordura: 1-1.5g/kg peso corporal

**FONTES TOP:**
🥩 **Proteínas:** Frango, carne, peixe, ovos, whey
🍚 **Carbos:** Arroz, batata doce, aveia, macarrão
🥑 **Gorduras:** Azeite, castanhas, abacate

**TIMING:**
• Pré-treino: Carbo + cafeína (30-60min antes)
• Pós-treino: Whey + carbo simples (até 30min)
• Antes dormir: Caseína ou cottage

**REGRA DE OURO:** Superávit calórico de 300-500 kcal/dia. Sem comida, sem músculo! 🔥

Alimenta essa máquina, guerreiro(a)! 🚀`,
  },

  // Suplementação
  supplements: {
    patterns: [/suplemento/i, /whey/i, /creatina/i, /o que tomar/i, /suplementa[çc][ãa]o/i],
    response: `💊 **SUPLEMENTAÇÃO HIPERTROFIA** 💪

**BÁSICOS (ESSENCIAIS):**
🥤 **Whey Protein:** 25-30g pós-treino
⚡ **Creatina:** 3-5g/dia (qualquer horário)
🐟 **Ômega 3:** 1-2g/dia
☀️ **Vitamina D:** 2000-4000 UI/dia

**INTERMEDIÁRIOS:**
💊 **Multivitamínico:** 1x/dia manhã
🔋 **ZMA:** Antes de dormir
☕ **Cafeína:** 200-400mg pré-treino

**AVANÇADOS:**
🧬 **HMB:** 3g/dia dividido
🔥 **Beta-alanina:** 3-5g/dia
💤 **Melatonina:** 1-3mg antes dormir

**LEMBRA:** Suplemento é COMPLEMENTO! Base é dieta sólida. Não existe pó mágico! ⚠️

Suplementa inteligente, cresce gigante! 🚀`,
  },

  // Cálculos
  calculations: {
    patterns: [/calcul.*imc/i, /meu imc/i, /peso ideal/i, /imc/i, /\d+.*kg.*\d+.*m/i, /\d+.*\d+.*imc/i],
    response: `📊 **CALCULADORA IMC** ⚖️

Para calcular seu IMC, me informe:
• Seu peso (kg)
• Sua altura (m)

**Exemplo:** "Peso 80kg e tenho 1.75m"

**CLASSIFICAÇÃO IMC:**
• Abaixo 18.5: Abaixo do peso
• 18.5-24.9: Peso normal  
• 25-29.9: Sobrepeso
• 30+: Obesidade

**DICA PRO:** IMC não considera massa muscular! Um bodybuilder pode ter IMC alto mas ser saudável. Foque na composição corporal! 💪

Me manda seus dados que calculo na hora! 🔥`,
  },
}

// Função para encontrar a melhor resposta
export function findBestMatch(userInput: string): string | null {
  const input = userInput.toLowerCase().trim()

  // Verifica saudações
  for (const pattern of hipertrofiaKnowledgeBase.greetings.patterns) {
    if (pattern.test(input)) {
      const responses = hipertrofiaKnowledgeBase.greetings.responses
      return responses[Math.floor(Math.random() * responses.length)]
    }
  }

  // Verifica dados pessoais e objetivos
  for (const pattern of hipertrofiaKnowledgeBase.personalData.patterns) {
    if (pattern.test(input)) {
      return hipertrofiaKnowledgeBase.personalData.response
    }
  }

  // Verifica treinos
  const workouts = hipertrofiaKnowledgeBase.workouts
  for (const [key, workout] of Object.entries(workouts)) {
    if ("patterns" in workout) {
      for (const pattern of workout.patterns) {
        if (pattern.test(input)) {
          return workout.response
        }
      }
    }
  }

  // Verifica nutrição
  for (const pattern of hipertrofiaKnowledgeBase.nutrition.patterns) {
    if (pattern.test(input)) {
      return hipertrofiaKnowledgeBase.nutrition.response
    }
  }

  // Verifica suplementação
  for (const pattern of hipertrofiaKnowledgeBase.supplements.patterns) {
    if (pattern.test(input)) {
      return hipertrofiaKnowledgeBase.supplements.response
    }
  }

  // Verifica cálculos
  for (const pattern of hipertrofiaKnowledgeBase.calculations.patterns) {
    if (pattern.test(input)) {
      return hipertrofiaKnowledgeBase.calculations.response
    }
  }

  // Verifica se tem dados para calcular IMC
  const imcMatch = input.match(/(\d+(?:\.\d+)?)\s*kg.*?(\d+(?:\.\d+)?)\s*m/i)
  if (imcMatch) {
    const weight = Number.parseFloat(imcMatch[1])
    const height = Number.parseFloat(imcMatch[2])
    return calculateIMC(weight, height)
  }

  // Verifica se há dados pessoais mais complexos
  const personalData = extractPersonalData(input)
  if (personalData.weight && personalData.height) {
    let response = calculateIMC(personalData.weight, personalData.height)

    // Adiciona informações extras se disponível
    if (personalData.age || personalData.gender || personalData.objective) {
      response += `\n\n📝 **INFORMAÇÕES COLETADAS:**\n`
      if (personalData.age) response += `• Idade: ${personalData.age} anos\n`
      if (personalData.gender) response += `• Sexo: ${personalData.gender}\n`
      if (personalData.objective) response += `• Objetivo: ${personalData.objective}\n`

      response += `\nVou usar essas informações para personalizar ainda mais seu treino! Continue me contando mais detalhes! 🎯`
    }

    return response
  }

  return null
}

// Função para calcular IMC
export function calculateIMC(weight: number, height: number): string {
  const imc = weight / (height * height)
  let classification = ""
  let advice = ""
  let emoji = ""

  if (imc < 18.5) {
    classification = "Abaixo do peso"
    advice = "Foco em ganhar massa muscular! Precisamos de superávit calórico (mais calorias) + treino de força pesado. Vamos construir músculos! 🏗️"
    emoji = "�"
  } else if (imc < 25) {
    classification = "Peso normal"
    advice = "Perfeito! Você está na faixa ideal para hipertrofia. Agora é manter o foco nos treinos e alimentação balanceada. Hora de construir músculos de qualidade! 🏆"
    emoji = "✅"
  } else if (imc < 30) {
    classification = "Sobrepeso"
    advice = "Vamos fazer um cutting inteligente! Déficit calórico controlado + musculação + cardio. O foco é perder gordura mantendo massa muscular! 🔥"
    emoji = "⚖️"
  } else {
    classification = "Obesidade"
    advice = "Sua transformação começa AGORA! Déficit calórico + treino + cardio. Vai ser desafiador, mas você consegue! Cada dia é uma vitória! 🚀"
    emoji = "🎯"
  }

  return `${emoji} **ANÁLISE COMPLETA DO SEU IMC**

📊 **DADOS:**
• Peso: ${weight}kg
• Altura: ${height}m  
• IMC: ${imc.toFixed(1)}
• Classificação: ${classification}

💡 **SEU PLANO DE AÇÃO:**
${advice}

⚠️ **IMPORTANTE:** O IMC não considera massa muscular! Um atleta musculoso pode ter IMC alto e estar super saudável. O que importa é sua composição corporal e como você se sente! 

Agora me conta mais sobre você para eu montar seu treino personalizado:
🎯 Qual seu objetivo principal?
🏋️‍♂️ Quantos dias por semana pode treinar?
⏰ Quanto tempo tem por treino?

Bora construir o melhor de você, guerreiro(a)! 💪🔥`
}

// Função para extrair dados pessoais do texto
export function extractPersonalData(input: string): {
  age?: number
  weight?: number
  height?: number
  gender?: string
  objective?: string
} {
  const data: any = {}

  // Extrair idade
  const ageMatch = input.match(/(\d+)\s*anos?|idade.*?(\d+)|tenho\s*(\d+)/i)
  if (ageMatch) {
    data.age = parseInt(ageMatch[1] || ageMatch[2] || ageMatch[3])
  }

  // Extrair peso
  const weightMatch = input.match(/(\d+(?:\.\d+)?)\s*kg|peso.*?(\d+(?:\.\d+)?)/i)
  if (weightMatch) {
    data.weight = parseFloat(weightMatch[1] || weightMatch[2])
  }

  // Extrair altura
  const heightMatch = input.match(/(\d\.\d+)\s*m|(\d+)\s*cm|altura.*?(\d\.\d+)|(\d{3})\s*cm/i)
  if (heightMatch) {
    if (heightMatch[1]) {
      data.height = parseFloat(heightMatch[1])
    } else if (heightMatch[2]) {
      data.height = parseFloat(heightMatch[2]) / 100
    } else if (heightMatch[3]) {
      data.height = parseFloat(heightMatch[3])
    } else if (heightMatch[4]) {
      data.height = parseFloat(heightMatch[4]) / 100
    }
  }

  // Extrair sexo
  if (/homem|masculino/i.test(input)) {
    data.gender = 'masculino'
  } else if (/mulher|feminina?/i.test(input)) {
    data.gender = 'feminino'
  }

  // Extrair objetivo
  if (/perder.*peso|emagrecer|queima.*gordura/i.test(input)) {
    data.objective = 'perder peso'
  } else if (/ganhar.*massa|hipertrofia|músculo|gaha.*peso/i.test(input)) {
    data.objective = 'ganhar massa'
  } else if (/definir|tonificar|cutting/i.test(input)) {
    data.objective = 'definir'
  } else if (/glúteo|bumbum|pessa/i.test(input)) {
    data.objective = 'glúteos'
  } else if (/abdômen|barriga|abdomem/i.test(input)) {
    data.objective = 'abdômen'
  } else if (/braço|bíceps|tríceps/i.test(input)) {
    data.objective = 'braços'
  } else if (/perna|coxa|panturrilha|pessa/i.test(input)) {
    data.objective = 'pernas'
  }

  return data
}

// Função para obter GIF de exercício (placeholder)
export function getExerciseGif(exercise: string): string {
  const exercises: { [key: string]: string } = {
    supino: "/placeholder.svg?height=200&width=300",
    agachamento: "/placeholder.svg?height=200&width=300",
    rosca: "/placeholder.svg?height=200&width=300",
    "barra fixa": "/placeholder.svg?height=200&width=300",
    desenvolvimento: "/placeholder.svg?height=200&width=300",
  }

  return exercises[exercise] || "/placeholder.svg?height=200&width=300"
}
