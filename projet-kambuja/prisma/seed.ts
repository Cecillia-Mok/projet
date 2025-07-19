import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // await prisma.gameCard.deleteMany()
    // await prisma.choice.deleteMany()
    // await prisma.card.deleteMany()
    // await prisma.game.deleteMany()
    // await prisma.user.deleteMany()
    
    // 1. Créer une partie avec un utilisateur
    const user = await prisma.user.create({
        data: {
            pseudo: "ceci",
            email: "ceci@ceci.com",
            password: "$2b$10$Ax79vt4.Q3Wqaj1OCwpzteb/3qWTQctMPZXp96BhddmeSHvL3rjnu",
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
            title: "Messagers du Nord",
            text: "Une délégation de la dynastie Han approche avec une demande de traité commercial.",
            status: "continuer",
        },
    });

    const carte1B = await prisma.card.create({
        data: {
            title: "Fin du règne",
            text: "Le royaume gagne en influence... mais devient dépendant. Le peuple est mécontent.",
            status: "fin de partie",
        },
    });

    const carte1C = await prisma.card.create({
        data: {
            title: "Ombres du Champa",
            text: "Le royaume voisin à l'est étend son influence dans la région.",
            status: "continuer",
        },
    });

    const carte1D = await prisma.card.create({
        data: {
            title: "Savoir sacré",
            text: "Des texts que l'on dit sacrés qui apporteraient une grande sagesse à ceux qui les lisent circulent depuis des pays à l'ouest.",
            status: "continuer",
        },
    });

    const carte1E = await prisma.card.create({
        data: {
            title: "Rituels rivaux",
            text: "Les prêtres animistes dénoncent les nouveaux cultes hindous venus d’Inde.",
            status: "continuer",
        },
    });

    const carte2A = await prisma.card.create({
        data: {
            title: "Jayavarman parle",
            text: "Jayavarman II est nouveau roi par la force. Il veut imposer le bouddhisme mahāyāna à tout l’empire.",
            status: "continuer",
        },
    });

    const carte2B = await prisma.card.create({
        data: {
            title: "Construction du Temple d’Angkor Wat",
            text: "Une sécheresse frape le pays pendant la construction du temple.",
            status: "continuer",
        },
    });

    const carte2C = await prisma.card.create({
        data: {
            title: "L’ombre d’Angkor",
            text: "Les premières révoltes éclatent dans les provinces.",
            status: "continuer",
        },
    });

    const carte2D = await prisma.card.create({
        data: {
            title: "Fin du règne",
            text: "La capitale tient quelques temps mais la haine enfle.",
            status: "fin de partie",
        },
    });

    const carte2E = await prisma.card.create({
        data: {
            title: "Frontières brûlantes",
            text: "Le Champa et le Siam se renforcent. Le général attend vos ordres.",
            status: "continuer",
        },
    });

    const carte3A = await prisma.card.create({
        data: {
            title: "Le Pacte français",
            text: 'La France vous propose sa "protection" contre le Siam et le Vietnam.',
            status: "continuer",
        },
    });

    const carte3B = await prisma.card.create({
        data: {
            title: "Fin du règne",
            text: "Un sursaut d’honneur... suivi d’une invasion inévitable par les pays voisins.",
            status: "fin de partie",
        },
    });

    const carte3C = await prisma.card.create({
        data: {
            title: "L’impôt de la honte",
            text: "Les riziculteurs doivent céder une part écrasante de leur récolte à l’administration coloniale.",
            status: "continuer",
        },
    });

    const carte3D = await prisma.card.create({
        data: {
            title: "Fin du règne",
            text: "L’ordre est respecté... et la famine aussi.",
            status: "fin de partie",
        },
    });

    const carte3E = await prisma.card.create({
        data: {
            title: "Le conseiller bilingue",
            text: "Votre bras droit devient l’interprète officiel des Français.",
            status: "continuer",
        },
    });

    const carte3F = await prisma.card.create({
        data: {
            title: "Apparition d’un parti communiste",
            text: "Des groupes de maquis se créent. Ils sont composé d’étudiant khmer revenu de France, de communistes viets et des partisants de l’indépendance du royaume.",
            status: "continuer",
        },
    });

    const carte3G = await prisma.card.create({
        data: {
            title: "Fin du règne",
            text: "Ils sont plus armés que vous le pensiez et ils sont soutenus par les vietmin, vous tombez entre leurs mains.",
            status: "fin de partie",
        },
    });

    const carte4A = await prisma.card.create({
        data: {
            title: "Pays libre, mais divisé",
            text: "La France est partie. Que faisons-nous maintenant ?",
            status: "continuer",
        },
    });

    const carte4B = await prisma.card.create({
        data: {
            title: "Neutralité ou alignement ?",
            text: "La guerre fait rage au vietnam et le parti communiste khmer gonfle petit à petit ses rangs.",
            status: "continuer",
        },
    });

    const carte4C = await prisma.card.create({
        data: {
            title: "Fin du règne",
            text: " Derrière votre dos, les US ont financé le mouvement des khmers libres, anti-communiste et anti-monarchiste. Vous tombez.",
            status: "fin de partie",
        },
    });

    const carte4D = await prisma.card.create({
        data: {
            title: "La fuite sur le Mékong",
            text: "Un pêcheur est contraint de transporter des armes pour les Khmers rouges.",
            status: "continuer",
        },
    });

    const carte4E = await prisma.card.create({
        data: {
            title: "Fin du règne",
            text: " Un coup de maître... jusqu’à ce qu’on le retrouve.",
            status: "fin de partie",
        },
    });

    const carte4F = await prisma.card.create({
        data: {
            title: "Danse interdite",
            text: "Les khmers rouges associent l’art traditionnel des danseuses apsara avec la monarchie et les intellectuels. Elles risquent d’être exterminées.",
            status: "continuer",
        },
    });

    const carte4G = await prisma.card.create({
        data: {
            title: "Le monastère du silence",
            text: "Un moine recueille des dissidents pro-vietnamiens en secret.",
            status: "continuer",
        },
    });

    const carte4H = await prisma.card.create({
        data: {
            title: "L’enfant blessé",
            text: "Une fillette arrive, blessée par un éclat de bombe. Le soigneur hésite.",
            status: "continuer",
        },
    });

    const carte4I = await prisma.card.create({
        data: {
            title: "L’entrée vietnamienne",
            text: "Les troupes vietnamiennes arrivent pour déloger les hauts placés du parti communiste khmer.",
            status: "continuer",
        },
    });

    const carte4J = await prisma.card.create({
        data: {
            title: "À suivre...",
            text: "Vous êtes arrivé jusque là votre majesté, félicitation. Mais ce n'est pas la fin, le royaume est encore à reconstruire !",
            status: "fin de partie",
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
                text: "Accueillons-les comme il se doit.",
                card_id: carte1A.card_id,
                next_card_id: carte1B.card_id,
            },
            {
                text: "Nous négocierons.",
                consequence: "Le peuple garde son intégrité, il est rassuré.",
                card_id: carte1A.card_id,
                next_card_id: carte1C.card_id,
            },
            {
                text: "Envoyons une ambassade pour négocier.",
                consequence: "Une paix fragile est signée... mais certains vous accusent de faiblesse.",
                card_id: carte1C.card_id,
                next_card_id: carte1D.card_id,
            },
            {
                text: "Préparons une défense secrète.",
                consequence: "Les généraux gagnent du terrain... mais la tension grimpe.",
                card_id: carte1C.card_id,
                next_card_id: carte2A.card_id,
            },
            {
                text: "Préservons nos traditions orales.",
                consequence: "Le peuple se sent entendu... mais les royaumes voisins avancent.",
                card_id: carte1D.card_id,
                next_card_id: carte1E.card_id,
            },
            {
                text: "Envoyons des intellectuels étudier en Inde.",
                consequence: "Un nouvel alphabet émerge... mais les prêtres locaux grincent des dents.",
                card_id: carte1D.card_id,
                next_card_id: carte1E.card_id,
            },
            {
                text: "Laissons les rites indiens s’installer.",
                consequence: "L’élite se structure... mais la base se divise.",
                card_id: carte1E.card_id,
                next_card_id: carte2A.card_id,
            },
            {
                text: "Faisons du bouddhisme Mahāyāna notre foi d’État.",
                consequence: "L’unité religieuse grandit... mais les brahmanes se révoltent.",
                card_id: carte2A.card_id,
                next_card_id: carte2B.card_id,
            },
            {
                text: "Que le peuple serve le divin.",
                consequence: "Un chef-d’œuvre surgit... mais les récoltes faiblissent.",
                card_id: carte2B.card_id,
                next_card_id: carte2C.card_id,
            },
            {
                text: "Mettons en pause la constructions, faisons d’abord des barays.",
                consequence: "Amélioration des récoltes et stabilité économique.",
                card_id: carte2B.card_id,
                next_card_id: carte2E.card_id,
            },
            {
                text: "Réprimons-les avec force.",
                card_id: carte2C.card_id,
                next_card_id: carte2D.card_id,
            },
            {
                text: "Organisons une cérémonie où nous partagerons des vivres.",
                consequence: "Les prières des moines calment les paysans.",
                card_id: carte2C.card_id,
                next_card_id: carte2E.card_id,
            },
            {
                text: "Envahissons le Champa avant qu’il n’agisse.",
                consequence: "Victoire rapide... mais la frontière siamoise s’affaiblit. Le royaume devient vassal du Siam.",
                card_id: carte2E.card_id,
                next_card_id: carte3A.card_id,
            },
            {
                text: "Concentrons nos forces contre le Siam.",
                consequence: "La capitale est protégée... mais le Champa en profite.",
                card_id: carte2E.card_id,
                next_card_id: carte3A.card_id,
            },
            {
                text: "Refusons la tutelle étrangère.",
                card_id: carte3A.card_id,
                next_card_id: carte3B.card_id,
            },
            {
                text: "Acceptons, assurons la survie du royaume.",
                consequence: "Le pays échappe à l’annexion... mais perd sa souveraineté.",
                card_id: carte3A.card_id,
                next_card_id: carte3C.card_id,
            },
            {
                text: "Maintenons le taux imposé.",
                card_id: carte3C.card_id,
                next_card_id: carte3D.card_id,
            },
            {
                text: "Allégeons temporairement l’impôt.",
                consequence: "Un souffle d’espoir... mais vos supérieurs français vous menacent.",
                card_id: carte3C.card_id,
                next_card_id: carte3E.card_id,
            },
            {
                text: "Écartez-le avant qu’il ne vous remplace.",
                consequence: "La cour se resserre... mais les Français gagnent un pion. Une nouvelle élite se crée.",
                card_id: carte3E.card_id,
                next_card_id: carte3F.card_id,
            },
            {
                text: "Laissez-le agir : mieux vaut infiltrer que combattre.",
                consequence: "Des informations précieuses émergent... mais les rumeurs de trahison circulent.",
                card_id: carte3E.card_id,
                next_card_id: carte3F.card_id,
            },
            {
                text: "Nous allons les démanteler.",
                card_id: carte3F.card_id,
                next_card_id: carte3G.card_id,
            },
            {
                text: "Soyons diplomates, négocions plutôt l’indépendance auprès de la France.",
                consequence: "Les maquis viets sont repartis, les maquis khmer restent silencieux.",
                card_id: carte3F.card_id,
                next_card_id: carte4A.card_id,
            },
            {
                text: "La monarchie sera suffisante pour éviter le chaos.",
                card_id: carte4A.card_id,
                next_card_id: carte4B.card_id,
            },
            {
                text: "Soutenons les communistes qui promettent égalité et indépendance.",
                consequence: "Les khmers rouges s'organisent et gonflent leurs rangs.",
                card_id: carte4A.card_id,
                next_card_id: carte4D.card_id,
            },
            {
                text: "Rapprochons-nous des Américains pour contrer le communisme.",
                card_id: carte4B.card_id,
                next_card_id: carte4C.card_id,
            },
            {
                text: "Restons neutres.",
                consequence: "Le parti communiste monte en puissance. Il est trop tard pour demander l’aide des américains. Vous êtes dépassé par les évévements et tombez entre mains des communistes.",
                card_id: carte4B.card_id,
                next_card_id: carte4D.card_id,
            },
            {
                text: "Faites diversion, sabotez la cargaison.",
                card_id: carte4D.card_id,
                next_card_id: carte4E.card_id,
            },
            {
                text: "Acceptez, en silence.",
                consequence: " Votre famille est épargnée... mais votre conscience est lourde.",
                card_id: carte4D.card_id,
                next_card_id: carte4F.card_id,
            },
            {
                text: "Protégeons cet héritage à tout prix.",
                consequence: " Une ancienne danseuse apsara tente de transmettre les gestes sacrés en cachette. La culture survit dans l’ombre...",
                card_id: carte4F.card_id,
                next_card_id: carte4G.card_id,
            },
            {
                text: "Brûlez les costumes, gardez vos points fermés.",
                consequence: " Les Khmers rouges vous félicitent... et l’art meurt avec vous.",
                card_id: carte4F.card_id,
                next_card_id: carte4G.card_id,
            },
            {
                text: "Protégeons-les au nom de la compassion.",
                consequence: "Un espoir fragile grandit... mais le temple est incendié.",
                card_id: carte4G.card_id,
                next_card_id: carte4H.card_id,
            },
            {
                text: "Livrons-les aux milices rouges.",
                consequence: "Vous survivez... mais votre foi meurt.",
                card_id: carte4G.card_id,
                next_card_id: carte4H.card_id,
            },
            {
                text: "Détournez le regard pour survivre.",
                consequence: "La peur vous protège... la honte vous hante.",
                card_id: carte4H.card_id,
                next_card_id: carte4I.card_id,
            },
            {
                text: "Soignez-la malgré l’interdiction.",
                consequence: "Une vie est sauvée... mais vous êtes dénoncé.",
                card_id: carte4H.card_id,
                next_card_id: carte4I.card_id,
            },
            {
                text: "Restons cachés, attendons la fin.",
                consequence: "Vous survivez... mais perdez toute chance d’agir.",
                card_id: carte4I.card_id,
                next_card_id: carte4J.card_id,
            },
            {
                text: "Aidez-les à identifier les camps de la mort.",
                consequence: "La vérité émerge.",
                card_id: carte4I.card_id,
                next_card_id: carte4J.card_id,
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
