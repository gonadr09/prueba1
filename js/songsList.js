// BASE DE DATOS DE CANCIONES
const songsList = [
    `La partida de la gitana - Airbag`,
    `Violeta - Alcides`,
    `Amarte así - Alejandro Lerner`,
    `Después de ti - Alejandro Lerner`,
    `No hace falta que lo digas - Alejandro Lerner`,
    `Secretos - Alejandro Lerner`,
    `Todo a pulmón - Alejandro Lerner`,
    `Volver a empezar - Alejandro Lerner`,
    `Dentro mío - Alejandro Lerner`,
    `Algo en mi tu corazón - Alejandro Lerner`,
    `Juntos para siempre - Alejandro Lerner`,
    `Amiga mía - Alejandro Saenz`,
    `Corazón partío - Alejandro Saenz`,
    `Deja que te bese - Alejandro Saenz`,
    `La fuerza del corazón - Alejandro Saenz`,
    `Corazón partío - Alejandro Sanz`,
    `Amiga mía - Alejandro Sanz`,
    `Mi soledad y yo - Alejandro Sanz`,
    `Y ¿Si Fuera Ella? - Alejandro Sanz`,
    `Cuando nadie me ve - Alejandro Sanz`,
    `Quisiera ser - Alejandro Sanz`,
    `No es lo mismo - Alejandro Sanz`,
    `La fuerza del corazón - Alejandro Sanz`,
    `Sin miedo a nada - Alex Ubago`,
    `Qué pides tu? - Alex Ubago`,
    `Pizza conmigo - Alfredo Casero`,
    `Sé vos - Almafuerte`,
    `Toro y pampa - Almafuerte`,
    `Triunfo - Almafuerte`,
    `Tú eres su seguridad - Almafuerte`,
    `A estos hombres tristes - Almendra`,
    `Ana no duerme - Almendra`,
    `Color humano - Almendra`,
    `Fermín - Almendra`,
    `Las cosas para hacer - Almendra`,
    `Muchacha (Ojos de papel) - Almendra`,
    `Plegaria para un niño dormido - Almendra`,
    `Que el viento borró tus manos - Almendra`,
    `Rutas argentinas - Almendra`,
    `Tema de Poroto (Para saber como es la soledad) - Almendra`,
    `Yo tomo licor - Amar Azul`,
    `Yo me enamore - Amar Azul`,
    `El polvito del amor - Amar Azul`,
    `Te Vas - Américo`,
    `Me haces tanto bien - Amistades Peligrosas`,
    `Vivo por ella - Andrea Bocelli / Marta Sánchez`,
    `Bonita - Andrés Cabas`,
    `Algún lugar encontraré - Andrés Calamaro`,
    `Aunque no sea conmigo - Andrés Calamaro`,
    `Crimenes perfectos - Andrés Calamaro`,
    `Cuando no estás - Andrés Calamaro`,
    `Cuando te conocí - Andrés Calamaro`,
    `El salmón - Andrés Calamaro`,
    `Flaca - Andrés Calamaro`,
    `Loco - Andrés Calamaro`,
    `No se puede vivir del amor - Andrés Calamaro`,
    `Te quiero igual - Andrés Calamaro`,
    `Tuyo siempre - Andrés Calamaro`,
    `Cartas Sin Marcar - Andrés Calamaro`,
    `Sur - Anibal Troilo`,
    `No me faltes - Antonio Ríos`,
    `Yo me estoy enamorando - Antonio Ríos`,
    `El fantasma - Árbol`,
    `Pequeños sueños - Árbol`,
    `Trenes, camiones y tractores - Árbol`,
    `Ya lo sabemos - Árbol`,
    `No sé tú - Armando Manzanero`,
    `El arriero - Atahualpa Yupanqui`,
    `Luna Tucumana - Atahualpa Yupanqui`,
    `Arrancacorazones - Attaque 77`,
    `Beatle - Attaque 77`,
    `Chance - Attaque 77`,
    `Crecer - Attaque 77`,
    `Espadas y serpientes - Attaque 77`,
    `Hacelo por mí - Attaque 77`,
    `María - Attaque 77`,
    `No me arrepiento de este amor - Attaque 77`,
    `Porque te vas… - Attaque 77`,
    `Western - Attaque 77`,
    `Ave María - David Bisbal`,
    `Te voy a amar - Axel`,
    `Tu amor por siempre - Axel`,
    `Amo - Axel`,
    `Celebra la vida - Axel`,
    `Afinidad - Axel`,
    `Todo vuelve - Axel`,
    `Somos Uno - Axel / Abel Pintos`,
    `Ven Devórame Otra Vez - Azúcar Moreno`,
    `Solo se vive una vez - Azúcar Moreno`,
    `La Bomba - Azul Azul`,
    `Bye bye - Babasónicos`,
    `Carismático - Babasónicos`,
    `Como eran las cosas - Babasónicos`,
    `El colmo - Babasónicos`,
    `El loco - Babasónicos`,
    `Irresponsables - Babasónicos`,
    `La izquierda de la noche - Babasónicos`,
    `Los calientes - Babasónicos`,
    `Pijamas - Babasónicos`,
    `Putita - Babasónicos`,
    `Y qué? - Babasónicos`,
    `Mi Primer Millón - Bacilos`,
    `Caraluna - Bacilos`,
    `Pasos de gigante - Bacilos`,
    `Guapas - Bandana`,
    `Malo - Bebe`,
    `Cuatro vientos - Bersuit Vergarabat`,
    `El baile de la gambeta - Bersuit Vergarabat`,
    `Esperando el impacto - Bersuit Vergarabat`,
    `La Argentinidad Al Palo - Bersuit Vergarabat`,
    `La bolsa - Bersuit Vergarabat`,
    `La soledad - Bersuit Vergarabat`,
    `Mi caramelo - Bersuit Vergarabat`,
    `Se viene - Bersuit Vergarabat`,
    `Sencillamente - Bersuit Vergarabat`,
    `Sr. Cobranza - Bersuit Vergarabat`,
    `Toco y me voy - Bersuit Vergarabat`,
    `Un pacto - Bersuit Vergarabat`,
    `Yo tomo - Bersuit Vergarabat`,
    `Olvídala - Binomio de Oro de América`,
    `Ha Vuelto el Matador - Cacho Castaña`,
    `Café la humedad - Cacho Castaña`,
    `Quieren matar al ladrón - Cacho Castaña`,
    `Cacho de Buenos Aires - Cacho Castaña`,
    `Tu recuerdo - CAE`,
    `Como Te Extraño Mi Amor - Café Tacvba`,
    `Ingrata - Café Tacvba`,
    `9 de Julio - Callejeros`,
    `Creo - Callejeros`,
    `Prohibido - Callejeros`,
    `Roncanroles sin destino - Callejeros`,
    `una nueva noche fría - Callejeros`,
    `Colgando en Tus Manos - Carlos Baute / Marta Sánchez`,
    `Entre a mi pago sin golpear - Carlos Carabajal`,
    `El día que me quieras - Carlos Gardel`,
    `Mi Buenos Aires querido - Carlos Gardel`,
    `Por una cabeza - Carlos Gardel`,
    `Caminito - Carlos Gardel`,
    `Volver - Carlos Gardel`,
    `Bailar Contigo - Carlos Vives`,
    `La Gota Fria - Carlos Vives`,
    `Canción Bonita - Carlos Vives / Ricky Martin`,
    `Robarte un beso - Carlos Vives / Sebastián Yatra`,
    `La Bicicleta - Carlos Vives / Shakira`,
    `A veces vuelvo - Catupecu Machu`,
    `Magia veneno - Catupecu Machu`,
    `Para vestirte hoy - Catupecu Machu`,
    `Y lo que quiero es que pises sin el suelo - Catupecu Machu`,
    `El chino - Celeste Carballo`,
    `Es la vida que me alcanza - Celeste Carballo`,
    `Me vuelvo cada día más loca - Celeste Carballo`,
    `Mi querido coronel Pringles - Celeste Carballo`,
    `Yo no te pido - Celeste Carballo`,
    `La vida es un carnaval - Celia Cruz`,
    `Guantanamera - Celia Cruz`,
    `Conociendote - César Banana Pueyrredón`,
    `La Ley y La Trampa - Chaqueño Palavecino`,
    `Amor salvaje - Chaqueño Palavecino`,
    `Cerca De La Revolución - Charly García`,
    `Demoliendo hoteles - Charly García`,
    `Fanky - Charly García`,
    `Hablando a tu corazón - Charly García`,
    `Me siento mucho mejor - Charly García`,
    `No me dejan salir - Charly García`,
    `No voy en tren - Charly García`,
    `Nos siguen pegando abajo - Charly García`,
    `Promesas sobre el bidet - Charly García`,
    `Yo No Quiero Volverme Tan Loco - Charly García`,
    `De mí - Charly García`,
    `Chipi chipi - Charly García`,
    `Buscando un símbolo de paz - Charly García`,
    `Los dinosaurios - Charly García`,
    `Hablando a Tu Corazón - Charly García / Pedro Aznar`,
    `Agachadita - Charly Sosa`,
    `Dejaría todo - Chayanne`,
    `Yo te amo - Chayanne`,
    `Atado a tu amor - Chayanne`,
    `Un sigo sin ti - Chayanne`,
    `Y tu te vas - Chayanne`,
    `Provocame - Chayanne`,
    `Torero - Chayanne`,
    `Salomé - Chayanne`,
    `Baila, baila - Chayanne`,
    `Boom, boom - Chayanne`,
    `Procura - Chichi Peralta`,
    `Amor narcótico - Chichi Peralta`,
    `La Ciguapa - Chichi Peralta`,
    `Arrancame la vida - Chico Novarro`,
    `Algo contigo - Chico Novarro`,
    `Mayonesa - Chocolate`,
    `Antes y después - Ciro y los Persas`,
    `Astros - Ciro y los Persas`,
    `Insisto - Ciro y los Persas`,
    `Luz de día - Ciro y los Persas`,
    `Me gusta - Ciro y los Persas`,
    `Mírenla - Ciro y los Persas`,
    `Vas a bailar - Ciro y los Persas`,
    `Como te lo digo - Commanche`,
    `Tonta - Commanche`,
    `Antes que ver el sol - Coti`,
    `Nada fue un error - Coti`,
    `Azul - Cristian Castro`,
    `Lloviendo estrellas - Cristian Castro`,
    `Lloran las rosas - Cristian Castro`,
    `No podrás - Cristian Castro`,
    `Ángel - Cristian Castro`,
    `Amor - Cristian Castro`,
    `La Sachapera - Cuti y Roberto Carabajal`,
    `Deja que me vaya - Cuti y Roberto Carabajal`,
    `Tratame Suavemente - Daniel Melero`,
    `Zamba para Olvidarte - Daniel Toro`,
    `Batida de Coco - Derek López`,
    `Color esperanza - Diego Torres`,
    `Penelope - Diego Torres`,
    `Sueños - Diego Torres`,
    `Tratar de estar mejor - Diego Torres`,
    `Un poquito - Diego Torres`,
    `Usted - Diego Torres`,
    `Qué será - Diego Torres`,
    `Abriendo caminos - Diego Torres`,
    `Se Que Ya No Volveras - Diego Torres`,
    `Que no me pierda - Diego Torres`,
    `Estamos juntos - Diego Torres`,
    `¿Qué tal? - Divididos`,
    `¿Qué ves? - Divididos`,
    `Ala delta - Divididos`,
    `Como un cuento - Divididos`,
    `El 38 - Divididos`,
    `El Arriero - Divididos`,
    `Nene de antes - Divididos`,
    `Par Mil - Divididos`,
    `Pepe Lui - Divididos`,
    `Sisters - Divididos`,
    `Spaguetti del rock - Divididos`,
    `La quiero a morir - DLG`,
    `Tiritando - Donald`,
    `Sin ti - Donato y Estéfano`,
    `Estoy enamorado - Donato y Estéfano`,
    `La Flor Azul - Dúo Coplanacu`,
    `Buen día Benito - El cuarteto de Nos`,
    `Lo malo de ser bueno - El cuarteto de Nos`,
    `Ya no sé qué hacer conmigo - El cuarteto de Nos`,
    `La sila del sol - El Símbolo`,
    `Levantando las manos - El Símbolo`,
    `1, 2, 3 - El Símbolo`,
    `No te preocupes - El Símbolo`,
    `Pa'delante Pa'tras (De Reversa) - El Símbolo`,
    `Ángel de los perdedores - El Soldado`,
    `En redondel - Ella es tan cargosa`,
    `Llueve - Ella es tan cargosa`,
    `Ni siquiera entre tus brazos - Ella es tan cargosa`,
    `Suavemente - Elvis Crespo`,
    `Timidez - Emanuel Ortega`,
    `Toda la vida - Emmanuel`,
    `Radios - Emmanuel Horvilleur`,
    `Igual Que Ayer - Enanitos Verdes`,
    `La cárcel - Enanitos Verdes`,
    `La muralla verde - Enanitos Verdes`,
    `Lamento boliviano - Enanitos Verdes`,
    `Luz de día - Enanitos Verdes`,
    `Cambalache - Enrique Santos Discepolo`,
    `Yira yira - Enrique Santos Discepolo`,
    `Cosas De La Vida - Eros Ramazzotti`,
    `Aire - Estelares`,
    `Ella dijo - Estelares`,
    `Es el amor - Estelares`,
    `Un dia perfecto - Estelares`,
    `Tu Calorro - Estopa`,
    `Amanece en la ruta - Fabiana Cantilo`,
    `Fue amor - Fabiana Cantilo`,
    `Mary Poppins y el deshollinador - Fabiana Cantilo`,
    `Nada es para siempre - Fabiana Cantilo`,
    `Calaveras y diablitos - Fabulosos Cadillacs`,
    `Demasiada presión - Fabulosos Cadillacs`,
    `El matador - Fabulosos Cadillacs`,
    `El satánico Dr. Cadillac - Fabulosos Cadillacs`,
    `La parte de adelante - Fabulosos Cadillacs`,
    `Mal bicho - Fabulosos Cadillacs`,
    `Manuel Santillán, el León - Fabulosos Cadillacs`,
    `Padre nuestro - Fabulosos Cadillacs`,
    `Siguiendo la luna - Fabulosos Cadillacs`,
    `Vasos Vacíos - Fabulosos Cadillacs`,
    `Azúcar amargo - Fey`,
    `El colesterol - Fito Olivares`,
    `11 y 6 - Fito Páez`,
    `A rodar mi vida - Fito Páez`,
    `Al lado del camino - Fito Páez`,
    `Brillante sobre el mic - Fito Páez`,
    `Dar es dar - Fito Páez`,
    `Dos en la ciudad - Fito Páez`,
    `El amor después del amor - Fito Páez`,
    `Fue amor - Fito Páez`,
    `Mariposa tecknicolor - Fito Páez`,
    `Polaroid de la locura ordinaria - Fito Páez`,
    `Tema de Piluso - Fito Páez`,
    `Tu vida mi vida - Fito Páez`,
    `Y dale alegría a mi corazón - Fito Páez`,
    `Llueve Sobre Mojado - Fito Páez / Joaquín Sabina`,
    `Te mando flores - Fonseca`,
    `Te Amo - Franco De Vita`,
    `Solo importas tú - Franco De Vita`,
    `Meneaito - Gaby`,
    `Mi Historia Entre Tus Dedos - Gianluca Grignani`,
    `No me Arrepiento de este Amor - Gilda`,
    `Paisaje - Gilda`,
    `Fuiste - Gilda`,
    `Se me ha perdido - Gilda`,
    `Corazón valiente - Gilda`,
    `Mi tierra - Gloria Estefan`,
    `Oye - Gloria Estefan`,
    `No podré olvidarme - Grupo Red`,
    `Reyes de la noche - Guasones`,
    `Tan distintos - Guasones`,
    `Adiós - Gustavo Cerati`,
    `Crimen - Gustavo Cerati`,
    `Deja vu - Gustavo Cerati`,
    `Lago en el cielo - Gustavo Cerati`,
    `Puente - Gustavo Cerati`,
    `Asalto De Cumbia - Gustavo Cordera`,
    `La bomba loca - Gustavo Cordera`,
    `Soy Mi Soberano - Gustavo Cordera`,
    `Caribe azul - Hilda Lizarazu`,
    `Hace frío ya - Hilda Lizarazu`,
    `Sola en los bares - Hilda Lizarazu`,
    `Todo cambia - Hilda Lizarazu`,
    `El tesoro de los inocentes - Indio Solari y los fundamentalistas del aire acondicionado`,
    `Encuentro con un ángel amateur - Indio Solari y los fundamentalistas del aire acondicionado`,
    `Flight 956 - Indio Solari y los fundamentalistas del aire acondicionado`,
    `Había una vez - Indio Solari y los fundamentalistas del aire acondicionado`,
    `Y mientras tanto el sol se muere - Indio Solari y los fundamentalistas del aire acondicionado`,
    `Está saliendo el sol - Intoxicados`,
    `Fuego - Intoxicados`,
    `Nunca quise - Intoxicados`,
    `Amándote - Jaime Roos`,
    `Se parece mas a ti - Jambao`,
    `La Flaca - Jarabe de Palo`,
    `Depende - Jarabe de Palo`,
    `Tranquila - Javier García`,
    `Esos Locos Bajitos - Joan Manuel Serrat`,
    `19 días y 500 noches - Joaquín Sabina`,
    `Contigo - Joaquín Sabina`,
    `Por el bulevar de los sueños rotos - Joaquín Sabina`,
    `Y nos dieron las diez - Joaquín Sabina`,
    `Y sin embargo - Joaquín Sabina`,
    `Dieguitos y Mafaldas - Joaquín Sabina`,
    `Peor para el sol - Joaquín Sabina`,
    `El Baile De La Botella - Joe Luciano`,
    `Vuelve Primavera - Johnny Tedesco`,
    `Estás Para Ganar - Johny Tolengo`,
    `Zamba de mi esperanza - Jorge Cafrune`,
    `Virgen india - Jorge Cafrune y Marito`,
    `Me haces bien - Jorge Drexler`,
    `El Rey - José Alfredo Jiménez`,
    `Diosito Santo - José Luis (Puma) Rodríguez`,
    `La moza - José Luis (Puma) Rodríguez`,
    `Porque Te Vas - Jose Luis Perales`,
    `¿Y cómo es él? - Jose Luis Perales Oficial`,
    `Descontrolado - Jovenes Pordioseros`,
    `Nunca me enseñaste - Jovenes Pordioseros`,
    `Era En Abril - Juan Carlos Baglietto`,
    `La vida es una moneda - Juan Carlos Baglietto`,
    `La Bilirrubina - Juan Luis Guerra`,
    `Burbujas de Amor - Juan Luis Guerra`,
    `Volverte a ver - Juanes`,
    `Me enamora - Juanes`,
    `La Camisa Negra - Juanes`,
    `A Dios le pido - Juanes`,
    `Me Voy - Julieta Venegas`,
    `Limón y sal - Julieta Venegas`,
    `Eres para mí - Julieta Venegas`,
    `Lento - Julieta Venegas`,
    `Todo cambia - Julio Numhauser`,
    `Desearia - Kapanga`,
    `El mono relojero - Kapanga`,
    `Fumar - Kapanga`,
    `Me mata - Kapanga`,
    `No me sueltes (es posible) - Kapanga`,
    `Mamá yo quiero - King África`,
    `Porque te amo - La Cumbia`,
    `Fue tan bueno - La Franela`,
    `Hacer un puente - La Franela`,
    `El Extraño del Pelo Largo - La Joven Guardia`,
    `Día cero - La ley`,
    `El duelo - La ley`,
    `El último adiós - La ley`,
    `Mentira - La ley`,
    `Aquí - La ley`,
    `Arde la ciudad - La Mancha de Rolando`,
    `Calavera - La Mancha de Rolando`,
    `Carolina - La Mancha de Rolando`,
    `Chino - La Mancha de Rolando`,
    `Donde vamos - La Mancha de Rolando`,
    `Blues del equipaje - La Mississippi`,
    `Bum, bum - La Mona Jiménez`,
    `Beso a beso - La Mona Jiménez`,
    `Baila Para Mí - La Mosca Tse Tse`,
    `Cha cha cha - La Mosca Tse Tse`,
    `Para No Verte Más - La Mosca Tse Tse`,
    `Te quiero comer la boca - La Mosca Tse Tse`,
    `Todos Tenemos Un Amor - La Mosca Tse Tse`,
    `Yo te quiero dar - La Mosca Tse Tse`,
    `Iluminará - La Nueva Luna`,
    `Y ahora te vas - La Nueva Luna`,
    `Te vas a arrepentir - La Nueva Luna`,
    `Rosas - La Oreja de Van Gogh`,
    `nada es igual - La Portuaria`,
    `Selva - La Portuaria`,
    `Un Dia Cualquiera (El Bar De La Calle Rodney) - La Portuaria`,
    `A tu lado - La Renga`,
    `Balada del diablo y la muerte - La Renga`,
    `Cuando estés acá - La Renga`,
    `El final es en donde partí - La Renga`,
    `El revelde - La Renga`,
    `La razón que te demora - La Renga`,
    `Lo frágil de la locura - La Renga`,
    `Panic Show - La Renga`,
    `Triste canción de amor - La Renga`,
    `Veneno - La Renga`,
    `Voy a bailar a la nave del olvido - La Renga`,
    `La Locura Automática - La Secta`,
    `Clarobscuro - La Vela Puerca`,
    `De atar - La Vela Puerca`,
    `El viejo - La Vela Puerca`,
    `En el limbo - La Vela Puerca`,
    `José Sabía - La Vela Puerca`,
    `Llenos de magia - La Vela Puerca`,
    `Para no verme más - La Vela Puerca`,
    `Por la ciudad - La Vela Puerca`,
    `Va a escampar - La Vela Puerca`,
    `Zafar - La Vela Puerca`,
    `Traición A La Mexicana - La Zimbabwe`,
    `Loco de Atar - La Zimbabwe`,
    `Verano Del '57 - La Zimbabwe`,
    `Asereje - Las Ketchup`,
    `Ojos de dragón! - Las Pastillas del Abuelo`,
    `Otra vuelta de tuerca - Las Pastillas del Abuelo`,
    `Qué es dios? - Las Pastillas del Abuelo`,
    `Rompecabezas de amor - Las Pastillas del Abuelo`,
    `Brilla (shine) - Las Pelotas`,
    `Cuándo podrás amar - Las Pelotas`,
    `Pasajeros - Las Pelotas`,
    `Personalmente - Las Pelotas`,
    `Será - Las Pelotas`,
    `Si supieras - Las Pelotas`,
    `Victimas del cielo - Las Pelotas`,
    `Ya lo sabés - Las Pelotas`,
    `El muerto se fue de rumba - Las Sabrosas Zarigüellas`,
    `Morrissey - Leo García`,
    `Después de ti - Leo Mattioli`,
    `Bandidos rurales - León Gieco`,
    `El ángel de la bicicleta - León Gieco`,
    `El fantasma de Canterville - León Gieco`,
    `En el país de la libertad - León Gieco`,
    `Los salieris de Charly - León Gieco`,
    `Ojo Con Los Orozco - León Gieco`,
    `Pensar en nada - León Gieco`,
    `Solo le pido a Dios - León Gieco`,
    `O Quizá Simplemente Le Regale Una Rosa - Leonardo Favio`,
    `La Güera Salomé - Lía Crucet`,
    `Qué bello - Lía Crucet`,
    `Solo se trata de vivir - Litto Nebbia`,
    `Así es el calor - Los abuelos de la nada`,
    `Chalamán - Los abuelos de la nada`,
    `Cosas mías - Los abuelos de la nada`,
    `Costumbres argentinas - Los abuelos de la nada`,
    `Himno a mi corazón - Los abuelos de la nada`,
    `Lunes por la madrugada - Los abuelos de la nada`,
    `Mil horas - Los abuelos de la nada`,
    `Sin gamulán - Los abuelos de la nada`,
    `Tristeza de la ciudad - Los abuelos de la nada`,
    `Cómo Te Voy A Olvidar - Los Ángeles Azules`,
    `Amor - Los Auténticos Decadentes`,
    `Besándote - Los Auténticos Decadentes`,
    `Como Me Voy a Olvidar - Los Auténticos Decadentes`,
    `Corazón - Los Auténticos Decadentes`,
    `Diosa - Los Auténticos Decadentes`,
    `El murguero - Los Auténticos Decadentes`,
    `El pájaro vio el cielo y se voló - Los Auténticos Decadentes`,
    `Golpes en el corazón - Los Auténticos Decadentes`,
    `La guitarra - Los Auténticos Decadentes`,
    `La Marca de la Gorra - Los Auténticos Decadentes`,
    `Loco (Tu forma de ser) - Los Auténticos Decadentes`,
    `Los piratas - Los Auténticos Decadentes`,
    `No me importa el dinero - Los Auténticos Decadentes`,
    `Oro - Los Auténticos Decadentes`,
    `Siga El Baile - Los Auténticos Decadentes`,
    `Un osito de peluche de Taiwán - Los Auténticos Decadentes`,
    `Vení Raquel - Los Auténticos Decadentes`,
    `Kanishka - Los Brujos`,
    `Avanti morocha - Los Caballeros de la Quema`,
    `Fulanos de nadie - Los Caballeros de la Quema`,
    `Oxidado - Los Caballeros de la Quema`,
    `Sapo de otro pozo - Los Caballeros de la Quema`,
    `Bastará - Los Cafres`,
    `Casi que me pierdo - Los Cafres`,
    `Si el amor se cae - Los Cafres`,
    `Tus ojos - Los Cafres`,
    `Aire - Los Cafres`,
    `Mostrame como sos - Los Cafres`,
    `Kilómetros - Los Caligaris`,
    `Quereme Así - Los Caligaris`,
    `Razón - Los Caligaris`,
    `Todos locos - Los Caligaris`,
    `Te sigo - Los Calzones`,
    `Vete de mi lado - Los Chakales`,
    `Amores como el nuestro - Los Charros`,
    `Me Quedo Contigo - Los Chunguitos`,
    `Jurabas tú - Los del Fuego`,
    `Macarena - Los del Río`,
    `El baile del pimpollo - Los Delfines`,
    `Calaveras y diablitos - Los Fabulosos Cadillacs`,
    `Demasiada presión - Los Fabulosos Cadillacs`,
    `El matador - Los Fabulosos Cadillacs`,
    `La parte de adelante - Los Fabulosos Cadillacs`,
    `Mal bicho - Los Fabulosos Cadillacs`,
    `Manuel Santillán, el León - Los Fabulosos Cadillacs`,
    `Padre nuestro - Los Fabulosos Cadillacs`,
    `Siguiendo la luna - Los Fabulosos Cadillacs`,
    `Vasos Vacíos - Los Fabulosos Cadillacs`,
    `Yo te avisé - Los Fabulosos Cadillacs`,
    `Muchacha triste - Los Fantasmas del Caribe`,
    `Bicho, bicho - Los Fatales`,
    `Comadre Compadre - Los Fatales`,
    `Ayer nomás - Los Gatos`,
    `Donde está esa promesa - Los Gatos`,
    `La balsa - Los Gatos`,
    `Rock de la mujer perdida - Los Gatos`,
    `Viento, Dile a la lluvia - Los Gatos`,
    `Chacarera del Rancho - Los hermanos Ábalos`,
    `La rubia en el avión - Los Ladrones Sueltos`,
    `No le dijo nada - Los Ladrones Sueltos`,
    `Canción de despedida - Los Lunes`,
    `Él soy yo - Los Mensajeros del Amor`,
    `Por Eso Vivo - Los Moykanos`,
    `Otra Vez en la Vía - Los Náufragos`,
    `De Boliche en Boliche - Los Náufragos`,
    `Zapatos Rotos - Los Náufragos`,
    `Yo en Mi Casa y Ella en el Bar - Los Náufragos`,
    `Entre la tierra y el cielo - Los Nocheros`,
    `La Yapa - Los Nocheros`,
    `No Saber De Ti - Los Nocheros`,
    `El bombón - Los Palmeras`,
    `Soy Sabalero - Los Palmeras`,
    `Perfidia - Los Panchos`,
    `Complicado y aturdido - Los Pericos`,
    `La distancia - Los Pericos`,
    `Mucha experiencia - Los Pericos`,
    `Párate y mira - Los Pericos`,
    `Pupilas lejanas - Los Pericos`,
    `Runaway - Los Pericos`,
    `Sin cadenas - Los Pericos`,
    `Waitin' - Los Pericos`,
    `Bajo la Rambla - Los Perros`,
    `Ando ganas (Llora llora) - Los Piojos`,
    `Bicho de ciudad - Los Piojos`,
    `Civilización - Los Piojos`,
    `Como Alí - Los Piojos`,
    `El farolito - Los Piojos`,
    `Pacífico - Los Piojos`,
    `Ruleta - Los Piojos`,
    `Tan solo - Los Piojos`,
    `Verano del 92 - Los Piojos`,
    `Vine hasta aquí - Los Piojos`,
    `Casualidad - Los Rancheros`,
    `Aquí no podemos hacerlo - Los Rodriguez`,
    `Diez años después - Los Rodriguez`,
    `Dulce condena - Los Rodriguez`,
    `Me estás atrapando otra vez - Los Rodriguez`,
    `Mi enfermedad - Los Rodriguez`,
    `Milonga del marinero y el capitán - Los Rodriguez`,
    `Mucho mejor - Los Rodriguez`,
    `Para no olvidar - Los Rodriguez`,
    `Salud, dinero y amor - Los Rodriguez`,
    `Sin documentos - Los Rodriguez`,
    `Todavía una canción de amor - Los Rodriguez`,
    `Salud (dinero y amor) - Los Rodriguez`,
    `Decile Que Lo Quiero - Los Sultanes`,
    `Agente, agente - Los Sultanes`,
    `Brujería - Los Tipitos`,
    `Campanas en la noche - Los Tipitos`,
    `Silencio - Los Tipitos`,
    `Fuego en Anymaná - Los trovadores`,
    `Cleopatra, la reina del twist - Los Twist`,
    `El estudiante - Los Twist`,
    `Pensé que se trataba de cieguitos - Los Twist`,
    `Ricardo Ruben - Los Twist`,
    `Twist de Luis - Los Twist`,
    `Atrevete a Mirarme de Frente - Los Wawancó`,
    `Y así, y así - Luciano Pereyra`,
    `Malena - Lucio Demare`,
    `Barro tal vez - Luis Alberto Spinetta`,
    `No te alejes tanto de mí - Luis Alberto Spinetta`,
    `Quedándote o yéndote - Luis Alberto Spinetta`,
    `Seguir viviendo sin tu amor - Luis Alberto Spinetta`,
    `Ya no mires atrás - Luis Alberto Spinetta`,
    `Yo No Se Mañana - Luis Enrique`,
    `Quisiera Poder Olvidarme De Ti - Luis Fonsi`,
    `No me doy por vencido - Luis Fonsi`,
    `Ahora te puedes marchar - Luis Miguel`,
    `Culpable o No (Miénteme Como Siempre) - Luis Miguel`,
    `Entregate - Luis Miguel`,
    `Hasta Que Me Olvides - Luis Miguel`,
    `La Chica del Bikini Azul - Luis Miguel`,
    `La Incondicional - Luis Miguel`,
    `La media vuelta - Luis Miguel`,
    `Tengo Todo Excepto A Ti - Luis Miguel`,
    `Cuando calienta el sol - Luis Miguel`,
    `Será que no me amas - Luis Miguel`,
    `Suave - Luis Miguel`,
    `El Oficio De Ser Mamá - Macaferri & Asociados`,
    `Vuela, Vuela - Magneto`,
    `A Veces - Mambrú`,
    `Caribe azul - Man Ray`,
    `Sola en los bares - Man Ray`,
    `Todo cambia - Man Ray`,
    `Vivir sin aire - Maná`,
    `De Pies A Cabeza - Maná`,
    `Cariposa traicionera - Maná`,
    `Labios compartidos - Maná`,
    `Oye mi amor - Maná`,
    `En el muelle de San Blás - Maná`,
    `Se me olvidó otra vez - Maná`,
    `Clavado en un bar - Maná`,
    `Jugo de tomate - Manal`,
    `Me gustas tú - Manu Chao`,
    `Clandestino - Manu Chao`,
    `Rescata mi corazón - Manuel Wirzt`,
    `Hoy te necesito - Manuel Wirzt`,
    `Donde quieras que estés - Manuel Wirzt`,
    `Ahora quién - Marc Anthony`,
    `Flor Pálida - Marc Anthony`,
    `Tu Amor Me Hace Bien - Marc Anthony`,
    `Valio La Pena - Marc Anthony`,
    `Vivir mi vida - Marc Anthony`,
    `Y Hubo Alguien - Marc Anthony`,
    `Corazón Salvaje - Marcela Morelo`,
    `Te está pasando lo mismo que a mí - Marcela Morelo`,
    `La fuerza del engaño - Marcela Morelo`,
    `Si No Te Hubieras Ido - Marco Antonio Solis`,
    `Tu cárcel - Marco Antonio Solis`,
    `Uno - Mariano Mores`,
    `Bonita y Mentirosa - Mario Luis`,
    `Loquito por ti - Mario Luis`,
    `Desesperada - Marta Sánchez`,
    `La bifurcada - Menphis la Blusera`,
    `La flor más bella - Menphis la Blusera`,
    `La última lágrima - Menphis la Blusera`,
    `Montón de nada - Menphis la Blusera`,
    `Moscato, pizza y fainá - Menphis la Blusera`,
    `Fuego En Anymaná - Mercedes Sosa`,
    `Alfonsina y el mar - Mercedes Sosa (Luna - Ramírez)`,
    `Cuando Seas Grande - Miguel Mateos & Zas`,
    `Es tan fácil romper un corazon - Miguel Mateos & Zas`,
    `Tirá para arriba - Miguel Mateos & Zas`,
    `Don - Miranda`,
    `Donde está esa promesa - Miranda`,
    `Fantasmas - Miranda`,
    `Mentía - Miranda`,
    `Perfecta - Miranda`,
    `Prisionero - Miranda`,
    `Tu misterioso alguien - Miranda`,
    `Yo te diré - Miranda`,
    `Un mundo ideal - Montaner / Michelle`,
    `De nada sirve - Moris`,
    `El oso - Moris`,
    `Ayer Nomás - Moris`,
    `Me Muero de Amor - Natalia Oreiro`,
    `Tu veneno - Natalia Oreiro`,
    `Cambio dolor - Natalia Oreiro`,
    `Laura no está - Nek`,
    `Gelatina - Nietos del Futuro`,
    `Un beso y una flor - Nino Bravo`,
    `América, América - Nino Bravo`,
    `Libre - Nino Bravo`,
    `A las nueve - No te va a gustar`,
    `Al vacío - No te va a gustar`,
    `Chau - No te va a gustar`,
    `De nada sirve - No te va a gustar`,
    `Ese maldito momento - No te va a gustar`,
    `No te imaginás - No te va a gustar`,
    `Tan lejos - No te va a gustar`,
    `Venganza - No te va a gustar`,
    `Verte reír - No te va a gustar`,
    `Inundados - Os Paralamas do Sucesso`,
    `¡Oh Mamá! Ella Me Ha Besado - Pablo Ruiz`,
    `La Felicidad - Palito Ortega`,
    `Corazón Contento - Palito Ortega`,
    `Yo tengo fe - Palito Ortega`,
    `Un muchacho como yo - Palito Ortega`,
    `Despeinada - Palito Ortega / Chico Novarro`,
    `Cachete, pechito y ombligo - Pancho y La Sonora Colorada`,
    `Blues para mi guitarra - Pappo's Blues`,
    `Desconfío - Pappo's Blues`,
    `El hombre suburbano - Pappo's Blues`,
    `El tren de las 16 - Pappo's Blues`,
    `Juntos a la par - Pappo's Blues`,
    `Mi vieja - Pappo's Blues`,
    `Rock and roll y fiebre - Pappo's Blues`,
    `Ruta 66 - Pappo's Blues`,
    `Sandwiches de miga - Pappo's Blues`,
    `Stratocaster Boggie - Pappo's Blues`,
    `Sucio y desprolijo - Pappo's Blues`,
    `Tomé demasiado - Pappo's Blues`,
    `Endulzame Los Oídos - Patricia Sosa`,
    `Aprender a volar - Patricia Sosa`,
    `Esa estrella era mi lujo - Patricio Rey y sus redonditos de ricota`,
    `Ji Ji Ji - Patricio Rey y sus redonditos de ricota`,
    `La bestia Pop - Patricio Rey y sus redonditos de ricota`,
    `La hija del fletero - Patricio Rey y sus redonditos de ricota`,
    `Tarea fina - Patricio Rey y sus redonditos de ricota`,
    `Un ángel para tu soledad - Patricio Rey y sus redonditos de ricota`,
    `Un poco de amor francés - Patricio Rey y sus redonditos de ricota`,
    `Vencedores vencidos - Patricio Rey y sus redonditos de ricota`,
    `Yo canival - Patricio Rey y sus redonditos de ricota`,
    `Perro dinamita - Patricio Rey y sus redonditos de ricota`,
    `Lo haré por ti - Paulina Rubio`,
    `A primera vista - Pedro Aznar`,
    `Mientes - Pedro Aznar`,
    `Yo Vivo en Esta Ciudad - Pedro y Pablo`,
    `A Starosta, el idiota - Pescado Rabioso`,
    `Bajan - Pescado Rabioso`,
    `Cantata de puentes amarillos - Pescado Rabioso`,
    `Cementerio Club - Pescado Rabioso`,
    `Despiértate nena - Pescado Rabioso`,
    `Las habladurias del mundo - Pescado Rabioso`,
    `Me gusta ese tajo - Pescado Rabioso`,
    `Porque te vas… - Pescado Rabioso`,
    `Post-Crucifixion - Pescado Rabioso`,
    `Superchería - Pescado Rabioso`,
    `Todas las hojas son del viento - Pescado Rabioso`,
    `Sacrificio y rock and roll - Pier`,
    `Mi viejo - Piero`,
    `Olvidame y Pega la Vuelta - Pimpinela`,
    `El hijo de cuca - Pocho La Pantera`,
    `Un Montón De Estrellas - Polo Montañez`,
    `Tiburón - Proyecto Uno`,
    `Mentirosa - Ráfaga`,
    `Una cerveza - Ráfaga`,
    `Agüita - Ráfaga`,
    `Una Ráfaga de Amor - Ráfaga`,
    `Fiesta - Raffaella Carrà`,
    `Hay Que Venir Al Sur (Tanti Auguri) - Raffaella Carrà`,
    `Aún estás en mis sueños - Rata Blanca`,
    `La leyenda del hada y el mago - Rata Blanca`,
    `Mujer amante - Rata Blanca`,
    `Talismán - Rata Blanca`,
    `Para siempre - Ratones Paranoicos`,
    `Rock del gato - Ratones Paranoicos`,
    `Rock del pedazo - Ratones Paranoicos`,
    `Sigue girando - Ratones Paranoicos`,
    `Vicio - Ratones Paranoicos`,
    `Ya morí - Ratones Paranoicos`,
    `Bailando en la vereda - Raúl Porchetto`,
    `Señora de las Cuatro Décadas - Ricardo Arjona`,
    `El Problema - Ricardo Arjona`,
    `Te conozco - Ricardo Arjona`,
    `Minutos - Ricardo Arjona`,
    `Dime que no - Ricardo Arjona`,
    `Mujeres - Ricardo Arjona`,
    `Volver - Ricardo Montaner`,
    `Déjame Llorar - Ricardo Montaner`,
    `Castillo azul - Ricardo Montaner`,
    `Me va a extrañar - Ricardo Montaner`,
    `Cachita - Ricardo Montaner`,
    `Tan enamorados - Ricardo Montaner`,
    `Que Tendrá El Petiso - Ricky Maravilla`,
    `Dime Que Me Quieres - Ricky Martin`,
    `Disparo al Corazón - Ricky Martin`,
    `La Mordidita - Ricky Martin`,
    `Livin' La Vida Loca - Ricky Martin`,
    `María - Ricky Martin`,
    `Pégate - Ricky Martin`,
    `Tal vez - Ricky Martin`,
    `Te Extraño, Te Olvido, Te Amo - Ricky Martin`,
    `Tu recuerdo - Ricky Martin`,
    `Vente pa' ca - Ricky Martin`,
    `Vuelve - Ricky Martin`,
    `La copa de la vida - Ricky Martin`,
    `Fuego contra fuego - Ricky Martin`,
    `Nada es imposible - Ricky Martin`,
    `No obstante lo cual - Riff`,
    `Que sea rock - Riff`,
    `Sube a mi Voiture - Riff`,
    `La Bamba - Ritchie Valens`,
    `Amigo - Roberto Carlos`,
    `Naranjo en Flor - Roberto Goyeneche`,
    `Amor calsificado - Rodrigo`,
    `Lo mejor del amor - Rodrigo`,
    `Ocho cuarenta - Rodrigo`,
    `Soy cordobés - Rodrigo`,
    `Como le digo - Rodrigo`,
    `El talisman - Rosana`,
    `A fuego lento - Rosana`,
    `Si tu no estás aquí - Rosana`,
    `Estoy Aqui - Rosario`,
    `Pedro Navaja - Ruben Blades`,
    `Cha Cha, Muchacha - Ruben Rada`,
    `Muriendo De Plena - Ruben Rada`,
    `Estoy Hecho un Demonio - Safari`,
    `Rosa, rosa - Sandro`,
    `Porque Yo Te Amo - Sandro`,
    `Tengo - Sandro`,
    `Penumbras - Sandro`,
    `Dame el fuego de tu amor - Sandro`,
    `Corazón espinado - Santana / Maná`,
    `Movidito, movidito - Sebastián`,
    `Quiero Tener Tu Presencia - Seguridad Social`,
    `Bailar pegados - Sergio Dalma`,
    `Te Quiero Tanto - Sergio Denis`,
    `Un poco loco - Sergio Denis`,
    `Canción de Alicia en el país - Serú Girán`,
    `Cinema Verité - Serú Girán`,
    `Eiti Leda - Serú Girán`,
    `La grasa de las capitales - Serú Girán`,
    `Mundo agradable - Serú Girán`,
    `Nos veremos otra vez - Serú Girán`,
    `Peperina - Serú Girán`,
    `Salir de la melancolía - Serú Girán`,
    `Seminare - Serú Girán`,
    `Viernes, 3AM - Serú Girán`,
    `No llores por mí, Argentina - Serú Girán`,
    `Chantaje - Shakira`,
    `Ciega, Sordomuda - Shakira`,
    `Hips Don't Lie - Shakira`,
    `La La La - Shakira`,
    `La Tortura - Shakira`,
    `Las de la Intuición - Shakira`,
    `Loca - Shakira`,
    `Ojos así - Shakira`,
    `Perro Fiel - Shakira`,
    `Te Aviso, Te Anuncio - Shakira`,
    `Tú - Shakira`,
    `Waka Waka (This Time For Africa) - Shakira`,
    `Pies descalzos, sueños blancos - Shakira`,
    `Suerte - Shakira`,
    `No creo - Shakira`,
    `Día de enero - Shakira`,
    `Te dejo Madrid - Shakira`,
    `Si te vas - Shakira`,
    `Estoy aquí - Shakira`,
    `La Tortura - Shakira / Alejandro Sanz`,
    `Unicornio - Silvio Rodríguez`,
    `Ojalá - Silvio Rodríguez`,
    `Sirena - Sin Bandera`,
    `Entra en mi vida - Sin Bandera`,
    `Cuando pase el temblor - Soda Stereo`,
    `De música ligera - Soda Stereo`,
    `En la ciudad de la furia - Soda Stereo`,
    `Nada personal - Soda Stereo`,
    `Persiana americana - Soda Stereo`,
    `Prófugos - Soda Stereo`,
    `Té para tres - Soda Stereo`,
    `Trátame suavemente - Soda Stereo`,
    `Un misil en mi placard - Soda Stereo`,
    `A don Ata - Soledad Pastorutti`,
    `Que nadie sepa mi sufrir - Soledad Pastorutti`,
    `Tren del cielo - Soledad Pastorutti`,
    `Pega la vuelta - Sombras`,
    `La ventanita - Sombras`,
    `A Puro Dolor - Son By Four`,
    `Cheques - Spinetta Y Los Socios Del Desierto`,
    `Cuenta en el sol - Spinetta Y Los Socios Del Desierto`,
    `Jardín de gente - Spinetta Y Los Socios Del Desierto`,
    `Nasty People - Spinetta Y Los Socios Del Desierto`,
    `Perdido en ti - Spinetta Y Los Socios Del Desierto`,
    `Rezo por vos - Spinetta/García`,
    `Aprendizaje - Sui Generis`,
    `Bienvenidos al tren - Sui Generis`,
    `Canción para mi muerte - Sui Generis`,
    `Confesiones de Invierno - Sui Generis`,
    `El día que apagaron la luz - Sui Generis`,
    `El tuerto y los ciegos - Sui Generis`,
    `Estación - Sui Generis`,
    `Necesito - Sui Generis`,
    `Quizás, porque - Sui Generis`,
    `Rasguña las piedras - Sui Generis`,
    `Cra Chan - Sumo`,
    `Estallando desde el océano - Sumo`,
    `Heroína - Sumo`,
    `Hola Frank - Sumo`,
    `La rubia tarada - Sumo`,
    `Los viejos vinagres - Sumo`,
    `Mañana en el Abasto - Sumo`,
    `Mejor no hablar de ciertas cosas - Sumo`,
    `No tan distintos - Sumo`,
    `Regtest - Sumo`,
    `Ciudad mágica - Tan Biónica`,
    `La melodía de Dios - Tan Biónica`,
    `Loca - Tan Biónica`,
    `Obsesionario en la mayor - Tan Biónica`,
    `Tu amor - Tango 4`,
    `Mientes - Tango 4`,
    `Amor A La Mexicana - Thalia`,
    `Arrasando - Thalia`,
    `Piel morena - Thalia`,
    `Hasta Que Salga El Sol - The Orions`,
    `Ya llegó la primavera - The Sacados`,
    `Mas de Lo Que Te Imaginas - The sacados`,
    `Se dice de mi - Tita Merello`,
    `Kilómetro 11 - Tránsito Cocomarola`,
    `Loco un poco - Turf`,
    `Magia blanca - Turf`,
    `No se llama amor - Turf`,
    `Pasos al costado - Turf`,
    `Yo no me quiero casar, y usted? - Turf`,
    `El Amor Es Más Fuerte - Ulises Butrón (Tango Feroz)`,
    `Me Das Cada Día Más - Valeria Lynch`,
    `Que ganas de no verte nunca más - Valeria Lynch`,
    `Ámame en cámara lenta - Valeria Lynch`,
    `Algo contigo - Vicentico`,
    `Los caminos de la vida - Vicentico`,
    `No te apartes de mi - Vicentico`,
    `Paisaje - Vicentico`,
    `Se despierta la ciudad - Vicentico`,
    `Solo un momento - Vicentico`,
    `Todavía cantamos - Victor Heredia`,
    `Homero - Viejas Locas`,
    `Me gustas mucho - Viejas Locas`,
    `Todo sigue igual - Viejas Locas`,
    `Auto rojo - Vilma Palma e Vampiros`,
    `Bye Bye (Dejame) - Vilma Palma e Vampiros`,
    `Pachanga - Vilma Palma e Vampiros`,
    `El Baile del Ladrillo - Violeta Rivas`,
    `Qué suerte! - Violeta Rivas`,
    `Amor descartable - Virus`,
    `Hay Que Salir del Agujero Interior - Virus`,
    `Imágenes paganas - Virus`,
    `Luna de miel en la mano - Virus`,
    `Pronta entrega - Virus`,
    `Sin disfraz - Virus`,
    `Lollipop - Viuda e hijas de Roque Enroll`,
    `Esa malvada - Volcán`,
    `El momento en que estás - Vox Dei`,
    `Genesis - Vox Dei`,
    `Libros Sapienciales - Vox Dei`,
    `Presente - Vox Dei`,
    `Sin separarnos más - Vox Dei`,
    `Por lo que yo te quiero - Walter Olmos`,
    `Adicto a ti - Walter Olmos`,
    `Vienes y te vas - William Luna`,
    `Ven a bailar - Yamana`,
    `Tractor Amarillo - Zapato Veloz`,    
];