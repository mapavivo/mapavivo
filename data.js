const NODES = {

  0: {
    title: "Ley de Inviolabilidad de la Propiedad Privada",
    flag: { t: "● SE VOTA EL 16/07", c: "flag-urgent" },
    points: [],
    src: ""
  },

  1: {
    title: "Ley de Tierras Rurales 26.737",
    flag: { t: "TIERRAS · SE VACÍA", c: "flag-loss" },
    points: [
      [
        "Por qué importa",
        `Esto no se trata de tu casa ni de tu terreno. <strong> Se trata de quién puede comprar el suelo donde están el agua y los minerales que el mundo necesita </strong>y que ya casi no quedan en el planeta.
        Hay recursos que no se fabrican: el agua dulce, el litio, los glaciares. El país que los tiene, manda. Y Argentina es uno de los pocos que todavía los tiene. Por eso el capital extranjero viene a comprar esa tierra — no para vivir ahí, sino para quedarse con lo que hay abajo.
        El mapa de la tierra que compran los extranjeros curiosamente coincide con el mapa del agua y los minerales. Donde hay algo valioso, aparece el capital. Y detrás, una ley que le abre la puerta.`,
        true
      ],
      [
        "Qué protege hoy",
        `Hoy la ley pone un techo. Ningún extranjero puede ser dueño de más del 15% de la tierra rural del país, y ese tope vale también dentro de cada provincia y cada municipio — para que no se concentre todo en una misma zona. De ese 15%, ninguna nacionalidad puede quedarse con más de un tercio.
Y hay tierras que directamente no se pueden vender a extranjeros: las que contienen o lindan con agua —ríos, lagos, glaciares— y las de zona de frontera. Son las más sensibles, porque de ahí depende el acceso al agua y la soberanía sobre los límites del país.
En una frase: hoy el límite existe, y es nacional. "¿Que a veces se incumple? Sí, se incumple, pero existiendo al menos hay base legal para reclamar; sin él, ni siquiera eso".`,
        true
      ],
      [
        "A quién beneficia",
        `Esto no se trata de un comprador común, de alguien que quiere su casa o su campo. Se trata de ceder territorio estratégico a corporaciones — la escala es la que cambia todo.
El caso de Lago Escondido lo muestra. El magnate británico Joe Lewis compró en 1996 las tierras que rodean el lago y lo dejó cercado dentro de su propiedad privada — un espejo de agua que, por ley, es de todos. Pudo hacerlo porque cuando compró, ese límite todavía no existía; la ley que hoy lo prohíbe llegó recién en 2011. Y aun así no alcanzó: en 2023 la justicia falló a favor de Lewis, y para llegar al lago hoy hay que caminar cuatro días por la montaña.
Y ahora hay un uso nuevo para esa tierra: los centros de datos de inteligencia artificial. En octubre de 2025, la empresa Stargate anunció junto a OpenAI una inversión de hasta 25.000 millones de dólares para instalar uno en la Patagonia. ¿Por qué acá? Por lo mismo de siempre: tierra barata, clima frío y, sobre todo, agua — la que estas plantas necesitan para enfriarse, millones de litros, en una región donde los ríos ya vienen bajos.
Un data center de esa escala consumiría el agua y la energía de una provincia entera, y dejaría cincuenta empleos. El asesor presidencial Demian Reidel lo resumió sin filtro ante un salón de empresarios: la Patagonia es ideal, dijo, solo que "está poblada de argentinos" — algo que, según él, ya "arreglaron".
Antes se llevaban lo que había abajo. Ahora se llevan el lugar entero. Y de eso no se vuelve.`,
        true
      ]
    ],
    tags: [
      ["DESPOJO", "se quita una protección que ya existía (los topes de 15%, 30% y 1.000 ha)"],
      ["EXTRACTIVISMO: TIERRA", "el recurso concreto en juego es la tierra rural"],
      ["CUERPOS-TERRITORIOS EN DISPUTA", "comunidades rurales, pequeños productores, pueblos originarios en zona de frontera"]
    ],
    src: "Boletín Oficial — Ley 26.737 (arts. 8, 9 y 10) · El Cronista · Chequeado",
    docUrl: "docs/ley-26737-texto-sancionado.pdf",
    docLabel: "Ley 26.737 — texto sancionado (PDF, registrada 22/12/2011)"
  },

  2: {
    title: "Régimen de Expropiaciones",
    flag: { t: "EXPROPIACIONES", c: "flag-node" },
    points: [
      [
        "Qué protege hoy",
        `Hoy, para expropiar, alcanza con que el Estado invoque "utilidad pública",
        sin un test único y estricto sobre qué tan justificado tiene que estar ese fin.
        La indemnización cubre el valor del bien y los daños directos.`,
        true
      ],
      [
        "Qué elimina",
        `El proyecto exige que la "utilidad pública" se interprete de forma restrictiva
        y pase un test de tres pasos:
        <strong>que el fin sea específico y concreto, y que la medida sea idónea, necesaria y proporcional</strong>.
        Suma el lucro cesante a la indemnización, con techo del 30% del daño directo.
        Y agrega una traba adicional:
        <strong>no puede haber transferencia de dominio sin que el Estado haya pagado
        la indemnización completa por adelantado</strong>
        — hoy puede tomar posesión y seguir discutiendo el monto después.`,
        true
      ],
      [
        "Por qué importa",
        `El Gobierno dice que esto da más seguridad jurídica y evita que el Estado se demore en pagar.
        Pero en la práctica,
        <strong>subir el estándar para expropiar y sumarle costo a la indemnización
        hace más difícil y más caro que el Estado avance sobre una propiedad</strong>
        — para una obra pública, una regularización de tierras,
        o cualquier política que necesite mover al dueño actual.
        También crea la "expropiación indirecta": si una regulación (ambiental, urbana, de precios)
        le saca al dueño el uso o el valor de su bien sin transferirle la propiedad,
        se puede reclamar como si fuera una expropiación.
        También le pone límite de tiempo a una figura menos conocida:
        la <strong>'ocupación temporánea anormal'</strong>
        (cuando el Estado usa un bien de forma transitoria sin expropiarlo, por ejemplo para una obra).
        Hoy no tiene plazo; el proyecto lo limita a 90 días,
        después de los cuales el Estado tiene que devolverlo o expropiarlo formalmente.`,
        true
      ],
      [
        "A quién beneficia",
        `Gana quien tiene una propiedad grande o una inversión que el Estado podría necesitar tocar
        — desde un terrateniente hasta un fondo de inversión —
        porque <strong>le sube el piso de protección y le garantiza cobrar más</strong>.
        La nueva figura de "expropiación regulatoria" además abre una vía para cuestionar
        leyes ambientales o de planificación urbana que un privado sienta
        que le devalúen su propiedad sin decirlo.`,
        true
      ]
    ],
    src: "El Cronista · Chequeado · Ley 21.499 (reforma) · Canosa Abogados · Ámbito (declaraciones ante Comisión de Ciencia, Senado)"
  },

  3: {
    title: "Régimen de Desalojos",
    flag: { t: "DESALOJOS", c: "flag-node" },
    points: [
      [
        "Qué protege hoy",
        `<strong>Hoy, para desalojar a alguien antes de la sentencia final,
        el dueño tiene que dar una garantía económica real (caución real).</strong>
        El juicio va por la vía ordinaria, con más tiempo para que la persona ocupante
        presente pruebas y se defienda.`,
        true
      ],
      [
        "Qué elimina",
        `El trámite <strong>sumarísimo</strong> — el más rápido del Código Procesal —
        se aplica específicamente a inmuebles usurpados. Ahí, la caución real se reemplaza
        por una <strong>simple declaración jurada del propietario, sin respaldo económico</strong>,
        para pedir la desocupación anticipada antes de que termine el juicio.
        Para el resto de los casos —como un inquilino atrasado con el alquiler—
        se mantiene el proceso ordinario, con el plazo de intimación estirado de 3 a 10 días.`,
        true
      ],
      [
        "Por qué importa",
        `El Gobierno dice que esto es para no dejar indefenso al dueño frente a los "okupas".
        A diferencia de lo que se discutió en el debate inicial,
        <strong>el texto final acotó el trámite exprés solo a usurpación</strong>
        — no alcanza a cualquier desalojo.
        Rige solo en CABA (cada provincia decide si copia la reforma).`,
        true
      ],
      [
        "A quién beneficia",
        `Gana quien tiene un inmueble usurpado y quiere recuperarlo rápido,
        sin depender de un juicio largo ni poner plata en garantía.
        <strong>El capítulo que tocaba los barrios populares
        (la suspensión de desalojos de la Ley 27.453/RENABAP hasta 2032)
        se retiró del dictamen final</strong>
        — por ahora, esa protección específica no cambia.`,
        true
      ]
    ],
    src: "Perfil · Ámbito · Chequeado · La Tinta · CELS · Código Procesal Civil y Comercial (arts. 679, 680 bis) · APDH (declaración 28/05/2026)"
  },

  4: {
    title: "Ley de Manejo del Fuego",
    flag: { t: "MANEJO DEL FUEGO", c: "flag-node" },
    points: [
      [
        "Qué protege hoy",
        `<strong>Si un campo o un bosque se incendia, hoy no se le puede cambiar el uso del suelo por años</strong>:
        60 años para bosques nativos, áreas protegidas y humedales;
        30 años para pastizales y zonas agropecuarias.
        En ese tiempo no se puede lotear, desarrollar un emprendimiento inmobiliario
        ni cambiar la actividad productiva.`,
        true
      ],
      [
        "Por qué importa",
        `<strong>La ley existe para que nadie se beneficie económicamente de un incendio</strong>
        — que un bosque se queme y al poco tiempo aparezca ahí un loteo o un campo distinto.
        Los incendios arrasan miles de hectáreas por año en Argentina;
        sin este freno, quemar se vuelve un atajo para cambiarle el destino a la tierra.`,
        true
      ],
      [
        "Qué elimina",
        `Para bosques nativos, el proyecto mantiene la prohibición de cambiar el uso del suelo
        — pero <strong>le saca el plazo fijo de 60 años</strong>, dejándola sin un límite temporal claro.
        Para pastizales, praderas, matorrales, zonas agropecuarias y áreas periurbanas,
        <strong>deroga directamente el freno de 30 años</strong>:
        ahí sí se puede cambiar el uso del suelo después de un incendio, sin esperar nada.
        La protección de humedales y áreas protegidas por fuera de estas categorías
        no aparece mencionada en el dictamen —
        <span class="pending">PENDIENTE</span>
        hasta confirmar si sigue vigente por otra norma o si queda expuesta.`,
        true
      ],
      [
        "A quién beneficia",
        `No es la primera vez que se apunta a esta ley: en 2023 ya se intentó por decreto (no prosperó),
        en 2025 se vació el Fondo Nacional de Manejo del Fuego y se bajó de rango su coordinación
        (de Ambiente a Seguridad). Mientras tanto, Parques Nacionales tiene 380 brigadistas
        cuando necesitaría 600, y el Servicio Nacional de Manejo del Fuego 130 cuando debería tener el doble.
        <strong>Quien gana no es quien combate el fuego
        — es quien puede convertir la tierra quemada en negocio más rápido.</strong>`,
        true
      ]
    ],
    src: "Revista Sudestada (Natalia Mazzei) · Ley 26.815 y modif. 2020 · ATE Nacional · eldiarioAR · Chequeado"
  }

};
