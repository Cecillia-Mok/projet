import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.gameCard.deleteMany()
    await prisma.choice.deleteMany()
    await prisma.card.deleteMany()
    await prisma.game.deleteMany()
    // await prisma.user.deleteMany()
    // 1. Créer une partie avec un utilisateur
    const user = await prisma.user.create({
        data: {
            pseudo: "pili",
            email: "pili@pili.com",
            password: "$2b$10$4k/xG5yz9aDhgxkS/l7WLuq8zLTPOWiaboCf4I4J7GppEFz6nqy3.",
        },
    });

    if (!user) {
        throw new Error("Utilisateur non trouvé.");
    }

    const game = await prisma.game.create({
        data: {
            game_start_date: new Date(),
            user_id: user.user_id,
        },
    });

    // 2. Créer les cartes
    const carte1A = await prisma.card.create({
        data: {
            titre: "Messagers du Nord",
            texte: "Une délégation de la dynastie Han approche avec une demande de traité commercial.",
            statut: "continuer",
        },
    });

    const carte1B = await prisma.card.create({
        data: {
            titre: "Fin du règne",
            texte: "Le royaume gagne en influence... mais devient dépendant. Le peuple est mécontent.",
            statut: "fin de partie",
        },
    });

    const carte1C = await prisma.card.create({
        data: {
            titre: "Ombres du Champa",
            texte: "Le royaume voisin à l'est étend son influence dans la région.",
            statut: "continuer",
        },
    });

    const carte1D = await prisma.card.create({
        data: {
            titre: "Savoir sacré",
            texte: "Des textes que l'on dit sacrés qui apporteraient une grande sagesse à ceux qui les lisent circulent depuis des pays à l'ouest.",
            statut: "continuer",
        },
    });

    const carte1E = await prisma.card.create({
        data: {
            titre: "Rituels rivaux",
            texte: "Les prêtres animistes dénoncent les nouveaux cultes hindous venus d’Inde.",
            statut: "continuer",
        },
    });

    const carte2A = await prisma.card.create({
        data: {
            titre: "Jayavarman parle",
            texte: "Jayavarman II est nouveau roi par la force. Il veut imposer le bouddhisme mahāyāna à tout l’empire.",
            statut: "continuer",
        },
    });

    const carte2B = await prisma.card.create({
        data: {
            titre: "Construction du Temple d’Angkor Wat",
            texte: "Une sécheresse frape le pays pendant la construction du temple.",
            statut: "continuer",
        },
    });

    const carte2C = await prisma.card.create({
        data: {
            titre: "L’ombre d’Angkor",
            texte: "Les premières révoltes éclatent dans les provinces.",
            statut: "continuer",
        },
    });

    const carte2D = await prisma.card.create({
        data: {
            titre: "Fin du règne",
            texte: "La capitale tient quelques temps mais la haine enfle.",
            statut: "fin de partie",
        },
    });

    const carte2E = await prisma.card.create({
        data: {
            titre: "Frontières brûlantes",
            texte: "Le Champa et le Siam se renforcent. Le général attend vos ordres.",
            statut: "continuer",
        },
    });

    const carte3A = await prisma.card.create({
        data: {
            titre: "Le Pacte français",
            texte: 'La France vous propose sa "protection" contre le Siam et le Vietnam.',
            statut: "continuer",
        },
    });

    const carte3B = await prisma.card.create({
        data: {
            titre: "Fin du règne",
            texte: "Un sursaut d’honneur... suivi d’une invasion inévitable par les pays voisins.",
            statut: "fin de partie",
        },
    });

    const carte3C = await prisma.card.create({
        data: {
            titre: "L’impôt de la honte",
            texte: "Les riziculteurs doivent céder une part écrasante de leur récolte à l’administration coloniale.",
            statut: "continuer",
        },
    });

    const carte3D = await prisma.card.create({
        data: {
            titre: "Fin du règne",
            texte: "L’ordre est respecté... et la famine aussi.",
            statut: "fin de partie",
        },
    });

    const carte3E = await prisma.card.create({
        data: {
            titre: "Le conseiller bilingue",
            texte: "Votre bras droit devient l’interprète officiel des Français.",
            statut: "continuer",
        },
    });

    const carte3F = await prisma.card.create({
        data: {
            titre: "Apparition d’un parti communiste",
            texte: "Des groupes de maquis se créent. Ils sont composé d’étudiant khmer revenu de France, de communistes viets et des partisants de l’indépendance du royaume.",
            statut: "continuer",
        },
    });

    const carte3G = await prisma.card.create({
        data: {
            titre: "Fin du règne",
            texte: "Ils sont plus armés que vous le pensiez et ils sont soutenus par les vietmin, vous tombez entre leurs mains.",
            statut: "fin de partie",
        },
    });

    const carte4A = await prisma.card.create({
        data: {
            titre: "Pays libre, mais divisé",
            texte: "La France est partie. Que faisons-nous maintenant ?",
            statut: "continuer",
        },
    });

    const carte4B = await prisma.card.create({
        data: {
            titre: "Neutralité ou alignement ?",
            texte: "La guerre fait rage au vietnam et le parti communiste khmer gonfle petit à petit ses rangs.",
            statut: "continuer",
        },
    });

    const carte4C = await prisma.card.create({
        data: {
            titre: "Fin du règne",
            texte: " Derrière votre dos, les US ont financé le mouvement des khmers libres, anti-communiste et anti-monarchiste. Vous tombez.",
            statut: "fin de partie",
        },
    });

    const carte4D = await prisma.card.create({
        data: {
            titre: "La fuite sur le Mékong",
            texte: "Un pêcheur est contraint de transporter des armes pour les Khmers rouges.",
            statut: "continuer",
        },
    });

    const carte4E = await prisma.card.create({
        data: {
            titre: "Fin du règne",
            texte: " Un coup de maître... jusqu’à ce qu’on le retrouve.",
            statut: "fin de partie",
        },
    });

    const carte4F = await prisma.card.create({
        data: {
            titre: "Danse interdite",
            texte: "Les khmers rouges associent l’art traditionnel des danseuses apsara avec la monarchie et les intellectuels. Elles risquent d’être exterminées.",
            statut: "continuer",
        },
    });

    const carte4G = await prisma.card.create({
        data: {
            titre: "Le monastère du silence",
            texte: "Un moine recueille des dissidents pro-vietnamiens en secret.",
            statut: "continuer",
        },
    });

    const carte4H = await prisma.card.create({
        data: {
            titre: "L’enfant blessé",
            texte: "Une fillette arrive, blessée par un éclat de bombe. Le soigneur hésite.",
            statut: "continuer",
        },
    });

    const carte4I = await prisma.card.create({
        data: {
            titre: "L’entrée vietnamienne",
            texte: "Les troupes vietnamiennes arrivent pour déloger les hauts placés du parti communiste khmer.",
            statut: "continuer",
        },
    });

    const carte4J = await prisma.card.create({
        data: {
            titre: "À suivre...",
            texte: "Vous êtes arrivé jusque là votre majesté, félicitation. Mais ce n'est pas la fin, le royaume est encore à reconstruire !",
            statut: "fin de partie",
        },
    });

    // 3. Associer les cartes à la partie
    await prisma.gameCard.createMany({
        data: [
            { game_id: game.game_id, card_id: carte1A.card_id },
            { game_id: game.game_id, card_id: carte1B.card_id },
            { game_id: game.game_id, card_id: carte1C.card_id },
            { game_id: game.game_id, card_id: carte1D.card_id },
            { game_id: game.game_id, card_id: carte1E.card_id },
            { game_id: game.game_id, card_id: carte2A.card_id },
            { game_id: game.game_id, card_id: carte2B.card_id },
            { game_id: game.game_id, card_id: carte2C.card_id },
            { game_id: game.game_id, card_id: carte2D.card_id },
            { game_id: game.game_id, card_id: carte2E.card_id },
            { game_id: game.game_id, card_id: carte3A.card_id },
            { game_id: game.game_id, card_id: carte3B.card_id },
            { game_id: game.game_id, card_id: carte3C.card_id },
            { game_id: game.game_id, card_id: carte3D.card_id },
            { game_id: game.game_id, card_id: carte3E.card_id },
            { game_id: game.game_id, card_id: carte3F.card_id },
            { game_id: game.game_id, card_id: carte3G.card_id },
            { game_id: game.game_id, card_id: carte4A.card_id },
            { game_id: game.game_id, card_id: carte4B.card_id },
            { game_id: game.game_id, card_id: carte4C.card_id },
            { game_id: game.game_id, card_id: carte4D.card_id },
            { game_id: game.game_id, card_id: carte4E.card_id },
            { game_id: game.game_id, card_id: carte4F.card_id },
            { game_id: game.game_id, card_id: carte4G.card_id },
            { game_id: game.game_id, card_id: carte4H.card_id },
            { game_id: game.game_id, card_id: carte4I.card_id },
            { game_id: game.game_id, card_id: carte4J.card_id },
        ],
    });

    // 4. Créer les choix
    await prisma.choice.createMany({
        data: [
            {
                texte: "Accueillons-les comme il se doit.",
                card_id: carte1A.card_id,
                default_next_card: carte1B.card_id,
            },
            {
                texte: "Nous négocierons.",
                consequence: "Le peuple garde son intégrité, il est rassuré.",
                card_id: carte1A.card_id,
                default_next_card: carte1C.card_id,
            },
            {
                texte: "Envoyons une ambassade pour négocier.",
                consequence: "Une paix fragile est signée... mais certains vous accusent de faiblesse.",
                card_id: carte1C.card_id,
                default_next_card: carte1D.card_id,
            },
            {
                texte: "Préparons une défense secrète.",
                consequence: "Les généraux gagnent du terrain... mais la tension grimpe.",
                card_id: carte1C.card_id,
                default_next_card: carte2A.card_id,
            },
            {
                texte: "Préservons nos traditions orales.",
                consequence: "Le peuple se sent entendu... mais les royaumes voisins avancent.",
                card_id: carte1D.card_id,
                default_next_card: carte1E.card_id,
            },
            {
                texte: "Envoyons des intellectuels étudier en Inde.",
                consequence: "Un nouvel alphabet émerge... mais les prêtres locaux grincent des dents.",
                card_id: carte1D.card_id,
                default_next_card: carte1E.card_id,
            },
            {
                texte: "Laissons les rites indiens s’installer.",
                consequence: "L’élite se structure... mais la base se divise.",
                card_id: carte1E.card_id,
                default_next_card: carte2A.card_id,
            },
            {
                texte: "Faisons du bouddhisme Mahāyāna notre foi d’État.",
                consequence: "L’unité religieuse grandit... mais les brahmanes se révoltent.",
                card_id: carte2A.card_id,
                default_next_card: carte2B.card_id,
            },
            {
                texte: "Que le peuple serve le divin.",
                consequence: "Un chef-d’œuvre surgit... mais les récoltes faiblissent.",
                card_id: carte2B.card_id,
                default_next_card: carte2C.card_id,
            },
            {
                texte: "Mettons en pause la constructions, faisons d’abord des barays.",
                consequence: "Amélioration des récoltes et stabilité économique.",
                card_id: carte2B.card_id,
                default_next_card: carte2E.card_id,
            },
            {
                texte: "Réprimons-les avec force.",
                card_id: carte2C.card_id,
                default_next_card: carte2D.card_id,
            },
            {
                texte: "Organisons une cérémonie où nous partagerons des vivres.",
                consequence: "Les prières des moines calment les paysans.",
                card_id: carte2C.card_id,
                default_next_card: carte2E.card_id,
            },
            {
                texte: "Envahissons le Champa avant qu’il n’agisse.",
                consequence: "Victoire rapide... mais la frontière siamoise s’affaiblit. Le royaume devient vassal du Siam.",
                card_id: carte2E.card_id,
                default_next_card: carte3A.card_id,
            },
            {
                texte: "Concentrons nos forces contre le Siam.",
                consequence: "La capitale est protégée... mais le Champa en profite.",
                card_id: carte2E.card_id,
                default_next_card: carte3A.card_id,
            },
            {
                texte: "Refusons la tutelle étrangère.",
                card_id: carte3A.card_id,
                default_next_card: carte3B.card_id,
            },
            {
                texte: "Acceptons, assurons la survie du royaume.",
                consequence: "Le pays échappe à l’annexion... mais perd sa souveraineté.",
                card_id: carte3A.card_id,
                default_next_card: carte3C.card_id,
            },
            {
                texte: "Maintenons le taux imposé.",
                card_id: carte3C.card_id,
                default_next_card: carte3D.card_id,
            },
            {
                texte: "Allégeons temporairement l’impôt.",
                consequence: "Un souffle d’espoir... mais vos supérieurs français vous menacent.",
                card_id: carte3C.card_id,
                default_next_card: carte3E.card_id,
            },
            {
                texte: "Écartez-le avant qu’il ne vous remplace.",
                consequence: "La cour se resserre... mais les Français gagnent un pion. Une nouvelle élite se crée.",
                card_id: carte3E.card_id,
                default_next_card: carte3F.card_id,
            },
            {
                texte: "Laissez-le agir : mieux vaut infiltrer que combattre.",
                consequence: "Des informations précieuses émergent... mais les rumeurs de trahison circulent.",
                card_id: carte3E.card_id,
                default_next_card: carte3F.card_id,
            },
            {
                texte: "Nous allons les démanteler.",
                card_id: carte3F.card_id,
                default_next_card: carte3G.card_id,
            },
            {
                texte: "Soyons diplomates, négocions plutôt l’indépendance auprès de la France.",
                consequence: "Les maquis viets sont repartis, les maquis khmer restent silencieux.",
                card_id: carte3F.card_id,
                default_next_card: carte4A.card_id,
            },
            {
                texte: "La monarchie sera suffisante pour éviter le chaos.",
                card_id: carte4A.card_id,
                default_next_card: carte4B.card_id,
            },
            {
                texte: "Soutenons les communistes qui promettent égalité et indépendance.",
                consequence: "Les khmers rouges s'organisent et gonflent leurs rangs.",
                card_id: carte4A.card_id,
                default_next_card: carte4D.card_id,
            },
            {
                texte: "Rapprochons-nous des Américains pour contrer le communisme.",
                card_id: carte4B.card_id,
                default_next_card: carte4C.card_id,
            },
            {
                texte: "Restons neutres.",
                consequence: "Le parti communiste monte en puissance. Il est trop tard pour demander l’aide des américains. Vous êtes dépassé par les évévements et tombez entre mains des communistes.",
                card_id: carte4B.card_id,
                default_next_card: carte4D.card_id,
            },
            {
                texte: "Faites diversion, sabotez la cargaison.",
                card_id: carte4D.card_id,
                default_next_card: carte4E.card_id,
            },
            {
                texte: "Acceptez, en silence.",
                consequence: " Votre famille est épargnée... mais votre conscience est lourde.",
                card_id: carte4D.card_id,
                default_next_card: carte4F.card_id,
            },
            {
                texte: "Protégeons cet héritage à tout prix.",
                consequence: " Une ancienne danseuse apsara tente de transmettre les gestes sacrés en cachette. La culture survit dans l’ombre...",
                card_id: carte4F.card_id,
                default_next_card: carte4G.card_id,
            },
            {
                texte: "Brûlez les costumes, gardez vos points fermés.",
                consequence: " Les Khmers rouges vous félicitent... et l’art meurt avec vous.",
                card_id: carte4F.card_id,
                default_next_card: carte4G.card_id,
            },
            {
                texte: "Protégeons-les au nom de la compassion.",
                consequence: "Un espoir fragile grandit... mais le temple est incendié.",
                card_id: carte4G.card_id,
                default_next_card: carte4H.card_id,
            },
            {
                texte: "Livrons-les aux milices rouges.",
                consequence: "Vous survivez... mais votre foi meurt.",
                card_id: carte4G.card_id,
                default_next_card: carte4H.card_id,
            },
            {
                texte: "Détournez le regard pour survivre.",
                consequence: "La peur vous protège... la honte vous hante.",
                card_id: carte4H.card_id,
                default_next_card: carte4I.card_id,
            },
            {
                texte: "Soignez-la malgré l’interdiction.",
                consequence: "Une vie est sauvée... mais vous êtes dénoncé.",
                card_id: carte4H.card_id,
                default_next_card: carte4I.card_id,
            },
            {
                texte: "Restons cachés, attendons la fin.",
                consequence: "Vous survivez... mais perdez toute chance d’agir.",
                card_id: carte4I.card_id,
                default_next_card: carte4J.card_id,
            },
            {
                texte: "Aidez-les à identifier les camps de la mort.",
                consequence: "La vérité émerge.",
                card_id: carte4I.card_id,
                default_next_card: carte4J.card_id,
            },
        ],
    });

    console.log("Seed créée avec succès.");
}

main()
    .then(() => prisma.$disconnect())
    .catch((e) => {
        console.error("Erreur pendant la seed :", e);
        prisma.$disconnect();
        process.exit(1);
    });
