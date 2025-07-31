import { findBestMatch, extractPersonalData, calculateIMC } from "@/lib/hipertrofia-ai"

export const maxDuration = 30

// Função para gerar resposta local inteligente
function generateLocalResponse(userInput: string, allMessages: any[]): string {
  const input = userInput.toLowerCase().trim()

  // RESPOSTAS RÁPIDAS PARA SAUDAÇÕES (prioridade máxima)
  const saudacoes = [
    'oi', 'oii', 'oiii', 'olá', 'ola', 'hey', 'hello', 'hi', 'opa', 'eai', 'e ai',
    'bom dia', 'boa tarde', 'boa noite', 'salve', 'fala', 'coé', 'beleza'
  ]
  
  if (saudacoes.some(s => input === s || input.startsWith(s + ' ') || input.endsWith(' ' + s))) {
    const respostasAnimadas = [
      "Oi! 👋 Que bom te ver aqui! Sou a Hipertrofia.IA, sua personal trainer virtual! 💪",
      "Eaí! 🔥 Pronto(a) para ARRASAR no treino hoje? Bora conversar sobre fitness! 💪",
      "Olá, guerreiro(a)! 👋 Chegou na hora certa! Vamos turbinar seus treinos? 🚀",
      "Opa! 💪 Que energia boa! Sou sua IA personal trainer favorita! Como posso te ajudar hoje? 🔥",
      "Salveee! 👋 Bom te ver por aqui! Vamos construir o corpão dos sonhos juntos? 💪✨"
    ]
    const resposta = respostasAnimadas[Math.floor(Math.random() * respostasAnimadas.length)]
    return resposta + `

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

Bora começar! Me fala o que tá precisando! 🚀💪`
  }

  // Análise contextual das mensagens anteriores (só quando necessário)
  const context = allMessages.length > 5 ? allMessages.slice(-3).map(m => m.content).join(' ').toLowerCase() : ''
  const hasPersonalData = /\d+.*anos|\d+.*kg|\d+.*m|homem|mulher/i.test(context)

  // Detecção de saudações mais elaboradas (caso não tenha pego na primeira)
  if (/^(oi|olá|ola|hey|hello|bom dia|boa tarde|boa noite)$/i.test(input)) {
    return `Oi! 👋 Que bom te ver aqui! 

Sou a **Hipertrofia.IA**, sua personal trainer virtual com inteligência artificial avançada! 🤖💪

🎯 **ESTOU AQUI PARA:**
• Criar treinos personalizados
• Calcular seu IMC e métricas corporais
• Planejar sua alimentação estratégica
• Sugerir suplementação inteligente
• Motivar você todos os dias!
• Responder todas suas dúvidas fitness

🚀 **PARA COMEÇAR, ME CONTE:**
• Sua idade, altura e peso
• Se é homem ou mulher
• Seu objetivo principal
• Quantos dias pode treinar

**Exemplo:** "Tenho 25 anos, 1,75m, 70kg, sou homem e quero ganhar massa muscular"

Vamos transformar seu corpo juntos? Bora começar! 🔥💪`
  }

  // Análise rápida de dados pessoais (só se contém números)
  if (/\d/.test(input)) {
    const personalData = extractPersonalData(userInput)
    
    // Se tem peso e altura, calcula IMC rapidamente
    if (personalData.weight && personalData.height) {
      const imc = personalData.weight / (personalData.height * personalData.height)
      let imcResponse = `🎯 **SEUS DADOS ANALISADOS:**
📊 **IMC:** ${imc.toFixed(1)}
⚖️ **Status:** ${imc < 18.5 ? 'Abaixo do peso' : imc >= 25 ? 'Acima do peso' : 'Peso ideal'}

💪 **PLANO PERSONALIZADO CRIADO!**`

      // Plano rápido baseado no IMC
      if (imc < 18.5) {
        imcResponse += `

🚀 **FOCO: GANHAR PESO SAUDÁVEL**
🏋️‍♂️ **Treino:** 4x/semana - força e massa
🍽️ **Alimentação:** Superávit calórico + proteína
💊 **Suplementos:** Whey + creatina + hipercalórico`
      } else if (imc >= 25) {
        imcResponse += `

🔥 **FOCO: QUEIMAR GORDURA + DEFINIR**
🏃‍♂️ **Cardio:** HIIT 20min + LISS 30min
🥗 **Dieta:** Déficit calórico controlado
💊 **Suplementos:** L-carnitina + cafeína + whey`
      } else {
        imcResponse += `

✨ **FOCO: RECOMPOSIÇÃO CORPORAL**
💪 **Treino:** Hipertrofia + cardio moderado
🍽️ **Nutrição:** Equilibrada e estratégica
🎯 **Meta:** Ganhar músculo + definir`
      }
      
      return imcResponse + `

Quer que eu detalhe seu plano? Me fala! 🚀💪`
    }
  }

  // Detecção de despedidas (resposta rápida)
  const despedidas = ['tchau', 'bye', 'até', 'obrigado', 'obrigada', 'valeu', 'flw', 'falou', 'xau']
  if (despedidas.some(d => input.includes(d))) {
    return `Tchau, guerreiro(a)! �💪 

Foi um prazer te ajudar! Lembra: **CONSISTÊNCIA É TUDO!** 🔥

Volta sempre que precisar! Sua transformação não para! 🚀✨`
  }

  // Detecção de agradecimentos (resposta rápida)
  if (/obrigad[oa]|valeu|thanks|muito bom|excelente|perfeito|ótim[oa]|top|massa|show/i.test(input)) {
    return `Fico feliz em ajudar! 😊💪 

É isso aí! Essa energia que eu quero ver! 🔥
Estou sempre aqui quando precisar! 

**VOCÊ TEM POTENCIAL INFINITO!** 
Bora ARRASAR! 🚀✨`
  }

  // Respostas rápidas para treinos específicos
  if (/treino.*casa|casa.*treino|sem.*equipamento/i.test(input)) {
    return `🏠 **TREINO EM CASA - RESULTADO GARANTIDO!** 💪

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

Disciplina é tudo! Treino em casa funciona SIM! 🚀💪`
  }

  if (/iniciante|começando|nunca.*trein|primeira.*vez/i.test(input)) {
    return `👶 **GUIA INICIANTE - PASSO A PASSO!** 💪

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

Me conta: quantos dias por semana consegue treinar? 💪`
  }

  if (/perder.*peso|emagrecer|queima.*gordura|cutting|definir/i.test(input)) {
    return `🔥 **PROTOCOLO QUEIMA GORDURA** 💪

**TREINO (5x/semana):**
• **HIIT:** 20min (30seg alta + 90seg baixa)
• **Musculação:** 4x10-12 reps
• **Cardio LISS:** 30-45min (3x/semana)

**ALIMENTAÇÃO:**
🥗 **Déficit calórico controlado**
🍗 **Proteína:** 2g por kg de peso
🍠 **Carbos:** Só pré/pós treino
💧 **Água:** 40ml por kg de peso

**EXEMPLO CARDÁPIO:**
• **12h:** Salada + peito grelhado
• **15h:** Whey + amêndoas  
• **18h:** Pós-treino: whey + banana
• **20h:** Peixe + brócolis

**SUPLEMENTOS:**
✅ L-Carnitina (pré-cardio)
✅ Cafeína (pré-treino)
✅ Whey protein

**RESULTADOS ESPERADOS:**
🎯 Semana 1-2: Menos inchaço, mais energia
🎯 Semana 3-4: Cintura diminuindo
🎯 Semana 5-8: Músculos aparecendo

Queima de gordura = 70% alimentação! Seja consistente! 🚀🔥`
  }

  if (/ganhar.*massa|hipertrofia|músculo|ganha.*peso|bulking/i.test(input)) {
    return `💪 **PROTOCOLO HIPERTROFIA** 🔥

**TREINO (4x/semana):**
• **Segunda:** Peito + Tríceps
• **Terça:** Costas + Bíceps  
• **Quinta:** Pernas + Glúteos
• **Sexta:** Ombros + Core

**EXERCÍCIOS PRINCIPAIS:**
🏋️‍♂️ Supino, agachamento, barra fixa
🏋️‍♂️ 4x6-8 reps (força)
🏋️‍♂️ 3x10-12 reps (hipertrofia)

**NUTRIÇÃO:**
🍗 **Proteína:** 2,5g por kg
🍠 **Carbos:** 5-7g por kg  
🥑 **Gorduras:** 1g por kg
📈 **Superávit:** +300-500 calorias

**EXEMPLO (80kg):**
• **6h:** 3 ovos + aveia + banana
• **9h:** Whey + leite + mel
• **12h:** Peito 150g + arroz + feijão
• **15h:** Batata doce + atum
• **18h:** Pós-treino: whey + dextrose
• **21h:** Carne + macarrão + salada

**SUPLEMENTOS BÁSICOS:**
✅ Whey protein 2x/dia
✅ Creatina 3-5g/dia
✅ Multivitamínico

**MÚSCULOS CRESCEM NO DESCANSO!** 
Durma 7-8h por noite! 🚀💪`
  }

  if (/glúteo|bumbum|pessa.*traseira|bunda/i.test(input)) {
    return `🍑 **PROTOCOLO CIENTÍFICO PARA GLÚTEOS PODEROSOS** 💪

**ANÁLISE BIOMECÂNICA AVANÇADA:**
Os glúteos são o maior grupo muscular do corpo e respondem bem a estímulos específicos. Vou criar um protocolo baseado em anatomia e neurociência muscular.

**ANATOMIA DOS GLÚTEOS:**
• **Glúteo máximo:** Volume e projeção
• **Glúteo médio:** Largura e formato
• **Glúteo mínimo:** Sustentação e contorno

**TREINO A - FOCO MÁXIMO (2x/semana):**

**🔥 ATIVAÇÃO NEURAL (10min):**
• Caminhar lado a lado c/ elástico: 2x15
• Ponte glútea isométrica: 3x30seg
• Concha lateral: 2x15 cada lado
• Agachamento ar 2x20

**🔥 EXERCÍCIOS PRINCIPAIS:**
• **Hip thrust:** 5x8-10 (exercício rei!)
  - Pausa 2seg no topo
  - Aperte o glúteo conscientemente
  - Progressão: peso corporal → barra → adicionar peso

• **Agachamento sumo:** 4x10-12
  - Pés largos, dedos 45° abertos
  - Desce até quebrar paralelo
  - Sobe explodindo o quadril

• **Agachamento búlgaro:** 4x10 cada perna
  - Pé traseiro elevado
  - Foque na perna da frente
  - Tronco ligeiramente inclinado

• **Stiff unilateral:** 3x12 cada perna
  - Equilibrio desafia glúteo médio
  - Amplitude máxima
  - Sinta alongamento no glúteo

**🔥 EXERCÍCIOS AUXILIARES:**
• **Coice na polia:** 3x15 cada perna
• **Abdução na máquina:** 3x15-20
• **Extensão quadril no solo:** 3x15 cada

**TREINO B - FOCO MÉDIO/MÍNIMO (1x/semana):**

**🔥 EXERCÍCIOS FUNCIONAIS:**
• **Agachamento livre:** 4x8-10
  - Técnica perfeita
  - Quadril pra trás primeiro
  - Joelhos alinhados

• **Step up lateral:** 3x12 cada perna
  - Subir de lado no banco
  - Ativa glúteo médio intensamente
  - Não impulsionar com perna de baixo

• **Avanço lateral:** 3x10 cada lado
  - Passo largo lateral
  - Senta no glúteo
  - Volta explosivo

• **Prancha lateral:** 3x30seg cada lado
  - Quadril alinhado
  - Contrai glúteo conscientemente

**TÉCNICAS NEURAIS AVANÇADAS:**

**🧠 ATIVAÇÃO CONSCIENTE:**
• Coloque mão no glúteo durante exercício
• Visualize músculo contraindo
• Conte 1-2-3 na contração máxima
• Respire: inspira descendo, expira subindo

**🧠 PRÉ-ATIVAÇÃO:**
Sempre antes do treino principal:
• Concha c/ elástico: 20 reps
• Ponte glútea: 15 reps
• Coice quarto apoios: 10 cada perna

**🧠 PROGRESSÃO INTELIGENTE:**
• **Semana 1-2:** Dominar movimento
• **Semana 3-4:** Adicionar peso/resistência
• **Semana 5-6:** Aumentar repetições
• **Semana 7-8:** Técnicas avançadas

**NUTRIÇÃO PARA GLÚTEOS:**

**🍑 ALIMENTOS CONSTRUTORES:**
• **Proteínas:** Frango, peixe, ovos, whey
• **Carboidratos:** Batata doce, aveia, quinoa
• **Gorduras:** Abacate, castanhas, azeite
• **Hidratação:** 35ml por kg de peso

**🍑 TIMING ESTRATÉGICO:**
• **Pré-treino:** Banana + café (energia)
• **Pós-treino:** Whey + carboidrato simples
• **Noite:** Proteína lenta (caseína/cottage)

**SUPLEMENTAÇÃO ESPECÍFICA:**

**💊 BÁSICO:**
• **Whey protein:** Construção muscular
• **Creatina:** Força e volume
• **Colágeno:** Saúde articular

**💊 AVANÇADO:**
• **BCAA:** Preservação muscular
• **L-Glutamina:** Recuperação
• **Vitamina D:** Absorção cálcio

**ASPECTOS HORMONAIS:**

**🧬 OTIMIZAÇÃO NATURAL:**
• **Sono 7-8h:** Hormônio crescimento
• **Manage stress:** Cortisol baixo
• **Exercícios compostos:** Testosterona natural
• **Alimentação balanceada:** Equilíbrio hormonal

**CRONOGRAMA SEMANAL IDEAL:**

**📅 DIVISÃO INTELIGENTE:**
• **Segunda:** Treino A (foco máximo)
• **Terça:** Cardio leve + core
• **Quarta:** Membros superiores
• **Quinta:** Treino B (funcional)
• **Sexta:** Treino A (foco máximo)
• **Sábado:** Caminhada/bike
• **Domingo:** Descanso ativo

**MEDIÇÃO DE PROGRESSO:**

**📐 MÉTRICAS IMPORTANTES:**
• **Medidas:** Quadril, coxa superior
• **Fotos:** Lateral e posterior
• **Performance:** Carga hip thrust
• **Sensação:** Ativação durante exercícios

**🎯 RESULTADOS ESPERADOS:**
• **Semana 2:** Melhor ativação
• **Semana 4:** Primeiros ganhos visuais
• **Semana 8:** Diferença significativa
• **Semana 12:** Transformação completa

**ERROS COMUNS A EVITAR:**

❌ **Focar só em agachamento**
❌ **Não ativar antes do treino**
❌ **Usar peso demais, técnica ruim**
❌ **Não sentir o músculo trabalhando**
❌ **Treinar todo dia (sem recuperação)**

**DICAS NEURAIS ESPECIAIS:**

🧠 **Durante exercício:**
- Imagine glúteo "inchando"
- Conte mentalmente as repetições
- Foque na contração, não no peso
- Respire coordenadamente

🧠 **Mentalização:**
- Visualize resultado desejado
- Use fotos de motivação
- Comemore pequenos progressos
- Seja paciente mas consistente

**VARIAÇÕES AVANÇADAS:**

**🔥 Para quebrar platô:**
• **Drop-sets:** Hip thrust até falha
• **Rest-pause:** Agachamento + pause
• **Isometria:** Segurar contração
• **Unilateral:** Um lado por vez

Lembra: glúteos respondem MUITO bem ao treino consistente. Em 8 semanas você vai ver uma transformação incrível!

O segredo é SENTIR o músculo trabalhando. Se não está sentindo, algo está errado na técnica.

Quer que eu detalhe algum exercício específico? Vamos construir o glúteo dos seus sonhos! 🚀🍑`
  }

  // Adicionar mais casos específicos...
  if (/abdômen|barriga|abs|abdomem|core/i.test(input)) {
    return `🔥 **PROTOCOLO CIENTÍFICO PARA ABDÔMEN DEFINIDO** 💪

**VERDADES SOBRE ABDÔMEN:**
🧠 Abdômen se faz 80% na cozinha, 20% na academia
🧠 Não existe queima localizada (mito!)
🧠 Genética influencia, mas todos podem definir
🧠 Core forte = performance melhor em tudo

**TREINO NEUROLÓGICO DE CORE:**

**💥 ATIVAÇÃO NEURAL (5min sempre):**
• Respiração diafragmática: 10 ciclos
• Contração isométrica: 10x5seg
• Gato/vaca: 15 repetições
• Dead bug: 10 cada lado

**💥 TREINO A - FORÇA + RESISTÊNCIA:**
• **Prancha:** 4x30-60seg
  - Corpo alinhado como tábua
  - Respiração controlada
  - Foque na qualidade

• **Prancha lateral:** 3x30seg cada lado
  - Quadril elevado
  - Não deixe cair
  - Respire normalmente

• **Russian twist:** 3x20 total
  - Pés elevados (avançado)
  - Tronco inclinado 45°
  - Toque o chão dos lados

• **Mountain climber:** 3x30seg
  - Ritmo controlado
  - Core sempre contraído
  - Joelhos ao peito

• **Elevação de pernas:** 3x15-20
  - Lombar colada no chão
  - Pernas controladas
  - Não balançar

**💥 TREINO B - FUNCIONAL + POTÊNCIA:**
• **Burpee:** 3x10-15
• **Prancha com toque ombro:** 3x20
• **Bike air:** 3x30seg
• **V-ups:** 3x12-15
• **Prancha dinâmica:** 3x15

**NUTRIÇÃO PARA DEFINIÇÃO:**

**🥗 PROTOCOLO ANTI-INCHAÇO:**
• **Manhã:** Água morna + limão
• **Evitar:** Glúten, lactose, excesso sal
• **Priorizar:** Fibras, água, proteína magra
• **Timing:** Último carboidrato 18h

**🥗 ALIMENTOS DEFINIÇÃO:**
✅ **Proteínas:** Peixes, frango, claras
✅ **Carboidratos:** Batata doce, quinoa
✅ **Vegetais:** Brócolis, espinafre, couve
✅ **Gorduras:** Abacate, castanhas, azeite
✅ **Especiarias:** Canela, gengibre, pimenta

**CARDIO INTELIGENTE:**

**🏃‍♂️ PARA QUEIMAR GORDURA:**
• **HIIT:** 20min - 30seg alta + 90seg baixa
• **LISS:** 45min zona aeróbica
• **Caminhada:** 60min ritmo conversação
• **Frequência:** 4-5x por semana

Seu abdômen existe, só está escondido! Vamos revelar ele! 🚀🔥`
  }

  if (/braço|bíceps|tríceps|arm/i.test(input)) {
    return `💪 **PROTOCOLO CIENTÍFICO PARA BRAÇOS MASSIVOS** 🔥

**ANÁLISE NEURAL DOS BRAÇOS:**
Braços respondem bem a volume alto e frequência. Vou usar princípios de tensão mecânica e estresse metabólico.

**ANATOMIA ESTRATÉGICA:**
• **Bíceps:** 30% do braço
• **Tríceps:** 70% do braço (foque aqui!)
• **Antebraço:** Força de pegada

**TREINO A - BÍCEPS FOCUS:**
• **Rosca direta:** 4x8-10
• **Rosca martelo:** 4x10-12
• **Rosca concentrada:** 3x12-15
• **Rosca inclinada:** 3x10-12
• **Rosca 21:** 3 séries

**TREINO B - TRÍCEPS DOMINANCE:**
• **Supino fechado:** 4x8-10
• **Paralelas:** 4x8-12
• **Tríceps testa:** 4x10-12
• **Tríceps corda:** 3x12-15
• **Mergulho banco:** 3x15-20

**TÉCNICAS NEURAIS:**
🧠 **Conexão mente-músculo**
🧠 **Range completo movimento**
🧠 **Contração isométrica pico**
🧠 **Fase excêntrica controlada**

Braços são detalhes que fazem diferença! Vamos construir canhões! 🚀💪`
  }

  // Se não encontrou padrão específico, análise contextual inteligente
  if (hasPersonalData) {
    return `Analisando seu perfil... 🧠

Baseado nas informações que você compartilhou, posso criar um plano mais específico! 

Me conte:
🎯 Qual sua principal dificuldade no treino?
⏰ Quantos dias por semana consegue treinar?
🍽️ Tem alguma restrição alimentar?
🏋️‍♂️ Prefere academia ou treino em casa?

Com esses detalhes, vou personalizar ainda mais seu programa! 💪🔥`
  }

  // Resposta padrão mais inteligente e envolvente
  return `Oi, guerreiro(a)! 💪 Sou a Hipertrofia.IA, sua personal trainer virtual com IA avançada!

🧠 **MINHA ANÁLISE NEURAL DETECTOU:**
Você está buscando orientação fitness, e eu vou te ajudar com base em ciência esportiva e anos de experiência!

📊 **PARA CRIAR SEU PLANO PERFEITO, PRECISO SABER:**

🎯 **DADOS PESSOAIS:**
• Qual sua idade?
• Você é homem ou mulher?
• Qual sua altura? (ex: 1,75m)
• Qual seu peso atual? (ex: 70kg)

🔥 **OBJETIVO PRINCIPAL:**
• Perder peso/emagrecer
• Ganhar massa muscular
• Definir/tonificar  
• Melhorar parte específica (glúteos, abdômen, braços, pernas)

⚡ **CONTEXTO ATUAL:**
• Quantos dias por semana pode treinar?
• Quanto tempo por treino?
• Treina em academia ou casa?
• Tem alguma restrição física/alimentar?

🧬 **MINHA INTELIGÊNCIA AVANÇADA PODE:**
✅ Calcular seu IMC e análise corporal
✅ Criar treinos personalizados por nível
✅ Montar cardápios estratégicos
✅ Sugerir suplementação inteligente
✅ Acompanhar seu progresso
✅ Ajustar plano conforme evolução
✅ Corrigir técnicas de exercícios
✅ Motivar você todos os dias!

**EXEMPLOS DO QUE POSSO FAZER:**
• "Tenho 25 anos, 70kg, 1,75m, quero ganhar massa"
• "Preciso perder 10kg, treino 3x por semana"
• "Quero glúteos maiores, como fazer?"
• "Sou iniciante, por onde começar?"

🚀 **MINHA MISSÃO:** Transformar seu corpo usando ciência, estratégia e muita motivação!

Não sou só uma IA comum - tenho processamento neural avançado para entender suas necessidades e criar o plano perfeito para VOCÊ!

Bora começar sua transformação? Me conte seus dados e vamos ARRASAR! 🔥💪🚀`
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: 'Formato de mensagem inválido' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const lastMessage = messages[messages.length - 1]?.content?.toLowerCase() || "";

    // Verifica se é uma pergunta específica sobre hipertrofia
    const knowledgeResponse = findBestMatch(lastMessage);
    if (knowledgeResponse) {
      // Cria stream compatível com useChat do Vercel AI SDK
      const encoder = new TextEncoder();
      const stream = new ReadableStream({
        start(controller) {
          // Formato correto para streaming do AI SDK
          controller.enqueue(encoder.encode(`0:${JSON.stringify(knowledgeResponse)}\n`));
          controller.close();
        }
      });

      return new Response(stream, {
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Cache-Control': 'no-cache, no-store, max-age=0, must-revalidate',
          'Connection': 'keep-alive'
        }
      });
    }

    // Resposta local inteligente - sem dependência de servidor externo
    const response = generateLocalResponse(lastMessage, messages);

    // Cria stream compatível com useChat do Vercel AI SDK
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      start(controller) {
        // Formato correto para streaming do AI SDK
        controller.enqueue(encoder.encode(`0:${JSON.stringify(response)}\n`));
        controller.close();
      }
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache, no-store, max-age=0, must-revalidate',
        'Connection': 'keep-alive'
      }
    });

  } catch (error) {
    console.error('Erro na API do chat:', error);
    return new Response(JSON.stringify({
      error: 'Erro interno do servidor',
      details: error instanceof Error ? error.message : 'Erro desconhecido'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
