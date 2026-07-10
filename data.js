const NODES = {

  0: {
    title: "Ley de Inviolabilidad de la Propiedad Privada",
    flag: { t: "● SE VOTA EL 16/07", c: "flag-urgent" },
    points: [],
    src: ""
  },

  1: {
    title: "Ley de Tierras Rurales - 26.737",
    flag: { t: "TIERRAS · SE VACÍA", c: "flag-loss" },
    points: [
      [
        "",
        `La ley abre la compra de tierra rural a fondos y corporaciones extranjeras. Hoy hay un tope que lo limita; el proyecto lo elimina. Esto es lo que se toca:`,
        true
      ],
      [
        "El truco",
        `El despojo ya no se hace quitando. Se hace "dando libertad": sacan el límite a la compra extranjera de tierra y lo presentan como algo técnico. Pero esa "libertad" no es para vos. Es para corporaciones y fondos globales que pagan lo que haga falta. Esta movida no le sirve a nadie de acá: ni al productor, ni al campesino, que ni aparece en la ecuación. Los únicos que ganan son los fondos y las corporaciones que ya manejan el mundo — y esta ley les abre la puerta.`,
        true
      ],
      [
        "Qué se pierde",
        `Hoy hay un techo que vale para todo el país: ningún extranjero puede quedarse con más del 15% de la tierra rural ni con más de 1.000 hectáreas de las más fértiles (arts. 8 y 10, ley 26.737). El proyecto borra eso. La restricción que queda es para Estados extranjeros — que casi no compran. Los que concentran tierra en el mundo son fondos y corporaciones privadas, y para ellos se levanta el límite. Se conserva la prohibición que no molesta y se saca la que sí importa.`,
        true
      ],
    [
      "Por qué esta tierra",
      `No compran cualquier campo: compran el que tiene agua, litio o glaciares debajo. Lo que el mundo necesita y ya casi no queda — y que, una vez agotado o contaminado, no vuelve. Supongamos que no te preocupa la soberanía. Perfecto: mirá el negocio. Para este capital, un río no es un río: es un activo. Un glaciar no es agua, es una reserva a futuro. El litio y el agua cotizan en bolsa antes de salir de la tierra — y esto no es agenda verde: es Wall Street. No lo compran para vivir ahí. Lo compran para convertirlo en zona de sacrificio: un lugar del que se extrae todo —agua, energía, minerales— para alimentar algo que pasa lejos. Hoy, por ejemplo, centros de datos que enfrían máquinas con el agua que a los pueblos les falta.`,
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
    title: "Ley de Manejo del Fuego",
    flag: { t: "MANEJO DEL FUEGO", c: "flag-node" },
    points: [
  [
    "",
    `La ley cambia las reglas sobre las tierras que se incendian — 
    cuánto tiempo hay que esperar antes de poder venderlas, lotearlas o darles otro uso. 
    Esto es lo que se toca:`,
    true
  ],
  [
    "Qué protege hoy",
    `Si un campo o un bosque se incendia, hoy no se le puede cambiar el uso del suelo por años: 
    60 para bosques nativos, áreas protegidas y humedales; 30 para pastizales y zonas agropecuarias. 
    En ese tiempo no se puede lotear, hacer un emprendimiento inmobiliario ni cambiar la actividad. 
    <strong>La idea es simple: que nadie gane plata con un incendio.</strong>`,
    true
  ],
  [
    "Por qué esto importa",
    `Porque el fuego es negocio. Un bosque se quema y al poco tiempo aparece ahí un loteo o un campo sembrado.
     No lo decimos solo nosotros: el propio Ministerio de Ambiente, cuando se hizo la ley, 
     advirtió que muchos incendios intencionales sirven para quemar pastizales y 
     <strong> abrir paso a proyectos inmobiliarios y agroganaderos. </strong>
     La espera de décadas es lo único que rompe ese atajo — sin ella, quemar vuelve a rendir.`,
    true
  ],
  [
    "Qué elimina",
    `Para pastizales, praderas, matorrales, zonas agropecuarias y áreas periurbanas, borra directamente el freno de 30 años: 
     <strong>después de un incendio se puede cambiar el uso del suelo sin esperar nada</strong>. Para bosques nativos, mantiene la prohibición de cambiar el uso — pero le saca el plazo fijo de 60 años, dejándola sin un límite claro y más fácil de discutir caso por caso. (Qué pasa con humedales y áreas protegidas no aparece claro en el dictamen — a confirmar.)`,
    true
  ],
  [
    "A quién beneficia",
    `No al que apaga el fuego. 
     <strong>Se desfinancia el que combate,
     se agiliza el que lucra</strong>. El fuego no se previene: se aprovecha. Mientras se facilita el negocio con lo quemado, 
    el combate al fuego viene en caída: en 2025 se vació el Fondo Nacional de Manejo del Fuego y 
    su coordinación bajó de Ambiente a Seguridad. Parques Nacionales tiene 380 brigadistas y necesitaría 600;
     el Servicio Nacional de Manejo del Fuego, la mitad de los que debería. `,
    true
  ]
],
    src: "Revista Sudestada (Natalia Mazzei) · Ley 26.815 y modif. 2020 · ATE Nacional · eldiarioAR · Chequeado"
  },

  3: {
    title: "Régimen de Expropiaciones",
    flag: { t: "EXPROPIACIONES", c: "flag-node" },
    points:[
      [
        "",
        `La ley cambia las reglas de la expropiación — el mecanismo por el que el Estado puede tomar una propiedad privada para hacer una obra pública, pagándola. Esto es lo que se toca:`,
        true
      ],
    [
      "Lo que suena bien",
      `Suena impecable: "que el Estado no te pueda sacar tu casa".
      ¿Quién va a estar en contra? Pero mirá la letra chica.
      Expropiar no es el Estado manoteándote las cosas:
      es la única herramienta que existe para hacer una ruta, un hospital, una escuela, un acceso a un río.
      Esta ley no la prohíbe — <strong>la vuelve tan cara y tan lenta </strong> que, en los hechos, el Estado ya no va a poder construir nada de eso.`,
      true
    ],
    [
      "A quién protege de verdad",
      `No a vos ni a tu lote. Al que tiene miles de hectáreas y no quiere que le toquen ni un metro. Cuando expropiar cuesta una fortuna y tarda años, el único que puede pegarla es el más grande — el que tiene abogados y tiempo de sobra. Pasó en Lago Escondido: el Estado quiso garantizar el camino público al lago y no pudo. Con esta reforma, ese "no pudo" se vuelve la regla.`,
      true
    ],
    [
      "Tu casa contra el bien de todos",
      `Toda obra pública choca con alguna propiedad: tu terreno, o el hospital que necesita el barrio. Siempre hubo que equilibrar las dos cosas. Esta ley rompe el equilibrio de un solo lado: pone el derecho del que ya tiene por encima del derecho de todos los demás. No blinda tu casa. Blinda la del que nunca va a dejar pasar una ruta, un caño de agua o un camino al río.`,
      true
    ]
],
    src: "El Cronista · Chequeado · Ley 21.499 (reforma) · Canosa Abogados · Ámbito (declaraciones ante Comisión de Ciencia, Senado)"
  },

  4: {
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
  }

};
